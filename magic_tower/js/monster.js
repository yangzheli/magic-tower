//怪物
function monster() {
    this.id = 0;   //id
    this.dp = 0;    //血量
    this.attack = 0;    //攻击力
    this.defense = 0;   //防御力
    this.gold = 0;  //击败后获得的金钱（不计算幸运金币）
    this.attack_first = 0;  //先手攻击
}

//根据id初始化怪物的属性
function init_monster(id) {
    monster.id = id;
    switch (id) {
        case 20:    //绿色史莱姆
            monster.dp = 35;
            monster.attack = 18;
            monster.defense = 1;
            monster.gold = 1;
            monster.attack_first = false;
            break;
        case 21:    //红色史莱姆
            monster.dp = 45;
            monster.attack = 20;
            monster.defense = 2;
            monster.gold = 2;
            monster.attack_first = false;
            break;
        case 24:    //小蝙蝠
            monster.dp = 35;
            monster.attack = 38;
            monster.defense = 3;
            monster.gold = 3;
            monster.attack_first = false;
            break;
        case 27:    //骷髅人
            monster.dp = 50;
            monster.attack = 42;
            monster.defense = 6;
            monster.gold = 6;
            monster.attack_first = false;
            break;
        case 28:    //骷髅武士
            monster.dp = 55;
            monster.attack = 52;
            monster.defense = 12;
            monster.gold = 8;
            monster.attack_first = false;
            break;
        case 30:    //初级法师
            monster.dp = 60;
            monster.attack = 32;
            monster.defense = 8;
            monster.gold = 5;
            monster.attack_first = false;
            break;
        default:
            monster.dp = 35;
            monster.attack = 18;
            monster.defense = 1;
            monster.gold = 100;
            monster.attack_first = false;
            break;
    }
}