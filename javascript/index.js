// Quote Function / Setting Quote

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      document.getElementById("quote").innerHTML = data.content;
      document.getElementById("author").innerHTML = data.author;
    });
}
getQuote();

document.getElementById("refresh-btn").addEventListener("click", getQuote);

// Getting Time / Setting Time

function getTime() {
  fetch("https://timezoneapi.io/api/ip/?token=akhxzbacRzuqeyDdcmMh")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      // Getting Time / Setting Time
      const timeHtml = `${data.data.datetime.hour_12_wolz} : ${data.data.datetime.minutes}`;
      document.getElementById("time").innerHTML = timeHtml;
      document.getElementById("time-location").innerHTML =
        data.data.datetime.offset_tzab;

      // Getting Location / Setting Location
      const locationHtml = `IN ${data.data.city}, ${data.data.state_code}`;
      document.getElementById("city-location").innerHTML = locationHtml;

      // Getting Time Of Day / Setting Time Of Day
      function currentlyMessage() {
        if (data.data.datetime.timeday_gen === "morning") {
          document.getElementById("time-title").innerHTML =
            "Good Morning, it's currently";
          document.getElementById("time-img").src =
            "../assets/desktop/icon-sun.svg";
          document.body.style.backgroundImage =
            "linear-gradient( rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) ), url('../assets/desktop/bg-image-daytime-v2.jpg')";
        } else if (data.data.datetime.timeday_gen === "afternoon") {
          document.getElementById("time-title").innerHTML =
            "Good Afternoon , it's currently";
          document.getElementById("time-img").src =
            "../assets/desktop/icon-sun.svg";
          document.body.style.backgroundImage =
            "linear-gradient( rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) ), url('../assets/desktop/bg-image-daytime-v2.jpg')";
        } else if (data.data.datetime.timeday_gen === "evening") {
          document.getElementById("time-title").innerHTML =
            "Good Evening, it's currently";
          document.getElementById("time-img").src =
            "../assets/desktop/icon-moon.svg";
          document.body.style.backgroundImage =
            "linear-gradient( rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) ), url('../assets/desktop/bg-image-nighttime-v2.jpg')";
        } else {
          document.getElementById("time-title").innerHTML =
            "Good Night, it's currently";
          document.getElementById("time-img").src =
            "../assets/desktop/icon-moon.svg";
          document.body.style.backgroundImage =
            "linear-gradient( rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) ), url('../assets/desktop/bg-image-nighttime-v2.jpg')";
        }
      }
      currentlyMessage();

      // Getting Current Timezone / Setting Current Timezone
      document.getElementById("time-zone").innerHTML =
        data.data.datetime.offset_tzid;

      // Getting Day Of The Week / Setting Day Of The Week
      document.getElementById("day-of-the-week").innerHTML =
        data.data.datetime.day_full;

      // Getting Week Number / Setting Week Number
      document.getElementById("week-number").innerHTML =
        data.data.datetime.week;
    });
}
getTime();

// Refresh Time Every 1 Minute
setInterval(getTime, 60000);

// Getting Day Of The Year / Setting Day Of The Year
let dayOfTheYear = "";
function getDayOfTheYear() {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  dayOfTheYear = day;
}
getDayOfTheYear();
document.getElementById("day-of-the-year").innerHTML = dayOfTheYear;

let articleHidden = true;
// Toggle Article
function toggleArticle() {
  $("#article").slideToggle("slow");
  $(".quote-container").toggleClass("toggle");
  articleHidden = !articleHidden;

  if (!articleHidden) {
    document.getElementById("more-text").textContent = "less";
    document.getElementById("arrow").classList.toggle("rotate180");
  } else {
    document.getElementById("more-text").textContent = "more";
    document.getElementById("arrow").classList.toggle("rotate180");
  }
}

document.getElementById("more").addEventListener("click", toggleArticle);
