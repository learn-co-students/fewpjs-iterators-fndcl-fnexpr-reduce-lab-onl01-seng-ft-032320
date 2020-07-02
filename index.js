const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function batteryCounter(totalAmount, element) {
    return totalAmount + element;
  }
  let totalBatteries = batteryBatches.reduce(batteryCounter, 0)
  console.log(totalBatteries)