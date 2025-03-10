let balance = 5000;
let history = [];

function updateHistory(transaction) {
    history.unshift(transaction);
    document.getElementById("history").innerHTML = history.map(t => `<p>${t}</p>`).join('');
}

function sendMoney() {
    let phone = document.getElementById("phone").value;
    let amount = document.getElementById("amount").value;

    if (phone.length !== 11 || amount <= 0) {
        alert("Invalid Phone Number or Amount!");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance!");
        return;
    }

    balance -= amount;
    document.getElementById("balance").innerText = balance;
    let transaction = `Sent Rs ${amount} to ${phone}`;
    updateHistory(transaction);
    alert(transaction);
}

function mobileRecharge() {
    let phone = document.getElementById("recharge-phone").value;
    let amount = document.getElementById("recharge-amount").value;

    if (phone.length !== 11 || amount <= 0) {
        alert("Invalid Phone Number or Amount!");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance!");
        return;
    }

    balance -= amount;
    document.getElementById("balance").innerText = balance;
    let transaction = `Recharged Rs ${amount} for ${phone}`;
    updateHistory(transaction);
    alert(transaction);
}

function payBill() {
    let billType = document.getElementById("bill-type").value;
    let amount = document.getElementById("bill-amount").value;

    if (amount <= 0) {
        alert("Invalid Bill Amount!");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance!");
        return;
    }

    balance -= amount;
    document.getElementById("balance").innerText = balance;
    let transaction = `Paid Rs ${amount} for ${billType} Bill`;
    updateHistory(transaction);
    alert(transaction);
}

function payQR() {
    let qrData = document.getElementById("qr-code").value;

    if (!qrData) {
        alert("Invalid QR Code!");
        return;
    }

    let amount = Math.floor(Math.random() * 1000) + 1; // Example amount
    if (amount > balance) {
        alert("Insufficient Balance!");
        return;
    }

    balance -= amount;
    document.getElementById("balance").innerText = balance;
    let transaction = `Paid Rs ${amount} via QR Code: ${qrData}`;
    updateHistory(transaction);
    alert(transaction);
}
