function _localization() {
    this.locTitle = arguments[0]
    this.locImg = arguments[1]
    this.locColor = arguments[2]
    this.north = arguments[3]
    this.east = arguments[4]
    this.south = arguments[5]
    this.west = arguments[6]
    this.item = arguments[7]


    this.isNorth=function(){
        if(this.north!=0) return true
        else return false
    }
    this.isSouth=function(){
        if(this.south!=0) return true
        else return false
    }
    this.isEast=function(){
        if(this.east!=0) return true
        else return false
    }
    this.isWest=function(){
        if(this.west!=0) return true
        else return false
    }
}

function _reaction() {
    this.needed = arguments[0]
    this.location = arguments[1]
    this.result = arguments[2]
    this.komunikat = arguments[3]
    this.specialMark = arguments[4]
    this.kamien = arguments[5]
}

function _items() //numer - pozycja tablicy +9
{
    this.fullName = arguments[0]
    this.specialMark = arguments[1]
    this.name = arguments[2]
}