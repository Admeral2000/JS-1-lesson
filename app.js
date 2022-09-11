// V Uy ishi
// Xarajatlar hisoblagichi.

// Alisher chet elga dam olishga bormogqchi. Safar uchun ketadigan xarajatni internetdagi saytlardan qidirib chigib, quyidagi ro’yxatda berilgan ma’lumotlarni topdi. Ularning ba’zilari AQSh dollarida ko'rsatilgan bo'lsa, ba’zilari yevroda berilgan.

// •Borish-kelish samolyot bileti - $500
// •Mehmonxona to'lovi (to’liq safar davomiyligi uchun) - $250
// •Muzey va ko’ngilochar joylar uchun - 120 yevro
// $1 = 10650.34 so’m
// 1 yevro = 11650.03 so’m
// Tuzilishi kerak bo'lgan dastur quyidagi ko’rinishda ishlaydi:

// 1. Alisher o’zida necha pul bor ekanligini so’mda prompt orqali ko’rsatadi.
// 2. Xarajatlar dollar va yevrodan so’mga o’tkaziladi.

let m = prompt("Salom so`mda qancha pulingiz bor");
console.log("Pulingiz: " + m + " so`m");
console.log("Yevroda: " + m / 11650.03 + " €");
console.log("Dollarda: " + m / 10650.34 + " $");
console.log("");
console.log("Borish-kelish samolyot bileti - $500");
console.log(
  "Borish-kelish samolyot bileti so`mda - " +
    500 * 10650.34 +
    " so`m ni tashkil qiladi"
);
console.log(
  "Mehmonxona to`lovi" + "(to`liq safar davomiyligi uchun) - " + "$250"
);
console.log(
  "Mehmonxona to`lovi" +
    "(to`liq safar davomiyligi uchun) so`mda - " +
    250 * 10650.34 +
    " so`m"
);
console.log("Muzey va ko’ngilochar joylar uchun - 120 yevro");
console.log(
  "Muzey va ko`ngilochar joylar uchun so`m da - " + 120 * 11650.03 + " so`m"
);

// v Matematik amal uchun mashq

// 1. a nomli o'zgaruvchi e'lon qiling unga 10 raqam qiymat biriktiring, b degan o'zgaruvchi oching unga 5 ni biriktiring va console ga sonlarni yig'indisini chigaring.
// 2. a nomli o'zgaruvchi e'lon qiling unga 25 raqgam qiymat biriktiring, b degan o'zgaruvchi oching unga 15 ni biriktiring va natijani result degan o'zgaruchiga oling (a dan b ni ayring), consolega result ni chiqaring.
prompt("Endi matematik amallarni bajaramiz: ");
let c = prompt("1-sonni kiriting:");
let d = prompt("2-sonni kiriting:");
function math(a, b) {
  addition = +a + +b;
  subtraction = a - b;
  multiply = a * b;
  division = a / b;
  console.log(
    " Yig`indisi - " + addition,
    "\n",
    "Ayirmasi - " + subtraction,
    "\n",
    "Ko`paytmasi - " + multiply,
    "\n",
    "Bo`linmasi - " + division
  );
}
console.log(math(c, d));

// 3. a nomli o'zgaruvchi e'lon qiling unga 10 ni biriktiring b nomli o'zgaruvchi e'lon
// qiling va unga 5 ni biriktiring keyin a dan b ni ayring natijani c nomi
// o'zgaruvchiga chigaring.
// keyin d nomli o'zgaruvchi e'lon qilib unga 7 ni biriktiring c va d ni biriktiring va
// natijani result nomli o'zgaruvchida console ga chiqaring.

console.info(
  "3-misol. a nomli o`zgaruvchi e`lon qiling unga 10 ni biriktiring b nomli o`zgaruvchi e`lon qiling va unga 5 ni biriktiring keyin a dan b ni ayring natijani c nomi o`zgaruvchiga chiqaring. keyin d nomli o`zgaruvchi e`lon qilib unga 7 ni biriktiring c va d ni biriktiring va natijani result nomli o`zgaruvchida console ga chiqaring."
);
let g = prompt("biron son kiriting:");
let l = prompt("yana bir son kiriting:");
let ayirma = g - l;
console.log("Ularning ayirmasi= " + ayirma);
let f = prompt("Ayirmaga qo`shish uchun biron son kiriting:");
console.log("Yig`indisi = " + (ayirma + +f));

// 4. a nomli o'zgaruvchi e'lon qiling unga 10 ni biriktiring b o'zgaruvchiga 3 ni
// biriktiring va console ga qoldig'ini chigaring.

console.info(
  "4-misol. a nomli o`zgaruvchi e`lon qiling unga 10 ni biriktiring b o`zgaruvchiga 3 ni biriktiring va console ga qoldig`ini chigaring."
);
prompt("Endi sonlarni kiritib qoldig`ini hisoblaymiz:");
let k = prompt("Biron son kiriting:");
let p = prompt("Yana bir son kirirting:");
console.log("Bo`linma qoldig`i - " + "\t" + k + "/" + p + "= " + (k % p));
// 5. 2 ning 10 chi darajasini console ga chiqaring
prompt("Endi daraja hisoblaymiz:");
let q = prompt("Asosiy sonni kiriting:");
let w = prompt("Daraja raqamini kiriting:");
console.log("Daraja hisoblandi: " + q + "^" + w + "=" + Math.pow(q, w));
