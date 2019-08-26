//监听键盘控制勇士移动
window.addEventListener("keydown", function (event) {
    var dx = 0, dy = 0;
    switch (event.which) {
        case 87:    //上
            dx = -1;
            dy = 0;
            break;
        case 83:    //下
            dx = 1;
            dy = 0;
            break;
        case 65:    //左
            dx = 0;
            dy = -1;
            break;
        case 68:    //右
            dx = 0;
            dy = 1;
            break;
        default:
            break;
    }

    if (dx == 0 && dy == 0) {
        return;
    }
    var x = warrior.x + dx, y = warrior.y + dy;
    if (x >= 0 && x < SIZE && y >= 0 && y < SIZE && map[warrior.floor][x][y] != 2) {
        switch (map[warrior.floor][x][y]) {
            case 1:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                break;
            case 5:
                if (warrior.yellow_key > 0) {
                    to_road(warrior.x, warrior.y);
                    to_warrior(x, y);
                    warrior.yellow_key--;
                }
                break;
            case 6:
                if (warrior.blue_key > 0) {
                    to_road(warrior.x, warrior.y);
                    to_warrior(x, y);
                    warrior.blue_key--;
                }
                break;
            case 8:
                upstairs();
                break;
            case 9:
                downstairs();
                break;
            case 20:
            case 21:
            case 24:
            case 27:
            case 28:
            case 30:
                init_monster(map[warrior.floor][x][y]);
                var damage = attack(warrior, monster);
                if (damage != Infinity) {
                    warrior.dp -= damage;
                    warrior.gold += monster.gold;
                    to_road(warrior.x, warrior.y);
                    to_warrior(x, y);
                }
                break;
            case 62:
                //触发第二层小偷事件
                thief();
                break;
            case 80:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.yellow_key++;
                break;
            case 83:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.dp += 50;
                break;
            case 84:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.dp += 200;
                break;
            case 85:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.attack += 1;
                break;
            case 86:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.defense += 1;
                break;
            default:
                break;
        }

        //第三层魔王事件触发(只触发第一次)
        if (map[3][7][5] == 63 && warrior.floor == 3 && warrior.x == 9 && warrior.y == 5) {
            devil();
        }
        refresh_attribute();
    }
})

//成功移动后目的地变成勇士
function to_warrior(x, y) {
    var id = x + "#" + y;
    var element = document.createElement("div");
    element.setAttribute("class", "warrior");
    var container = document.getElementById(id);
    if (container.firstChild != null) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(element);
    warrior.x = x;
    warrior.y = y;
}

//成功移动后目的地变成小偷
function to_thief(x, y) {
    var id = x + "#" + y;
    var element = document.createElement("div");
    element.setAttribute("class", "resource_62");
    var container = document.getElementById(id);
    if (container.firstChild != null) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(element);
}

//成功移动后出发地变成路
function to_road(x, y) {
    var id = x + "#" + y;
    var container = document.getElementById(id);
    container.removeChild(container.firstChild);
    map[warrior.floor][x][y] = 1;
}
