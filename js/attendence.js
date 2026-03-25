const attend = document.querySelector(".attendence");
const firstBox = document.querySelector("#firstBox");
const vbtn = document.querySelector(".viewBtn");
const hbtn = document.querySelector(".hideBtn");

attend.style.display = "none";
firstBox.style.display = "block";

vbtn.addEventListener("click", function () {
    if (firstBox.style.display == "block") {
        firstBox.style.display = "none";
        attend.style.display = "block";
    }
});
hbtn.addEventListener("click", function () {
    if (firstBox.style.display == "none") {
        firstBox.style.display = "block";
        attend.style.display = "none";
    }
});
function addAttendance() {
    // 1. Take input
    var subject = prompt("Enter Subject Name:");
    var total = prompt("Enter Total Classes:");
    var attended = prompt("Enter Attended Classes:");

    // 2. Convert to number
    total = Number(total);
    attended = Number(attended);

    // 3. Validation
    if (subject == "" || total <= 0 || attended < 0 || attended > total) {
        alert("Invalid Input!");
        return;
    }

    // 4. Calculate percentage
    var percentage = (attended / total) * 100;
    percentage = percentage.toFixed(2) + "%";

    // 5. Show in table (FIRST ROW)
    if (document.getElementById("sub").innerHTML == "-") {
        document.getElementById("sub").innerHTML = subject;
        document.getElementById("tot").innerHTML = total;
        document.getElementById("att").innerHTML = attended;
        document.getElementById("per").innerHTML = percentage;
    } 
}
var count = 1;
function addExpense() {
    var amount = prompt("Enter Amount:");
    if (amount == "" || isNaN(amount)) {
        alert("Invalid!");
        return;
    }
    if (count == 1) {
        document.getElementById("amt1").innerHTML = "₹" + amount;
    }else if (count == 2) {
        document.getElementById("amt2").innerHTML = "₹" + amount;
    }else if (count == 3) {
        document.getElementById("amt3").innerHTML = "₹" + amount;
    }else if (count == 4) {
        document.getElementById("amt4").innerHTML = "₹" + amount;
    }else {
        alert("All categories filled!");
        return;
    }
    count++;
}