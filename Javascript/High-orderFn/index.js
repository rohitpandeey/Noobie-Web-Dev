const radius=[1,2,3,4,5];

const calculateArea = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
}