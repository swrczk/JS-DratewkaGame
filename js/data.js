var places = [

    //------------------------1
    [
        new _localization("You are inside a brimstone mine", "11.gif", "rgb(235,211,64)", 4, []),
        new _localization("You are at the entrance to the mine", "12.gif", "rgb(89,93,87)", 5, []),
        new _localization("A hill", "13.gif", "rgb(117,237,243)", 7, [22]),
        new _localization("Some bushes", "14.gif", "rgb(202,230,51)", 5, []),
        new _localization("An old deserted hut", "15.gif", "rgb(220,204,61)", 5, [18]),
        new _localization("The edge of a forest", "16.gif", "rgb(167,245,63)", 5, []),
        new _localization("A dark forest", "17.gif", "rgb(140,253,99)", 3, [5])
    ],

    //------------------------2
    [
        new _localization("A man nearby making tar", "21.gif", "rgb(255,190,99)", 6, []),
        new _localization("A timber yard", "22.gif", "rgb(255,190,99)", 7, []),
        new _localization("You are by a roadside shrine", "23.gif", "rgb(167,245,63)", 15, [1]),
        new _localization("You are by a small chapel", "24.gif", "rgb(212,229,36)", 5, []),
        new _localization("You are on a road leading to a wood", "25.gif", "rgb(167,245,63)", 7, []),
        new _localization("You are in a forest", "26 i 65.gif", "rgb(167,245,63)", 5, []),
        new _localization("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", 9, [9])
    ],

    //------------------------3
    [
        new _localization("You are by the Vistula River", "31.gif", "rgb(122,232,252)", 12, []),
        new _localization("You are by the Vistula River", "32.gif", "rgb(140,214,255)", 9, [23,]),
        new _localization("You are on a bridge over river", "33.gif", "rgb(108,181,242)", 10, []),
        new _localization("You are by the old tavern", "34.gif", "rgb(255,189,117)", 4, []),
        new _localization("You are at the town's end'", "35.gif", "rgb(255,190,99)", 11, []),
        new _localization("You are in a butcher's shop", "36.gif", "rgb(255,188,102)", 2, []),
        new _localization("You are in a cooper's house'", "37.gif", "rgb(255,188,102)", 2, [])
    ],

    //------------------------4
    [
        new _localization("You are in the Wawel Castle", "41.gif", "rgb(255,176,141)", 4, []),
        new _localization("You are inside a dragon's cave", "42.gif", "rgb(198,205,193)", 5, []),
        new _localization("A perfect place to set a trap", "43.gif", "rgb(255,176,141)", 9, []),
        new _localization("You are by the water mill", "44.gif", "rgb(255,190,99)", 4, [12]),
        new _localization("You are at a main crossroad", "45.gif", "rgb(255,190,99)", 15, []),
        new _localization("You are on a town street", "46.gif", "rgb(255,190,99)", 13, []),
        new _localization("You are in a frontyard of your house", "47.gif", "rgb(255,190,99)", 11, [])
    ],

    //------------------------5
    [
         , , ,
        new _localization("You are by a swift stream", "54.gif", "rgb(108,181,242)", 4, []),
        new _localization("You are on a street leading forest", "55.gif", "rgb(255,190,99)", 11, [24]),
        new _localization("You are in a woodcutter's backyard", "56.gif", "rgb(255,190,99)", 2, []),
        new _localization("You are in a shoemaker's house", "57.gif", "rgb(254,194,97)", 8, [])
    ],

    //------------------------6
    [
         , , ,
        new _localization("You are in a bleak funeral house", "64.gif", "rgb(254,194,97)", 4, [15]),
        new _localization("You are on a path leading to the wood", "26 i 65.gif", "rgb(167,245,63)", 13, []),
        new _localization("You are at the edge of a forest", "66.gif", "rgb(167,245,63)", 13, []),
        new _localization("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", 1, [])
    ]
]

var reactions = [
    //gdy zebrane wszystkie przedmioty (6*OK), 43, 37, Your fake sheep is full of poison and ready to be eaten by the dragon
    //n - napis z timeoutem, l- przedmiot nieruszalny, d- martwy smok  - podmiana grafiki na lokacji , s - masz skórę smoka - trzeba sprawdzić, czy smok jest martwy, k- koniec gry

    new _reaction(1, 56, 2, "You opened a tool shed and took an axe"),
    new _reaction(2, 67, 3, "You cut sticks for sheeplegs"),
    new _reaction(3, 43, 4, "You prepared legs for your fake sheep", "L"),
    new _reaction(5, 34, 6, "The tavern owner paid you money"),
    new _reaction(6, 37, 7, "The cooper sold you a new barrel"),
    new _reaction(7, 43, 8, "You made a nice sheeptrunk", "L"),
    new _reaction(9, 36, 10, "The butcher gave you wool"),
    new _reaction(10, 43, 11, "You prepared skin for your fake sheep", "L"),
    new _reaction(12, 57, 13, "You used your tools to make a rag"),
    new _reaction(13, 43, 14, "You made a fake sheephead", "L"),
    new _reaction(15, 11, 16, ["You are digging...", "and digging...", "That's enough sulphur for you"], "N"),
    new _reaction(16, 43, 17, "You prepared a solid poison", "L"),
    new _reaction(18, 21, 19, "You got a bucket full of tar"),
    new _reaction(19, 43, 20, "You prepared a liquid poison", "L"),
    new _reaction(28, 43, 21, ["The dragon noticed your gift...", "The dragon ate your sheep and died!"], "D"),
    new _reaction(24, 43, 24, "You cut a piece of dragon's skin", "S"),
    new _reaction(25, 57, 26, "You used your tools to make shoes"),
    new _reaction(26, 41, 27, "The King is impressed by your shoes"),
    new _reaction(27, 41, null, null, "K")
]

var items = [,
    new _items("a KEY", 1, "KEY"),
    new _items("an AXE", 1, "AXE"),
    new _items("STICKS", 1, "STICKS"),
    new _items("sheeplegs", 0, "sheeplegs"),
    new _items("MUSHROOMS", 1, "MUSHROOMS"),
    new _items("MONEY", 1, "MONEY"),
    new _items("a BARREL", 1, "BARREL"),
    new _items("a sheeptrunk", 0, "sheeptrunk"),
    new _items("BERRIES", 1, "BERRIES"),
    new _items("WOOL", 1, "WOOL"),
    new _items("a sheepskin", 0, "sheepskin"),
    new _items("a BAG", 1, "BAG"),
    new _items("a RAG", 1, "RAG"),
    new _items("a sheephead", 0, "sheephead"),
    new _items("a SPADE", 1, "SPADE"),
    new _items("SULPHUR", 1, "SULPHUR"),
    new _items("a solid poison", 0, "solid poison"),
    new _items("a BUCKET", 1, "BUCKET"),
    new _items("TAR", 1, "TAR"),
    new _items("a liquid poison", 0, "liquid poison"),
    new _items("a dead dragon", 0, "dead dragon"),
    new _items("a STONE", 1, "STONE"),
    new _items("a FISH", 1, "FISH"),
    new _items("a KNIFE", 1, "KNIFE"),
    new _items("a DRAGONSKIN", 1, "DRAGONSKIN"),
    new _items("a dragonskin SHOES", 1, "SHOES"),
    new _items("a PRIZE", 1, "PRIZE"),
    new _items("a SHEEP", 1, "SHEEP")
    ]
