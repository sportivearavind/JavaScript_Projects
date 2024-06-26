let boxContainer = document.getElementById("box-container");
let box = document.querySelectorAll(".box");
let queue = [];

boxContainer.addEventListener("click", function(e) {
  let index = e.target.dataset.index;

  // to avoid event bubling when we click on the boxcontainer, we give the condition as index != undefined
  if (index != undefined) {
    queue.push(index);
    box[index].classList.add("green-color");
  }

  if(queue.length == 7){
    let count = 0;
    while(queue.length > 0){
        let ele = queue.shift();
        count++;
        setTimeout(() =>{
            box[ele].classList.remove("green-color");
        },count*1000);
    }
  }

});