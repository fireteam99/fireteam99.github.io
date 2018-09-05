$(document).ready(function(){
//    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//    if (!isSafari) {
        function freshDot(){
            this.obj = document.createElement("div");
            this.obj.classList.add("rain-drop");
            this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
            this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
            this.size = Math.floor(5 * Math.random()) + 7;
            this.obj.style.height =  this.size + 'px';
            this.obj.style.width = this.size + 'px';

            $(".background").append(this.obj);
        }
        var dot = [];
        for(var i = 0 ; i < 200 ; i++ ){
            dot.push(new freshDot());
        }
        var allRenderedDots = $(".rain-drop");
        for (var i = 0 ; i < 200 ; i++ ) {
            allRenderedDots[i].style.setProperty('--animation-time', generateRandom(2, 10)+ 's');
        }

        function freshLilyPad() {
            this.obj = document.createElement("div");
            this.obj.classList.add("lily-pad");
            this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
            this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
            this.size = Math.floor(5 * generateRandom(1, 15)) + 50;
            this.obj.style.height =  (this.size) + 'px';
            this.obj.style.width = (this.size) + 'px';
            
            $(".background").append(this.obj)
        }
        var pad = [];
        for(var i = 0 ; i < 10 ; i++ ){
            dot.push(new freshLilyPad());
        }
        var allRenderedPads = $(".lily-pad");
        for (var i = 0 ; i < 10 ; i++ ) {
            allRenderedPads[i].style.setProperty('--animation-time', generateRandom(6, 12) + 's');
        }
//    }
    
//  $(window).resize(function(){
//    for(i=0;i<200;i++){
//      document.body.removeChild(dot[i]);
//    }
//  });
  
});

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}