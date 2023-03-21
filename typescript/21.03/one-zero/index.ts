//console.log("Mess with the best and die like the rest (class 92)");

import Regular from "./cls/Regular";
import Test from "./cls/test";
import Student from "./cls/Student";
import Account from "./cls/Account";
import Bussnies from "./cls/Bussnies";

// let zeevik = new Test("zeev", "12345");
// //console.log(zeevik.login("zeevik", "12345"));

// console.log(zeevik.login("daniel", "lo yudea"));

// //can not access fields becuase they are private
// // zeevik.user = "daniel";
// // zeevik.password = "lo yudea";
// zeevik.setName("daniel");
// console.log(zeevik.login("daniel", "12345"));
// console.log(zeevik.getName());

let adam = new Student(2345, "Matan2");
adam.deposit(1000000);
console.log(adam.getBalance());
adam.getLoan(5000000);

let wtf = new Bussnies(1, "zeev");
wtf.deposit(1000);
console.log(wtf.getBalance());
