let text='Salom ahvollar yaxshimi? Dostim siz yaxshi hamkasbsiz!'
console.log(text);
for (index in text) {
    if (index>10){
        console.log(text.charAt(index));
    }
}