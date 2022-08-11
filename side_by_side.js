const color = ["#ebb434", "#f368e0","#ee5253","#0abde3", "#10ac84","#222f3e", "#5f27cd"];
let i = 0;
let clicked_array = [false, false, false, false, false];

document.querySelector("button").addEventListener("click", function(){
i = i < color.length ? ++i : 0;

const col = document.querySelectorAll(".column")

// array of 5 diff rand nums
let arr = []; 
while(arr.length < 5){
    var r = Math.floor(Math.random() * color.length);
    if(arr.indexOf(r) === -1) arr.push(r);
    }

// if column clicked, clicked_array boolean switches
for (let x = 0; x < 5; x++) { 
document.getElementsByClassName('column')[x]
.addEventListener('click', function (event) {
    clicked_array[x] = !clicked_array[x]
});
}

// picks random color if column wasn't clicked
let temp = 0; 
for (let cell of col) {
    if (clicked_array[temp] == false) {
    cell.style.backgroundColor = color[arr[temp]];
    temp++;
    }
    else {
    temp++;    
    }
}
})