export function carFleet(
    target: number,
    position: number[],
    speed: number[],
): number {
    if (!position.length) return 0;
    const sortedPositionTimes = position
        .map((item, ind) => ({ position: item, speed: speed[ind] }))
        .sort((a, b) => a.position - b.position)
        .map(item => (target - item.position) / item.speed);

    console.log(sortedPositionTimes);

    let fleet = 1;
    let fleetLeastTime = sortedPositionTimes[sortedPositionTimes.length - 1];
    for(let i = sortedPositionTimes.length - 2; i >= 0; i--){
      if(!(sortedPositionTimes[i] <= fleetLeastTime)){
        fleet++;
        fleetLeastTime = sortedPositionTimes[i];
      }
    }
    return fleet;
}
