const input = document.querySelector('input');
const search = document.querySelector('.search');
const container = document.querySelector('#hero2 .container');
const btn2 = document.querySelector('.btn2');

let data = [
    {
        name: "Mars rug",
        img: "./image 10.png",
        price: 100,
        count: 24
    },
    {
        name: "Keyboard sticker",
        img: "./image 22.png",
        price: 49,
        count: 11
    },
    {
        name: "Smart Watch",
        img: "./image 23.png",
        price: 899,
        count: 4
    },
    {
        name: "Wireless keyboard",
        img: "./image 24.png",
        price: 350,
        count: 0
    },
    {
        name: "Mouse",
        img: "./image 25.png",
        price: 359,
        count: 24
    },
    {
        name: "AirPods",
        img: "./image 26.png",
        price: 499,
        count: 11
    },
    {
        name: "Powerbank",
        img: "./image 27.png",
        price: 899,
        count: 5
    },
    {
        name: "USB flash drive",
        img: "./image 28.png",
        price: 299,
        count: 21
    },
    {
        name: "Smartphone",
        img: "./image 29.png",
        price: 3699,
        count: 2
    },
    {
        name: "Playstation",
        img: "./image 30.png",
        price: 7449,
        count: 'Ushbu tovarga oldin buyurtma berish kerak'
    },
    {
        name: "Yandex Station",
        img: "./image 31.png",
        price: 1999,
        count: 4
    },
    {
        name: "Planshet Samsung",
        img: "./image 32.png",
        price: 4999,
        count: 24
    }
];

function showdata(data) {
    container.innerHTML = '';
    data.map((value) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${value.img}" alt="${value.name}">
        <h3 class="name">Name: ${value.name}</h3>
        <h3 class="price"><img class="coin" src="./Coin 1.png" alt="Coin" width="18px" height="18px"> Price: ${value.price} Coins</h3>
        <h3 class="count">Count: ${typeof value.count === 'string' ? value.count : value.count}</h3>
    `;
    container.appendChild(card);
});
}

showdata(data);

btn2.addEventListener('click' , () => {
    let inputValue = input.value.toLowerCase();
    let filteredCards = data.filter((value)=> value.name.toLowerCase().includes(inputValue));
    showdata(filteredCards);
})



document.querySelectorAll('.name').forEach(element => {
    element.textContent = element.textContent.replace('Name: ', '');
});

document.querySelectorAll('.price').forEach(element => {
    const coinImg = element.querySelector('.coin');
    const priceText = element.textContent.replace('Price: ', '').replace(' Coins', '');
    element.innerHTML = coinImg.outerHTML + ' ' + priceText;
});

document.querySelectorAll('.count').forEach(element => {
    let countText = element.textContent.replace('Count: ', '');
    if (typeof data.find(item => item.count === parseInt(countText))?.count === 'number') {
        element.textContent = `${countText} dona mavjud`;
    } else {
        element.textContent = countText;
    }
});

