function getUSSDCode() {
    let network = document.getElementById("network").value;
    let ussdType = document.getElementById("ussd-type").value;
    let packageType = document.getElementById("package-type").value;
    let ussdCode = "";

    let ussdCodes = {
        jazz: {
            balance: "*111#",
            internet: {
                daily: "*117*4#",
                weekly: "*117*47#",
                monthly: "*117*30#"
            },
            call: {
                daily: "*340#",
                weekly: "*430#",
                monthly: "*710#"
            },
            sms: {
                daily: "*101*1*01#",
                weekly: "*101*1*07#",
                monthly: "*101*1*30#"
            }
        },
        telenor: {
            balance: "*444#",
            internet: {
                daily: "*345*88#",
                weekly: "*345*97#",
                monthly: "*345*59#"
            },
            call: {
                daily: "*345*20#",
                weekly: "*345*45#",
                monthly: "*345*60#"
            },
            sms: {
                daily: "*345*1#",
                weekly: "*345*2#",
                monthly: "*345*3#"
            }
        },
        zong: {
            balance: "*222#",
            internet: {
                daily: "*6464*1#",
                weekly: "*6464*2#",
                monthly: "*6464*3#"
            },
            call: {
                daily: "*456*1#",
                weekly: "*456*7#",
                monthly: "*456*30#"
            },
            sms: {
                daily: "*700#",
                weekly: "*702#",
                monthly: "*705#"
            }
        },
        ufone: {
            balance: "*124#",
            internet: {
                daily: "*3*1#",
                weekly: "*3*7#",
                monthly: "*3*30#"
            },
            call: {
                daily: "*888#",
                weekly: "*1000#",
                monthly: "*707#"
            },
            sms: {
                daily: "*105*1#",
                weekly: "*105*7#",
                monthly: "*105*30#"
            }
        }
    };

    if (ussdType === "balance") {
        ussdCode = ussdCodes[network].balance;
    } else {
        ussdCode = ussdCodes[network][ussdType][packageType];
    }

    document.getElementById("ussd-result").innerText = ussdCode ? `Dial: ${ussdCode}` : "USSD Code not found!";
}let balance = 5000;
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
