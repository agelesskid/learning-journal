import { postsData } from "./data.js"
import { getPost } from "./post.js"

function getFeaturedMaxPost(postWrapper){
    let featuredPost = ``

    postsData.forEach(function(post){
        if (post.isFeatured) {
            featuredPost = `
                <p class="featured-post__date lh1-25">${post.date}</p>
                <h1 class="featured-post__heading">${post.name}</h1>
                <p class="featured-post__desc lh1-25">${post.desc}</p>
                <img src="${post.img}" alt="${post.alt}">
                <div class="featured-post__wrapper">${postWrapper}</div>
            `
        }
    })

    return featuredPost
}

function renderFeaturedMaxPost(){
document.getElementById('featured-post').innerHTML = getFeaturedMaxPost(getPost())
}

renderFeaturedMaxPost()