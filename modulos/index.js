
//common js
// const {login, LIKES}= require('./modul')

// login("Peter","123")
// console.log(LIKES)

//es modules

// import login from './modul.js'
// login("Peter","123")
// console.log(LIKE)

// import  {login,LIKES} from './modul.js'

// login("Peter")
// console.log(LIKES)

import {conFe,conMo,conBase} from './modul.js'
const first = () => { console.log("Hello"); }
first()
conFe()
console.log(conBase);
conMo()