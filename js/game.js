var game = {
    gameIntro: function () {
        let audio = document.getElementById("audio");
        //var audio = new Audio('audio/hejnal.mp3');
        let promise = document.getElementById("audio").play();

        if (promise !== undefined) {
            promise.then(_ => {
                audio.play();
            }).catch(error => {
                console.log("music is not working")
            });
        }

        let intro = document.createElement("DIV")
        intro.id = "intro"
        document.body.appendChild(intro)

        document.onkeydown = function skipIntro(e) {
            let keyCode = e.keyCode
            if (pressedSpace(keyCode) || pressedEnter(keyCode)) {
                document.getElementById("intro")?.remove()
            }
        }

        let introImage = document.createElement("IMG")
        introImage.id = "introImage"
        intro.appendChild(introImage)
        introImage.setAttribute("src", "img/czolowka.jpg")

        setTimeout(function () {
            introImage.setAttribute("src", "img/opis_A.jpg")


            setTimeout(function () {
                introImage.setAttribute("src", "img/opis_B.jpg")


                setTimeout(function () {
                    document.getElementById("intro")?.remove()

                }, 5 * 1000)

            }, 5 * 1000)

        }, 5 * 1000)


    },
    start: function () {
        window.onload = function () {
            document.getElementById("gameConsole").focus();

        }

        //----------konsola
        var gameConsole = document.getElementById("gameConsole")
        gameConsole.onblur = "this.focus()"
        gameConsole.onkeyup = function () {
            if (ruch.casesens == 0) {
                gameConsole.value = gameConsole.value.toUpperCase()
                ruch.startGame(gameConsole)
            }
        }

    },
    end: function () {
        let endDiv = document.createElement("DIV");
        endDiv.id = "end"
        document.body.appendChild(endDiv)


        let audio = document.createElement("AUDIO");

        if (audio.canPlayType("audio/mpeg")) {
            audio.setAttribute("src", "audio/We_are_Number_One_Music.mp3");
        } else {
            audio.setAttribute("src", "audio/We_are_Number_One_Music.ogg");
        }

        audio.autoplay = true
        audio.loop = true
        document.body.appendChild(audio);

        let endContainer = document.createElement("DIV")
        endContainer.id = "endContainer"
        document.body.appendChild(endContainer)


        let endBackgroundImg = document.createElement("IMG")
        endBackgroundImg.id = "endBackgroundImg"
        endContainer.appendChild(endBackgroundImg)
        endBackgroundImg.setAttribute("src", "img/git_gif.gif")

        let endExplosionImg = document.createElement("IMG")
        endExplosionImg.id = "endExplosionImg"
        endDiv.appendChild(endExplosionImg)
        endExplosionImg.setAttribute("src", "img/giphy.gif")


        setTimeout(function () {
            endExplosionImg.setAttribute("src", "img/gif.gif")
        }, 0.5 * 1000)


    }
}
