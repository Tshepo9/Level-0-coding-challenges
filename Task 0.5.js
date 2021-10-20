
function areaOfATriangle(height1,height2,base){

    if(height1>=height2){

        return 0.5*base*height1;
    }
    else{

        return 0.5*base*height2;
    }
}

console.log("area: "+areaOfATriangle(2,3,5));