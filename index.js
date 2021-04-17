var elements = [
    {name: 'lorem ipsum', price: 100}, 
    {name: 'dolor sit', price: 50}, 
    {name: 'Garam Masla', price: 30}, 
    {name: 'we are', price: 10}, 
    {name: 'Hello World', price: 10}, 
];


//using findIndex 

// var findProducts = elements.findIndex((currentValue) => {
//     return currentValue.name === 'dolor sit'
// });

// let result = elements.filter( (currentValue,index,arr) => {
//     return index !== findProducts;
// })

//usgin find
var findProduct = elements.find((currentValue) => {
    return currentValue.name === 'dolor sit'
});

let result = elements.filter( (currentValue,index,arr) => {
    return currentValue.name !== findProduct.name;
})

console.log(result);

