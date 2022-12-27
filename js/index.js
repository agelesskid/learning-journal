import { blogData } from "./data.js";
import { featuredPost } from "./data.js";

let blogLength = 3

if(window.matchMedia("(min-width: 1085px)").matches) {
    blogLength = 6
} else {
    blogLength = 3
}

function getFeaturedPostHtml(){
    let featuredPostHtml = `
        <div class="featured__wrapper flex-column">
            <p class="featured__wrapper__date lh1-25">${featuredPost.date}</p>
            <h2 class="featured__wrapper__heading"><a href="${featuredPost.href}">${featuredPost.name}</a></h2>
            <p class="featured__wrapper__desc lh1-25">${featuredPost.desc}</p>
        </div>
    `
    return featuredPostHtml
}

function getFeaturedPostBackground() {
    let featuredPostBackground = `url("${featuredPost.img}") center center / cover no-repeat;`

    return featuredPostBackground
}

function getFeedArray(){
    const feedArr = []

    for (let i = 0; i < blogLength; i++){
        feedArr.push(blogData[i])
    }

    return feedArr
}

function getFeedHtml(){
    let feedHtml = ''

    getFeedArray().forEach(function(blog){
        feedHtml += `
            <li>
                <img src="${blog.img}" alt="${blog.alt}">
                <p class="blog__date">${blog.date}</p>
                <h2 class="blog__heading">${blog.name}</h2>
                <p class="blog__desc">${blog.desc}</p>
            </li>
        `
    })

    return feedHtml
}

function renderFeed(){
    
    document.getElementById('feed').innerHTML = getFeedHtml()
}

function renderFeaturedPost(){
    const featured = document.getElementById('featured')
    
    featured.style.background = getFeaturedPostBackground()
    featured.innerHTML = getFeaturedPostHtml()
}

function render(){
    renderFeed()
    renderFeaturedPost()
}

document.addEventListener('click', function(e){
    if (e.target.id == 'more-btn'){
        if (blogData.length > blogLength && (blogData.length - blogLength) >= 3){
            blogLength += 3
        } else if (blogData.length > blogLength && (blogData.length - blogLength) < 3){
            blogLength += (blogData.length - blogLength)
        } else if (blogData.length == blogLength) {
            let btn = document.getElementById('more-btn')

            btn.style.textDecoration = 'none'
            btn.style.cursor = 'default'
            btn.style.color = '#10B981'
            btn.innerText = 'all rendered!'
        }
        renderFeed()
    }
})


render()