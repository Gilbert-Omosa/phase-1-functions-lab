// Code your solution in this file!
function distanceFromHqInBlocks(pickupDestination) {

    const headquarters = 42

    let blockDistance = pickupDestination - headquarters;

    return Math.abs(blockDistance);
}

function distanceFromHqInFeet(pickupPoint) {

    const feetperblock = 264;

    let blocks = distanceFromHqInBlocks(pickupPoint);

    return blocks * feetperblock;
}

function distanceTravelledInFeet(startPoint, destination) {

    const feetPerBlock = 264;

    let travelDistance = Math.abs(destination - startPoint);

    return travelDistance * feetPerBlock;
}

function calculatesFarePrice(start, destination) {

    const pricePerFoot = 0.02;
    const price = 25;

    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {

        return 0;
    }
    else if (distance >= 400 && distance <= 2000) {

        return (distance -400) * pricePerFoot;
    }
    else if (distance >= 2000 && distance <= 2500) {

        return price;
    }
    else if (distance > 2500) {

        return 'cannot travel that far';
    }
}