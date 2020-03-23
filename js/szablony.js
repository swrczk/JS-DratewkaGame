function _pole() {
    this.tekst = arguments[0]
    this.tlo = arguments[1]
    this.kolor = arguments[2]
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

function _reakcje() {
    this.potrzebny = arguments[0]
    this.lokacja = arguments[1]
    this.wynik = arguments[2]
    this.komunikat = arguments[3]
    this.flaga = arguments[4]
    this.kamien = arguments[5]
}

function _items() //numer - pozycja tablicy +9
{
    this.odmiana = arguments[0]
    this.flaga = arguments[1]
    this.nazwa = arguments[2]
}
