// function $(name){
//     let type = name[0]
//     switch(type){
//         case "#":
//             return document.getElementById(name.substring(1))
//         case ".":
//             return document.getElementsByClassName(name.substring(1))
//     }
// }

function _localization() {
    this.locTitle = arguments[0]
    this.locImg = arguments[1]
    this.locColor = arguments[2]
    // this.north = arguments[3]
    // this.east = arguments[4]
    // this.south = arguments[5]
    // this.west = arguments[6]
    this.directions=arguments[3] // N-8, E-4, S-2, W-1
    this.locItem = arguments[4]


    this.isNorth = function () {
        if (this.directions & 8) return true
        else return false
    }
    this.isEast = function () {
        if (this.directions & 4) return true
        else return false
    }
    this.isSouth = function () {
        if (this.directions & 2) return true
        else return false
    }
    this.isWest = function () {
        if (this.directions & 1) return true
        else return false
    }
    this.isLocItem = function () {
        if (this.locItem != 0) return true
        else return false
    }
}

function _reaction() {
    this.needed = arguments[0]
    this.location = arguments[1]
    this.result = arguments[2]
    this.message = arguments[3]
    this.specialMark = arguments[4]
    this.stone = arguments[5]
}

function _items() //numer - pozycja tablicy +9
{
    this.fullName = arguments[0]
    this.specialMark = arguments[1]
    this.name = arguments[2]
}
