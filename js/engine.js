var engine = {
    displayAction: function () {

        $("#commandResponse").html(logic.gameDescription)
        $("#gameConsole").hide()

        setTimeout(function () {
            $("#commandResponse").html("What's now?")
            $("#gameConsole").show()
            $("#gameConsole").focus()
        }, ACTION_TIME)
    },

    loadData: function () {
        setTimeout(function () {

            engine.setCompassDefault()

            let currentLoc = places[Math.floor(logic.instance / 10)][logic.instance % 10]

            engine.setCurrentLocImg(currentLoc)

            let locDescription = ""

            if (currentLoc.isNorth()) {
                locDescription += " north"
                $("#compassN").hide()
            }
            if (currentLoc.isEast()) {
                if (locDescription.trim()) {
                    locDescription += ","
                }
                locDescription += " east"
                $("#compassE").hide()
            }
            if (currentLoc.isSouth()) {
                if (locDescription.trim()) {
                    locDescription += ","
                }
                locDescription += " south"
                $("#compassS").hide()
            }
            if (currentLoc.isWest()) {
                if (locDescription.trim()) {
                    locDescription += ","
                }
                locDescription += " west"
                $("#compassW").hide()
            }
            locDescription = "You can go:" + locDescription

            let availableItems = 0;
            for (let i = 0; i < currentLoc.locItem.length; i++) {
                if (currentLoc.locItem[i] != 0) {
                    availableItems++
                }
            }
            let availableItemsNames = "";
            if (availableItems == 0) {
                availableItemsNames = "You see nothing"
            } else {
                for (let i = 0; i < currentLoc.locItem.length; i++) {
                    if (currentLoc.locItem[i] != 0) {

                        if (availableItemsNames.trim()) {
                            availableItemsNames += ","
                        }
                        availableItemsNames += " " + items[currentLoc.locItem[i]].fullName
                    }
                }

                availableItemsNames = "You see " + availableItemsNames
            }

            let carrying;
            if (logic.equipment == 0)
                carrying = "You are carrying nothing"
            else {
                carrying = "You are carrying " + items[logic.equipment].fullName
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
        currentLocImg.setAttribute("src", "img/" + currentLoc.locImg)
        $("#locImage").append(currentLocImg)


        $("#locImage").css('backgroundColor', currentLoc.locColor)
    },

    putPrevText: function () {

        setTimeout(function () {
            document.body.onkeydown = function () {

                $("#commandResponse").show()
                $("#gameConsole").show()
                let prevText = logic.text.split(".")
                let locDescription = prevText[0];
                for (let i = 1; i < prevText.length; i++) {
                    locDescription += ".<br><br>" + prevText[i]
                }
                $("#gameText").html(locDescription)
                document.body.onkeydown = ""
                $("#gameConsole").focus()
            }
        }, SAVE_TIME)
    },

    isUp: function (number) {
        if (number === 38) return true
        else false
    },

    isDown: function (number) {
        if (number === 40) return true
        else false
    },

    isLeft: function (number) {
        if (number === 37) return true
        else false
    },

    isRight: function (number) {
        if (number === 39) return true
        else false
    },

    pressedEnter: function (number) {
        if (number === 13) return true
        else false
    },

    pressedSpace: function (number) {
        if (number === 32) return true
        else false
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
        if (logic.equipment == 0) {
            logic.gameDescription = "You are not carrying anything"
            return true
        } else {
            logic.gameDescription = "You are carrying something"
            return false
        }
    },
    getItemID: function (itemName) {
        let item = 0
        do {
            item++
            if (item == items.length) {
                return -1
            }
        } while (itemName != items[item].name)
        return item
    }
}