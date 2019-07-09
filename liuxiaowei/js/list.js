;
(function() {
    "use strict";
    class displayList {
        constructor() {
            this.mainList = document.querySelector(".mainlist");
            this.url = "http://localhost:8181/data/list.json";
            this.init();
            this.addEvent();
        }

        init() {
            var that = this;
            $.ajax({
                url: this.url,
                success: function(res) {
                    that.res = res;
                    that.display();
                }
            })
        }

        display() {
            var str = "";
            for (var i = 0; i < this.res.length; i++) {

                str += `<div class="mainlista"  index="${this.res[i].id}">
<div class="mainlistaimg" style="background-image:url(${this.res[i].pica})"></div>
<div class="mainlistbottoma">
    <span class="price">${this.res[i].pricea}</span>
    <span class="originprice">${this.res[i].priceorigin}</span>
</div>
<p class="items">${this.res[i].itema}</p>
</div>`
            }
            this.mainList.innerHTML = str;
        }

        addEvent() {
            var that = this;
            this.mainList.onclick = function(eve) {

                var e = eve || window.event;
                var t = e.target || e.srcElement;

                if (t.className == "mainlistaimg") {
                    // 2.获取当前的商品ID
                    that.id = t.parentNode.getAttribute("index");
                    // 3.存localstorage

                    that.setData();
                }
            }
        }
        setData() {
            var that = this;
            this.items = this.id - 1;
            console.log(this.res[this.items])
            setCookie("goodsmessage", JSON.stringify(this.res[this.items]), {
                expires: 7
            })
        }
    }
    new displayList;

})();