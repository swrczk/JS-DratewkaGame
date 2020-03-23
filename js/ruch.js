var ruch = {
    pion: 3,
    poziom: 6,
    casesens: 0,
    ekwipunek: 0,
    kom: "",
    kamienie: 0,
    skin: 0,
    dragon: 0,
    text: "",
    komunikat: function () {
        var miejsce = document.getElementById("kom2")
        var miejsce2 = document.getElementById("gameConsole")
        miejsce.innerHTML = ruch.kom
        miejsce2.style.display = "none"
        setTimeout(function () {
            miejsce.innerHTML = "What's now?"
            miejsce2.style.display = "inline"
            document.getElementById("gameConsole").focus()
        }, 2000); //00
    },
    loadData: function () {
        setTimeout(function () {

            var k = document.getElementById("kn")
            k.style.display = "block"
            k = document.getElementById("ks")
            k.style.display = "block"
            k = document.getElementById("ke")
            k.style.display = "block"
            k = document.getElementById("kw")
            k.style.display = "block"

            var ob = places[ruch.pion][ruch.poziom]


            var miejsce = document.getElementById("nagl")
            miejsce.innerHTML = ob.tekst

            miejsce = document.getElementById("obr")
            miejsce.innerHTML = ""
            tlo = document.createElement("IMG")
            tlo.setAttribute("src", "img/" + ob.tlo)
            miejsce.appendChild(tlo)


            miejsce.style.backgroundColor = ob.kolor

            miejsce = document.getElementById("kom")
            var output = "You can go:"
            if (ob.north != 0) {
                output = output + " north"
                document.getElementById("kn").style.display = "none"
            }

            if (ob.east != 0) {
                if (ob.north != 0) {
                    output = output + ","
                }
                output = output + " east"
                document.getElementById("ke").style.display = "none"
            }

            if (ob.south != 0) {
                if (ob.north != 0 || ob.east != 0) {
                    output = output + ","
                }
                output = output + " south"
                document.getElementById("ks").style.display = "none"
            }

            if (ob.west != 0) {
                if (ob.north != 0 || ob.east != 0 || ob.south != 0) {
                    output = output + ","
                }
                output = output + " west"
                document.getElementById("kw").style.display = "none"
            }


            var pos_ekw = 0;
            for (var i = 0; i < ob.item.length; i++) {
                if (ob.item[i] != 0) {
                    pos_ekw++
                }
            }
            if (pos_ekw == 0) {
                var see = "You see nothing"
            } else {
                var see = "You see"
                for (var i = 0; i < ob.item.length; i++) {
                    if (ob.item[i] != 0) {
                        see = see + " " + items[ob.item[i] - 9].odmiana
                    }

                    if (ob.item[i + 1] != 0 && (i + 1) != ob.item.length) {
                        see = see + ","
                    }
                }
            }

            if (ruch.ekwipunek == 0)
                var carrying = "You are carrying nothing"
            else {
                var carrying = "You are carrying " + items[ruch.ekwipunek - 9].odmiana
            }

            miejsce.innerHTML = output + ". <br><br>" + see + ". <br><br>" + carrying + ". "
        }, 2000) //00   
    },
    startGame: function () {
        gameConsole.onkeydown = function (e) {

            var keyDownNumber = e.which
            var m = 0;
            var item = 0;

            if (pressedEnter(keyDownNumber) || isUp(keyDownNumber) || isDown(keyDownNumber) || isLeft(keyDownNumber) || isRight(keyDownNumber)) {
                var consoleArg = gameConsole.value.toUpperCase().trim()

                if (!consoleArg.includes(" ")) {
                    consoleArg = whichDirection(consoleArg, keyDownNumber)

                } else {
                    m = consoleArg.split(" ")

                    consoleArg = whichAction(m[0])
                    do {
                        item++
                        if (item == items.length) {
                            ruch.kom = "This item doesn't exist"
                            ruch.komunikat()
                            break;
                        }
                    } while (m[1] != items[item].nazwa && item <= items.length)

                }

                switch (consoleArg) {
                    case "V": //info
                        ruch.text = document.getElementById("kom").textContent
                        var v = document.getElementById("kom")
                        v.innerHTML = INSTRUCTION
                        v = document.getElementById("gameConsole")
                        v.style.visibility = "hidden"
                        v = document.getElementById("kom2")
                        v.style.visibility = "hidden"
                        setTimeout(function () {
                            document.body.onkeydown = function () {
                                var m = document.getElementById("kom2")
                                m.style.visibility = "visible"
                                m = document.getElementById("gameConsole")
                                m.style.visibility = "visible"
                                m = document.getElementById("kom")
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
                        ruch.text = document.getElementById("kom").textContent
                        var v = document.getElementById("kom")
                        v.innerHTML = LORE_INFO
                        v = document.getElementById("gameConsole")
                        v.style.visibility = "hidden"
                        v = document.getElementById("kom2")
                        v.style.visibility = "hidden"
                        setTimeout(function () {
                            document.body.onkeydown = function () {
                                var m = document.getElementById("kom2")
                                m.style.visibility = "visible"
                                m = document.getElementById("gameConsole")
                                m.style.visibility = "visible"
                                m = document.getElementById("kom")
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
                            ruch.kom = "You are going north..."
                            ruch.komunikat()
                            ruch.loadData()
                        } else {
                            ruch.kom = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "S":
                        if (places[ruch.pion][ruch.poziom].south == 1) {
                            ruch.pion++
                            ruch.kom = "You are going south..."
                            ruch.komunikat()
                            ruch.loadData()
                        } else {
                            ruch.kom = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "E":
                        if (places[ruch.pion][ruch.poziom].east == 1) {

                            ruch.kom = "You are going east..."
                            ruch.komunikat()
                            ruch.loadData()
                        } else {
                            ruch.kom = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "W":
                        if (places[ruch.pion][ruch.poziom].west == 1 && ruch.pion == 3 && ruch.poziom == 1 && ruch.dragon == 0) {
                            ruch.kom = "You can't go that way... "
                            var miejsce = document.getElementById("kom2")
                            var miejsce2 = document.getElementById("gameConsole")
                            miejsce.innerHTML = ruch.kom
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.kom = " The dragon sleeps in a cave!"
                                ruch.komunikat()
                            }, 2000)
                            break;
                        }
                        if (places[ruch.pion][ruch.poziom].west == 1) {
                            ruch.poziom--
                            ruch.kom = "You are going west..."
                            ruch.komunikat()
                            ruch.loadData()
                        } else {
                            ruch.kom = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;


                    case "T":

                        if (ruch.ekwipunek != 0) {
                            ruch.kom = "You are carying something"
                            ruch.komunikat()
                            break;
                        }


                        var tablica = places[ruch.pion][ruch.poziom].item.indexOf(item + 9);

                        if (tablica != -1) {
                            if (items[item].flaga == 0) {
                                ruch.kom = "You can't carry it"
                                ruch.komunikat()
                            } else {
                                ruch.ekwipunek = item + 9
                                places[ruch.pion][ruch.poziom].item[tablica] = 0
                                ruch.kom = "You are taking " + items[item].odmiana
                                ruch.komunikat()
                                ruch.loadData()
                            }
                        } else {
                            ruch.kom = "There isn't anything like that here"
                            ruch.komunikat()
                        }


                        break;

                    case "D":
                        var ekw_nazw = "";
                        for (var i = 0; i < items.length; i++) {
                            if (i == ruch.ekwipunek - 9) {
                                ekw_nazw = items[i].nazwa
                            }
                        }

                        if (ekw_nazw != m[1]) {
                            ruch.kom = "You are not carrying it"
                            ruch.komunikat()
                            break;
                        }

                        //czy nie ma 3 przedmiotow z flaga1
                        var ok = 0;
                        for (var i = 0; i < places[ruch.pion][ruch.poziom].item.length; i++) {
                            if (places[ruch.pion][ruch.poziom].item[i] != 0) {
                                if (items[places[ruch.pion][ruch.poziom].item[i] - 9].flaga == 1) {
                                    ok++
                                }
                            }
                        }

                        if (ruch.ekwipunek == 0) {
                            ruch.kom = "You are not carrying anything"
                            ruch.komunikat()
                            break;
                        }
                        if (ok == 3) {
                            ruch.kom = "You can't store any more here"
                            ruch.komunikat()
                            break;
                        }

                        var tablica = places[ruch.pion][ruch.poziom].item.indexOf(0);
                        if (tablica = -1) {
                            places[ruch.pion][ruch.poziom].item.push(ruch.ekwipunek)
                        } else
                            places[ruch.pion][ruch.poziom].item[tablica] = ruch.ekwipunek
                        ruch.kom = "You are about to drop " + items[ruch.ekwipunek - 9].odmiana
                        ruch.ekwipunek = 0;
                        ruch.komunikat()
                        ruch.loadData()
                        break;

                    case "U":


                        if (ruch.ekwipunek == 0) {
                            ruch.kom = "You are not carrying anything"
                            ruch.komunikat()
                            break;
                        }
                        if (items[ruch.ekwipunek - 9].nazwa != m[1]) {
                            ruch.kom = "You aren't carrying anything like that"
                            ruch.komunikat()
                            break;
                        }

                        var reakcja;
                        for (var i = 0; i < reactions.length; i++) {
                            if (ruch.ekwipunek == reactions[i].potrzebny)
                                reakcja = reactions[i]
                        }

                        var miejsce = ruch.pion * 10 + ruch.poziom + 11
                        if (reakcja.lokacja != miejsce) {
                            ruch.kom = "Nothing happened"
                            ruch.komunikat()
                            break;
                        }

                        if (reakcja.flaga == "K") {
                            game.end()
                            break;
                        }

                        if (item.flaga == "S") {
                            if (ruch.skin == 0) {
                                ruch.kom = "Nothing happened"
                                ruch.komunikat()
                                break;
                            }
                        }

                        if (reakcja.flaga == "N") {
                            ruch.kom = reakcja.komunikat[0]
                            var miejsce = document.getElementById("kom2")
                            var miejsce2 = document.getElementById("gameConsole")
                            miejsce.innerHTML = ruch.kom
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.kom = reakcja.komunikat[1]
                                var miejsce = document.getElementById("kom2")
                                var miejsce2 = document.getElementById("gameConsole")
                                miejsce.innerHTML = ruch.kom
                                miejsce2.style.display = "none"
                            }, 2000)
                            setTimeout(function () {
                                ruch.kom = reakcja.komunikat[2]
                                ruch.komunikat()
                            }, 4001)
                            setTimeout(function () {
                                ruch.ekwipunek = reakcja.wynik
                                ruch.kom = reakcja.komunikat
                                ruch.loadData()
                            }, 6002)
                            break;
                        }
                        ruch.ekwipunek = reakcja.wynik

                        if (reakcja.flaga == "L") {
                            ruch.kamienie++
                            places[ruch.pion][ruch.poziom].item.push(ruch.ekwipunek)
                            ruch.ekwipunek = 0
                            ruch.komunikat()

                            if (ruch.kamienie == 6) {
                                if (reakcja.lokacja == 43) {
                                    ruch.ekwipunek = 37
                                    ruch.kom = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                    for (var i = 0; i < places[ruch.pion][ruch.poziom].item.length; i++) {
                                        places[ruch.pion][ruch.poziom].item[i] = 0
                                    }
                                    var miejsce = document.getElementById("kom2")
                                    var miejsce2 = document.getElementById("gameConsole")
                                    miejsce.innerHTML = ruch.kom
                                    miejsce2.style.display = "none"
                                    setTimeout(function () {
                                        miejsce.innerHTML = "What's now?"
                                        miejsce2.style.display = "inline"
                                        document.getElementById("gameConsole").focus()
                                    }, 3500); //00
                                    ruch.loadData()
                                    break;

                                }
                            }
                        }
                        if (reakcja.flaga == "D") {
                            ruch.dragon++
                            places[3][2].tlo = "DS68.bmp"
                            places[ruch.pion][ruch.poziom].item[0] = ruch.ekwipunek
                            ruch.ekwipunek = 0
                            ruch.kom = reakcja.komunikat[0]
                            var miejsce = document.getElementById("kom2")
                            var miejsce2 = document.getElementById("gameConsole")
                            miejsce.innerHTML = ruch.kom
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.kom = reakcja.komunikat[1]
                                ruch.komunikat()
                                ruch.loadData()
                            }, 2000)
                            ruch.skin++
                            break;
                        }


                        ruch.kom = reakcja.komunikat
                        ruch.komunikat()
                        ruch.loadData()
                        break;

                    default:
                        ruch.kom = "Try another word or V for vocabulary"
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
