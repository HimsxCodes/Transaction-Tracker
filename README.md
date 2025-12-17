## Transaction Tracker

Simple income & expense tracker built with **only HTML, CSS and JavaScript**. It lets you add transactions (item, amount, income/expense), see totals, delete any transaction, and it **persists data in `localStorage`** so your list and balance remain even after refresh or browser close.

### Features
- **Add Transaction**: Enter `Item`, `Amount`, and choose `Income` or `Expense`.
- **View All Transactions**: See a list of every income and expense.
- **Delete Transaction**: Remove any entry from the list.
- **Colored Borders**:
  - **Green border** for income rows.
  - **Red border** for expense rows.
- **Summary**:
  - Shows **Total Income**.
  - Shows **Total Expense**.
  - Shows **Current Balance** (Income − Expense).
- **Data Persistence**: Uses `localStorage` so data stays after page refresh or browser restart.

### Project Structure
- **`index.html`**: Main HTML page (form, summary, transactions list, script/style includes).
- **`style.css`**: Styles for layout, colors, summary cards, and borders for income/expense.
- **`script.js`**: All logic: add/delete transactions, calculate totals, update balance, and save/load from `localStorage`.

### How to Run
1. Make sure all three files are in the **same folder**:
   - `index.html`
   - `style.css`
   - `script.js`
2. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, etc.).
3. Start adding transactions:
   - Type an `Item` name.
   - Enter a positive `Amount`.
   - Choose `Income` or `Expense`.
   - Click **Add Transaction**.

### Notes
- Amount must be **greater than 0**.
- You can delete any transaction; totals and balance update automatically.
- Clearing browser storage or using another browser/machine will reset the data (because it uses `localStorage`).
