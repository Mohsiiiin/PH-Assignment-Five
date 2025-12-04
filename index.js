// id.......
// heart-count
// coins-count
// copy-count
// clear-btn

// class.......
// heart-click
// call-button
// copy-button

// heart-count-implement-code...............

const heartCount = document.getElementById("heart-count");

const hearts = document.getElementsByClassName("heart-click");

let count = 0;

for (let heart of hearts){
    heart.addEventListener('click', function(){
        heartCount.innerText = count;
        count ++;
    })
}