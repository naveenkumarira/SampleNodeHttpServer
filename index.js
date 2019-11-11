// var rect = {
//     perimeter: (x, y) => (2*(x+y)),
//     area: (x,y) => (x*y)
// };

var rect = require('./rectangle')

function resolveRectanangles(l, m) {
    console.log("l="+l+" m="+m);
    console.log("Area of the rectangle: "+rect.area(l,m));
    console.log("Perimeter of the reactangle: "+rect.perimeter(l,m));
}


resolveRectanangles(2,3);
resolveRectanangles(10,3);