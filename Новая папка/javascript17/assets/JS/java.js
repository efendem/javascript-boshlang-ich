let list = ["file:///C:/Users/Admin/Desktop/%CA%80%E1%B4%87s%E1%B4%9B%E1%B4%8F%20-%20%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D0%B8%D0%BA%D0%B0%20%D0%B1%D0%BE%D0%BC%D0%B1%D0%B0.mp3",
"file:///C:/Users/Admin/Desktop/Vuska%20Zippo%20-%20%D0%94%D1%83%D1%88%D0%B0%20%D0%BA%D0%B0%D0%B9%D1%84%D1%83%D0%B9.mp3",
"file:///C:/Users/Admin/Desktop/NAREK%20-%20%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83%20%D1%82%D0%B0%D0%BA%20%D1%87%D0%B0%D1%81%D1%82%D0%BE%20%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%B4%D0%B0%D0%B5%D1%88%D1%8C.mp3",
"file:///C:/Users/Admin/Desktop/%D0%95%D0%907%20-%20%D0%B0%20%D1%82%D1%8B%20%D1%82%D0%B0%D0%BD%D1%86%D1%83%D0%B9.%202014.mp3"
];
let currentAudioIndex = 0;
let audio = new Audio(list[0]);

function playSound() {
audio.play();
document.querySelector('#play').style.display="none";
document.querySelector('#pause').style.display="block";
}

function pauseSound() {
    audio.pause();
    document.querySelector('#play').style.display="block";
document.querySelector('#pause').style.display="none";
}

function nextSound() {
     currentAudioIndex++;
    // console.log(list[currentAudioIndex]); 
    if(list[currentAudioIndex+1] !==undefined); {
        audio.pause();
    audio = new Audio(list[currentAudioIndex]);
    audio.play();
        
    }
}

function prevSound() {
currentAudioIndex--;
if(list[currentAudioIndex+1] !==undefined); {
    audio.pause();
audio = new Audio(list[currentAudioIndex]);
audio.play();
  }
}