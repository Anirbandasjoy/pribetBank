document.getElementById("withdrawBtn").addEventListener("click", () => {
  const withdrawAmount = Number(document.getElementById("inpuWithdraw").value);
  const prvWithdraw = document.getElementById("withdrawAmount");
  const currentWithdraw = Number(prvWithdraw.innerText);
  const totalWithdraw = withdrawAmount + currentWithdraw;
  prvWithdraw.innerText = totalWithdraw;
  const prvBalance = document.getElementById("totalAmount");
  const currentBalance = Number(prvBalance.innerText);
  console.log(currentBalance);
  const presentBalance = currentBalance - withdrawAmount;
  prvBalance.innerText = presentBalance;
  document.getElementById("inpuWithdraw").value = "";
});
