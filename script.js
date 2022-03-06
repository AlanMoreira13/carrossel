'use strict'

const images = [
    {"id": "1", "url": "./assets/itachi4.jpg"},
    {"id": "2", "url": "./assets/sasori.jpg"},
    {"id": "3", "url": "./assets/gaara.jpg"},
    {"id": "4", "url": "./assets/itachi2.jpg"},
    {"id": "5", "url": "./assets/kakashi.jpg"},
    {"id": "6", "url": "./assets/kisame.jpg"},
    {"id": "8", "url": "./assets/pain.jpg"},
    {"id": "9", "url": "./assets/naruto3.jpg"},
    {"id": "10", "url": "./assets/itachi3.jpg"},
    {"id": "11", "url": "./assets/naruto.jpg"},
    {"id": "12", "url": "./assets/kakashi2.jpg"},
    {"id": "13", "url": "./assets/naruto2.jpeg"},
]



const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);