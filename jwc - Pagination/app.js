const listItems = document.querySelectorAll("li");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.querySelector("pagination-list");

// finding the pages count
const pageLimit = 5;
const pageCount = Math.ceil(listItems.length / pageLimit);
let currPage;

// adding page numbers
const addPaginationNumber = (index) =>{
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
}

const getPaginationNumbers = () => {
    for(let i=1;i<=pageCount;i++){
        addPaginationNumber(i);
    }
};


/*

window.addEventListener("load", () =>{
    getPaginationNumbers();
})

*/

// display active page
/*
const setCurrPage = (pageNum) =>{
    currPage = pageNum; //2

    const prevRange = (pageNum - 1)*pageLimit; //5
    const currRange = pageNum * pageLimit; //10

    listItems.forEach((item, index) =>{
        item.classList.add("hidden");
        if(index >= prevRange && index < currRange){
            item.classList.remove("hidden");
        }
    });
};
*/

/*
window.addEventListener("load", () => {
  getPaginationNumbers();

  setCurrPage(1);
});
*/

// add page number buttons event listener
/*
window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrPage(1);

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if(pageIndex){
        button.addEventListener("click", () => {
            setCurrPage(pageIndex);
        });
    }
  });
});
*/


//set active page number
const handleActivePageNumber = () =>{
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");

        const pageIndex = Number(button.getAttribute("page-index"));
        if(pageIndex === currPage){
            button.classList.add("active");
        }
    });
};

// adding handleActivePageNumber() to setCurrentPage function

/*
const setCurrPage = (pageNum) => {
  currPage = pageNum; //2

  handleActivePageNumber();

  const prevRange = (pageNum - 1) * pageLimit; //5
  const currRange = pageNum * pageLimit; //10

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};
*/

//next and previous button 
window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrPage(1);

  prevBtn.addEventListener("click", ()=>{
    setCurrPage(currPage-1);
  });

  nextBtn.addEventListener("click", () => {
    setCurrPage(currPage+1);
  })

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrPage(pageIndex);
      });
    }
  });
});

//disable page navigation buttons
const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true); //to make the button non function
}

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
}

const handlePageButtonStatus = () =>{
    if(currPage === 1){
        disableButton(prevBtn);
    }else{
        enableButton(prevBtn);
    }

    if(pageCount === currPage){
        disableButton(nextBtn);
    }else{
        enableButton(nextBtn);
    }
}

//adding handlePageButtonStatus to setCurrPage function
const setCurrPage = (pageNum) => {
  currPage = pageNum; //2

  handleActivePageNumber();
  handlePageButtonStatus();

  const prevRange = (pageNum - 1) * pageLimit; //5
  const currRange = pageNum * pageLimit; //10

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};