//上楼
function upstairs() {
    var floor = warrior.floor++;
    switch (floor) {
        case 0:
            warrior.x = 11;
            warrior.y = 6;
            break;
        case 1:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 2:
            warrior.x = 11;
            warrior.y = 2;
        default:
            break;
    }
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
}

//下楼
function downstairs() {
    var floor = warrior.floor--;
    switch (floor) {
        // case 1:
        //     warrior.x = 11;
        //     warrior.y = 6;
        //     break;
        case 2:
            warrior.x = 1;
            warrior.y = 2;
            break;
        case 3:
            warrior.x = 10;
            warrior.y = 1;
            break;
        default:
            break;
    }
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
}