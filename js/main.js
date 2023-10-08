var mySwiperCulture = new Swiper(".slider-container-culture", {
    parallax: true,
    speed: 800,
    effect: 'slide',
    direction: "vertical",
    autoplay: true,
    autoplay: {
        delay: 5500,
    },
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    lazy: true,
    on: {
        init: function() {
            this.el.addEventListener('mouseenter', function() {
                mySwiperCulture.autoplay.stop(); // Pause autoplay on hover
            });

            this.el.addEventListener('mouseleave', function() {
                mySwiperCulture.autoplay.start(); // Resume autoplay when not hovering
            });
        },
    },
});
var mySwipersatu = new Swiper('.fcosDua', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiperpagination1",
        clickable: true,
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false
    },
    speed: 1000,
    lazy: true,
    on: {
        init: function() {
            this.el.addEventListener('mouseenter', function() {
                mySwipersatu.autoplay.stop(); // Pause autoplay on hover
            });

            this.el.addEventListener('mouseleave', function() {
                mySwipersatu.autoplay.start(); // Resume autoplay when not hovering
            });
        },
    },
});

var mySwiperdua = new Swiper('.fcosSatu', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiperpagination2",
        clickable: true,
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false
    },
    speed: 1000,
    lazy: true,
    on: {
        init: function() {
            this.el.addEventListener('mouseenter', function() {
                mySwiperdua.autoplay.stop(); // Pause autoplay on hover
            });

            this.el.addEventListener('mouseleave', function() {
                mySwiperdua.autoplay.start(); // Resume autoplay when not hovering
            });
        },
    },
});

var mySwipertiga = new Swiper('.fcosTiga', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiperpagination3",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    speed: 1000,
    lazy: true,
    on: {
        init: function() {
            this.el.addEventListener('mouseenter', function() {
                mySwipertiga.autoplay.stop(); // Pause autoplay on hover
            });

            this.el.addEventListener('mouseleave', function() {
                mySwipertiga.autoplay.start(); // Resume autoplay when not hovering
            });
        },
    },
});
var mySwipernews = new Swiper('.fcosNews', {

    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    centeredSlides: true,


    navigation: {
        nextEl: ".swiper-navBtn-news-n",
        prevEl: ".swiper-navBtn-news-p",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 1,
        },


    },
    autoplay: {
        delay: 10000000,
        disableOnInteraction: false
    },
    speed: 1000,
    on: {
        init: function() {
            this.el.addEventListener('mouseenter', function() {
                mySwipernews.autoplay.stop(); // Pause autoplay on hover
            });

            this.el.addEventListener('mouseleave', function() {
                mySwipernews.autoplay.start(); // Resume autoplay when not hovering
            });
        },
    },
});

var mySwipergallery = new Swiper('.image-gallery-slider', {
    spaceBetween: 0,
    speed: 5000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,

    navigation: {
        nextEl: ".swiper-navBtn-news-n",
        prevEl: ".swiper-navBtn-news-p",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
    },
    on: {
        init: function() {
            this.el.addEventListener('mouseenter', function() {
                mySwipergallery.autoplay.stop(); // Pause autoplay on hover
            });

            this.el.addEventListener('mouseleave', function() {
                mySwipergallery.autoplay.start(); // Resume autoplay when not hovering
            });
        },
    },
});


// CULTURE JS


// BACKGROUND JS
const refreshDuration = 10000; // Duration for refreshing the animation
let refreshTimeout;
let numPointsX;
let numPointsY;
let unitWidth;
let unitHeight;
let points = [];

// Function to initialize the animation
function initializeAnimation() {
    // Create an SVG element and set its size to the window size
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', window.innerWidth);
    svg.setAttribute('height', window.innerHeight);
    document.querySelector('.bg').appendChild(svg);

    // Calculate unit sizes and number of points
    const unitSize = (window.innerWidth + window.innerHeight) / 15;
    numPointsX = Math.ceil(window.innerWidth / unitSize) + 1;
    numPointsY = Math.ceil(window.innerHeight / unitSize) + 1;
    unitWidth = Math.ceil(window.innerWidth / (numPointsX - 1));
    unitHeight = Math.ceil(window.innerHeight / (numPointsY - 1));

    // Generate initial points grid
    for (let y = 0; y < numPointsY; y++) {
        for (let x = 0; x < numPointsX; x++) {
            points.push({
                x: unitWidth * x,
                y: unitHeight * y,
                originX: unitWidth * x,
                originY: unitHeight * y
            });
        }
    }

    randomizePoints();
    createPolygons(svg);
    startAnimation();
}

// Function to randomize points' positions
function randomizePoints() {
    for (let i = 0; i < points.length; i++) {
        if (points[i].originX !== 0 && points[i].originX !== unitWidth * (numPointsX - 1)) {
            points[i].x = points[i].originX + Math.random() * unitWidth - unitWidth / 2;
        }
        if (points[i].originY !== 0 && points[i].originY !== unitHeight * (numPointsY - 1)) {
            points[i].y = points[i].originY + Math.random() * unitHeight - unitHeight / 2;
        }
    }
}

