function _localization() {
    this.locTitle = arguments[0]
    this.locImg = arguments[1]
    this.locColor = arguments[2]
    this.north = arguments[3]
    this.east = arguments[4]
    this.south = arguments[5]
    this.west = arguments[6]
    this.item = arguments[7]

    //----------

    // this.dirs = [(this.north,ruch.pion--,"north"),(this.south,ruch.pion--,"south"),(this.west,ruch.poziom--,"west"),(this.east,ruch.poziom++,"east")]
    //
    // this.go= function(direction){
    //     case(direction){
    //
    //     }
    //     if (game.lok[ruch.pion][ruch.poziom].north == 1) {
    //         ruch.pion--
    //         ruch.kom = "You are going north..."
    //         ruch.komunikat()
    //         ruch.ruch()
    //     } else {
    //         ruch.kom = "You can't go that way"
    //         ruch.komunikat()
    //     }
    // }
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
