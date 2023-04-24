function AgeCalculator() {
  const date = document.getElementById("date").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const today = new Date();
  const birthDate = new Date(year, month - 1, date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthdiff = today.getMonth() - birthDate.getMonth();
  if (
    monthdiff < 0 ||
    (monthdiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  const monthString = (today.getMonth() + 1 - birthDate.getMonth() + 12) % 12;
  const dayString = today.getDate() - birthDate.getDate();
  document.getElementById(
    "output"
  ).innerHTML = `Your Age is ${age} years ${monthString} Months ${dayString} Days`;
  //   console.log("age" + age, monthString, dayString);
  document.getElementById("date").value = "";
  document.getElementById("month").value = "";

  document.getElementById("year").value = "";
}
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const date = document.getElementById("date").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  if (date < 1 || date > 31) {
    alert("please enter a valid date");
  } else if ((month < 1) | (month > 12)) {
    alert("please enter a valid month");
  } else {
    AgeCalculator();
  }
});
