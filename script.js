let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;

  if (!date || !category || !amount) {
    alert("全部入力してね！");
    return;
  }

  const expense = {
    date,
    category,
    amount: Number(amount)
  };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";

  render();
}

function render() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  let total = 0;

  expenses.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = `${e.date}｜${e.category}｜${e.amount}円`;
    list.appendChild(li);
    total += e.amount;
  });

  document.getElementById("total").textContent = total;
}

render();

