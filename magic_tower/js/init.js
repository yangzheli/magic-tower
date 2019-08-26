//往地图铺一层路
function init_road(map) {
    var main = document.getElementById("main");
    var element;
    for (var i = 0; i < SIZE; i++) {
        for (var j = 0; j < SIZE; j++) {
            element = document.createElement("div");
            element.id = i + "#" + j;
            element.setAttribute("class", "resource_1");
            main.appendChild(element);
        }
    }
}

//初始化勇士位置及属性
function init_warrior() {
    var element = document.createElement("div");
    element.setAttribute("class", "warrior");
    var container = document.getElementById(warrior.x + "#" + warrior.y);
    container.appendChild(element);

    refresh_attribute();
}

//刷新勇士的属性
function refresh_attribute() {
    document.getElementById("floor").innerText = "魔塔 第" + warrior.floor + "层";
    document.getElementById("blood").innerText = warrior.dp;
    document.getElementById("attack").innerText = warrior.attack;
    document.getElementById("defense").innerText = warrior.defense;
    document.getElementById("gold").innerText = warrior.gold;
}

//初始化地图的墙、门、道具、怪物、NPC等其它资源
function init_others(map) {
    var element;
    for (var i = 0; i < SIZE; i++) {
        for (var j = 0; j < SIZE; j++) {
            element = document.createElement("div");
            switch (map[warrior.floor][i][j]) {
                /**
                 * 墙，门，楼梯
                 */
                case 2:     //墙
                    element.setAttribute("class", "resource_2");
                    break;
                case 3:
                    element.setAttribute("class", "resource_3");
                    break;
                case 4:
                    element.setAttribute("class", "resource_4");
                    break;
                case 5:     //黄门
                    element.setAttribute("class", "resource_5");
                    break;
                case 6:     //蓝门
                    element.setAttribute("class", "resource_6");
                    break;
                case 7:
                    element.setAttribute("class", "resource_7");
                    break;
                case 8:     //下一层楼梯
                    element.setAttribute("class", "resource_8");
                    break;
                case 9:     //上一层楼梯
                    element.setAttribute("class", "resource_9");
                    break;
                case 10:
                    element.setAttribute("class", "resource_10");
                    break;
                case 11:
                    element.setAttribute("class", "resource_11");
                    break;

                /**
                 *  怪物
                 */
                case 20:    //绿色史莱姆
                    element.setAttribute("class", "resource_20");
                    break;
                case 21:    //红色史莱姆
                    element.setAttribute("class", "resource_21");
                    break;
                case 22:    //大史莱姆
                    element.setAttribute("class", "resource_22");
                    break;
                case 23:    //史莱姆王
                    element.setAttribute("class", "resource_23");
                    break;
                case 24:    //小蝙蝠
                    element.setAttribute("class", "resource_24");
                    break;
                case 25:    //大蝙蝠
                    element.setAttribute("class", "resource_25");
                    break;
                case 26:    //红蝙蝠
                    element.setAttribute("class", "resource_26");
                    break;
                case 27:    //骷髅人
                    element.setAttribute("class", "resource_27");
                    break;
                case 28:    //骷髅武士
                    element.setAttribute("class", "resource_28");
                    break;
                case 29:    //骷髅队长
                    element.setAttribute("class", "resource_29");
                    break;
                case 30:    //初级法师
                    element.setAttribute("class", "resource_30");
                    break;
                case 31:    //高级法师
                    element.setAttribute("class", "resource_31");
                    break;
                case 32:    //麻衣法师
                    element.setAttribute("class", "resource_32");
                    break;
                case 33:
                    element.setAttribute("class", "resource_33");
                    break;
                case 34:
                    element.setAttribute("class", "resource_34");
                    break;
                case 35:
                    element.setAttribute("class", "resource_35");
                    break;
                case 36:
                    element.setAttribute("class", "resource_36");
                    break;
                case 37:    //初级卫兵
                    element.setAttribute("class", "resource_37");
                    break;
                case 38:    //中级卫兵
                    element.setAttribute("class", "resource_38");
                    break;
                case 39:    //高级卫兵
                    element.setAttribute("class", "resource_39");
                    break;

                /**
                 * NPC
                 */
                case 60:    //智者(老人)
                    element.setAttribute("class", "resource_60");
                    break;
                case 61:    //商人
                    element.setAttribute("class", "resource_61");
                    break;
                case 62:    //小偷
                    element.setAttribute("class", "resource_62");
                    break;
                case 63:    //魔王(第三层出现，只会触发对话)
                    element.setAttribute("class", "resource_63");
                    //默认隐藏，仍然占用空间
                    document.getElementById("7#5").style.visibility = "hidden";
                    break;
                case 64:    //魔法警卫(第三层出现，只会触发对话)
                    element.setAttribute("class", "resource_64");
                    break;
                case 65:    //公主
                    break;

                /**
                 * 道具
                 */
                case 80:    //黄钥匙
                    element.setAttribute("class", "resource_80");
                    break;
                case 81:    //蓝钥匙
                    element.setAttribute("class", "resource_81");
                    break;
                case 82:    //红钥匙
                    element.setAttribute("class", "resource_82");
                    break;
                case 83:    //红药水
                    element.setAttribute("class", "resource_83");
                    break;
                case 84:    //蓝药水
                    element.setAttribute("class", "resource_84");
                    break;
                case 85:    //红宝石
                    element.setAttribute("class", "resource_85");
                    break;
                case 86:    //蓝宝石
                    element.setAttribute("class", "resource_86");
                    break;
                default:
                    break;
            }
            if (map[warrior.floor][i][j] != 1) {
                var container = document.getElementById(i + "#" + j);
                container.appendChild(element);
            }
        }
    }
}

var warrior = new warrior();
var monster = new monster();
init_road(map);
init_warrior();
init_others(map);