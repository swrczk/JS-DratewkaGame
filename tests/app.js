function go(dir, position, map) {
    let newPlace = [dir[0] + position[0], dir[1] + position[1]]


    function between(x, min, max) {
        return x >= min && x <= max;
    }

    if (between(newPlace[0], 0, map[0].length - 1) && between(newPlace[1], 0, map[0].length - 1)) {

        if (map[newPlace[0]][newPlace[1]] != 1)
            return newPlace
    }
    return position
}

exports.move = function move(points, dir, position, map) {
    const go = require('./app.js').go;
    const place = go(dir, position, map)
    if (JSON.stringify(position) != JSON.stringify(place))
        if (map[place[0]][place[1]] == 'X')
            return points + 1
    return points
}
exports = {
    go: go,
    move: move
}