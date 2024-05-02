class UberCalculator {
  constructor(
    baseFare = 2.5,
    costPerMile = 1.25,
    costPerMinute = 0.2,
    surgeMultiplier = 1
  ) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
    this.surgeMultiplier = surgeMultiplier; // Surge pricing factor
  }

  calculateFare(distance, time) {
    // Basic fare calculation
    let distanceCost = this.costPerMile * distance;
    let timeCost = this.costPerMinute * time;
    let totalFare =
      (this.baseFare + distanceCost + timeCost) * this.surgeMultiplier;

    return totalFare.toFixed(2); // Format to 2 decimal places
  }
}
