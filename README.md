## Transaction Tracker

A fast and intuitive web-based application to track your **income** and **expenses**. Built with **HTML**, **CSS**, and **JavaScript**, the app allows you to add transactions, monitor totals, and manage your balance effortlessly. With **data persistence** using `localStorage`, your transactions are saved even after refreshing the browser.

---

### 🚀 Features

- **Add Transactions**
  - Quickly add transactions by entering `Item`, `Amount`, and selecting `Income` or `Expense`.

- **View All Transactions**
  - A detailed list showcasing all your income and expense entries.

- **Delete Transactions**
  - Easily remove any transaction to keep your records updated.

- **Visual Indicators**
  - **Green border** for income entries.
  - **Red border** for expense entries.

- **Comprehensive Summary**
  - Displays your **total income**, **total expenses**, and the **current balance** (Income − Expense).

- **Data Persistence**
  - Transactions are stored using `localStorage`, ensuring data persists after page refresh or browser closure.

---

### 🗂️ Project Structure

- **`index.html`**
  - The main HTML page containing the transaction form, summary cards, and the transaction list.

- **`style.css`**
  - Custom styles for the app layout, transaction borders, and summary cards.

- **`script.js`**
  - Implements the application logic, including adding/deleting transactions, calculating totals/balances, and managing `localStorage` data.

---

### 🛠️ How to Run

1. Clone or download the project.
2. Ensure the following files are in the **same directory**:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in any modern browser (Chrome, Firefox, Edge, etc.).
4. Start using the app:
   - Enter the transaction `Item` name.
   - Input a positive `Amount`.
   - Select `Income` or `Expense`.
   - Click **Add Transaction** to save the entry.

---

### ⚠️ Notes

- The `Amount` must be a **positive value**.
- Transactions can be deleted individually; totals and balance will adjust automatically.
- Using the app in a different browser or clearing `localStorage` will reset the data.

---

### 🌟 Demo or Screenshots

_Add a demo link or screenshots here to showcase your application._

---

### 🤝 Contributions

Contributions, issues, and feature requests are welcome!

Feel free to create a pull request or open an issue to improve the app. 😊

---

### 📄 License

This project is licensed under the [MIT License](LICENSE).