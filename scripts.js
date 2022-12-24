
const sliderData = [{
    desktop: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    mobile: '',
    content: ` 
    <h1> lorem Ipsum 1 </h1>
    <p>lorem ipsum</p>
    <a class='see-btn'>See more </a>
    `
}, {
    desktop: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    mobile: '',
    content: ` 
    <h1> lorem Ipsum 2 </h1>
    <p>lorem ipsum</p>
    <a class='see-btn'>See more </a>
    `
},
{
    desktop: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    mobile: '',
    content: ` 
    <h1> lorem Ipsum 3 </h1>
    <p>lorem ipsum</p>
    <a class='see-btn'>See more </a>
    `
}]

let initialImg = sliderData[0].desktop
let slider = document.querySelector('#slider')
let bannerContent = document.createElement('div')
bannerContent.className = 'slide-text'
slider.className = 'slide-0'
bannerContent.innerHTML = sliderData[0].content
slider.appendChild(bannerContent)
slider.style.cssText = `
background-image: url(${initialImg});
`
let slideClass = ''
let sliderCount = 0
let slideLength = sliderData.length

let prevBtn = document.querySelector('.prev')
let slideText = document.querySelector(".slide-text")
prevBtn.addEventListener('click', function () {
    sliderCount--
    if (sliderCount < 0) {
        sliderCount = slideLength - 1
    }
    slideClass = `slide-${sliderCount}`
    console.log(sliderCount)
    slider.style.backgroundImage = `url(${sliderData[sliderCount].desktop})`
    slideText.innerHTML = sliderData[sliderCount].content
    slider.className = slideClass
    slideText.style.cssText = `padding: 40px 60px;`
    setTimeout(() => {
        slideText.style.cssText = ``
    }, 1000)

})

let nextBtn = document.querySelector('.next')
nextBtn.addEventListener('click', function (el) {
    sliderCount++

    if (sliderCount >= slideLength) {
        sliderCount = 0
    }
    slideClass = `slide-${sliderCount}`
    console.log(sliderCount)
    slider.className = slideClass
    slideText.innerHTML = sliderData[sliderCount].content
    slider.style.backgroundImage = `url(${sliderData[sliderCount].desktop})`
    slideText.style.cssText = `padding: 40px 60px;`
    setTimeout(() => {
        slideText.style.cssText = ``
    }, 1000)


})


let productsData = [
    {
        "title": "lorem ipsum",
        "images": [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "https://www.guiatenis.com/wp-content/uploads/2017/06/Nike-Free-RN-FlyKnit-2017-Feminino.jpg"
        ],
        "description": "lorem lorem",
        "price": 199.99
    },
    {
        "title": "lorem ipsum",
        "images": [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80",
            "https://www.guiatenis.com/wp-content/uploads/2017/06/Nike-Free-RN-FlyKnit-2017-Feminino.jpg"
        ],
        "description": "lorem lorem",
        "price": 899.99
    },
    {
        "title": "lorem ipsum",
        "images": [
            "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80",
            "https://www.guiatenis.com/wp-content/uploads/2017/06/Nike-Free-RN-FlyKnit-2017-Feminino.jpg"
        ],
        "description": "lorem lorem",
        "price": 299.99
    },
    {
        "title": "lorem ipsum",
        "images": [
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
            "https://www.guiatenis.com/wp-content/uploads/2017/06/Nike-Free-RN-FlyKnit-2017-Feminino.jpg"
        ],
        "description": "lorem lorem",
        "price": 599.99
    }
]


productsData.forEach((e, i) => {
    let pCard = document.createElement('div')
    pCard.className = 'product-card'
    pCard.innerHTML = `
                        <div class='product'>
                           <img data-position='${i}' src=${e.images[0]}/>
                        </div>
                        <div class='product-info'>
                            <div class='flex-center-align s-between'>
                                <h4>${e.title} </h4>
                                <i class='fav-icon'> </i>
                            </div>
                            <p> ${e.description}</p>
                            <span class='product-price'>$${e.price} </span>
                        </div>
                        `
    document.querySelector('.product-grid').appendChild(pCard)

})

document.querySelectorAll('.fav-icon').forEach((e) => {
    let favorite = false
    e.addEventListener('click', function (el) {

        if (favorite) {
            el.target.style.cssText = `
        `
        }
        else {
            el.target.style.cssText = `
            opacity:1;
            font-weight: bold !important;
            `
        }
        favorite = !favorite
    })
})

document.querySelectorAll('.product > img').forEach((e) => {

    let productIndex = e.getAttribute("data-position")

    e.addEventListener('mouseenter', function (el) {
        if (productsData[productIndex].images.length > 1) {
            el.target.src = productsData[productIndex].images[1]
            el.target.style.opacity = 1
        }

    })
    e.addEventListener('mouseleave', function (el) {
        if (el.target.src !== productsData[productIndex].images[0]) {
            el.target.src = productsData[productIndex].images[0]
        }
    })
})

let active = false;
let mobileMenu = document.querySelector('#mobile-menu')
let mobileUL = document.querySelector('#mobile-menu > ul')

document.querySelector('.burger-icon').addEventListener('click', function () {

    if (active) {
        mobileMenu.style.visibility = ''
        mobileUL.style.height = ''
        mobileUL.style.width = ''
        mobileMenu.style.width = ''
        mobileUL.style.opacity = 0
        document.querySelector('body').style.overflow = ''
    } else {
        document.querySelector('body').style.overflow = 'hidden'
        mobileMenu.style.visibility = 'visible'
        mobileUL.style.height = '100vh'
        mobileMenu.style.width = '100vw'
        mobileUL.style.opacity = 1
    }
    active = !active

})

window.addEventListener('resize', function () {
    if (active && window.innerWidth > 991) {
        mobileMenu.style.visibility = ''
        mobileUL.style.height = ''
        document.querySelector('body').style.overflow = ''
        active = false
    }
})