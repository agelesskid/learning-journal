import { postsData } from "./data.js"

function getPostWrapper() {
    let postWrapper = ``

    postsData.forEach(function(post){
        if (post.isFeatured){
            post.data.forEach(function(article){

                let paragraphs = ``
                article.paragraphs.forEach(function(item){
                    paragraphs +=  `
                        <p class="featured-post__wrapper__article__desc">${item}</p>
                    `
                })

                postWrapper += `
                    <div class="featured-post__wrapper__article" id="featured-post-article">
                        <h2 class="featured-post__wrapper__article__heading lh1-25">${article.heading}</h2>        
                        ${paragraphs}
                    </div>
                `
            })
        }
    })

    return postWrapper
}

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
document.getElementById('featured-post').innerHTML = getFeaturedMaxPost(getPostWrapper())
}

renderFeaturedMaxPost()