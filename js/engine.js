var engine = {
    gameDescription: "",
    text: "",

    displayAction: function () {
        $("#commandResponse").html(engine.gameDescription)
        $("#gameConsole").hide()

        setTimeout(function () {
            engine.defaultConsole()
        }, ACTION_TIME)
    },

    loadData: function () {
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
    },

    setCompassDefault: function () {
        $("#compassN").show()
        $("#compassS").show()
        $("#compassE").show()
        $("#compassW").show()
    },

    setCurrentLocImg: function (currentLoc) {
        $("#locTitle").html(currentLoc.locTitle)
        $("#locImage").html("")
        let currentLocImg = document.createElement("IMG")
        let src = player.instance + ".gif"
        if (player.dragon && player.instance === 43) src = "DS" + src
        currentLocImg.setAttribute("src", "img/" + src)
        $("#locImage").append(currentLocImg)
        $("#locImage").css('backgroundColor', currentLoc.locColor)
    },

    putPrevText: function () {
        setTimeout(function () {
            document.body.onkeydown = function () {

                $("#commandResponse").show()
                $("#gameConsole").show()
                let prevText = engine.text.split(".")
                let locDescription = prevText[0];
                for (let i = 1; i < prevText.length; i++) {
                    locDescription += ".<br><br>" + prevText[i]
                }
                $("#gameText").html(locDescription)
                document.body.onkeydown = function () {
                }
                $("#gameConsole").focus()
            }
        }, SAVE_TIME)
    },
 
    isUp: function (number) {
        return number === 38;
    },

    isDown: function (number) {
        return number === 40
    },

    isLeft: function (number) {
        return number === 37
    },

    isRight: function (number) {
        return number === 39
    },

    pressedEnter: function (number) {
        return number === 13
    },

    pressedSpace: function (number) {
        return number === 32
    },

    whichDirection: function (consoleArg, keyNumber) {
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
    },

    nameOfDirection: function (consoleArg) {
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
    },

    whichAction: function (command) {
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
    },

    emptyEquipment: function () {
        if (player.equipment === 0) {
            engine.gameDescription = "You are not carrying anything"
            return true
        } else {
            engine.gameDescription = "You are carrying something"
            return false
        }
    },

    getItemID: function (itemName) {
        let item = 0
        do {
            item++
            if (item === items.length) {
                return -1
            }
        } while (itemName !== items[item].name.toUpperCase())
        return item
    },

    defaultConsole() {
        $("#commandResponse").html("What's now?")
        $("#gameConsole").show()
        $("#gameConsole").focus()
    }
}