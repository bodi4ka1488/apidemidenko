let num = 0;
console.log("My variable befor " + num);
function myFunction() {
  num = document.getElementById("myinput").value;
  fetch(`http://worldtimeapi.org/api/ip/${num}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.timezone);
      console.log(data.datetime);
      console.log(data.day_of_year);
    });
  console.log("My variable after " + num);
}
