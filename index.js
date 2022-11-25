//Distance from Hq

function distanceFromHqInBlocks(blocks) {
  const hq = 42;
  return Math.abs(blocks - hq);
}

//Distance from hq in feet
function distanceFromHqInFeet(blocks) {
  const hq = 42;
  return Math.abs((blocks - hq) * 264);
}

//Distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

//Calculates fare price
function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  }
  if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
