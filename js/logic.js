
var logic = {
    column: 3,
    row: 6,
    equipment: 0,
    gameDescription: "",
    collectedStones: 0,
    skin: 0,
    dragon: 0,
    text: "",
    startGame: function () {
        gameConsole.onkeydown = function (e) {

            let currentLoc = places[logic.column][logic.row]
            let keyDownNumber = e.which
            let command = 0;
            let item = 0;

            if (engine.pressedEnter(keyDownNumber) || engine.isUp(keyDownNumber) || engine.isDown(keyDownNumber) || engine.isLeft(keyDownNumber) || engine.isRight(keyDownNumber)) {
                let consoleArg = $("#gameConsole").val().toUpperCase().trim()

                if (!consoleArg.includes(" ")) {
                    consoleArg = engine.whichDirection(consoleArg, keyDownNumber)
                } else {
                    command = consoleArg.split(" ")

                    consoleArg = engine.whichAction(command[0])
                    do {
                        item++
                        if (item == items.length) {
                            logic.gameDescription = "This item doesn't exist"
                            engine.action()
                            break;
                        }
                    } while (command[1] != items[item].name)

                }

                let itemID;

                switch (consoleArg) {
                    case "V" :
                    case "G": //info || lore
                        logic.text = $("#gameText").text()
                        if (consoleArg == "V") $("#gameText").html(INSTRUCTION)
                        else $("#gameText").html(LORE_INFO)
                        $("#gameConsole").hide()
                        $("#commandResponse").hide()
                        engine.putPrevText()
                        break;

                    case "N":
                        if (currentLoc.isNorth()) {
                            logic.column--
                            logic.gameDescription = "You are going north..."
                            engine.action()
                            engine.loadData()
                        } else {
                            logic.gameDescription = "You can't go that way"
                            engine.action()
                        }
                        break;

                    case "S":
                        if (currentLoc.south == 1) {
                            logic.column++
                            logic.gameDescription = "You are going south..."
                            engine.action()
                            engine.loadData()
                        } else {
                            logic.gameDescription = "You can't go that way"
                            engine.action()
                        }
                        break;

                    case "E":
                        if (currentLoc.isEast()) {

                            logic.gameDescription = "You are going east..."
                            logic.row++
                            engine.action()
                            engine.loadData()
                        } else {
                            logic.gameDescription = "You can't go that way"
                            engine.action()
                        }
                        break;

                    case "W":
                        if (currentLoc.isWest() && logic.column == 3 && logic.row == 1 && logic.dragon == 0) {
                            logic.gameDescription = "You can't go that way... "
                            $("#commandResponse").html(logic.gameDescription)
                            $("#gameConsole").hide()
                            setTimeout(function () {
                                logic.gameDescription = " The dragon sleeps in a cave!"
                                engine.action()
                            }, ACTION_TIME)
                            break;
                        }
                        if (currentLoc.isWest()) {
                            logic.row--
                            logic.gameDescription = "You are going west..."
                            engine.action()
                            engine.loadData()
                        } else {
                            logic.gameDescription = "You can't go that way"
                            engine.action()
                        }
                        break;


                    case "T":
                        if (logic.equipment != 0) {
                            logic.gameDescription = "You are carying something"
                            engine.action()
                            break;
                        }

                        itemID = currentLoc.locItem.indexOf(item + ITEM_SHIFT);

                        if (itemID != -1) {
                            if (items[item].specialMark == 0) {
                                logic.gameDescription = "You can't carry it"
                                engine.action()
                            } else {
                                logic.equipment = item + ITEM_SHIFT
                                currentLoc.locItem[itemID] = 0
                                logic.gameDescription = "You are taking " + items[item].fullName
                                engine.action()
                                engine.loadData()
                            }
                        } else {
                            logic.gameDescription = "There isn't anything like that here"
                            engine.action()
                        }
                        break;

                    case "D":
                        let playerItem = "";
                        for (let i = 0; i < items.length; i++) {
                            if (i == logic.equipment - ITEM_SHIFT) {
                                playerItem = items[i].name
                            }
                        }

                        if (playerItem != command[1]) {
                            logic.gameDescription = "You are not carrying it"
                            engine.action()
                            break;
                        }

                        //czy nie ma 3 przedmiotow z flaga1
                        let specialItemLimit = 0;
                        for (let i = 0; i < currentLoc.locItem.length; i++) {
                            if (currentLoc.locItem[i] != 0) {
                                if (items[currentLoc.locItem[i] - ITEM_SHIFT].specialMark == 1) {
                                    specialItemLimit++
                                }
                            }
                        }

                        if (logic.equipment == 0) {
                            logic.gameDescription = "You are not carrying anything"
                            engine.action()
                            break;
                        }
                        if (specialItemLimit >= SPECIAL_ITEM_LIMIT) {
                            logic.gameDescription = "You can't store any more here"
                            engine.action()
                            break;
                        }

                        itemID = currentLoc.locItem.indexOf(0);
                        if (itemID = -1) {
                            currentLoc.locItem.push(logic.equipment)
                        } else
                            currentLoc.locItem[itemID] = logic.equipment
                        logic.gameDescription = "You are about to drop " + items[logic.equipment - ITEM_SHIFT].fullName
                        logic.equipment = 0;
                        engine.action()
                        engine.loadData()
                        break;

                    case "U":
                        if (logic.equipment == 0) {
                            logic.gameDescription = "You are not carrying anything"
                            engine.action()
                            break;
                        }
                        if (items[logic.equipment - ITEM_SHIFT].name != command[1]) {
                            logic.gameDescription = "You aren't carrying anything like that"
                            engine.action()
                            break;
                        }

                        let effect;
                        for (let i = 0; i < reactions.length; i++) {
                            if (logic.equipment == reactions[i].needed)
                                effect = reactions[i]
                        }

                        let currentLocData = logic.column * 10 + logic.row + 11
                        if (effect.location != currentLocData) {
                            logic.gameDescription = "Nothing happened"
                            engine.action()
                            break;
                        }

                        if (effect.specialMark == "K") {
                            game.end()
                            break;
                        }

                        if (item.specialMark == "S") {
                            if (logic.skin == 0) {
                                logic.gameDescription = "Nothing happened"
                                engine.action()
                                break;
                            }
                        }

                        if (effect.specialMark == "N") {
                            logic.gameDescription = effect.message[0]
                            $("#commandResponse").html(logic.gameDescription)
                            $("#gameConsole").hide()
                            setTimeout(function () {
                                logic.gameDescription = effect.message[1]
                                $("#commandResponse").html(logic.gameDescription)
                                $("#gameConsole").hide()
                                setTimeout(function () {
                                    logic.gameDescription = effect.message[2]
                                    engine.action()

                                    setTimeout(function () {
                                        logic.equipment = effect.result
                                        logic.gameDescription = effect.message
                                        engine.loadData()
                                    }, ACTION_TIME)
                                }, ACTION_TIME)
                            }, ACTION_TIME)
                            break;
                        }
                        logic.equipment = effect.result

                        if (effect.specialMark == "L") {
                            logic.collectedStones++
                            currentLoc.locItem.push(logic.equipment)
                            logic.equipment = 0
                            engine.action()

                            if (logic.collectedStones == 6) {
                                if (effect.location == 43) {
                                    logic.equipment = 37
                                    logic.gameDescription = POISON_SHEEP
                                    for (let i = 0; i < currentLoc.locItem.length; i++) {
                                        currentLoc.locItem[i] = 0
                                    }
                                    $("#commandResponse").html(logic.gameDescription)
                                    $("#gameConsole").hide()
                                    setTimeout(function () {
                                        $("#commandResponse").html("What's now?")
                                        $("#gameConsole").hide()
                                        $("#gameConsole").focus()
                                    }, ACTION_TIME);
                                    engine.loadData()
                                    break;

                                }
                            }
                        }
                        if (effect.specialMark == "D") {
                            logic.dragon++
                            places[3][2].locImg = "DS68.bmp"
                            currentLoc.locItem[0] = logic.equipment
                            logic.equipment = 0
                            logic.gameDescription = effect.message[0]
                            $("#commandResponse").html(logic.gameDescription)
                            $("#gameConsole").hide()
                            setTimeout(function () {
                                logic.gameDescription = effect.message[1]
                                engine.action()
                                engine.loadData()
                            }, ACTION_TIME)
                            logic.skin++
                            break;
                        }


                        logic.gameDescription = effect.message
                        engine.action()
                        engine.loadData()
                        break;

                    default:
                        logic.gameDescription = "Try another word or V for vocabulary"
                        engine.action()
                        break;
                }

                $("#gameConsole").val("")
            }

        }
    }
}

