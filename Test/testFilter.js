import filter from "../Problems/filter.js";
import cbFilter from "../cbFilter.js";

const items = [1, 2, 3, 4, 5, 5];
if (!Array.isArray(items)){
    console.log('items should be typeof array');
}
else{
    console.log(filter(items,cbFilter));
}