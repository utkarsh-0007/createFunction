export default function each(items, cb) {
    for (let i = 0; i < items.length; i++) {
        cb(items[i], i, items);
    }   
}