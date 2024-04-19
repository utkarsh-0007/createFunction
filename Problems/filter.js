export default function filter(items, cbFilter) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        if (cbFilter(items[i])) {
            result.push(items[i]);
        }
    }
    return result;
}