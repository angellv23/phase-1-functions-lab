const blockNumber = 43;
function distanceFromHqInBlocks(blockNumber) {
    const hq = 42; // Assuming headquarters is at block number 42
    return Math.abs(blockNumber - hq);
  }
  function distanceFromHqInFeet(blockNumber) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    const distanceInBlocks = Math.abs(blockNumber - 42); // Calculate the distance in blocks from the headquarters
    const distanceInFeet = distanceInBlocks * blockInFeet; // Convert the distance in blocks to feet
    return distanceInFeet;
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    const distanceInBlocks = Math.abs(endBlock - startBlock); // Calculate the distance in blocks travelled
    const distanceInFeet = distanceInBlocks * blockInFeet; // Convert the distance in blocks to feet
    return distanceInFeet;

  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0; // No charge
      } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const chargePerFoot = 0.02;
        const totalCharge = (distanceInFeet - 400) * chargePerFoot;
        return totalCharge;
      } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; // $25 charge for distance over 2000 feet
      } else if (distanceInFeet > 2500) {
        return 'cannot travel that far'; // Cannot travel over 2500 feet
      }
    
      // Function logic continues...
    }