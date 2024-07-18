const leftBtn = document.getElementById("left-arrow");
const rightBtn = document.getElementById("right-arrow");
const container = document.querySelector(".container");

const imgList = ["first", "second", "third", "fourth"];

let index = 0;

leftBtn.addEventListener("click", () =>{
    if(index === 0){
        index = imgList.length-1;
    }else{
        index--;
    }

    container.style.background = `url("images/${imgList[index]}.jpg") center/cover no-repeat`;
});

rightBtn.addEventListener("click", () =>{
    if(index === imgList.length-1){
        index = 0;
    }else{
        index++;
    }

    container.style.background = `url("images/${imgList[index]}.jpg") center/cover no-repeat`;
});

