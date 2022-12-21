var obj1 = {"name":"Nadheen","age":"2"};
var obj2 = {"age":"2","name":"Nadheen"};

var obj3=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            obj3=false;
            break;
        }
    }
}
else {
    obj3=false;
}
console.log("is object equal"+obj3);