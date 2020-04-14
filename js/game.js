var game = {
    gameIntro: function () {

        let intro = document.createElement("DIV")
        intro.id = "intro"
        $(document.body).append(intro)

        $(document).keydown(function skipIntro(e) {
            let keyCode = e.keyCode
            if (engine.pressedSpace(keyCode) || engine.pressedEnter(keyCode)) {
                $("#intro")?.remove()
            }
        })

        let introImage = document.createElement("IMG")
        introImage.id = "introImage"
        intro.appendChild(introImage)
        introImage.setAttribute("src", "img/czolowka.jpg")

        setTimeout(function () {
            introImage.setAttribute("src", "img/opis_A.jpg")


            setTimeout(function () {
                introImage.setAttribute("src", "img/opis_B.jpg")


                setTimeout(function () {
                    $("#intro")?.remove()

                }, INTRO_TIME)

            }, INTRO_TIME)

        }, INTRO_TIME)


    },
    start: function () {

        //----------konsola
        $("#gameConsole").blur()
        $("#gameConsole").keyup(function () {
                $("#gameConsole").val(function(i,val) {
                    return val.toUpperCase();
                })
                game.consoleTurnOn()
        })

    },
    consoleTurnOn: function () {
        var gameConsole = document.getElementById("gameConsole")
        gameConsole.onkeydown = function (e) {

            let keyDownNumber = e.which

            if (engine.pressedEnter(keyDownNumber) || engine.isUp(keyDownNumber) || engine.isDown(keyDownNumber) || engine.isLeft(keyDownNumber) || engine.isRight(keyDownNumber))
                logic.makeAction(keyDownNumber)
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
