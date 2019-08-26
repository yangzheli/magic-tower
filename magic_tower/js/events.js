//第三层魔王事件
function devil() {
    //魔王出现
    document.getElementById("7#5").style.visibility = "visible";

    //设置0.5秒延迟
    setTimeout(function () {
        //魔法警卫出现
        var id = ["8#5", "10#5", "9#4", "9#6"];
        var element;
        for (var i = 0; i < id.length; i++) {
            element = document.createElement("div");
            element.setAttribute("class", "resource_64");
            var container = document.getElementById(id[i]);
            container.appendChild(element);
        }
    }, 500);

    //设置1秒延迟
    setTimeout(function () {
        //魔王及魔法警卫消失
        to_road(7, 5);
        to_road(8, 5);
        to_road(10, 5);
        to_road(9, 4);
        to_road(9, 6);

        //勇士被关入二层监狱(神圣剑，神圣盾被夺走)
        warrior.floor = 2;
        warrior.x = 8;
        warrior.y = 3;
        warrior.attack = 10;
        warrior.defense = 10;

        var container = document.getElementById("game");
        var child = document.getElementById("main");
        container.removeChild(child);

        var main = document.createElement("div");
        main.id = "main";
        main.setAttribute("class", "main");
        container.appendChild(main);
        init_road(map);
        init_warrior();
        init_others(map);
    }, 1 * 1000);
}

//第二层小偷事件
function thief() {
    //挖墙
    to_thief(7, 2);
    to_road(7, 3);
    setTimeout(function () {
        to_thief(7, 1);
        to_road(7, 2);
    }, 1000);
    setTimeout(function () {
        to_thief(8, 1);
        to_road(7, 1);
    }, 1000);
    setTimeout(function () {
        to_thief(9, 1);
        to_road(8, 1);
    }, 1000);
}