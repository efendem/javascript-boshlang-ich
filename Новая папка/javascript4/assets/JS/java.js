let hi="hammaga salom" 
console.log(hi);
console.log("bugun funksiyalar bilan ishlashni o'rganamiz");
function salomlash(ism, yosh){
console.log(hi + ". Mening ismim " + ism + ". Yoshim: " + yosh);
}
function yoshniQaytar(age) {
    if(age < 7) {
    return "siz maktab yoshiga yetmagansiz!";
} else {
    return "siz maktab yoshidasiz!";
}
}
let kak=yoshniQaytar(8);
console.log(kak);