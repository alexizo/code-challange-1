function calculatePoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const Points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (Points <= 12) {
            return `Points: ${Points}`;
        } else {
            return "License suspended";
        }
    }
}