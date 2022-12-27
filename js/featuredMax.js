import { postsData } from "./data.js"

function getFeaturedMaxPost(){
    let featuredPost = ``

    postsData.forEach(function(post){
        if (post.isFeatured) {
            featuredPost.innerHTML = `
                
            `
        }
    })

    return featuredPost
}

function renderFeaturedMaxPost(){
document.getElementById('featured-post').innerHTML = getFeaturedMaxPost()
}

renderFeaturedMaxPost()