const inRange = (value, min, max) => value >= min && value <= max;

const $ = (a, b) => (a + b) / 2;

const defineDirection = (direction, degrees) => {
    switch (direction) {
        case 'latitude':
            return inRange(degrees, 0, 90) ? ["N", degrees] : ["S", -degrees];
        case 'longitude':
            return inRange(degrees, 0, 180) ? ["E", degrees] : ["W", -degrees];
    }
}

class CoordinateAC {
    constructor(direction = 'latitude') {
        this.direction = direction;
        this.degrees = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    static createWithValues(direction, degrees, minutes, seconds) {
        switch (direction) {
            case 'latitude':
                if (!inRange(degrees, -90, 90))
                    throw new RangeError('Degrees value is out of range');
                if ((degrees == 90 && minutes > 0 && seconds > 0) ||
                    (degrees == -90 && minutes > 0 && seconds > 0))
                    throw new RangeError('Values are out of range');
                break;
            case 'longitude':
                if (!inRange(degrees, -180, 180))
                    throw new RangeError('Degrees value is out of range');
                if ((degrees == 180 && minutes > 0 && seconds > 0) ||
                    (degrees == -180 && minutes > 0 && seconds > 0))
                    throw new RangeError('Values are out of range');
                break;
            default:
                throw new TypeError('Direction is not of type');
        }

        if (!inRange(minutes, 0, 59))
            throw new RangeError('Minutes value is out of range');

        if (!inRange(seconds, 0, 59))
            throw new RangeError('Seconds value is out of range');

        const coordinate = new CoordinateAC(direction);
        coordinate.degrees = degrees;
        coordinate.minutes = minutes;
        coordinate.seconds = seconds;
        return coordinate;
    }

    toString = () => {
        let [dir, deg] = defineDirection(this.direction, this.degrees);
        return `${deg}°${this.minutes}′${this.seconds}″ ${dir}`;
    }

    toDecimal = () => {
        let [dir, deg] = defineDirection(this.direction, this.degrees);
        return `${deg + this.minutes / 60 + this.seconds / 3600}° ${dir}`;
    }

    middleCoordinate = ({ direction, degrees, minutes, seconds }) =>
        this.direction === direction ?
            CoordinateAC.createWithValues(
                direction,
                $(this.degrees, degrees),
                $(this.minutes, minutes),
                $(this.seconds, seconds),
            ) :
            null

    static middleTwoCoordinate = (coord1, coord2) => coord1.middleCoordinate(coord2)
}

const coordinate1 = new CoordinateAC("longitude");
const coordinate2 = CoordinateAC.createWithValues("longitude", -50, 20, 10);
const coordinate3 = coordinate1.middleCoordinate(coordinate2);

console.log("coordinate 1 : \n", coordinate1, "\n");
console.log("coordinate 2 : \n", coordinate2, "\n");
console.log("coordinate 1 toString : \n", coordinate1.toString(), "\n");
console.log("coordinate 2 toString : \n", coordinate2.toString(), "\n");
console.log("coordinate 1 toDecimal : \n", coordinate1.toDecimal(), "\n");
console.log("coordinate 2 toDecimal : \n", coordinate2.toDecimal(), "\n");
console.log("1 and 2 middleCoordinate is coordinate 3: \n", coordinate3, "\n");
console.log("2 and 3 middleTwoCoordinate : \n", CoordinateAC.middleTwoCoordinate(coordinate2, coordinate3), "\n");

export default CoordinateAC //comment this string to run file via nodeJS
