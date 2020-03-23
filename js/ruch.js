var ruch = {
    pion: 3,
    poziom: 6,
    casesens: 0,
    ekwipunek: 0,
    gameDescription: "",
    kamienie: 0,
    skin: 0,
    dragon: 0,
    text: "",
    komunikat: function () {
        let comandResponse = document.getElementById("comandResponse")
        let gameConsole = document.getElementById("gameConsole")
        comandResponse.innerHTML = ruch.gameDescription
        gameConsole.style.display = "none"
        setTimeout(function () {
            comandResponse.innerHTML = "What's now?"
            gameConsole.style.display = "inline"
            document.getElementById("gameConsole").focus()
        }, 2000); //00
    },
    loadData: function () {
        setTimeout(function () {

            setCompassDefault()

            let currentLoc = places[ruch.pion][ruch.poziom]


            let currentLocData = document.getElementById("locTitle")
            currentLocData.innerHTML = currentLoc.locTitle

            currentLocData = document.getElementById("locImage")
            currentLocData.innerHTML = ""

            let currentLocImg = document.createElement("IMG")
            currentLocImg.setAttribute("src", "img/" + currentLoc.locImg)
            currentLocData.appendChild(currentLocImg)


            currentLocData.style.backgroundColor = currentLoc.locColor

            currentLocData = document.getElementById("gameDescription")
            var output = "You can go:"
            if (currentLoc.north != 0) {
                output = output + " north"
                document.getElementById("compassN").style.display = "none"
            }

            if (currentLoc.east != 0) {
                if (currentLoc.north != 0) {
                    output = output + ","
                }
                output = output + " east"
                document.getElementById("compassE").style.display = "none"
            }

            if (currentLoc.south != 0) {
                if (currentLoc.north != 0 || currentLoc.east != 0) {
                    output = output + ","
                }
                output = output + " south"
                document.getElementById("compassS").style.display = "none"
            }

            if (currentLoc.west != 0) {
                if (currentLoc.north != 0 || currentLoc.east != 0 || currentLoc.south != 0) {
                    output = output + ","
                }
                output = output + " west"
                document.getElementById("compassW").style.display = "none"
            }


            var pos_ekw = 0;
            for (var i = 0; i < currentLoc.item.length; i++) {
                if (currentLoc.item[i] != 0) {
                    pos_ekw++
                }
            }
            if (pos_ekw == 0) {
                var see = "You see nothing"
            } else {
                var see = "You see"
                for (var i = 0; i < currentLoc.item.length; i++) {
                    if (currentLoc.item[i] != 0) {
                        see = see + " " + items[currentLoc.item[i] - 9].fullName
                    }

                    if (currentLoc.item[i + 1] != 0 && (i + 1) != currentLoc.item.length) {
                        see = see + ","
                    }
                }
            }

            if (ruch.ekwipunek == 0)
                var carrying = "You are carrying nothing"
            else {
                var carrying = "You are carrying " + items[ruch.ekwipunek - 9].fullName
            }

            currentLocData.innerHTML = output + ". <br><br>" + see + ". <br><br>" + carrying + ". "
        }, 2000) //00   
    },
    startGame: function () {
        gameConsole.onkeydown = function (e) {

            let keyDownNumber = e.which
            var command = 0;
            let item = 0;

            if (pressedEnter(keyDownNumber) || isUp(keyDownNumber) || isDown(keyDownNumber) || isLeft(keyDownNumber) || isRight(keyDownNumber)) {
                var consoleArg = gameConsole.value.toUpperCase().trim()

                if (!consoleArg.includes(" ")) {
                    consoleArg = whichDirection(consoleArg, keyDownNumber)

                } else {
                    command = consoleArg.split(" ")

                    consoleArg = whichAction(command[0])
                    do {
                        item++
                        if (item == items.length) {
                            ruch.gameDescription = "This item doesn't exist"
                            ruch.komunikat()
                            break;
                        }
                    } while (command[1] != items[item].name && item <= items.length)

                }

                switch (consoleArg) {
                    case "V": //info
                        ruch.text = document.getElementById("gameDescription").textContent
                        var v = document.getElementById("gameDescription")
                        v.innerHTML = INSTRUCTION
                        v = document.getElementById("gameConsole")
                        v.style.visibility = "hidden"
                        v = document.getElementById("comandResponse")
                        v.style.visibility = "hidden"
                        setTimeout(function () {
                            document.body.onkeydown = function () {
                                var m = document.getElementById("comandResponse")
                                m.style.visibility = "visible"
                                m = document.getElementById("gameConsole")
                                m.style.visibility = "visible"
                                m = document.getElementById("gameDescription")
                                var teskt = ruch.text.split(".")
                                var output = teskt[0];
                                for (var i = 1; i < teskt.length; i++) {
                                    output = output + ".<br><br>" + teskt[i]
                                }
                                m.innerHTML = output
                                document.body.onkeydown = ""
                                document.getElementById("gameConsole").focus()
                            }
                        }, 10)
                        break;

                    case "G": //lore
                        ruch.text = document.getElementById("gameDescription").textContent
                        var v = document.getElementById("gameDescription")
                        v.innerHTML = LORE_INFO
                        v = document.getElementById("gameConsole")
                        v.style.visibility = "hidden"
                        v = document.getElementById("comandResponse")
                        v.style.visibility = "hidden"
                        setTimeout(function () {
                            document.body.onkeydown = function () {
                                var m = document.getElementById("comandResponse")
                                m.style.visibility = "visible"
                                m = document.getElementById("gameConsole")
                                m.style.visibility = "visible"
                                m = document.getElementById("gameDescription")
                                var teskt = ruch.text.split(".")
                                var output = teskt[0];
                                for (var i = 1; i < teskt.length; i++) {
                                    output = output + ".<br><br>" + teskt[i]
                                }
                                m.innerHTML = output
                                document.body.onkeydown = ""
                                document.getElementById("gameConsole").focus()
                            }
                        }, 10)
                        break;

                    case "N":
                        if (places[ruch.pion][ruch.poziom].north == 1) {
                            ruch.pion--
                            ruch.gameDescription = "You are going north..."
                            ruch.komunikat()
                            ruch.loadData()
                        } else {
                            ruch.gameDescription = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "S":
                        if (places[ruch.pion][ruch.poziom].south == 1) {
                            ruch.pion++
                            ruch.gameDescription = "You are going south..."
                            ruch.komunikat()
                            ruch.loadData()
                        } else {
                            ruch.gameDescription = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "E":
                        if (places[ruch.pion][ruch.poziom].east == 1) {

                            ruch.gameDescription = "You are going east..."
                            ruch.komunikat()
                            ruch.loadData()
                        } else {
                            ruch.gameDescription = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "W":
                        if (places[ruch.pion][ruch.poziom].west == 1 && ruch.pion == 3 && ruch.poziom == 1 && ruch.dragon == 0) {
                            ruch.gameDescription = "You can't go that way... "
                            var currentLocData = document.getElementById("comandResponse")
                            var miejsce2 = document.getElementById("gameConsole")
                            currentLocData.innerHTML = ruch.gameDescription
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.gameDescription = " The dragon sleeps in a cave!"
                                ruch.komunikat()
                            }, 2000)
                            break;
                        }
                        if (places[ruch.pion][ruch.poziom].west == 1) {
                            ruch.poziom--
                            ruch.gameDescription = "You are going west..."
                            ruch.komunikat()
                            ruch.loadData()
                        } else {
                            ruch.gameDescription = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;


                    case "T":

                        if (ruch.ekwipunek != 0) {
                            ruch.gameDescription = "You are carying something"
                            ruch.komunikat()
                            break;
                        }


                        var tablica = places[ruch.pion][ruch.poziom].item.indexOf(item + 9);

                        if (tablica != -1) {
                            if (items[item].specialMark == 0) {
                                ruch.gameDescription = "You can't carry it"
                                ruch.komunikat()
                            } else {
                                ruch.ekwipunek = item + 9
                                places[ruch.pion][ruch.poziom].item[tablica] = 0
                                ruch.gameDescription = "You are taking " + items[item].fullName
                                ruch.komunikat()
                                ruch.loadData()
                            }
                        } else {
                            ruch.gameDescription = "There isn't anything like that here"
                            ruch.komunikat()
                        }


                        break;

                    case "D":
                        var ekw_nazw = "";
                        for (var i = 0; i < items.length; i++) {
                            if (i == ruch.ekwipunek - 9) {
                                ekw_nazw = items[i].name
                            }
                        }

                        if (ekw_nazw != m[1]) {
                            ruch.gameDescription = "You are not carrying it"
                            ruch.komunikat()
                            break;
                        }

                        //czy nie ma 3 przedmiotow z flaga1
                        var ok = 0;
                        for (var i = 0; i < places[ruch.pion][ruch.poziom].item.length; i++) {
                            if (places[ruch.pion][ruch.poziom].item[i] != 0) {
                                if (items[places[ruch.pion][ruch.poziom].item[i] - 9].specialMark == 1) {
                                    ok++
                                }
                            }
                        }

                        if (ruch.ekwipunek == 0) {
                            ruch.gameDescription = "You are not carrying anything"
                            ruch.komunikat()
                            break;
                        }
                        if (ok == 3) {
                            ruch.gameDescription = "You can't store any more here"
                            ruch.komunikat()
                            break;
                        }

                        var tablica = places[ruch.pion][ruch.poziom].item.indexOf(0);
                        if (tablica = -1) {
                            places[ruch.pion][ruch.poziom].item.push(ruch.ekwipunek)
                        } else
                            places[ruch.pion][ruch.poziom].item[tablica] = ruch.ekwipunek
                        ruch.gameDescription = "You are about to drop " + items[ruch.ekwipunek - 9].fullName
                        ruch.ekwipunek = 0;
                        ruch.komunikat()
                        ruch.loadData()
                        break;

                    case "U":


                        if (ruch.ekwipunek == 0) {
                            ruch.gameDescription = "You are not carrying anything"
                            ruch.komunikat()
                            break;
                        }
                        if (items[ruch.ekwipunek - 9].name != m[1]) {
                            ruch.gameDescription = "You aren't carrying anything like that"
                            ruch.komunikat()
                            break;
                        }

                        var reakcja;
                        for (var i = 0; i < reactions.length; i++) {
                            if (ruch.ekwipunek == reactions[i].needed)
                                reakcja = reactions[i]
                        }

                        var currentLocData = ruch.pion * 10 + ruch.poziom + 11
                        if (reakcja.location != currentLocData) {
                            ruch.gameDescription = "Nothing happened"
                            ruch.komunikat()
                            break;
                        }

                        if (reakcja.specialMark == "K") {
                            game.end()
                            break;
                        }

                        if (item.specialMark == "S") {
                            if (ruch.skin == 0) {
                                ruch.gameDescription = "Nothing happened"
                                ruch.komunikat()
                                break;
                            }
                        }

                        if (reakcja.specialMark == "N") {
                            ruch.gameDescription = reakcja.komunikat[0]
                            var currentLocData = document.getElementById("comandResponse")
                            var miejsce2 = document.getElementById("gameConsole")
                            currentLocData.innerHTML = ruch.gameDescription
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.gameDescription = reakcja.komunikat[1]
                                var currentLocData = document.getElementById("comandResponse")
                                var miejsce2 = document.getElementById("gameConsole")
                                currentLocData.innerHTML = ruch.gameDescription
                                miejsce2.style.display = "none"
                            }, 2000)
                            setTimeout(function () {
                                ruch.gameDescription = reakcja.komunikat[2]
                                ruch.komunikat()
                            }, 4001)
                            setTimeout(function () {
                                ruch.ekwipunek = reakcja.result
                                ruch.gameDescription = reakcja.komunikat
                                ruch.loadData()
                            }, 6002)
                            break;
                        }
                        ruch.ekwipunek = reakcja.result

                        if (reakcja.specialMark == "L") {
                            ruch.kamienie++
                            places[ruch.pion][ruch.poziom].item.push(ruch.ekwipunek)
                            ruch.ekwipunek = 0
                            ruch.komunikat()

                            if (ruch.kamienie == 6) {
                                if (reakcja.location == 43) {
                                    ruch.ekwipunek = 37
                                    ruch.gameDescription = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                    for (var i = 0; i < places[ruch.pion][ruch.poziom].item.length; i++) {
                                        places[ruch.pion][ruch.poziom].item[i] = 0
                                    }
                                    var currentLocData = document.getElementById("comandResponse")
                                    var miejsce2 = document.getElementById("gameConsole")
                                    currentLocData.innerHTML = ruch.gameDescription
                                    miejsce2.style.display = "none"
                                    setTimeout(function () {
                                        currentLocData.innerHTML = "What's now?"
                                        miejsce2.style.display = "inline"
                                        document.getElementById("gameConsole").focus()
                                    }, 3500); //00
                                    ruch.loadData()
                                    break;

                                }
                            }
                        }
                        if (reakcja.specialMark == "D") {
                            ruch.dragon++
                            places[3][2].locImg = "DS68.bmp"
                            places[ruch.pion][ruch.poziom].item[0] = ruch.ekwipunek
                            ruch.ekwipunek = 0
                            ruch.gameDescription = reakcja.komunikat[0]
                            var currentLocData = document.getElementById("comandResponse")
                            var miejsce2 = document.getElementById("gameConsole")
                            currentLocData.innerHTML = ruch.gameDescription
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.gameDescription = reakcja.komunikat[1]
                                ruch.komunikat()
                                ruch.loadData()
                            }, 2000)
                            ruch.skin++
                            break;
                        }


                        ruch.gameDescription = reakcja.komunikat
                        ruch.komunikat()
                        ruch.loadData()
                        break;

                    default:
                        ruch.gameDescription = "Try another word or V for vocabulary"
                        ruch.komunikat()
                        break;
                }

                gameConsole.value = ""
                ruch.casesens = 0
            }

            if (pressedSpace(keyDownNumber))
                ruch.casesens = 1
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

function setCompassDefault(){
    document.getElementById("compassN").style.display = "block"
    document.getElementById("compassS").style.display = "block"
    document.getElementById("compassE").style.display = "block"
    document.getElementById("compassW").style.display = "block"
}