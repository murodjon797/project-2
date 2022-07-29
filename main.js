var money = +prompt("Pulingizni somda Kiriting", 0);

var USD_TO_UZS = 100;
var EURO_TO_UZS = 11800;
var kicket = 500;
var hotel = 250;
var museum = 120;

var total = (kicket + hotel) * USD_TO_UZS + museum * EURO_TO_UZS;

if(money >= total){9
   console.log('Oq yol Alisher');
}else if (money < 0 ){
   console.log("Alisher aka qo'ysangizchi boladig'on ish qiling")
}else if (isNaN(money)== true){
   console.log('Alisher aka raqam Kiriting iltimos !!!');
} else{
   console.log('Alisher aka ozgina sabr qilish kerak Bolar ekanda')
}
