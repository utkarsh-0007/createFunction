export default function reduce(items, cbReduce, startingValue) {
    let index = 0;
    let accumulator = startingValue !== undefined ? startingValue : items[index++];
    
    for (; index < items.length; index++) {
        accumulator = cbReduce(accumulator, items[index]);
    }
    
    return accumulator;}