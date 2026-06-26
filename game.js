let netWorth = 10000;
let day = 1;
let stands = 0;

function updateUI() {
    document.getElementById('money-display').innerText = netWorth;
    document.getElementById('day-display').innerText = day;
    document.getElementById('stands-display').innerText = stands;
}

function printLog(message) {
    document.getElementById('log-box').innerText = message;
}

function checkGameState() {
    if (netWorth <= 0) {
        printLog("💸 Bankrupt! You ran out of capital. Game Over!");
        disableButtons();
    } else if (day > 10) {
        if (netWorth >= 100000) {
            printLog("🏆 Victory! You are a legendary Tycoon! Final Worth: ₹" + netWorth);
        } else {
            printLog("👍 Game Over! Good run, but you fell short of the ₹1,00,000 target.");
        }
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
}

function nextDayProcessing() {
    if (stands > 0) {
        let revenue = stands * 500;
        netWorth += revenue;
    }
    
    let chance = Math.random();
    if (chance < 0.25) {
        netWorth -= 1000;
        printLog("💥 Bad weather hit your lemonade shops! Repairs cost ₹1,000.");
    } else if (chance > 0.75) {
        netWorth += 2000;
        printLog("🎉 A popular influencer shared your business! Earned a bonus ₹2,000!");
    } else {
        printLog("📆 Another day passes. Your businesses collect steady profits.");
    }

    day++;
    updateUI();
    checkGameState();
}

function buyStand() {
    if (netWorth >= 2000) {
        netWorth -= 2000;
        stands++;
        nextDayProcessing();
    } else {
        alert("Not enough money to buy a stand!");
    }
}

function investMarket() {
    if (netWorth >= 2500) {
        netWorth -= 2500;
        if (Math.random() > 0.5) {
            netWorth += 5000;
            printLog("🚀 Stock Market Boom! Your investment doubled instantly.");
        } else {
            printLog("📉 Market Crash! Your stock assets lost value.");
        }
        nextDayProcessing();
    } else {
        alert("Not enough funds to risk in stocks!");
    }
}

function passDay() {
    nextDayProcessing();
}
