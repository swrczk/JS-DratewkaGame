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

        //----------konsola
        var kons = document.getElementById("kons")
        kons.onblur = "this.focus()"
        kons.onkeyup = function () {
            if (ruch.casesens == 0) {
                var x = document.getElementById("kons")
                x.value = x.value.toUpperCase()
                ruch.kierunki(x)
            }

        }

    }
}
