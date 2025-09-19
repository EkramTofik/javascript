//without returning a new object 
let multiplayNumeric=function (obj){
    for (let key in obj){
        if(typeof obj[key] === "number"){            
            obj[key]*=2;
        }
    }
};
let menu= {
    width:200,
    height:300,
    title:"My Menu"
};
multiplayNumeric(menu);
console.log(menu);
// With Returning an Object 
// function multiplayNumeric(obj){
//             let newObj={};
//     for (let key in obj){
//         if(typeof obj[key] === "number"){            
//             newObj[key]=obj[key]*2;
//         }
//         else{
//             newObj[key]=obj[key];
//         }
//     }        
// console.log(newObj);
// };
// let menu= {
//     width:200,
//     height:300,
//     title:"My Menu"
// };
// multiplayNumeric(menu);
// let menu1= {
//     width:300,
//     height:600,
//     title:"My Menu"
// };
// multiplayNumeric(menu1);
