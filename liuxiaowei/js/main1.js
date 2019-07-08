;
(function() {
    "use strict";
    // top
    var oApp = document.querySelector(".app");
    var oMask = document.querySelector(".mask");
    var twocode = document.querySelector(".twocode");
    var oTop1 = document.querySelector(".top1");

    oApp.onmouseover = function() {

        twocode.style.display = "block";
        oApp.onmouseout = function() { twocode.style.display = "none"; }
    }
    oMask.onmouseover = function() {
            oTop1.style.display = "block";

            oMask.onmouseout = function() { oTop1.style.display = "none"; }
        }
        // banner
    $(".banner2").banner({
        aimg: $(".banner2").find("img"),
        left: $(".banner2").find("#left"),
        right: $(".banner2").find("#right"),
        isList: true,
        autoPlay: true,
        moveTime: 200,
        index: 0
    })

    // $(".classification").mouseenter(function() {
    //     $(this).siblings("#menu").children("ol").show();
    // })
    // $("ol").mouseleave(function() {
    //     $(this).hide();
    // })

    // $(".menu1").mouseenter(function() {

    //     $(this).siblings(".out1").children(".help").toggle();
    // })

    // $(".menu2").mouseenter(function() {

    //     $(this).siblings(".out2").children(".food").toggle();

    // })
    // $('.classification').hover(function() {
    //     $(this).children('div').toggle();
    // })


    // TV部分轮播
    class TV {
        constructor() {
            this.tvBanner = document.querySelector(".TVbanner");
            this.url = "http://localhost/two/data/TV.json";

            this.tvLeft = document.querySelector(".TVleft")
            this.tvRight = document.querySelector(".TVright")

            this.init();
        }
        init() {
            var that = this;
            ajaxPost(this.url, function(res) {
                that.res = JSON.parse(res)
                that.display();

            })
        }
        display() {
            var str = "";
            for (var i = 0; i < this.res.length; i++) {

                str += ` <div class="TVmain">
                    <div class="status" style="background-image:url(${this.res[i].statusa})"></div>
                    <div class="TVpic" style="background-image:url(${this.res[i].pica}) "></div>
                    <div class="TVbottom">
                        <p class="item">${this.res[i].itema}</p>
                        <span class="price">${this.res[i].pricea}</span>
                        <h4 class="originprice">${this.res[i].priceorigin}</h4>
                        <h3 class="addshop">立即加购</h3>
                    </div>
                </div>`
            }
            this.tvBanner.innerHTML = str;
            this.play();

        }
        play() {
            this.tvMain = document.querySelector(".TVmain");
            if (window.getComputedStyle) {
                var computedStyle = getComputedStyle(this.tvMain, null)
            } else {
                computedStyle = this.tvMain.currentStyle; //兼容IE的写法
            }

            this.tvMargin = computedStyle.marginRight;
            this.tvBanner.style.width = (this.tvMain.offsetWidth + 12) * this.res.length + "px";
            console.log(this.tvBanner.style.width)
            this.select()
        }
        select() {
            var that = this;
            var i = 0;

            that.tvLeft.onclick = function() {
                if (i < that.res.length - 1) {
                    var f1 = function() {
                        return (
                            function() {
                                i++
                                that.tvBanner.style.left = -i * (that.tvMain.offsetWidth + 12) + "px";

                                return (i);
                            }())
                    }
                    f1()
                } else { i = that.res.length - 2; }
            }


            that.tvRight.onclick = function() {
                if (i > 0) {
                    var f2 = function() {
                        return (
                            function() {
                                i--
                                that.tvBanner.style.left = -i * (that.tvMain.offsetWidth + 12) + "px";

                                return (i);
                            }())
                    }
                    f2()
                } else { i = 0; }
            }

        }

    }
    new TV;


})()