export default function map(items, iteratee) {
    let results = [];
    for (let index = 0; index<items.length; index++) {
      results.push(iteratee(items[index]));  }
    return results;
  }