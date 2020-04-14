var logic = {
    instance: 36,
    equipment: 0,
    gameDescription: "",
    collectedStones: 0,
    skin: 0,
    dragon: 0,
    text: "",
    startGame: function () {
        var gameConsole = document.getElementById("gameConsole")
        gameConsole.onkeydown = function (e) {

            let keyDownNumber = e.which

            if (engine.pressedEnter(keyDownNumber) || engine.isUp(keyDownNumber) || engine.isDown(keyDownNumber) || engine.isLeft(keyDownNumber) || engine.isRight(keyDownNumber))
                logic.makeAction(keyDownNumber)
        }
    },
    makeAction: function (keyDownNumber) {
        let currentLoc = places[Math.floor(logic.instance / 10)][logic.instance % 10]
        let command = 0;
        let calledItemID = 0;
        let consoleArg = $("#gameConsole").val().toUpperCase().trim()

        if (!consoleArg.includes(" ")) {
            consoleArg = engine.whichDirection(consoleArg, keyDownNumber)
        } else {
            command = consoleArg.split(" ")

            consoleArg = engine.whichAction(command[0])

            calledItemID = engine.getItemID(command[1])

        }


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
                    logic.instance -= 10
                    logic.gameDescription = "You are going north..."
                    engine.loadData()
                } else {
                    logic.gameDescription = "You can't go that way"
                }
                engine.displayAction()
                break;

            case "S":
                if (currentLoc.isSouth()) {
                    logic.instance += 10
                    logic.gameDescription = "You are going south..."
                    engine.loadData()
                } else {
                    logic.gameDescription = "You can't go that way"
                }
                engine.displayAction()
                break;

            case "E":
                if (currentLoc.isEast()) {
                    logic.instance += 1
                    logic.gameDescription = "You are going east..."
                    engine.loadData()
                } else {
                    logic.gameDescription = "You can't go that way"
                }
                engine.displayAction()
                break;

            case "W":
                if (currentLoc.isWest() && logic.instance == 31 && logic.dragon == 0) {
                    logic.gameDescription = "You can't go that way... "
                    $("#commandResponse").html(logic.gameDescription)
                    $("#gameConsole").hide()
                    setTimeout(function () {
                        logic.gameDescription = " The dragon sleeps in a cave!"
                    }, ACTION_TIME)
                }
                if (currentLoc.isWest()) {
                    logic.instance -= 1
                    logic.gameDescription = "You are going west..."
                    engine.loadData()
                } else {
                    logic.gameDescription = "You can't go that way"
                }
                engine.displayAction()
                break;


            case "T":
                if (engine.emptyEquipment()) {

                    if (currentLoc.locItem.indexOf(calledItemID) != -1) {
                        if (items[calledItemID].specialMark == 0) {
                            logic.gameDescription = "You can't carry it"
                        } else {
                            logic.equipment = calledItemID
                            currentLoc.locItem.splice(currentLoc.locItem.indexOf(calledItemID), 1)
                            logic.gameDescription = "You are taking " + items[calledItemID].fullName
                            engine.loadData()
                        }
                    } else {
                        logic.gameDescription = "There isn't anything like that here"
                    }
                }
                engine.displayAction()
                break;

            case "D":

                if (!engine.emptyEquipment()) {
                    let playerItem = "";
                    for (let i = 0; i < items.length; i++) {
                        if (i == logic.equipment) {
                            playerItem = items[i].name
                        }
                    }

                    if (!playerItem || playerItem != command[1]) {
                        logic.gameDescription = "You are not carrying it"
                    } else {
                        //czy nie ma 3 przedmiotow z flaga1
                        let specialItemLimit = 0;
                        for (let i = 0; i < currentLoc.locItem.length; i++) {
                            if (currentLoc.locItem[i] != 0) {
                                if (items[currentLoc.locItem[i]].specialMark == 1) {
                                    specialItemLimit++
                                }
                            }
                        }

                        if (specialItemLimit < SPECIAL_ITEM_LIMIT) {
                            currentLoc.locItem.push(logic.equipment)
                            logic.gameDescription = "You are about to drop " + items[logic.equipment].fullName
                            logic.equipment = 0
                            engine.loadData()
                        } else
                            logic.gameDescription = "You can't store any more here"
                    }
                }
                engine.displayAction()
                break;

            case "U":
                if (logic.equipment == 0) {
                    logic.gameDescription = "You are not carrying anything"
                } else if (items[logic.equipment].name != command[1]) {
                    logic.gameDescription = "You aren't carrying anything like that"
                } else {
                    let effect;
                    for (let i = 0; i < reactions.length; i++) {
                        if (logic.equipment == reactions[i].needed)
                            effect = reactions[i]
                    }

                    let currentLocData = logic.instance + 11
                    if (!effect || effect.location != currentLocData) {
                        logic.gameDescription = "Nothing happened"
                        engine.displayAction()
                        break;
                    }

                    if (effect.specialMark == "K") {
                        game.end()
                        break;
                    }

                    if (effect.specialMark == "S") {
                        if (logic.skin == 0) {
                            logic.gameDescription = "Nothing happened"
                            engine.displayAction()
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
                                engine.displayAction()

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
                        engine.displayAction()

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
                                    $("#gameConsole").show()
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
                            engine.displayAction()
                            engine.loadData()
                        }, ACTION_TIME)
                        logic.skin++
                        break;
                    }


                    logic.gameDescription = effect.message
                    engine.loadData()
                }
                engine.displayAction()
                break;

            default:
                logic.gameDescription = "Try another word or V for vocabulary"
                engine.displayAction()
                break;
        }

        $("#gameConsole").val("")
    }
}

