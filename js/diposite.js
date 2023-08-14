document.getElementById("depositeBtn").addEventListener("click", () => {
  const depsiteAmount = Number(document.getElementById("inputDeposite").value);
  const prvDeposite = document.getElementById("dipositeAmount");
  const currentDeposite = Number(prvDeposite.innerText);
  if (typeof prvDeposite.innerText === "string") {
    alert("Please Provide Number");
    return;
  }

  const totalDeposite = currentDeposite + depsiteAmount;
  prvDeposite.innerText = totalDeposite;
  const totalBalance = document.getElementById("totalAmount");
  const totalAmount = Number(totalBalance.innerText);
  const allBalance = depsiteAmount + totalAmount;
  totalBalance.innerText = allBalance;
  document.getElementById("inputDeposite").value = "";
});
