let belgilar = 'dsvjnsjvsujvFDVVF121658!?%./%$';
function parolBer() {
    let i=0;
    let parol=';'
while (i < 8){
let son = parseInt(Math.random() * belgilar.length);
    // console.log(son, belgilar[son]);
    parol += belgilar[son];
    i++;
}
// console.log(parol);
document.querySelector('input').value=parol;
}
 