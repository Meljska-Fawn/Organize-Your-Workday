$(function () {

  let timeDisplayEl = $('#currentDay');
  // retrieves current date
  var currentDate = dayjs().format('MMM DD, YYYY');
  timeDisplayEl.text(currentDate);

  $(document).ready(function () {

    // stores text input and time in local storage
    $(".saveBtn").on("click", function () {
      text = $(this).siblings(".description").val();
      time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
    })

    function applyStyle() {
      // retrieves current hour
      let currentHour = dayjs().hour();
      console.log (currentHour);

      // determines css style comparing the hour in the id to  the current hour
      $(".time-block").each(function () {
        hour = parseInt($(this).attr("id").split("-")[1]);

        if (hour < currentHour) {
          $(this).addClass("past");
        }
        else if (hour === currentHour) {
          $(this).addClass("present");
        }
        else if (hour > currentHour) {
          $(this).addClass("future");
        }
      })
    }

    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    applyStyle();

  })
})
