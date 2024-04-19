import each from "../Problems/each.js";
import cb from "../cbFunction.js"

const items = [1, 2, 3, 4, 5, 5];
if (!Array.isArray(items)){
    console.log('items should be typeof array');
}
else{
    each(items,cb);
}