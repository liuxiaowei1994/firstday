;
(function() {
    "use strict";
    class show {
        constructor() {
            this.showa = document.querySelector(".showa");
            this.url = "http://localhost/two/data/show.json";
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
            for (var i = 0; i < 4; i++) {
                str += `<div class="showmain">
                    <div class="showpic" style="background-image:url(${this.res[i].pica})"></div>
                    <div class="showbottom">
                        <p class="showitem1">${this.res[i].title}</p>
                        <p class="showitem2">${this.res[i].itema} </p>
                         <span class="showprice">${this.res[i].pricea}</span>
                        <h4 class="shpworiginprice">${this.res[i].priceorigin}</h4>

                    </div>
                </div>`
            }
            this.showa.innerHTML = str;
        }
    }
    new show;


})()