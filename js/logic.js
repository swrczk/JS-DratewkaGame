var logic = {
    pion: 3,
    poziom: 6,
    casesens: 0,
    equipment: 0,
    gameDescription: "",
    kamienie: 0,
    skin: 0,
    dragon: 0,
    text: "",
    action: function () {
        let commandResponse = document.getElementById("commandResponse")
        let gameConsole = document.getElementById("gameConsole")
        commandResponse.innerHTML = logic.gameDescription
        gameConsole.style.display = "none"
        setTimeout(function () {
            commandResponse.innerHTML = "What's now?"
            gameConsole.style.display = "inline"
            document.getElementById("gameConsole").focus()
        }, 2000); //00
    },
    loadData: function () {
        setTimeout(function () {

            setCompassDefault()

            let currentLoc = places[logic.pion][logic.poziom]

            setCurrentLocImg(currentLoc)

            let currentLocData = document.getElementById("gameText")
            let locDescription = "You can go:"

            if (currentLoc.isNorth()) {
                locDescription += " north"
                document.getElementById("compassN").style.display = "none"
            }
            if (currentLoc.isEast()) {
                if (currentLoc.isNorth()) {
                    locDescription += ","
                }
                locDescription += " east"
                document.getElementById("compassE").style.display = "none"
            }
            if (currentLoc.isSouth()) {
                if (currentLoc.isNorth() || currentLoc.isEast()) {
                    locDescription += ","
                }
                locDescription += " south"
                document.getElementById("compassS").style.display = "none"
            }
            if (currentLoc.isWest()) {
                if (currentLoc.isNorth() || currentLoc.isEast() || currentLoc.isSouth()) {
                    locDescription += ","
                }
                locDescription += " west"
                document.getElementById("compassW").style.display = "none"
            }


            let availableItems = 0;
            for (let i = 0; i < currentLoc.locItem.length; i++) {
                if (currentLoc.locItem[i] != 0) {
                    availableItems++
                }
            }
            let availableItemsNames;
            if (availableItems == 0) {
                availableItemsNames = "You see nothing"
            } else {
                availableItemsNames = "You see"
                for (let i = 0; i < currentLoc.locItem.length; i++) {
                    if (currentLoc.locItem[i] != 0) {
                        availableItemsNames += " " + items[currentLoc.locItem[i] - ITEM_SHIFT].fullName
                    }

                    if (currentLoc.locItem[i + 1] != 0 && (i + 1) != currentLoc.locItem.length) {
                        availableItemsNames += ","
                    }
                }
            }
            let carrying;
            if (logic.equipment == 0)
                carrying = "You are carrying nothing"
            else {
                carrying = "You are carrying " + items[logic.equipment - ITEM_SHIFT].fullName
            }

            currentLocData.innerHTML = locDescription + ". <br><br>" + availableItemsNames + ". <br><br>" + carrying + ". "
        }, ACTION_TIME)
    },
    startGame: function () {
        gameConsole.onkeydown = function (e) {


            let currentLoc = places[logic.pion][logic.poziom]
            let keyDownNumber = e.which
            let command = 0;
            let item = 0;

            if (pressedEnter(keyDownNumber) || isUp(keyDownNumber) || isDown(keyDownNumber) || isLeft(keyDownNumber) || isRight(keyDownNumber)) {
                let consoleArg = gameConsole.value.toUpperCase().trim()

                if (!consoleArg.includes(" ")) {
                    consoleArg = whichDirection(consoleArg, keyDownNumber)

                } else {
                    command = consoleArg.split(" ")

                    consoleArg = whichAction(command[0])
                    do {
                        item++
                        if (item == items.length) {
                            logic.gameDescription = "This item doesn't exist"
                            logic.action()
                            break;
                        }
                    } while (command[1] != items[item].name && item <= items.length)

                }

                let gameText = document.getElementById("gameText")
                let commandResponse = document.getElementById("commandResponse")
                let itemID;

                function putPrevText() {

                    setTimeout(function () {
                        document.body.onkeydown = function () {

                            commandResponse.style.visibility = "visible"
                            gameConsole.style.visibility = "visible"
                            let prevText = logic.text.split(".")
                            let locDescription = prevText[0];
                            for (let i = 1; i < prevText.length; i++) {
                                locDescription += ".<br><br>" + prevText[i]
                            }
                            gameText.innerHTML = locDescription
                            document.body.onkeydown = ""
                            document.getElementById("gameConsole").focus()
                        }
                    }, SAVE_TIME)
                }

                switch (consoleArg) {
                    case "V": //info
                        logic.text = document.getElementById("gameText").textContent
                        gameText.innerHTML = INSTRUCTION
                        gameConsole.style.visibility = "hidden"
                        commandResponse.style.visibility = "hidden"
                        putPrevText()
                        break;

                    case "G": //lore
                        logic.text = document.getElementById("gameText").textContent
                        gameText.innerHTML = LORE_INFO
                        gameConsole.style.visibility = "hidden"
                        commandResponse.style.visibility = "hidden"
                        putPrevText()
                        break;

                    case "N":
                        if (currentLoc.isNorth()) {
                            logic.pion--
                            logic.gameDescription = "You are going north..."
                            logic.action()
                            logic.loadData()
                        } else {
                            logic.gameDescription = "You can't go that way"
                            logic.action()
                        }
                        break;

                    case "S":
                        if (currentLoc.south == 1) {
                            logic.pion++
                            logic.gameDescription = "You are going south..."
                            logic.action()
                            logic.loadData()
                        } else {
                            logic.gameDescription = "You can't go that way"
                            logic.action()
                        }
                        break;

                    case "E":
                        if (currentLoc.isEast()) {

                            logic.gameDescription = "You are going east..."
                            logic.poziom++
                            logic.action()
                            logic.loadData()
                        } else {
                            logic.gameDescription = "You can't go that way"
                            logic.action()
                        }
                        break;

                    case "W":
                        if (currentLoc.isWest() && logic.pion == 3 && logic.poziom == 1 && logic.dragon == 0) {
                            logic.gameDescription = "You can't go that way... "
                            commandResponse.innerHTML = logic.gameDescription
                            gameConsole.style.display = "none"
                            setTimeout(function () {
                                logic.gameDescription = " The dragon sleeps in a cave!"
                                logic.action()
                            }, 2000)
                            break;
                        }
                        if (currentLoc.isWest()) {
                            logic.poziom--
                            logic.gameDescription = "You are going west..."
                            logic.action()
                            logic.loadData()
                        } else {
                            logic.gameDescription = "You can't go that way"
                            logic.action()
                        }
                        break;


                    case "T":
                        if (logic.equipment != 0) {
                            logic.gameDescription = "You are carying something"
                            logic.action()
                            break;
                        }
                        
                        itemID = currentLoc.locItem.indexOf(item + ITEM_SHIFT);

                        if (itemID != -1) {
                            if (items[item].specialMark == 0) {
                                logic.gameDescription = "You can't carry it"
                                logic.action()
                            } else {
                                logic.equipment = item + ITEM_SHIFT
                                currentLoc.locItem[itemID] = 0
                                logic.gameDescription = "You are taking " + items[item].fullName
                                logic.action()
                                logic.loadData()
                            }
                        } else {
                            logic.gameDescription = "There isn't anything like that here"
                            logic.action()
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
                            logic.action()
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
                            logic.action()
                            break;
                        }
                        if (specialItemLimit >= SPECIAL_ITEM_LIMIT) {
                            logic.gameDescription = "You can't store any more here"
                            logic.action()
                            break;
                        }

                        itemID = currentLoc.locItem.indexOf(0);
                        if (itemID = -1) {
                            currentLoc.locItem.push(logic.equipment)
                        } else
                            currentLoc.locItem[itemID] = logic.equipment
                        logic.gameDescription = "You are about to drop " + items[logic.equipment - ITEM_SHIFT].fullName
                        logic.equipment = 0;
                        logic.action()
                        logic.loadData()
                        break;

                    case "U":
                        if (logic.equipment == 0) {
                            logic.gameDescription = "You are not carrying anything"
                            logic.action()
                            break;
                        }
                        if (items[logic.equipment - ITEM_SHIFT].name != command[1]) {
                            logic.gameDescription = "You aren't carrying anything like that"
                            logic.action()
                            break;
                        }

                        let effect;
                        for (var i = 0; i < reactions.length; i++) {
                            if (logic.equipment == reactions[i].needed)
                                effect = reactions[i]
                        }

                        let currentLocData = logic.pion * 10 + logic.poziom + 11
                        if (effect.location != currentLocData) {
                            logic.gameDescription = "Nothing happened"
                            logic.action()
                            break;
                        }

                        if (effect.specialMark == "K") {
                            game.end()
                            break;
                        }

                        if (item.specialMark == "S") {
                            if (logic.skin == 0) {
                                logic.gameDescription = "Nothing happened"
                                logic.action()
                                break;
                            }
                        }

                        if (effect.specialMark == "N") {
                            logic.gameDescription = effect.komunikat[0]
                            commandResponse.innerHTML = logic.gameDescription
                            gameConsole.style.display = "none"
                            setTimeout(function () {
                                logic.gameDescription = effect.komunikat[1]
                                commandResponse.innerHTML = logic.gameDescription
                                gameConsole.style.display = "none"
                            }, 2000)
                            setTimeout(function () {
                                logic.gameDescription = effect.komunikat[2]
                                logic.action()
                            }, 4001)
                            setTimeout(function () {
                                logic.equipment = effect.result
                                logic.gameDescription = effect.komunikat
                                logic.loadData()
                            }, 6002)
                            break;
                        }
                        logic.equipment = effect.result

                        if (effect.specialMark == "L") {
                            logic.kamienie++
                            currentLoc.locItem.push(logic.equipment)
                            logic.equipment = 0
                            logic.action()

                            if (logic.kamienie == 6) {
                                if (effect.location == 43) {
                                    logic.equipment = 37
                                    logic.gameDescription = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                    for (let i = 0; i < currentLoc.locItem.length; i++) {
                                        currentLoc.locItem[i] = 0
                                    }
                                    commandResponse.innerHTML = logic.gameDescription
                                    gameConsole.style.display = "none"
                                    setTimeout(function () {
                                        commandResponse.innerHTML = "What's now?"
                                        gameConsole.style.display = "inline"
                                        document.getElementById("gameConsole").focus()
                                    }, 3500); //00
                                    logic.loadData()
                                    break;

                                }
                            }
                        }
                        if (effect.specialMark == "D") {
                            logic.dragon++
                            places[3][2].locImg = "DS68.bmp"
                            currentLoc.locItem[0] = logic.equipment
                            logic.equipment = 0
                            logic.gameDescription = effect.komunikat[0]
                            commandResponse.innerHTML = logic.gameDescription
                            gameConsole.style.display = "none"
                            setTimeout(function () {
                                logic.gameDescription = effect.komunikat[1]
                                logic.action()
                                logic.loadData()
                            }, 2000)
                            logic.skin++
                            break;
                        }


                        logic.gameDescription = effect.komunikat
                        logic.action()
                        logic.loadData()
                        break;

                    default:
                        logic.gameDescription = "Try another word or V for vocabulary"
                        logic.action()
                        break;
                }

                gameConsole.value = ""
                logic.casesens = 0
            }

            if (pressedSpace(keyDownNumber))
                logic.casesens = 1
        };
    }
}


