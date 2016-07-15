FastClick.attach(document.body);
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 750 * 100 + "px";
}();
new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
})
function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    [].forEach.call(slideAry, function (slide,index) {
        if (n == index) {
            if (n == 6) {
                slide.id = "page1"
            } else if (n == 0) {
                slide.id = "page5"
            } else {
                slide.id = "page" + n;
                if(slide.id=='page4'){print()};
            }
            return;
        }
        slide.id = null;
        var con = document.getElementById("content").innerText;
        var oCount = document.getElementById("count").innerHTML;
        var index = 0;


        //function type() {
        //    var len = oCount.length;
        //    /*if (index > len) {
        //        return;
        //    }*/
        //    document.getElementById("content").innerHTML = oCount.substring(0, index++);
        //}
        //clearInterval(timer)
        //var timer = setInterval(type, 100);

    /*var timer = null;
        if (slide.id == "page4") {
            con = "";
            timer = setInterval(type, 100);
        } else {
            clearInterval(timer)
        }*/

    });
}

function print(){
        var paper = "1.热爱编程，有良好的编程习惯，有强烈的学习欲望。\n2.对待工作认真负责，善于沟通、协调，有较强的集体荣誉感与团队精神。\n3.逻辑思维能力强，做事有条理性,有较强的分析问题和解决问题的能力。\n4.有问题不逃避，愿意虚心向他人学习，从学习中锻炼了持之以恒的精神。\n5.自己可以不是最聪明的，但要当最努力的。";
        var count = 1;
        function oneByOne() {
            var screen = paper.substr(0, count);
            document.getElementById("content").innerText  = screen;
            console.log(document.getElementById("content").innerText)
            count++;
            if (count > paper.length)
                return;
            setTimeout(oneByOne, 100);
        }
        oneByOne()
}

var music = document.getElementById("music"),
    audioMusic = document.getElementById("audioMusic");
window.setTimeout(function () {
    audioMusic.play();
    audioMusic.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false)
}, 1000)
music.addEventListener("click", function () {
    if (audioMusic.paused) {
        audioMusic.play();
        music.className = "music move"
        return;
    }
    audioMusic.pause();
    music.className = "music"
}, false);
