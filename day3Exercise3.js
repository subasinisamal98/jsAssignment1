//q.1
const now1 = new Date();
const year1 = now1.getFullYear();
const month = String(now1.getMonth() + 1).padStart(2, '0'); 
const day = String(now1.getDate()).padStart(2, '0');
const hours1 = String(now1.getHours()).padStart(2, '0');
const minutes = String(now1.getMinutes()).padStart(2, '0');
const format1 = `${year1}-${month}-${day} ${hours1}:${minutes}`;
console.log(format1);


