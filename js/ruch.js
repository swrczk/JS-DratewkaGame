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
        var miejsce2 = document.getElementById("kons")
        miejsce.innerHTML = ruch.kom
        miejsce2.style.display = "none"
        setTimeout(function () {
            miejsce.innerHTML = "What's now?"
            miejsce2.style.display = "inline"
            document.getElementById("kons").focus()
        }, 2000); //00
    },
    ruch: function () {
        setTimeout(function () {

            var k = document.getElementById("kn")
            k.style.display = "block"
            k = document.getElementById("ks")
            k.style.display = "block"
            k = document.getElementById("ke")
            k.style.display = "block"
            k = document.getElementById("kw")
            k.style.display = "block"

            var ob = gra.lok[ruch.pion][ruch.poziom]


            var miejsce = document.getElementById("nagl")
            miejsce.innerHTML = ob.tekst

            miejsce = document.getElementById("obr")
            miejsce.innerHTML = ""
            tlo = document.createElement("IMG")
            tlo.setAttribute("src", "materialy/img/" + ob.tlo)
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
                        see = see + " " + gra.item[ob.item[i] - 9].odmiana
                    }

                    if (ob.item[i + 1] != 0 && (i + 1) != ob.item.length) {
                        see = see + ","
                    }
                }
            }

            if (ruch.ekwipunek == 0)
                var carrying = "You are carrying nothing"
            else {
                var carrying = "You are carrying " + gra.item[ruch.ekwipunek - 9].odmiana
            }

            miejsce.innerHTML = output + ". <br><br>" + see + ". <br><br>" + carrying + ". "
        }, 2000) //00   
    },
    kierunki: function () {
        kons.onkeydown = function (e) {

            var x = e.which
            var m = 0;
            var przedmiot = 0;

            if (x == 13 || x == 38 || x == 40 || x == 37 || x == 39) {
                var n = kons.value

                if (n == "NORTH" || x == 38) {
                    n = "N"
                }
                if (n == "SOUTH" || x == 40) {
                    n = "S"
                }
                if (n == "WEST" || x == 37) {
                    n = "W"
                }
                if (n == "EAST" || x == 39) {
                    n = "E"
                }

                if (n.split(" ").length == 2) {
                    m = n.split(" ")
                    if (m[0] == "TAKE" || m[0] == "T") {
                        n = "T"
                    }
                    if (m[0] == "DROP" || m[0] == "D") {
                        n = "D"
                    }
                    if (m[0] == "USE" || m[0] == "U") {
                        n = "U"
                    }
                    do {
                        przedmiot++
                        if (przedmiot == gra.item.length) {
                            ruch.kom = "This item doesn't exist"
                            ruch.komunikat()
                            break;
                        }
                    } while (m[1] != gra.item[przedmiot].nazwa && przedmiot <= gra.item.length)

                }

                switch (n) {
                    case "V":
                        ruch.text = document.getElementById("kom").textContent
                        var v = document.getElementById("kom")
                        v.innerHTML = "NORTH or N, SOUTH or S <br><br> WEST or W, EAST or E <br><br> TAKE (object) or T (object) <br><br> DROP (object) or D (object) <br><br> USE (object) or U (object) <br><br> USE (object) or U (object) <br><br><br> Press any key"
                        v = document.getElementById("kons")
                        v.style.visibility = "hidden"
                        v = document.getElementById("kom2")
                        v.style.visibility = "hidden"
                        setTimeout(function () {
                            document.body.onkeydown = function () {
                                var m = document.getElementById("kom2")
                                m.style.visibility = "visible"
                                m = document.getElementById("kons")
                                m.style.visibility = "visible"
                                m = document.getElementById("kom")
                                var teskt = ruch.text.split(".")
                                var output = teskt[0];
                                for (var i = 1; i < teskt.length; i++) {
                                    output = output + ".<br><br>" + teskt[i]
                                }
                                m.innerHTML = output
                                document.body.onkeydown = ""
                                document.getElementById("kons").focus()
                            }
                        }, 10)
                        break;

                    case "G":
                        ruch.text = document.getElementById("kom").textContent
                        var v = document.getElementById("kom")
                        v.innerHTML = "The  woodcutter lost  his home key... <br><br> The butcher likes fruit... The cooper <br><br> is greedy... Dratewka plans to make a <br><br> poisoned  bait for the dragon...  The <br><br> tavern owner is buying food  from the <br><br> pickers... Making a rag from a bag... <br><br><br> Press any key"
                        v = document.getElementById("kons")
                        v.style.visibility = "hidden"
                        v = document.getElementById("kom2")
                        v.style.visibility = "hidden"
                        setTimeout(function () {
                            document.body.onkeydown = function () {
                                var m = document.getElementById("kom2")
                                m.style.visibility = "visible"
                                m = document.getElementById("kons")
                                m.style.visibility = "visible"
                                m = document.getElementById("kom")
                                var teskt = ruch.text.split(".")
                                var output = teskt[0];
                                for (var i = 1; i < teskt.length; i++) {
                                    output = output + ".<br><br>" + teskt[i]
                                }
                                m.innerHTML = output
                                document.body.onkeydown = ""
                                document.getElementById("kons").focus()
                            }
                        }, 10)
                        break;

                    case "N":
                        if (gra.lok[ruch.pion][ruch.poziom].north == 1) {
                            ruch.pion--
                            ruch.kom = "You are going north..."
                            ruch.komunikat()
                            ruch.ruch()
                        } else {
                            ruch.kom = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "S":
                        if (gra.lok[ruch.pion][ruch.poziom].south == 1) {
                            ruch.pion++
                            ruch.kom = "You are going south..."
                            ruch.komunikat()
                            ruch.ruch()
                        } else {
                            ruch.kom = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "E":
                        if (gra.lok[ruch.pion][ruch.poziom].east == 1) {
                            ruch.poziom++
                            ruch.kom = "You are going east..."
                            ruch.komunikat()
                            ruch.ruch()
                        } else {
                            ruch.kom = "You can't go that way"
                            ruch.komunikat()
                        }
                        break;

                    case "W":
                        if (gra.lok[ruch.pion][ruch.poziom].west == 1 && ruch.pion == 3 && ruch.poziom == 1 && ruch.dragon == 0) {
                            ruch.kom = "You can't go that way... "
                            var miejsce = document.getElementById("kom2")
                            var miejsce2 = document.getElementById("kons")
                            miejsce.innerHTML = ruch.kom
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.kom = " The dragon sleeps in a cave!"
                                ruch.komunikat()
                            }, 2000)
                            break;
                        }
                        if (gra.lok[ruch.pion][ruch.poziom].west == 1) {
                            ruch.poziom--
                            ruch.kom = "You are going west..."
                            ruch.komunikat()
                            ruch.ruch()
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


                        var tablica = gra.lok[ruch.pion][ruch.poziom].item.indexOf(przedmiot + 9);

                        if (tablica != -1) {
                            if (gra.item[przedmiot].flaga == 0) {
                                ruch.kom = "You can't carry it"
                                ruch.komunikat()
                            } else {
                                ruch.ekwipunek = przedmiot + 9
                                gra.lok[ruch.pion][ruch.poziom].item[tablica] = 0
                                ruch.kom = "You are taking " + gra.item[przedmiot].odmiana
                                ruch.komunikat()
                                ruch.ruch()
                            }
                        } else {
                            ruch.kom = "There isn't anything like that here"
                            ruch.komunikat()
                        }


                        break;

                    case "D":
                        var ekw_nazw = "";
                        for (var i = 0; i < gra.item.length; i++) {
                            if (i == ruch.ekwipunek - 9) {
                                ekw_nazw = gra.item[i].nazwa
                            }
                        }

                        if (ekw_nazw != m[1]) {
                            ruch.kom = "You are not carrying it"
                            ruch.komunikat()
                            break;
                        }

                        //czy nie ma 3 przedmiotow z flaga1
                        var ok = 0;
                        for (var i = 0; i < gra.lok[ruch.pion][ruch.poziom].item.length; i++) {
                            if (gra.lok[ruch.pion][ruch.poziom].item[i] != 0) {
                                if (gra.item[gra.lok[ruch.pion][ruch.poziom].item[i] - 9].flaga == 1) {
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

                        var tablica = gra.lok[ruch.pion][ruch.poziom].item.indexOf(0);
                        if (tablica = -1) {
                            gra.lok[ruch.pion][ruch.poziom].item.push(ruch.ekwipunek)
                        } else
                            gra.lok[ruch.pion][ruch.poziom].item[tablica] = ruch.ekwipunek
                        ruch.kom = "You are about to drop " + gra.item[ruch.ekwipunek - 9].odmiana
                        ruch.ekwipunek = 0;
                        ruch.komunikat()
                        ruch.ruch()
                        break;

                    case "U":


                        if (ruch.ekwipunek == 0) {
                            ruch.kom = "You are not carrying anything"
                            ruch.komunikat()
                            break;
                        }
                        if (gra.item[ruch.ekwipunek - 9].nazwa != m[1]) {
                            ruch.kom = "You aren't carrying anything like that"
                            ruch.komunikat()
                            break;
                        }

                        var reakcja;
                        for (var i = 0; i < gra.przedmioty.length; i++) {
                            if (ruch.ekwipunek == gra.przedmioty[i].potrzebny)
                                reakcja = gra.przedmioty[i]
                        }

                        var miejsce = ruch.pion * 10 + ruch.poziom + 11
                        if (reakcja.lokacja != miejsce) {
                            ruch.kom = "Nothing happened"
                            ruch.komunikat()
                            break;
                        }

                        if (reakcja.flaga == "K") {
                            gra.end()
                            break;
                        }

                        if (przedmiot.flaga == "S") {
                            if (ruch.skin == 0) {
                                ruch.kom = "Nothing happened"
                                ruch.komunikat()
                                break;
                            }
                        }

                        if (reakcja.flaga == "N") {
                            ruch.kom = reakcja.komunikat[0]
                            var miejsce = document.getElementById("kom2")
                            var miejsce2 = document.getElementById("kons")
                            miejsce.innerHTML = ruch.kom
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.kom = reakcja.komunikat[1]
                                var miejsce = document.getElementById("kom2")
                                var miejsce2 = document.getElementById("kons")
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
                                ruch.ruch()
                            }, 6002)
                            break;
                        }
                        ruch.ekwipunek = reakcja.wynik

                        if (reakcja.flaga == "L") {
                            ruch.kamienie++
                            gra.lok[ruch.pion][ruch.poziom].item.push(ruch.ekwipunek)
                            ruch.ekwipunek = 0
                            ruch.komunikat()

                            if (ruch.kamienie == 6) {
                                if (reakcja.lokacja == 43) {
                                    ruch.ekwipunek = 37
                                    ruch.kom = "Your fake sheep is full of poison and ready to be eaten by the dragon"
                                    for (var i = 0; i < gra.lok[ruch.pion][ruch.poziom].item.length; i++) {
                                        gra.lok[ruch.pion][ruch.poziom].item[i] = 0
                                    }
                                    var miejsce = document.getElementById("kom2")
                                    var miejsce2 = document.getElementById("kons")
                                    miejsce.innerHTML = ruch.kom
                                    miejsce2.style.display = "none"
                                    setTimeout(function () {
                                        miejsce.innerHTML = "What's now?"
                                        miejsce2.style.display = "inline"
                                        document.getElementById("kons").focus()
                                    }, 3500); //00
                                    ruch.ruch()
                                    break;

                                }
                            }
                        }
                        if (reakcja.flaga == "D") {
                            ruch.dragon++
                            gra.lok[3][2].tlo = "DS68.bmp"
                            gra.lok[ruch.pion][ruch.poziom].item[0] = ruch.ekwipunek
                            ruch.ekwipunek = 0
                            ruch.kom = reakcja.komunikat[0]
                            var miejsce = document.getElementById("kom2")
                            var miejsce2 = document.getElementById("kons")
                            miejsce.innerHTML = ruch.kom
                            miejsce2.style.display = "none"
                            setTimeout(function () {
                                ruch.kom = reakcja.komunikat[1]
                                ruch.komunikat()
                                ruch.ruch()
                            }, 2000)
                            ruch.skin++
                            break;
                        }


                        ruch.kom = reakcja.komunikat
                        ruch.komunikat()
                        ruch.ruch()
                        break;

                    default:
                        ruch.kom = "Try another word or V for vocabulary"
                        ruch.komunikat()
                        break;
                }

                kons.value = ""
                ruch.casesens = 0
            }

            if (x == 32)
                ruch.casesens = 1
        }
    }
}
