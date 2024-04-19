import each from "./each.js";

export default function flatten(items) {
    let flattened = [];
    function flattenRecursive(arr) {
        each(arr, function(items){
            if (Array.isArray(items)) {
                flattenRecursive(items);
            } else {
                flattened.push(items);
            }
        });
    }
    flattenRecursive(items);
    return flattened;
}