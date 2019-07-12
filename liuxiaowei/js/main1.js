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

    class Search {
        constructor() {
            //				1.获取元素
            this.txt = document.querySelector(".search");
            this.list = document.getElementById("list");
            //				定义接口
            this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
            //				2.绑定事件
            this.init();
        }
        init() {
            var that = this;
            //				注意找对事件
            // this.txt.oninput = function() {
            this.txt.onkeyup = function() {
                //					3.保存输入框的值
                that.v = this.value;
                //					4.开启请求
                that.load()
            }
        }
        load() {
            var that = this;
            jsonp(this.url, function(res) {
                //					5.请求成功拿到数据
                that.res = res;
                //					6.开始渲染页面
                that.display();
            }, {
                wd: this.v,
                //					注意参数
                cb: "askjdsakdh",
                columnName: "cb"
            })
        }
        display() {
            //				注意数据格式
            // console.log(this.res.s)
            //				渲染页面
            var str = "";
            for (var i = 0; i < this.res.s.length; i++) {
                str += `<li>${this.res.s[i]}</li>`
            }

            this.list.innerHTML = str;
        }
    }

    new Search();

})()