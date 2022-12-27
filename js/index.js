import { blogData } from "./data.js";

let blogLength = 3

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

document.addEventListener('click', function(e){
    if (e.target.id == 'more-btn'){
        if (blogData.length > blogLength && (blogData.length - blogLength) >= 3){
            blogLength += 3
        } else if (blogData.length > blogLength && (blogData.length - blogLength) < 3){
            blogLength += (blogData.length - blogLength)
        }
        renderFeed()
    }
})

renderFeed()