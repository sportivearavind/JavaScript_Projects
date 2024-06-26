let data = []

const cardContainer = document.querySelector(".card-container");

document.addEventListener("DOMContentLoaded", function(event) {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
        data = res;
        console.log(data);

        for(let i=0;i<data.length;i++){

            let starFilled = parseInt(data[i].rating.rate);
            let starNotFilled = 5 - starFilled;

            let rateDiv = document.createElement("div");
            let tempDiv = document.createElement("div");
            rateDiv.setAttribute("id", "rate");
            rateDiv.setAttribute("class", "rate");

            
            for (let i = 0; i < starFilled; i++) {
              rateDiv.innerHTML += `<span class="filled">&#9733;</span>`;
            }

            for (let i = 0; i < starNotFilled; i++) {
              rateDiv.innerHTML += `<span class="not-filled">&#9734;</span>`;
            }

            tempDiv.appendChild(rateDiv);

            cardContainer.innerHTML += `
                <div class="card">
                    <div class="image">
                        <img class="img" src=${data[i].image} alt="">
                    </div>

                    <div class="details">
                        <div class="title">${data[i].title}</div>
                        <div class="category">${data[i].category}</div>
                        ${tempDiv.innerHTML}
                        <div class="count">Rating Count: ${data[i].rating.count}</div>
                    </div>

                    <button class="btn">Buy Now</button>
                </div>
            `;
        }
    })
});