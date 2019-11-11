//Rectanlge implementation. Its doing the same work of the rectangle.js

module.exports = (x,y,callbacks) => {
    let isRectangle = (x != y)
    console.log("X: "+x+ " Y:"+y);
    // if (x <= 0 || y <= 0)
    //     setTimeout(() => 
    //         callbacks(new Error("Rectangle dimensions should be greater than zero: l = "
    //             + x + ", and b = " + y), 
    //         null),
    //         2000);
    // else
    //     setTimeout(() => 
    //         callbacks(null, {
    //             perimeter: () => (2*(x+y)),
    //             area:() => (x*y)
    //         }), 
    //         2000);
    
    
    
    if((x <= 0 || y<= 0) && isRectangle) {
        setTimeout(()=> 
                callbacks(new Error("both value should not be zero and it should not be equal. x="+ x+ "y="+y)
                , null)
        , 2000)
    } else {
        setTimeout(()=>
        callbacks(null, {
            perimeter : () => (2*(x+y)), // NOTE1.1: Here we don't need to use the (x,y) because we are passing it in hook_result.js
            area : () => (x*y)
        }), 2000)
    }
    console.log("Completed")
}