var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

var partypopper= document.getElementById("partypopper");
var bgmusic= document.getElementById("bgmusic");

const fire=(particleRatio, opts)=>{
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

function pageScroll() {
  window.scrollBy(0,1);
}
var scrolldelay;


$("#heart").click(function(){
  bgmusic.play()
  $("#cover").fadeOut(900);
  setTimeout(() => {
    partypopper.play()
      fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });  
        
        scrolldelay = setInterval('pageScroll()',20);
  },1500);
});

$(document).on("click",()=>{
  clearInterval(scrolldelay)
})


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.onkeydown = (e) => {
  if (e.key == 123) {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};
