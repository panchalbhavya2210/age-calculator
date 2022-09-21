const submitDate = document.getElementById("submitDate");
const seeMore = document.getElementById("clickMore");
var newDate = document.getElementById("todayDate");

newDate.valueAsDate = new Date();

submitDate.addEventListener('click', calculateAge);
seeMore.addEventListener('click', seeMoreSection);

function calculateAge() {
  let leftMonth = document.getElementById("month");
  let daysLeftVar = document.getElementById("days");
  let leftMonthDateVar = document.getElementById("leftMonth");
  let leftBirthDateVar = document.getElementById("leftDays");
  let yearsSum = document.getElementById("yearsSummary");
  let monthSum = document.getElementById("monthSummary");
  let weekSum = document.getElementById("weeksSummary");

  //Get birth date value
  var birthDate = document.getElementById("birthDate").value;
  let birthDateVal = new Date(birthDate);

  //Get birth date
  var birthYear = birthDateVal.getFullYear();
  var birthMonth = birthDateVal.getMonth() + 1;
  var birthDay = birthDateVal.getDate();

  //Get new Date [today]
  var newDate = document.getElementById("todayDate").value;
  let newDateVal = new Date(newDate);

  //getting new date
  var newYear = newDateVal.getFullYear();
  var newMonth = newDateVal.getMonth() + 1;
  var newDay = newDateVal.getDate();


  //To render on innerHTML variables
  let birthYearLeft = document.getElementById("age");
  let birthMonthLeft = document.getElementById("month");
  let birthDateLeft = document.getElementById("days");

  //calculating the difference
  if (birthYear > newYear) {
    alert("Enter Valid Year : - : 4xYsg");
  }
  else {

    let leftYears = birthYear - newYear;
    birthYearLeft.innerHTML = -leftYears;

    if (birthMonth < newMonth) {
      var leftMonths = newMonth - birthMonth - 1;
    }
    else {
      leftMonths++;
      var leftMonths = 11 + newMonth - birthMonth;
    }
    if (leftMonths < 10) {
      leftMonth.innerHTML = "0" + leftMonths;
    }
    else {
      leftMonth.innerHTML = leftMonths;
    }

    if (birthDay < newDay) {
      var leftDays = newDay - birthDay;
    }
    else {
      var leftDays = 31 + newDay - birthDay;
    }

    daysLeftVar.innerHTML = leftDays;

    var leftInDate = 11 - leftMonths;

    /*  if (leftMonths >= newMonth) {
        var leftInDate =  leftMonths - newMonth;
      }
      else {
        var leftInDate =  leftMonths - newMonth;
      }*/

    if (leftInDate < 0) {
      leftMonthDateVar.innerHTML = -leftInDate;
    }
    else {
      leftMonthDateVar.innerHTML = leftInDate;
    }

    if (newDay >= birthDay) {
      var leftBirthDate = birthDay - newDay;
    }
    else {
      var leftBirthDate = birthDay - newDay;
    }

    if (leftBirthDate < 0) {
      leftBirthDateVar.innerHTML = -leftBirthDate;
    }
    else {
      leftBirthDateVar.innerHTML = leftBirthDate;
    }

    if (leftInDate == 00 && leftBirthDate == 00) {
      // alert("Happy Birthday...");
      toGreet.classList.add("greet");

      setTimeout(() => {
        toGreet.classList.remove("greet");
      }, 5000)
    }

    var time_difference = newDateVal.getTime() - birthDateVal.getTime();
    let monthSummarySum = (-leftYears * 12) + leftMonths;
    let leftYearSum = -leftYears * 52;
    console.log(leftYearSum);
    let mathSum = Math.floor(leftMonths * 52 / 10);
    console.log(mathSum);

    yearsSum.innerHTML = -leftYears;
    monthSum.innerHTML = monthSummarySum;
    weeksSummary.innerHTML = leftYearSum + mathSum;

    let minDiff = time_difference / (60) / 1000;


    var days_difference = time_difference / (1000 * 60 * 60 * 24);

    daysSummary.innerHTML = days_difference;

    var hour_difference = time_difference / (60 * 60) / 1000;

    hoursSummary.innerHTML = hour_difference;

    minuteSummary.innerHTML = minDiff;

  }
}

function seeMoreSection() {
  let bOne = document.getElementById("bOne");
  let bTwo = document.getElementById("bTwo");

  bOne.classList.toggle('barOneTransform');
  bTwo.classList.toggle('barTwoTransform');
  increaseHeight.classList.toggle('incHeight');
}
