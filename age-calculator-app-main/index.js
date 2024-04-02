const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();


if (dd < 9) {
    dd = '0' + dd;
}
if (mm < 9) {
    mm = '0' + mm;
}
let currentDate = yyyy + '-' + mm + '-' + dd;
console.log(currentDate);

const inpDate = document.getElementById("day");
const inpMonth = document.getElementById("month");
const inpYear = document.getElementById("year");

const btn = document.querySelector(".circle");

btn.addEventListener("click", calculateAge);


function calculateAge() {
    const yearinp = document.getElementById("inpYear");
    const monthInp = document.getElementById("inpMonth");
    const dayInp = document.getElementById("inpDay");

    let year = inpYear.value;
    let month = inpMonth.value;
    let day = inpDate.value;

    if (year == "" || month == "" || day == "") {
        alert("all the feids are required");
    }

    else {

        let birthdate = year + '-' + month + '-' + day;

        if (validateBirthDate(birthdate)) {

            const { ageYears, ageMonths, ageDays } = calcAge(birthdate, currentDate)

            yearinp.innerText = ageYears;
            monthInp.innerText = ageMonths;
            dayInp.innerText = ageDays;

        } else {
            alert("must be valid date");
        }
    }
}

function calcAge(birthDate, currentDate) {
    // Parse birth date and current date
    var birth = new Date(birthDate);
    var current = new Date(currentDate);

    // Calculate years
    var years = current.getFullYear() - birth.getFullYear();

    // Check if the birth date hasn't occurred yet this year
    if (current.getMonth() < birth.getMonth() ||
        (current.getMonth() === birth.getMonth() && current.getDate() < birth.getDate())) {
        years--;
    }

    // Calculate the remaining months
    var months = current.getMonth() - birth.getMonth();
    if (months < 0) {
        months += 12;
    }

    // Calculate the remaining days
    var days = current.getDate() - birth.getDate();
    if (days < 0) {
        var prevMonthLastDay = new Date(current.getFullYear(), current.getMonth(), 0).getDate();
        days += prevMonthLastDay;
        months--;
    }

    return {
        ageYears: years,
        ageMonths: months,
        ageDays: days
    };
}


function validateBirthDate(birthDate) {
    // Regular expression to match "yyyy-mm-dd" format
    var regex = /^\d{4}-\d{2}-\d{2}$/;

    // Check if the birthDate matches the format
    if (!regex.test(birthDate)) {
        return false;
    }

    // Parse the birthDate
    var parts = birthDate.split('-');
    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var day = parseInt(parts[2], 10);


    if (year > yyyy) {
        return false;
    }

    // Check if month and day are within valid ranges
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }

    // Check for specific month-day combinations
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
        return false;
    }

    // Check for February
    if (month === 2) {
        var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        if (day > 29 || (day === 29 && !isLeapYear)) {
            return false;
        }
    }

    // All checks passed, so it's a valid birthdate
    return true;
}
