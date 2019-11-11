var rect = require('./hook')
function resolveRectanangles(x, y) {
    rect(x, y, (error, rectangle) => {
        if(error) {
            console.log(error.message)
        } else {
            console.log("Perimeter of the rectangle: "+rectangle.perimeter()) //NOTE 1: Here the rectangle.perimeter() passing the x,y value
            console.log("Area of the rectangle: "+rectangle.area())
        }
    })
}


resolveRectanangles(10, 20);
resolveRectanangles(20,30);
resolveRectanangles(0,10);

