$(document).ready(function() {   
   // moment.js to show date
    var timeDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").append(timeDate);
    
    
    var arrayOfHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    
    //Function to determine time based on past,present,future
    function whattimeisit() {
       console.log("function check");
        //get current time display format with moment.js
        var currenttime = moment().format('HH'); 
      console.log(currenttime)
        //for loop
        for(var i = 0; i < arrayOfHours.length; i++) {
           
            if(parseInt(arrayOfHours[i]) < currenttime) {
                $("#" + arrayOfHours[i]).addClass("past");
            } 
            else if (parseInt(arrayOfHours[i]) > currenttime) {
                $("#" + arrayOfHours[i]).addClass("future");
            }
            else if (parseInt(arrayOfHours[i]) == currenttime) {
                $("#" + arrayOfHours[i]).addClass("present");
            }
            
        }
    } whattimeisit();
    //retrive from localstorage fnctn
    function worksave () {
       $(".row").each(function () {
           var id = $(this).attr("id");
           var schedule = localStorage.getItem(id);
//if there is something inside the localstorage display it on page
           if (schedule !== null) {
               $(this).children("input").val(schedule);
           }
       });
    }
    worksave ();
    //save to localstorage
    $(".button").on("click", function() {
        var saveTime = $(this).parent().attr("id");
        var memoSave = $(this).siblings("input").val();

        localStorage.setItem(saveTime, memoSave);
     
    });
    
});

 