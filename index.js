// All-id.......
// heart-count
// coins-count
// copy-count
// history-list
// clear-btn


// All-class.......
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

// Dom-element gula dore niye ashlam......

// coins-count......
const coinsCount = document.getElementById('coins-count');

// all call-buttons.....
const callButtons = document.getElementsByClassName('call-button');

// call history-list.....
const historyList = document.getElementById('history-list');

// clear history-button....
const clearBtn = document.getElementById('clear-btn');

// cards-call&coins function.....
for (let callButton of callButtons){
    callButton.addEventListener('click', function(){
        let coins = parseInt(coinsCount.innerText)
        if(coins < 20 ){
            alert('You do not have enough coins the call will cost at least 20 coins.')
            return;
        }

        coins = coins - 20;
        coinsCount.innerText = coins;

        let card = callButton.parentElement.parentElement.parentElement;
        
        const allH1 = card.querySelectorAll('h1');

        const subTitle = allH1[0].innerText;
        const subNmbr = allH1[1].innerText;

        alert('calling'+ subTitle + ' ' + subNmbr);

        // call-history child....
        const newHistory = document.createElement('p');
        newHistory.innerText = subTitle +' - ' + subNmbr;
        historyList.appendChild(newHistory)

    })

    // Clear history button
    clearBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
    });

}


