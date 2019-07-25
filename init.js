let isSpinning = true;
let d=20;
let d2=2;
let s=3;
let gap=5;
let possitive = 20+gap;;
let negative = -20-gap;
let white = '#996';
let yellow = '#FF0';
let green = '#0F0';
let blue = '#06C';
let red = '#F30';
let orange = '#F90';
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  zoom: 4,
  dragRotate: true,
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  },
});
let cWhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: illo,
  translate: { z: 40 }, 
  stroke: s,
  color: white,
  fill: true,
});
let cYellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: illo,
  translate: { z: -40 }, 
  stroke: s,
  color: yellow,
  fill: true,
});
let cGreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: illo,
  translate: { x: 40 }, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
let cBlue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: illo,
  translate: { x: -40 }, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
let cRed = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: illo,
  translate: { y: -40 }, 
  stroke: s,
  color: red,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
let cOrange = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: illo,
  translate: { y: 40 }, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
//blue white
let bluewhiteanchor = new Zdog.Anchor({
  addTo: illo,
});
let whiteblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: bluewhiteanchor,
  translate: { z: 40 , x: negative}, 
  stroke: s,
  color: white,
  fill: true,
});
let bluewhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: bluewhiteanchor,
  translate: { z:possitive, x: -40 }, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});

// white green

let greenwhiteanchor = new Zdog.Anchor({
  addTo: illo,
});
let whitegreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: greenwhiteanchor,
  translate: { z: 40 , x: possitive}, 
  stroke: s,
  color: white,
  fill: true,
});
let greenwhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: greenwhiteanchor,
  translate: { z:possitive, x: 40 }, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
// white red

let redwhiteanchor = new Zdog.Anchor({
  addTo: illo,
});
let whitered = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: redwhiteanchor,
  translate: { z: 40 , y: negative}, 
  stroke: s,
  color: white,
  fill: true,
});
let redwhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: redwhiteanchor,
  translate: { y: -40, z:possitive }, 
  stroke: s,
  color: '#F30',
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
// white orange

let orangewhiteanchor = new Zdog.Anchor({
  addTo: illo,
});
let whiteorange = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: orangewhiteanchor,
  translate: { z: 40 , y: possitive}, 
  stroke: s,
  color: white,
  fill: true,
});
let orangewhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: orangewhiteanchor,
  translate: { y: 40 , z:possitive }, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
//blue yellow
let blueyellowanchor = new Zdog.Anchor({
  addTo: illo,
});
let yellowblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: blueyellowanchor,
  translate: { z: -40 , x: negative}, 
  stroke: s,
  color: yellow,
  fill: true,
});
let blueyellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: blueyellowanchor,
  translate: { z:negative, x: -40 }, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});

// yellow green

let greenyellowanchor = new Zdog.Anchor({
  addTo: illo,
});
let yellowgreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: greenyellowanchor,
  translate: { z: -40 , x: possitive}, 
  stroke: s,
  color: yellow,
  fill: true,
});
let greenyellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: greenyellowanchor,
  translate: { z:negative, x: 40 }, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
// yellow red

let redyellowanchor = new Zdog.Anchor({
  addTo: illo,
});
let yellowred = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: redyellowanchor,
  translate: { z: -40 , y: negative}, 
  stroke: s,
  color: yellow,
  fill: true,
});
let redyellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: redyellowanchor,
  translate: { y: -40, z:negative }, 
  stroke: s,
  color: '#F30',
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
// yellow orange

let orangeyellowanchor = new Zdog.Anchor({
  addTo: illo,
});
let yelloworange = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: orangeyellowanchor,
  translate: { z: -40 , y: possitive}, 
  stroke: s,
  color: yellow,
  fill: true,
});
let orangeyellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: orangeyellowanchor,
  translate: { y: 40 , z:negative }, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
// blue red

let blueredanchor = new Zdog.Anchor({
  addTo: illo,
});
let bluered = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: blueredanchor,
  translate: { x: -40 , y: negative}, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
let redblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: blueredanchor,
  translate: { y: -40 , x:negative }, 
  stroke: s,
  color: '#F30',
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
// blue orange

let orangeblueanchor = new Zdog.Anchor({
  addTo: illo,
});
let blueorange = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: orangeblueanchor,
  translate: { x: -40 , y: possitive}, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
let orangeblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: orangeblueanchor,
  translate: { y: 40 , x:negative }, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
// green red

let greenredanchor = new Zdog.Anchor({
  addTo: illo,
});
let greenred = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: greenredanchor,
  translate: { x: 40 , y: negative}, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
let redgreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: greenredanchor,
  translate: { y: -40 , x:possitive }, 
  stroke: s,
  color: '#F30',
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});
// green orange

let orangegreenanchor = new Zdog.Anchor({
  addTo: illo,
});
let greenorange = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: orangegreenanchor,
  translate: { x: 40 , y: possitive}, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
let orangegreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: orangegreenanchor,
  translate: { y: 40 , x:possitive }, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

//whiteredblue
let whiteredblueanchor = new Zdog.Anchor({
  addTo: illo,
});
let whiteredblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteredblueanchor,
  translate: { z: 40 , x: negative, y: negative}, 
  stroke: s,
  color: white,
  fill: true,
});
let redwhiteblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteredblueanchor,
  translate: { z: possitive , x: negative, y: -40}, 
  stroke: s,
  color: red,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

let blueredwhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteredblueanchor,
  translate: { z: possitive , x: -40, y: negative}, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
//whiteorangeblue
let whiteorangeblueanchor = new Zdog.Anchor({
  addTo: illo,
});
let whiteorangeblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteorangeblueanchor,
  translate: { z: 40 , x: negative, y: possitive}, 
  stroke: s,
  color: white,
  fill: true,
});
let orangewhiteblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteorangeblueanchor,
  translate: { z: possitive , x: negative, y: 40}, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

let blueorangewhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteorangeblueanchor,
  translate: { z: possitive , x: -40, y: possitive}, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
//whiteredgreen
let whiteredgreenanchor = new Zdog.Anchor({
  addTo: illo,
});
let whiteredgreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteredgreenanchor,
  translate: { z: 40 , x: possitive, y: negative}, 
  stroke: s,
  color: white,
  fill: true,
});
let redwhitegreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteredgreenanchor,
  translate: { z: possitive , x: possitive, y: -40}, 
  stroke: s,
  color: red,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

let greenredwhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteredgreenanchor,
  translate: { z: possitive , x: 40, y: negative}, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
//whiteorangegreen
let whiteorangegreenanchor = new Zdog.Anchor({
  addTo: illo,
});
let whiteorangegreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteorangegreenanchor,
  translate: { z: 40 , x: possitive, y: possitive}, 
  stroke: s,
  color: white,
  fill: true,
});
let orangewhitegreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteorangegreenanchor,
  translate: { z: possitive , x: possitive, y: 40}, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

let greenorangewhite = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: whiteorangegreenanchor,
  translate: { z: possitive , x: 40, y: possitive}, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});

//yellowredblue
let yellowredblueanchor = new Zdog.Anchor({
  addTo: illo,
});
let yellowredblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yellowredblueanchor,
  translate: { z: -40 , x: negative, y: negative}, 
  stroke: s,
  color: yellow,
  fill: true,
});
let redyellowblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yellowredblueanchor,
  translate: { z: negative , x: negative, y: -40}, 
  stroke: s,
  color: red,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

let blueredyellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yellowredblueanchor,
  translate: { z: negative , x: -40, y: negative}, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
//yelloworangeblue
let yelloworangeblueanchor = new Zdog.Anchor({
  addTo: illo,
});
let yelloworangeblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yelloworangeblueanchor,
  translate: { z: -40 , x: negative, y: possitive}, 
  stroke: s,
  color: yellow,
  fill: true,
});
let orangeyellowblue = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yelloworangeblueanchor,
  translate: { z: negative , x: negative, y: 40}, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

let blueorangeyellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yelloworangeblueanchor,
  translate: { z: negative , x: -40, y: possitive}, 
  stroke: s,
  color: blue,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
//yellowredgreen
let yellowredgreenanchor = new Zdog.Anchor({
  addTo: illo,
});
let yellowredgreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yellowredgreenanchor,
  translate: { z: -40 , x: possitive, y: negative}, 
  stroke: s,
  color: yellow,
  fill: true,
});
let redyellowgreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yellowredgreenanchor,
  translate: { z: negative , x: possitive, y: -40}, 
  stroke: s,
  color: red,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

let greenredyellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yellowredgreenanchor,
  translate: { z: negative , x: 40, y: negative}, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});
//yelloworangegreen
let yelloworangegreenanchor = new Zdog.Anchor({
  addTo: illo,
});
let yelloworangegreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yelloworangegreenanchor,
  translate: { z: -40 , x: possitive, y: possitive}, 
  stroke: s,
  color: yellow,
  fill: true,
});
let orangeyellowgreen = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yelloworangegreenanchor,
  translate: { z: negative , x: possitive, y: 40}, 
  stroke: s,
  color: orange,
  fill: true,
  rotate: { x: -Zdog.TAU/4 },
});

let greenorangeyellow = new Zdog.Box({depth: d2,stroke: 20,width: d,  height: d,
  addTo: yelloworangegreenanchor,
  translate: { z: negative , x: 40, y: possitive}, 
  stroke: s,
  color: green,
  fill: true,
  rotate: { y: -Zdog.TAU/4 },
});


function animate() {
  // rotate
  if ( isSpinning ) {
    illo.rotate.y += 0.01;
    illo.rotate.x += 0.01;
    //illo.rotate.z += 0.03;
  }
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();

let viewRotation = new Zdog.Vector();
let dragStartRX, dragStartRY;
new Zdog.Dragger({
  startElement: greenorangeyellow.element,
  onDragStart: function() {
    // highlight on drag start
    greenorangeyellow.color = '#C25';
    
    dragStartRX = viewRotation.x;
    dragStartRY = viewRotation.y;
  },
  onDragMove: function( pointer, moveX, moveY ) {
    // move rotation
    let moveRX = moveY / illo.width * Zdog.TAU * -1;
    let moveRY = moveX / illo.width * Zdog.TAU * -1;
    viewRotation.x = dragStartRX + moveRX;
    viewRotation.y = dragStartRY + moveRY;
  },
  onDragEnd: function() {
    // remove highlight colors on drag end
    greenorangeyellow.color = green;
  },
});