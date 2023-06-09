
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,text);
  });

  $("#clear").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  function hourUpdater() {
    var currentHour = dayjs().hour();
    // loop over time blocks
    $('.time-block').each(function () {
      var timeblock = parseInt($(this).attr("id").split("-")[1]);
      if(timeblock === currentHour) {
        $(this).addClass("present");
      } else if (timeblock < currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("past");
      }
    });
  }

  hourUpdater();
  setInterval(hourUpdater, 15000);

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
  // display current day on page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});