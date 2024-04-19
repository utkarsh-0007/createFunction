export default function find(items, cbFind) {
    for (let i = 0; i < items.length; i++) {
        if (cbFind(items[i])) {
            return items[i];
        }
    }
    return undefined;
}