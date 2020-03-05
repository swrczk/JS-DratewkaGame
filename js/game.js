var gra = {
    wstep: function () {
        var div = document.createElement("DIV")
        div.id = "d"
        document.body.appendChild(div)


        var x = document.createElement("AUDIO");

        if (x.canPlayType("audio/mpeg")) {
            x.setAttribute("src", "materialy/audio/hejnal.mp3");
        } else {
            x.setAttribute("src", "materialy/audio/hejnal.ogg");
        }

        x.autoplay = true
        document.body.appendChild(x);

        var img1 = document.createElement("IMG")
        img1.id = "img1"
        div.appendChild(img1)
        img1.setAttribute("src", "materialy/img/czolowka.jpg")

        setTimeout(function () {
            img1.setAttribute("src", "materialy/img/opis_A.jpg")
        }, 29000)

        setTimeout(function () {
            img1.setAttribute("src", "materialy/img/opis_B.jpg")
        }, 44000)

        setTimeout(function () {
            document.getElementById("d").remove()
        }, 59000)
    },
    end: function () {
        var div2 = document.createElement("DIV")
        div2.id = "end"
        document.body.appendChild(div2)


        var y = document.createElement("AUDIO");

        if (y.canPlayType("audio/mpeg")) {
            y.setAttribute("src", "materialy/audio/We_are_Number_One_Music.mp3");
        } else {
            y.setAttribute("src", "materialy/audio/We_are_Number_One_Music.ogg");
        }

        y.autoplay = true
        y.loop = true
        document.body.appendChild(y);

        var div3 = document.createElement("DIV")
        div3.id = "end2"
        document.body.appendChild(div3)


        var img2 = document.createElement("IMG")
        img2.id = "img2"
        div3.appendChild(img2)
        img2.setAttribute("src", "materialy/img/git_gif.gif")

        var img1 = document.createElement("IMG")
        img1.id = "img1"
        div2.appendChild(img1)
        img1.setAttribute("src", "materialy/img/giphy.gif")


        setTimeout(function () {
            img1.setAttribute("src", "materialy/img/gif.gif")
        }, 500)



    },
    lok: places,
    przedmioty: reactions,
    item: items,
    plansza: function () {
        window.onload = function () {
            document.getElementById("kons").focus();
        }
        //----------pojemnik
        var poj = document.createElement("DIV")
        poj.id = "poj"

        //----------opis lokalizacji
        var nagl = document.createElement("DIV")
        nagl.id = "nagl"

        //----------obrazek lokalizacji
        var obr = document.createElement("DIV")
        obr.id = "obr"

        //----------miejsce na tekst od gry
        var kom = document.createElement("DIV")
        kom.id = "kom"


        //----------obrazek i komentarz
        var dane = document.createElement("DIV")
        dane.id = "dane"


        //----------div na kompas
        var kompas = document.createElement("DIV")
        kompas.id = "kompas"

        var kompas_img = document.createElement("IMG")
        kompas_img.setAttribute("src", "materialy/img/kompas.bmp")
        kompas_img.id = "kompas_img"

        //----------zasłaniacze na kompasie

        var komp_div = document.createElement("DIV")
        komp_div.id = "komp_div"
        var kn = document.createElement("DIV")
        kn.id = "kn"
        var ks = document.createElement("DIV")
        ks.id = "ks"
        var ke = document.createElement("DIV")
        ke.id = "ke"
        var kw = document.createElement("DIV")
        kw.id = "kw"
        komp_div.appendChild(kompas_img)
        komp_div.appendChild(kn)
        komp_div.appendChild(ks)
        komp_div.appendChild(ke)
        komp_div.appendChild(kw)



        //----------what's now
        var kom2 = document.createElement("DIV")
        kom2.id = "kom2"
        kom2.innerHTML = "What's now?"


        //----------konsola
        var kons = document.createElement("INPUT")
        kons.setAttribute("autofocus", "autofocus")
        kons.onblur = "this.focus()"
        kons.id = "kons"
        kons.onkeyup = function () {
            if (ruch.casesens == 0) {
                var x = document.getElementById("kons")
                x.value = x.value.toUpperCase()
                ruch.kierunki(x)
            }

        }


        poj.appendChild(nagl)
        dane.appendChild(obr)
        dane.appendChild(kom)
        poj.appendChild(dane)
        kompas.appendChild(komp_div)
        poj.appendChild(kompas)
        poj.appendChild(kom2)
        poj.appendChild(kons)
        document.body.appendChild(poj)

    }
}
