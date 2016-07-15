/**
 * Created by wx on 2016/6/27.
 */

~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 320 * 100 + 'px';
}();


var swiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical', //竖向切换
    onSlidePrevEnd: function (swiper) { //向上或向左切换结束的时候,swiper->当前new Swiper创建出来的额实例
        //console.log(swiper.activeIndex);
        //
        changeEnd(swiper);
    },
    onSlideNextEnd: function (swiper) { //向上或向左切换结束的时候,swiper->当前new Swiper创建出来的额实例
        //console.log(swiper.activeIndex);
        changeEnd(swiper);
    }
});


function changeEnd(swiper) {
    var n = swiper.activeIndex;
    var slideAry = swiper.slides; //获取当前所有的活动块（获取的结果是一个数组）
    [].forEach.call(slideAry, function (slide, index) {


            if( /page1/.test(slide.className))
            {
                var aImg = slide.getElementsByClassName('opacity');
            }

        //var aImg = slide.getElementsByClassName('opacity');
        if (n === index) {
            var idName = null;
            switch (n) {
                case 0:
                    idName = 'page' + 4;
                    break;
                case 1:
                    idName = 'page' + 1;
                    break;
                case 2:
                    idName = 'page' + 2;
                    break;
                case 3:
                    idName = 'page' + 3;
                    break;
                case 4:
                    idName = 'page' + 4;
                    break;
                case 5:
                    idName = 'page' + 1;
                    break;
                default:
                    idName = 'page' + 1;
                    break;
            }

            slide.id = idName;

            if(idName == 'page1'){

                [].forEach.call(aImg, function (oImg, index) {

                    //监听动画是否执行完
                    oImg.addEventListener("webkitAnimationEnd", function () { //动画结束时事件
                        this.style.opacity = 1;
                    });

                });
            }


        }
        else {
            if(slide.id == 'page1' && aImg){
                [].forEach.call(aImg,function(oImg,index){
                    oImg.style.opacity = 0;
                });
            }

            slide.id = '';


        }

    })
}

//音频的自动播放
var music = document.getElementById('music');
var musicAudio = document.getElementById('musicAudio');

var timer = setTimeout(function(){
    musicAudio.play(); //让音频播放
    musicAudio.addEventListener('canplay',function(){
        music.className = 'music move';
    });
},1000);

music.addEventListener('click',function(){
    if(musicAudio.paused){ //判断播放是否暂停
        musicAudio.play();
        music.className = 'music move';
    } else{
        musicAudio.pause();
        music.className = 'music';
    }
});