function isUp(number) {
    if (number === 38) return true
    else false
}

function isDown(number) {
    if (number === 40) return true
    else false
}

function isLeft(number) {
    if (number === 37) return true
    else false
}

function isRight(number) {
    if (number === 39) return true
    else false
}

function pressedEnter(number) {
    if (number === 13) return true
    else false
}

function pressedSpace(number) {
    if (number === 32) return true
    else false
}

function whichDirection(consoleArg, keyNumber) {
    if (consoleArg.length === 1)
        return consoleArg

    if (consoleArg === "NORTH" || isUp(keyNumber)) {
        return "N"
    }
    if (consoleArg === "SOUTH" || isDown(keyNumber)) {
        return "S"
    }
    if (consoleArg === "WEST" || isLeft(keyNumber)) {
        return "W"
    }
    if (consoleArg === "EAST" || isRight(keyNumber)) {
        return "E"
    }
}

function whichAction(command) {
    if (command.length === 1)
        return command
    switch (command) {
        case "TAKE" :
            return "T"
        case "DROP" :
            return "D"
        case "USE" :
            return "U"
    }
}

function setCompassDefault() {
    document.getElementById("compassN").style.display = "block"
    document.getElementById("compassS").style.display = "block"
    document.getElementById("compassE").style.display = "block"
    document.getElementById("compassW").style.display = "block"
}

function setCurrentLocImg(currentLoc) {

    let currentLocData = document.getElementById("locTitle")
    currentLocData.innerHTML = currentLoc.locTitle

    currentLocData = document.getElementById("locImage")
    currentLocData.innerHTML = ""

    let currentLocImg = document.createElement("IMG")
    currentLocImg.setAttribute("src", "img/" + currentLoc.locImg)
    currentLocData.appendChild(currentLocImg)


    currentLocData.style.backgroundColor = currentLoc.locColor
}