// Function to create SVG polygons and animations
function createPolygons(svg) {
    for (let i = 0; i < points.length; i++) {
        if (points[i].originX !== unitWidth * (numPointsX - 1) && points[i].originY !== unitHeight * (numPointsY - 1)) {
            createPolygonPair(svg, i);
        }
    }
}

// Function to create a pair of polygons with animations
function createPolygonPair(svg, i) {
    const topLeftX = points[i].x;
    const topLeftY = points[i].y;
    const topRightX = points[i + 1].x;
    const topRightY = points[i + 1].y;
    const bottomLeftX = points[i + numPointsX].x;
    const bottomLeftY = points[i + numPointsX].y;
    const bottomRightX = points[i + numPointsX + 1].x;
    const bottomRightY = points[i + numPointsX + 1].y;

    const rando = Math.floor(Math.random() * 2);

    for (let n = 0; n < 2; n++) {
        const polygon = document.createElementNS(svg.namespaceURI, 'polygon');

        if (rando === 0) {
            if (n === 0) {
                polygon.point1 = i;
                polygon.point2 = i + numPointsX;
                polygon.point3 = i + numPointsX + 1;
                polygon.setAttribute('points', `${topLeftX},${topLeftY} ${bottomLeftX},${bottomLeftY} ${bottomRightX},${bottomRightY}`);
            } else if (n === 1) {
                polygon.point1 = i;
                polygon.point2 = i + 1;
                polygon.point3 = i + numPointsX + 1;
                polygon.setAttribute('points', `${topLeftX},${topLeftY} ${topRightX},${topRightY} ${bottomRightX},${bottomRightY}`);
            }
        } else if (rando === 1) {
            if (n === 0) {
                polygon.point1 = i;
                polygon.point2 = i + numPointsX;
                polygon.point3 = i + 1;
                polygon.setAttribute('points', `${topLeftX},${topLeftY} ${bottomLeftX},${bottomLeftY} ${topRightX},${topRightY}`);
            } else if (n === 1) {
                polygon.point1 = i + numPointsX;
                polygon.point2 = i + 1;
                polygon.point3 = i + numPointsX + 1;
                polygon.setAttribute('points', `${bottomLeftX},${bottomLeftY} ${topRightX},${topRightY} ${bottomRightX},${bottomRightY}`);
            }
        }

        polygon.setAttribute('fill', `rgba(0,0,0,${Math.random() / 5})`);
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('fill', 'freeze');
        animate.setAttribute('attributeName', 'points');
        animate.setAttribute('dur', `${refreshDuration}ms`);
        animate.setAttribute('calcMode', 'linear');
        polygon.appendChild(animate);
        svg.appendChild(polygon);
    }
}

// Function to start the animation
function startAnimation() {
    randomizePoints();
    for (let i = 0; i < document.querySelector('.bg svg').childNodes.length; i++) {
        const polygon = document.querySelector('.bg svg').childNodes[i];
        const animate = polygon.childNodes[0];
        if (animate.getAttribute('to')) {
            animate.setAttribute('from', animate.getAttribute('to'));
        }
        animate.setAttribute('to', `${points[polygon.point1].x},${points[polygon.point1].y} ${points[polygon.point2].x},${points[polygon.point2].y} ${points[polygon.point3].x},${points[polygon.point3].y}`);
        animate.beginElement();
    }
    refreshTimeout = setTimeout(() => refreshAnimation(), refreshDuration);
}

// Function to refresh the animation
function refreshAnimation() {
    randomizePoints();
    for (let i = 0; i < document.querySelector('.bg svg').childNodes.length; i++) {
        const polygon = document.querySelector('.bg svg').childNodes[i];
        const animate = polygon.childNodes[0];
        if (animate.getAttribute('to')) {
            animate.setAttribute('from', animate.getAttribute('to'));
        }
        animate.setAttribute('to', `${points[polygon.point1].x},${points[polygon.point1].y} ${points[polygon.point2].x},${points[polygon.point2].y} ${points[polygon.point3].x},${points[polygon.point3].y}`);
        animate.beginElement();
    }
    refreshTimeout = setTimeout(() => refreshAnimation(), refreshDuration);
}

// Function to handle window resizing
function handleResize() {
    document.querySelector('.bg svg').remove();
    clearTimeout(refreshTimeout);
    initializeAnimation();
}

window.onload = initializeAnimation;
window.onresize = handleResize;

// CATEGORIES JS
const filterContents = document.querySelectorAll('.filtercontent');

function filterContent(category) {
    filterContents.forEach(content => {
        if (category === 'all' || content.classList.contains(category)) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}

// COLLAPSIBLE JS
const cultureButtons = document.querySelectorAll('.button-culture');
const cultureDescriptions = document.querySelectorAll('.hidden-content-culture');

cultureButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Toggle the display property of the corresponding culture-description
        if (cultureDescriptions[index].style.display === 'none' || cultureDescriptions[index].style.display === '') {
            cultureDescriptions[index].style.display = 'block';
            button.querySelector('h4').textContent = 'Show Less';
        } else {
            cultureDescriptions[index].style.display = 'none';
            button.querySelector('h4').textContent = 'Show More';
        }
    });
});