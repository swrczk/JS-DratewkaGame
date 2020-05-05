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
    new _reaction(24, 43, 25, "You cut a piece of dragon's skin", "S"),
    new _reaction(25, 57, 26, "You used your tools to make shoes"),
    new _reaction(26, 41, 27, "The King is impressed by your shoes"),
    new _reaction(27, 41, null, null, "K")
]