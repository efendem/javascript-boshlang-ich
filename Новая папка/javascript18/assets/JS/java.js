let ekran = document.querySelector('.ekran');

document.querySelectorAll('td').forEach(function(td){
    td.addEventListener('click', function(e){
      let belgi = e.target.innerText;
      console.log(belgi);

      if (belgi == "C") {
        ekran.value = "";
        
      } else if (belgi == "=") {
        ekran.value = eval(ekran.value);
      } else {
        ekran.value += belgi;
      }
      
         });
});
