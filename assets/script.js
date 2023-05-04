var dateTime = function() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));

}
setInterval(dateTime, 1000);

var currentHour = dayjs().hour();
var timeBlocks = document.querySelectorAll('.time-block')
for(var i=9; i< 18;i++) {

if (currentHour === i){
  var hour = $("#hour-"+i).children("textarea").addClass("present") 
}
else if (i < currentHour){

  var hour = $("#hour-"+i).children("textarea").addClass("past") 
}
else if (i > currentHour){
  var hour = $("#hour-"+i).children("textarea").addClass("future") 
}
$("#hour-"+i).children("textarea").val(localStorage.getItem("hour-"+i))

}

$(function () {

  var currentHour = dayjs().format("HH");
  var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
  $(hours).each(function(i, hour){
   if(hour < currentHour){
    console.log("show me")
    $("#" + hour).addClass("past")

   }
   else if(hour == currentHour){
    console.log("show me too")
    $("#" + hour).addClass("present")

   }
   else if(hour > currentHour){
    console.log("show me as well")
    $("#" + hour).addClass("future")
   }
  })
});

var saveBbtn = $(".saveBtn");
saveBbtn.on("click",function(){
  var parentId= $(this).parent().attr("id")
  var text = $(this).siblings("textarea").val()
  localStorage.setItem(parentId, text);
})


var allButtons = document.querySelectorAll("button")
console.log(allButtons)
allButtons.forEach(function(buttonEl){
  buttonEl.addEventListener("click", saveTask)
})

function saveTask (event){
  console.log("pressed")
  console.log(event)

  var valueToSave = event.target.previousElementSibling.value
  console.log(valueToSave)

  var keyToSave = event.target.parentElement.id
  console.log(keyToSave)
  localStorage.setItem(keyToSave, valueToSave)

}