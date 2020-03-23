var gra = {
    wstep: function () {
        var audio = document.getElementById("audio");
        //var audio = new Audio('audio/hejnal.mp3');
        var promise = document.getElementById("audio").play();

        if (promise !== undefined) {
            promise.then(_ => {
                audio.play();
            }).catch(error => {
                console.log("not working")
            });
        }

        var intro = document.createElement("DIV")
        intro.id = "intro"
        document.body.appendChild(intro)

        document.onkeydown = function (e) {
            var keyCode= e.keyCode
            if(pressedSpace(keyCode) || pressedEnter(keyCode))
                document.getElementById("intro").remove()
        }
        var img1 = document.createElement("IMG")
        img1.id = "img1"
        intro.appendChild(img1)
        img1.setAttribute("src", "materialy/img/czolowka.jpg")

        var introInterval =setTimeout(function () {
            img1.setAttribute("src", "materialy/img/opis_A.jpg")
        }, 5*1000)

        introInterval =setTimeout(function () {
            img1.setAttribute("src", "materialy/img/opis_B.jpg")

        }, 10*1000)

        introInterval =setTimeout(function () {
            document.getElementById("intro").remove()

        }, 15*1000)
    },
    end: function () {
        var div2 = document.createElement("DIV")
        div2.id = "end"
        document.body.appendChild(div2)


        var y = document.createElement("AUDIO");

        if (y.canPlayType("audio/mpeg")) {
            y.setAttribute("src", "audio/We_are_Number_One_Music.mp3");
        } else {
            y.setAttribute("src", "audio/We_are_Number_One_Music.ogg");
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
