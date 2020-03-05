var places = [

    //------------------------1
    [
        new _pole("You are inside a brimstone mine", "11.gif", "rgb(235,211,64)", "0", "1", "0", "0", []),
        new _pole("You are at the entrance to the mine", "12.gif", "rgb(89,93,87)", "0", "1", "0", "1", []),
        new _pole("A hill", "13.gif", "rgb(117,237,243)", "0", "1", "1", "1", [31, 0, 0]),
        new _pole("Some bushes", "14.gif", "rgb(202,230,51)", "0", "1", "0", "1", [0, 0, 0]),
        new _pole("An old deserted hut", "15.gif", "rgb(220,204,61)", "0", "1", "0", "1", [27, 0, 0]),
        new _pole("The edge of a forest", "16.gif", "rgb(167,245,63)", "0", "1", "0", "1", [0, 0, 0]),
        new _pole("A dark forest", "17.gif", "rgb(140,253,99)", "0", "0", "1", "1", [14, 0, 0])
    ],

    //------------------------2
    [
        new _pole("A man nearby making tar", "21.gif", "rgb(255,190,99)", "0", "1", "1", "0", [0, 0, 0]),
        new _pole("A timber yard", "22.gif", "rgb(255,190,99)", "0", "1", "1", "1", [0, 0, 0]),
        new _pole("You are by a roadside shrine", "23.gif", "rgb(167,245,63)", "1", "1", "1", "1", [10, 0, 0]),
        new _pole("You are by a small chapel", "24.gif", "rgb(212,229,36)", "0", "1", "0", "1", [0, 0, 0]),
        new _pole("You are on a road leading to a wood", "25.gif", "rgb(167,245,63)", "0", "1", "1", "1", [0, 0, 0]),
        new _pole("You are in a forest", "26 i 65.gif", "rgb(167,245,63)", "0", "1", "0", "1", [0, 0, 0]),
        new _pole("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", "1", "0", "0", "1", [18, 0, 0])
    ],

    //------------------------3
    [
        new _pole("You are by the Vistula River", "31.gif", "rgb(122,232,252)", "1", "1", "0", "0", [0, 0, 0]),
        new _pole("You are by the Vistula River", "32.gif", "rgb(140,214,255)", "1", "0", "0", "1", [32, 0, 0]),
        new _pole("You are on a bridge over river", "33.gif", "rgb(108,181,242)", "1", "0", "1", "0", [0, 0, 0]),
        new _pole("You are by the old tavern", "34.gif", "rgb(255,189,117)", "0", "1", "0", "0", [0, 0, 0]),
        new _pole("You are at the town's end'", "35.gif", "rgb(255,190,99)", "1", "0", "1", "1", [0, 0, 0]),
        new _pole("You are in a butcher's shop", "36.gif", "rgb(255,188,102)", "0", "0", "1", "0", [0, 0, 0]),
        new _pole("You are in a cooper's house'", "37.gif", "rgb(255,188,102)", "0", "0", "1", "0", [0, 0, 0])
    ],

    //------------------------4
    [
        new _pole("You are in the Wawel Castle", "41.gif", "rgb(255,176,141)", "0", "1", "0", "0", [0, 0, 0]),
        new _pole("You are inside a dragon's cave", "42.gif", "rgb(198,205,193)", "0", "1", "0", "1", [0, 0, 0]),
        new _pole("A perfect place to set a trap", "43.gif", "rgb(255,176,141)", "1", "0", "0", "1", [0, 0, 0]),
        new _pole("You are by the water mill", "44.gif", "rgb(255,190,99)", "0", "1", "0", "0", [21, 0, 0]),
        new _pole("You are at a main crossroad", "45.gif", "rgb(255,190,99)", "1", "1", "1", "1", [0, 0, 0]),
        new _pole("You are on a town street", "46.gif", "rgb(255,190,99)", "1", "1", "0", "1", [0, 0, 0]),
        new _pole("You are in a frontyard of your house", "47.gif", "rgb(255,190,99)", "1", "0", "1", "1", [0, 0, 0])
    ],

    //------------------------5
    [
         , , ,
        new _pole("You are by a swift stream", "54.gif", "rgb(108,181,242)", "0", "1", "0", "0", [0, 0, 0]),
        new _pole("You are on a street leading forest", "55.gif", "rgb(255,190,99)", "1", "0", "1", "1", [33, 0, 0]),
        new _pole("You are in a woodcutter's backyard", "56.gif", "rgb(255,190,99)", "0", "0", "1", "0", [0, 0, 0]),
        new _pole("You are in a shoemaker's house", "57.gif", "rgb(254,194,97)", "1", "0", "0", "0", [0, 0, 0])
    ],

    //------------------------6
    [
         , , ,
        new _pole("You are in a bleak funeral house", "64.gif", "rgb(254,194,97)", "0", "1", "0", "0", [24, 0, 0]),
        new _pole("You are on a path leading to the wood", "26 i 65.gif", "rgb(167,245,63)", "1", "1", "0", "1", [0, 0, 0]),
        new _pole("You are at the edge of a forest", "66.gif", "rgb(167,245,63)", "1", "1", "0", "1", [0, 0, 0]),
        new _pole("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", "0", "0", "0", "1", [0, 0, 0])
    ]
]

var reactions = [
    //gdy zebrane wszystkie przedmioty (6*OK), 43, 37, Your fake sheep is full of poison and ready to be eaten by the dragon
    //n - napis z timeoutem, l- przedmiot nieruszalny, d- martwy smok  - podmiana grafiki na lokacji , s - masz skórę smoka - trzeba sprawdzić, czy smok jest martwy, k- koniec gry

    new _reakcje(10, 56, 11, "You opened a tool shed and took an axe"),
    new _reakcje(11, 67, 12, "You cut sticks for sheeplegs"),
    new _reakcje(12, 43, 13, "You prepared legs for your fake sheep", "L", 1),
    new _reakcje(14, 34, 15, "The tavern owner paid you money"),
    new _reakcje(15, 37, 16, "The cooper sold you a new barrel"),
    new _reakcje(16, 43, 17, "You made a nice sheeptrunk", "L", 1),
    new _reakcje(18, 36, 19, "The butcher gave you wool"),
    new _reakcje(19, 43, 20, "You prepared skin for your fake sheep", "L", 1),
    new _reakcje(21, 57, 22, "You used your tools to make a rag"),
    new _reakcje(22, 43, 23, "You made a fake sheephead", "L", 1),
    new _reakcje(24, 11, 25, ["You are digging...", "and digging...", "That's enough sulphur for you"], "N", 1),
    new _reakcje(25, 43, 26, "You prepared a solid poison", "L"),
    new _reakcje(27, 21, 28, "You got a bucket full of tar"),
    new _reakcje(28, 43, 29, "You prepared a liquid poison", "L", 1),
    new _reakcje(37, 43, 30, ["The dragon noticed your gift...", "The dragon ate your sheep and died!"], "D"),
    new _reakcje(33, 43, 34, "You cut a piece of dragon's skin", "S"),
    new _reakcje(34, 57, 35, "You used your tools to make shoes"),
    new _reakcje(35, 41, 36, "The King is impressed by your shoes"),
    new _reakcje(36, 41, null, null, "K")
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
