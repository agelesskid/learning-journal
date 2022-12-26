import { blogData } from "./data.js";

function getFeedHtml(){
    let feedHtml = ''

    blogData.forEach(function(blog){
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

renderFeed()