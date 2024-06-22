// Project inspired from - https://codepen.io/gauravprof27/pen/ExGXWXW?editors=0010

async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error("error in fetching data from api", error);
    }
}

async function renderData(){
    const container = document.querySelector(".container");
    const data = await fetchData();

    if(!data){
        return;
    }

    data.forEach(item =>{
        const card = document.createElement('div');
        card.classList.add('card'); //adding class name as card to the newly created div

        const title = document.createElement('h2');
        title.textContent = item.title;

        const body = document.createElement('p');
        body.textContent = item.body;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
    });
}

renderData();