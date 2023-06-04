const bar=document.getElementById('bar');
const close= document.getElementById('close')
const nav=document.getElementById('navbar')

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


// count down 

 // Set the event date to June 10th of the current year
 var eventDate = new Date();
 eventDate.setMonth(5);
 eventDate.setDate(10);
 eventDate.setHours(0, 0, 0, 0);

 // Countdown to the event date
 var countdownInterval = setInterval(updateCountdown, 1000);

 function updateCountdown() {
   var currentDate = new Date();
   var timeDifference = eventDate.getTime() - currentDate.getTime();

   var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
   var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

   document.getElementById("days").textContent = days.toString().padStart(2, "0");
   document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
   document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
   document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

   if (timeDifference < 0) {
     clearInterval(countdownInterval);
     document.getElementById("days").textContent = "00";
     document.getElementById("hours").textContent = "00";
     document.getElementById("minutes").textContent = "00";
     document.getElementById("seconds").textContent = "00";
   }
 }