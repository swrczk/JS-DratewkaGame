var engine = (function () {
    var gameDescription = ""
    var text = ""

    function displayAction() {
        $("#commandResponse").html(engine.gameDescription)
        $("#gameConsole").hide()

        setTimeout(function () {
            engine.defaultConsole()
        }, ACTION_TIME)
    }

    function loadData() {
        setTimeout(function () {
            let currentLoc = places[Math.floor(player.instance / 10)][player.instance % 10]
            engine.setCompassDefault()
            engine.setCurrentLocImg(currentLoc)

            let locDescription = ""

            if (currentLoc.isNorth()) {
                locDescription += " north"
                $("#compassN").hide()
            }
            if (currentLoc.isEast()) {
                if (locDescription.trim()) locDescription += ","
                locDescription += " east"
                $("#compassE").hide()
            }
            if (currentLoc.isSouth()) {
                if (locDescription.trim()) locDescription += ","
                locDescription += " south"
                $("#compassS").hide()
            }
            if (currentLoc.isWest()) {
                if (locDescription.trim()) locDescription += ","
                locDescription += " west"
                $("#compassW").hide()
            }
            locDescription = "You can go:" + locDescription

            let availableItemsNames = "";
            if (currentLoc.locItem.length === 0) availableItemsNames = "You see nothing"
            else {
                for (let i = 0; i < currentLoc.locItem.length; i++) {
                    if (availableItemsNames.trim()) availableItemsNames += ","
                    availableItemsNames += " " + items[currentLoc.locItem[i]].fullName
                }
                availableItemsNames = "You see " + availableItemsNames
            }

            let carrying;
            if (player.equipment === 0)
                carrying = "You are carrying nothing"
            else {
                carrying = "You are carrying " + items[player.equipment].fullName
            }

            $("#gameText").html(locDescription + ". <br><br>" + availableItemsNames + ". <br><br>" + carrying + ". ")
        }, ACTION_TIME)
    }

    function setCompassDefault() {
        $("#compassN").show()
        $("#compassS").show()
        $("#compassE").show()
        $("#compassW").show()
    }

    function setCurrentLocImg(currentLoc) {
        $("#locTitle").html(currentLoc.locTitle)
        $("#locImage").html("")
        let currentLocImg = document.createElement("IMG")
        let src = player.instance + ".gif"
        if (player.dragon && player.instance === 43) src = "DS" + src
        currentLocImg.setAttribute("src", "img/" + src)
        $("#locImage").append(currentLocImg)
        $("#locImage").css('backgroundColor', currentLoc.locColor)
    }

    function putPrevText() {
        setTimeout(function () {
            document.body.onkeydown()
            {

                $("#commandResponse").show()
                $("#gameConsole").show()
                let prevText = engine.text.split(".")
                let locDescription = prevText[0];
                for (let i = 1; i < prevText.length; i++) {
                    locDescription += ".<br><br>" + prevText[i]
                }
                $("#gameText").html(locDescription)
                document.body.onkeydown()
                {
                }
                $("#gameConsole").focus()
            }
        }, SAVE_TIME)
    }

    /* można ifa zastąpić returnem */
    function isUp(number) {
        return number === 38;
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

        if (consoleArg === "NORTH" || engine.isUp(keyNumber)) {
            return "N"
        }
        if (consoleArg === "SOUTH" || engine.isDown(keyNumber)) {
            return "S"
        }
        if (consoleArg === "WEST" || engine.isLeft(keyNumber)) {
            return "W"
        }
        if (consoleArg === "EAST" || engine.isRight(keyNumber)) {
            return "E"
        }
    }

    function nameOfDirection(consoleArg) {
        if (consoleArg.length > 1)
            return consoleArg
        switch (consoleArg) {
            case "N" :
                return "NORTH"
            case"S":
                return "SOUTH"
            case "W":
                return "WEST"
            case"E":
                return "EAST"
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

    function emptyEquipment() {
        if (player.equipment === 0) {
            engine.gameDescription = "You are not carrying anything"
            return true
        } else {
            engine.gameDescription = "You are carrying something"
            return false
        }
    }

    function getItemID(itemName) {
        let item = 0
        do {
            item++
            if (item === items.length) {
                return -1
            }
        } while (itemName !== items[item].name.toUpperCase())
        return item
    }

    function defaultConsole() {
        $("#commandResponse").html("What's now?")
        $("#gameConsole").show()
        $("#gameConsole").focus()
    }

    return {
        gameDescription: gameDescription,
        text: text,
        displayAction: displayAction,
        loadData: loadData,
        setCompassDefault: setCompassDefault,
        setCurrentLocImg: setCurrentLocImg,
        putPrevText: putPrevText,
        isUp: isUp,
        isDown: isDown,
        isLeft: isLeft,
        isRight: isRight,
        pressedEnter: pressedEnter,
        pressedSpace: pressedSpace,
        whichDirection: whichDirection,
        nameOfDirection: nameOfDirection,
        whichAction: whichAction,
        emptyEquipment: emptyEquipment,
        getItemID: getItemID,
        defaultConsole: defaultConsole
    }
})();

module.exports=engine