let timeDisplayEl = $('#currentDay');
// retrieves current date
var currentDate = dayjs().format('MMM DD, YYYY');
timeDisplayEl.text(currentDate);

$(document).ready(function () {

  // stores text input and time in local storage
  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  // retrieves current time
  function timeTracker() {
    let now = moment();
    let currentTime = now.hour();
    console.log(currentTime);
  
// determines css style based on current time
    $(".time-block").each(function () {
      let timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timeBlock === currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else if (timeBlock > currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

  // Retrieves text input content from local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTracker();

})

