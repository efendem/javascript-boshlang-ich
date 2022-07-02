document.querySelector('.valyuta').addEventListener('change',function (event){
 let val = event.target.value;

 let httpSorov = new XMLHttpRequest();

 httpSorov.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      let natija = JSON.parse(this.response.Text);
document.querySelector('.sarlavha').innerHTML = natija[0].CcNm_UZ;
document.querySelector('.sana').innerHTML = natija[0].Date;
document.querySelector('.kurs').innerHTML = natija[0].Rate;


    }
 }

 httpSorov.open("GET", "http://cbu.uz/ru/arkhiv-kursov-valyut/json/RUB/2022-07-02/", true);
});httpSorov.send();