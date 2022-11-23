const arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)


//using Freeze
const arr2 = Object.freeze([1, 2, 3, 4])
console.log(arr2)
// arr2.push(5) = leads to an error because of freeze

const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

//using spread to copy grocery list into another variable then add new object

const needThyme = [...groceryList, {"item": "thyme", "haveIngredient": false}]
console.log(needThyme)

//using concat to add thyme instead
const needThymeUsingConcat = groceryList.concat([{"item": "thyme", "haveIngredient": false}])
console.log(needThymeUsingConcat)

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
console.log(gotTheThyme)
