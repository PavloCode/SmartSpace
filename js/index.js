'use strict';
// links
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};





// Slider
const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.button-prev',
        prevEl: '.button-next',
    },
    speed: 2000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        991.98: {
            slidesPerView: 1,

        },
        633: {
            slidesPerView: 1.4,

        }
    }
});


// modal window
const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector('.modal-window-close');
const img = document.querySelector('.modal-window-image');
const gallary = document.querySelector('.portfolio-gallary');





// create gallary
let arr = [{
        "name": "residental",
        "preview": ['./img/portfolio/4/preview/1.jpg', './img/portfolio/4/preview/2.jpg', './img/portfolio/4/preview/3.jpg', './img/portfolio/4/preview/4.jpg', './img/portfolio/4/preview/5.jpg', './img/portfolio/4/preview/6.jpg'],
        "full": ['./img/portfolio/4/full/1.jpg', './img/portfolio/4/full/2.jpg', './img/portfolio/4/full/3.jpg', './img/portfolio/4/full/4.jpg', './img/portfolio/4/full/5.jpg', './img/portfolio/4/full/6.jpg']

    },
    {
        "name": "commercial",
        "preview": ['./img/portfolio/3/preview/1.jpg', './img/portfolio/3/preview/2.jpg', './img/portfolio/3/preview/3.jpg', './img/portfolio/3/preview/4.jpg', './img/portfolio/3/preview/5.jpg'],
        "full": ['./img/portfolio/3/full/1.jpg', './img/portfolio/3/full/2.jpg', './img/portfolio/3/full/3.jpg', './img/portfolio/3/full/4.jpg', './img/portfolio/3/full/5.jpg']
    },
    {
        "name": "agriculture",
        "preview": ['./img/portfolio/2/preview/1.jpg', './img/portfolio/2/preview/2.jpg', './img/portfolio/2/preview/3.jpg', './img/portfolio/2/preview/4.jpg', './img/portfolio/2/preview/5.jpg'],
        "full": ['./img/portfolio/2/full/1.jpg', './img/portfolio/2/full/2.jpg', './img/portfolio/2/full/3.jpg', './img/portfolio/2/full/4.jpg', './img/portfolio/2/full/5.jpg']
    },
    {
        "name": "industrial",
        "preview": ['./img/portfolio/1/preview/1.jpg', './img/portfolio/1/preview/2.jpg', './img/portfolio/1/preview/3.jpg', './img/portfolio/1/preview/4.jpg', './img/portfolio/1/preview/5.jpg', './img/portfolio/1/preview/6.jpg'],
        "full": ['./img/portfolio/1/full/1.jpg', './img/portfolio/1/full/2.jpg', './img/portfolio/1/full/3.jpg', './img/portfolio/1/full/4.jpg', './img/portfolio/1/full/5.jpg', './img/portfolio/1/full/6.jpg']
    },
]

const preview = document.querySelector('.portfolio-images');

// first create
function createItems(obj) {
    for (let item of obj) {
        if (item.name == 'residental') {
            for (let value of item.preview) {
                let li = document.createElement('li');
                li.classList.add('portfolio-image');
                let img = document.createElement('img');
                img.classList.add('image');
                img.setAttribute('src', value);
                img.setAttribute('alt', item.name);
                preview.append(li);
                li.append(img);
            }
        }
    }
    return obj;
}
createItems(arr);



// create items gallary
function create(obj, name) {
    preview.innerHTML = '';
    for (let item of obj) {
        if (item.name == name) {
            for (let value of item.preview) {
                let li = document.createElement('li');
                li.classList.add('portfolio-image');
                let img = document.createElement('img');
                img.classList.add('image');
                img.setAttribute('src', value);
                img.setAttribute('alt', item.name);
                preview.append(li);
                li.append(img);
            }
        }
    }
    return obj;
}

// show all images not random
const showAll = document.querySelector('.portfolio-button');
showAll.addEventListener('click', showAllfunction);

function showAllfunction() {
    preview.innerHTML = '';

    for (let item of arr) {

        for (let value of item.preview) {

            let li = document.createElement('li');
            li.classList.add('portfolio-image');
            let img = document.createElement('img');
            img.classList.add('image');
            img.setAttribute('src', value);
            img.setAttribute('alt', item.name);
            preview.append(li);
            li.append(img);
        }
    }
    const links = document.querySelectorAll('.portfolio-link');
    links.forEach(element => {
        if (element.classList.contains('active')) element.classList.remove('active');
    });
    return arr;
}
// ramdom
function showAllfunction2() {
    preview.innerHTML = '';
    let arrNew = [];
    for (let item of arr) {
        for (let value of item.images) {
            arrNew.push(value)
        }
    }
    arrNew.sort(() => Math.random() - 0.5);
    for (let value of arrNew) {
        let li = document.createElement('li');
        li.classList.add('portfolio-image');
        let img = document.createElement('img');
        img.classList.add('image');
        img.setAttribute('src', value);
        preview.append(li);
        li.append(img);

    }

    const links = document.querySelectorAll('.portfolio-link');
    links.forEach(element => {
        if (element.classList.contains('active')) element.classList.remove('active');
    });
    return arr;
}

// menu link
const menuLinks = document.querySelector('.portfolio-list');
menuLinks.addEventListener('click', activeMenu);


function activeMenu(event) {
    const target = event.target;
    const nodeName = target.nodeName;
    if (nodeName !== 'P') return;
    const links = document.querySelectorAll('.portfolio-link');
    links.forEach(element => {
        if (element.classList.contains('active')) element.classList.remove('active');
    });
    target.classList.add('active');

    create(arr, target.getAttribute('name'));

}

// modal window open
const portfolioImages = document.querySelector('.portfolio-images');
portfolioImages.addEventListener('click', function(event) {
    const target = event.target;
    const nodeName = target.nodeName;

    if (!target.closest('.portfolio-image')) return;
    const card = target.closest('.portfolio-image');

    modalWindow.classList.toggle('show-modal-window');

    const targetImg = card.querySelector('.image').getAttribute('src');
    let activeLink = card.querySelector('.image').getAttribute('alt');
    console.log(activeLink);
    let targetFull = createModalwindowImage(arr, activeLink, targetImg);
    img.setAttribute('src', targetFull);

    if (modalWindow.classList.contains('show-modal-window')) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
});

// close modal window
modalWindow.addEventListener('click', function({ target }) {
    if (target.classList.contains('modal-window-close') ||
        target.classList.contains('modal-body')) {
        modalWindow.classList.toggle('show-modal-window');
        document.body.style.overflow = "";
    }
});


function createModalwindowImage(obj, name, targetLink) {
    let count = 0;

    for (let item of obj) {
        if (item.name == name) {

            for (let value of item.preview) {
                count += 1;
                if (value == targetLink) {
                    return item.full[count - 1];
                }
            }
        }
    }


}