   let newObj={};
function updateProductDetails( productObject,...extraDetails){
extra=extraDetails[0];
// console.log(extra);
// console.log(newObj);
// console.log({...extraDetails});
Object.assign(newObj,productObject);
if(Array.isArray(extra)){
// console.log(newObj);
for(let y of extra){
    newObj[y]='';
}
}
else
    {
for(let value in extra){
Object.assign(newObj,extra);
}
}
return newObj;
}
const standardProduct = {
    id: 'P101',
    name: 'Eco-Friendly Water Bottle',
    price: 19.99,
    category: 'Accessories'
};

const initialFeatures = ['BPA Free', 'Dishwasher Safe'];
const pricingInfo = {
    salesPrice: 24.99,
    status: "available"
};
const logisticsInfo = {
    weight: '0.5 kg',
    dimensions: '10x10x25 cm'
};
const seasonalDiscount = {
    discount: '10%'
};
console.log(updateProductDetails(standardProduct,initialFeatures));
// console.log(standardProduct);
console.log(updateProductDetails(standardProduct,logisticsInfo));
