console.log('saloom');
let span=document.createElement('span');
span.innerText = 'uyga vazifa';
span.classList.add('homework');
console.log(span);

let a = document.createElement('a');
a.innerText = 'Bosh sahifa';
a.href = 'https://t.me/HumoDigital';
a.classList.add('link');
console.log(a);

let p = document.createElement('p');
p.innerText = 'Barcha huquqlar himoyalangan!';
console.log(p);

let div =document.querySelector('div');
console.log(div);
div.appendChild(p);
div.appendChild(span)
div.appendChild(a);

setTimeout(function() {
   p.remove(); 
}, 3000);