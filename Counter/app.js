const container = document.querySelector(".container");
const result = document.querySelector(".result");
const byValue = document.getElementById("byValue");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");

let counter = 0;

plus.addEventListener("click", function(){
    let value = parseInt(byValue.value) || 0;
    counter += value;
    result.textContent = counter;
});

minus.addEventListener("click", function(){
    let value = parseInt(byValue.value) || 0;
    counter -= value;
    if(counter > 0){
        result.textContent = counter;
    }else{
        counter = 0;
        result.textContent = counter;
    }
});

reset.addEventListener("click", function(){
    counter = 0;
    result.textContent = counter;
    byValue.value = 1;
})