(function () {
  const STORAGE_KEY = 'transaction-list-v1';

  const form = document.getElementById('transaction-form');
  const itemInput = document.getElementById('item');
  const amountInput = document.getElementById('amount');
  const typeSelect = document.getElementById('type');
  const errorBox = document.getElementById('error');
  const listEl = document.getElementById('transactions');
  const totalIncomeEl = document.getElementById('total-income');
  const totalExpenseEl = document.getElementById('total-expense');
  const balanceEl = document.getElementById('balance');

  let transactions = [];

  function loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed;
    } catch (e) {
      console.warn('Failed to load transactions from storage', e);
      return [];
    }
  }

  function saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    } catch (e) {
      console.warn('Failed to save transactions to storage', e);
    }
  }

  function formatCurrency(value) {
    const num = Number(value) || 0;
    return '₹' + num.toFixed(2);
  }

  function renderSummary() {
    let income = 0;
    let expense = 0;
    transactions.forEach(t => {
      if (t.type === 'income') income += t.amount;
      else expense += t.amount;
    });

    const balance = income - expense;

    totalIncomeEl.textContent = formatCurrency(income);
    totalExpenseEl.textContent = formatCurrency(expense);
    balanceEl.textContent = formatCurrency(balance);

    balanceEl.classList.remove('balance-positive', 'balance-negative');
    if (balance >= 0) {
      balanceEl.classList.add('balance-positive');
    } else {
      balanceEl.classList.add('balance-negative');
    }
  }

  function createTransactionElement(txn) {
    const row = document.createElement('div');
    row.className = 'transaction-item ' + txn.type;
    row.dataset.id = String(txn.id);

    const main = document.createElement('div');
    main.className = 'txn-main';

    const title = document.createElement('div');
    title.className = 'txn-title';
    title.textContent = txn.item;

    const meta = document.createElement('div');
    meta.className = 'txn-meta';
    meta.textContent = txn.type === 'income' ? 'Income' : 'Expense';

    main.appendChild(title);
    main.appendChild(meta);

    const amount = document.createElement('div');
    amount.className = 'txn-amount ' + txn.type;
    amount.textContent = (txn.type === 'income' ? '+ ' : '- ') + formatCurrency(txn.amount);

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-delete';
    delBtn.type = 'button';
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', function () {
      deleteTransaction(txn.id);
    });

    row.appendChild(main);
    row.appendChild(amount);
    row.appendChild(delBtn);

    return row;
  }

  function renderList() {
    listEl.innerHTML = '';
    if (transactions.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = 'No transactions yet. Add your first income or expense above.';
      listEl.appendChild(empty);
      return;
    }

    transactions.forEach(txn => {
      listEl.appendChild(createTransactionElement(txn));
    });
  }

  function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveToStorage();
    renderList();
    renderSummary();
  }

  function showError(message) {
    if (!message) {
      errorBox.style.display = 'none';
      errorBox.textContent = '';
    } else {
      errorBox.style.display = 'block';
      errorBox.textContent = message;
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    showError('');

    const item = itemInput.value.trim();
    const amountValue = parseFloat(amountInput.value);
    const type = typeSelect.value === 'expense' ? 'expense' : 'income';

    if (!item) {
      showError('Please enter an item/description.');
      return;
    }

    if (isNaN(amountValue) || amountValue <= 0) {
      showError('Please enter a valid positive amount.');
      return;
    }

    const txn = {
      id: Date.now() + Math.random(),
      item,
      amount: amountValue,
      type
    };

    transactions.unshift(txn); // newest first
    saveToStorage();
    renderList();
    renderSummary();

    form.reset();
    typeSelect.value = type; // keep last selected type
    itemInput.focus();
  });

  // Initial load
  transactions = loadFromStorage();
  renderList();
  renderSummary();
})();
