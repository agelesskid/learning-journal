import { postsData } from "./data.js"

function getFeaturedPostMax(){
    let featuredPost = ``

    postsData.forEach(function(post){
        if (post.isFeatured) {
            featuredPost.innerHTML = `
                
            `
        }
    })

    return featuredPost
}

function renderFeaturedPostMax(){
document.getElementById('featured').innerHTML = getFeaturedPostMax().html
}

renderFeaturedPostMax()