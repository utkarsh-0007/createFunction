import find from "../Problems/find.js";
import cbFind from "../cbFind.js";

const items = [1, 2, 3, 4, 5, 5];
if (!Array.isArray(items)){
    console.log('items should be typeof array');
}
else{
    console.log(find(items,cbFind));
}