/*
@author Dhruv
@author Sampanna

*/
const wall = "w";
const player = "p";
const goal = "g";
setLegend(
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],[player, bitmap`
................
................
...0000000000...
...0000000000...
...0222002220...
...0022002200...
...0000000000...
.....002200.....
......CCCC......
......CCCC......
......CCCC......
......CCCC......
......CCCC......
......CCCC......
....00000000....
....00000000....`],  [ goal, bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444`]
)
let level = 0;
const levels = [map`
w.p.wwwwwwwwwwwwww
w...w............w
w...w............w
w...wwwwwwww.....w
w..........w.....w
w..........w..w..w
w..........w..w..w
wwww..www.....wwww
w..w..w.......w..g
w..w..w.......w..w
w.....wwwwwwwww..w
w.....w.......w..w
w..w..w.......w..w
w..w..w..w..www..w
w..wwww..w.......w
w........w.......w
w........w.w.....w
wwwwwwwwwwwwwwwwww`,map`
wwwwwwwwwwwwwwwwwwwwp
w...w.....w.w........
www.wwwww.w.www.wwwww
w.w...w.w.......w...w
w.w.www.wwwwwww.w.w.w
w.w.........w...w.w.w
w.wwwwwwwww.w.w.w.w.w
w...........w.w...w.w
wwwwwww.w.www.w.wwwww
w.w.w.w.w...w.w.w.w.w
w.w.w.w.www.www.w.w.w
w.w.......w.w.......w
w.wwwwwww.www.www.www
w.......w...w.w.w.w.w
w.wwwwwwwww.w.w.www.w
w...................w
w.w.w.www.www.wwwww.w
w.w.w.w.w...w.w...w.w
wwwww.w.wwwww.www.w.w
wg....w.........w...w
wwwwwwwwwwwwwwwwwwwww`,map`
wwwwwwwwwwwwwwwwwwwwwwwwwww
wp..w.....w.w..........w..w
www.wwwww.w.www.www...www.w
w.w...w.w.......w...w..w.ww
w.w.www.wwwwwww.w.w.ww.w..w
w.w.........w...w.w.w..w..w
w.wwwwwwwww.w.w.w.w.......w
w...........w.w...w.....www
wwwwwww.w.www.w.wwwww.w...w
w.w.w.w.w...w.w.w.w...w...w
w.w.w.w.www.www.w.w.wwww..w
w.w.......w.w.............w
w.wwwwwww.www.www.www.www.w
w.......w...w.w.w.w.w.w.w.w
w.wwwwwwwww.w.w.www.www.w.w
w.......................w.w
w.w.w.www.www.wwwww.wwwww.w
w.w.w.w.w...w.w...w.w..w..w
wwwww.w.wwwww.www.w....w..w
w.....w.........w...w..w..w
w.w...w.wwww.ww.....w.....w
w.wwwww.w..w.....w..ww....w
w.......w..www.www..ww.ww.w
w..w.................w.w..w
wwww..ww.w.wwwwwww..ww.wwww
w....www.w......w....w....w
wwwwwwww.wwwwwwwwwwwwwwwwgw`

];

const currentLevel = levels[level];
setMap(currentLevel);

setSolids([ player, wall ]);

onInput("s", () => {
  getFirst(player).y += 1;
});

onInput("a", () => {
  getFirst(player).x -= 1;
});
onInput("w", () => {
  getFirst(player).y -= 1;
});

onInput("d", () => {
  getFirst(player).x += 1;
});
afterInput(() => {
  const numberCovered = tilesWith(goal, player).length;
  const targetNumber = tilesWith(goal).length;

  if (numberCovered === targetNumber) {
    // increase the current level number
    level = level + 1;

    const currentLevel = levels[level];

    // make sure the level exists and if so set the map
    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      setMap(map`
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww`);
      addText("Yass you won", { y: 4,x:4 });
      addText("Slayyyyy", { y: 5,x:4});
    }
  }
});

