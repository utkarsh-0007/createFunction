import iteratee from "../iteratee.js";
import map from "../Problems/map.js";

const items = [1, 2, 3, 4, 5, 5];
if (!Array.isArray(items)){
    console.log('items should be typeof array');
}
else{
    console.log(map(items,iteratee));
}