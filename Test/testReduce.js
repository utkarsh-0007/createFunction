import cbReduce from "../cbReduce.js";
import reduce from "../Problems/reduce.js"

const items = [1, 2, 3, 4, 5, 5];
if (!Array.isArray(items)){
    console.log('items should be typeof array');
}
else{
    console.log(reduce(items,cbReduce));
}