
function calculateAge() {
    let dob = new Date(document.getElementById('dob').value);
    let today = new Date();
    let ageInSec = today - dob;
    let ageInDays = ageInSec / (1000 * 60 * 60 * 24);
    let ageInYears = Math.floor(ageInDays / 365);
    let remainingDays = Math.floor(ageInDays % 365);
    let ageInMonths = Math.floor(remainingDays / 30);
    let remainingDaysInMonth = Math.floor(remainingDays % 30);
    document.getElementById('resultYear').textContent = `Your age is ${ageInYears} years, ${ageInMonths} months, and ${remainingDaysInMonth} days.`;
    document.getElementById('resultYear').textContent = `${ageInYears}`;
    document.getElementById('resultMon').textContent = `${ageInMonths}`;
    document.getElementById('resultDay').textContent = `${remainingDaysInMonth}`;
}
