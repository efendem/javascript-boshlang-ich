
fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(response => {
    console.log(response);
});