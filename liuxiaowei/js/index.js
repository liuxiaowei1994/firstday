;
(function() {

    class Index {
        constructor() {

            // 获取一级菜单
            this.menu = document.querySelector(".tablelxw .tab");
            this.menuT = document.querySelector(".tablelxw .classification");
            // 获取二级菜单
            this.seMenu = document.querySelector(".tablelxw .navlist");
            this.ali = document.querySelectorAll(".tablelxw .navlist li");
            for (let i = 0; i < this.ali.length; i++) {
                this.ali[i].index = i;
            }
            // 获取三级菜单
            this.third = document.querySelector(".tablelxw .third");



            // 三级菜单的数据
            this.url = "http://localhost:8181/data/goods.json";
            var that = this;
            $.ajax({
                url: this.url,
                success: function(res) {
                    that.res = res;

                }
            })



            //绑定事件
            this.addEvent();


        }
        addEvent() {
                let that = this;
                // 一级菜单的鼠标滑过事件
                this.menuT.onmouseenter = function() {
                    that.seMenu.style.display = "block";
                }

                this.seMenu.addEventListener("mouseover", (eve) => {
                    let e = eve || window.event;
                    let target = e.target || e.srcElement;
                    for (let i = 0; i < that.ali.length; i++) {
                        that.ali[i].className = "";
                    }
                    if (target.nodeName == "LI" || "SPAN") {
                        if (target.nodeName == "LI") {
                            target.className = "active";
                            this.liIndex = target.index;

                        }
                        if (target.nodeName == "SPAN" && target.nodeName != "LI" && target.nodeName != "UL") {
                            target.parentNode.className = "active";
                            this.liIndex = target.parentNode.index;
                        }
                        this.third.style.display = "block";
                        this.menuDisplay();
                    }
                })

                this.menu.addEventListener("mouseleave", (eve) => {
                    let e = eve || window.event;
                    let target = e.target || e.srcElement;
                    if (target.className == "navlist" || "third") {
                        this.seMenu.style.display = "none";
                        this.third.style.display = "none";

                    }
                })
            }
            // 渲染三级菜单页面
        menuDisplay() {
            let str = "";
            // console.log(this.menuData[this.liIndex]);
            for (let i in this.res[this.liIndex]) {
                str += `<div class="thirdCont"><p><a href="#">${i}</a></p><p>`;
                for (let j = 0; j < this.res[this.liIndex][i].length; j++) {
                    str += `<a href="#">${this.res[this.liIndex][i][j]}</a><span>|</span>`;
                }
                str += `</p></div>`
            }
            this.third.innerHTML = str;
        }
    }

    new Index();
})();