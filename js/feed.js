import { postsData } from "./data.js";

let blogLength = 3

if(window.matchMedia("(min-width: 1085px)").matches) {
    blogLength = 6
} else {
    blogLength = 3
}

function getFeedArray(){
    const feedArr = []

    for (let i = 0; i < blogLength; i++){
        feedArr.push(postsData[i])
    }

    return feedArr
}

function getFeedHtml(){
    let feedHtml = ''

    getFeedArray().forEach(function(post){
        feedHtml += `
            <li>
                <img src="${post.img}" alt="${post.alt}">
                <p class="blog__date">${post.date}</p>
                <h2 class="blog__heading">${post.name}</h2>
                <p class="blog__desc">${post.desc}</p>
            </li>
        `
    })

    return feedHtml
}

function renderFeed(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

document.addEventListener('click', function(e){
    if (e.target.id == 'more-btn'){
        if (postsData.length > blogLength && (postsData.length - blogLength) >= 3){
            blogLength += 3
        } else if (postsData.length > blogLength && (postsData.length - blogLength) < 3){
            blogLength += (postsData.length - blogLength)
        } else if (postsData.length == blogLength) {
            const btn = document.getElementById('more-btn')

            btn.style.textDecoration = 'none'
            btn.style.cursor = 'default'
            btn.style.color = '#10B981'
            btn.innerText = 'All rendered!'
        }
        renderFeed()
    }
})


renderFeed()