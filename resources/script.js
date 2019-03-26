const NUM_RAINDROPS = 65;
// const NUM_LILYPADS = 6;

$(document).ready(function(){
    function freshDot() {
        this.obj = document.createElement("div");
        this.obj.classList.add("rain-drop");
        this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
        this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
        this.size = Math.floor(5 * Math.random()) + 7;
        this.obj.style.height =  this.size + 'px';
        this.obj.style.width = this.size + 'px';

        $(".background").append(this.obj);
    }

    function generateDots(numRaindrops) {
        let dots = [];
        for(let i = 0 ; i < numRaindrops; i++ ){
            dots.push(new freshDot());
        }
        let allRenderedots = $(".rain-drop");
        for (let i = 0 ; i < numRaindrops ; i++ ) {
            allRenderedots[i].style.setProperty('--animation-time', generateRandom(2, 10)+ 's');
        }
        return dots;
    }

    const removeDots = (dots) => {
        for (let dot of dots) {
            document.body.removeChild(dots[i]);
        }
    }

    // function freshLilypad() {
    //     this.obj = document.createElement("div");
    //     this.obj.classList.add("lily-pad");
    //     this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
    //     this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
    //     this.size = Math.floor(5 * generateRandom(1, 15)) + 50;
    //     this.obj.style.height =  (this.size) + 'px';
    //     this.obj.style.width = (this.size) + 'px';
    //
    //     $(".background").append(this.obj)
    // }

    // function generatePads(numLilypads) {
    //     let pads = [];
    //     for(let i = 0 ; i < numLilypads; i++){
    //         pads.push(new freshLilypad());
    //     }
    //     let allRenderedpads = $(".lily-pad");
    //     for (let i = 0 ; i < numLilypads; i++) {
    //         allRenderedpads[i].style.setProperty('--animation-time', generateRandom(6, 12) + 's');
    //     }
    //     return pads;
    // }
    //
    // const removePads = (pads) => {
    //     for (let pad of pads) {
    //         document.body.removeChild(pads[i]);
    //     }
    // }

    let allDots = generateDots(NUM_RAINDROPS);
    // let allPads = generatePads(NUM_LILYPADS);

    // upon resize
//    $(window).resize(function(){
//        removeDots(allDots);
//        removePads(allPads);
//        allDots = generateDots;
//        allPads = generatePads;
//    });

});

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
