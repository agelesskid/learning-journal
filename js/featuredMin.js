import { postsData } from "./data.js"

function getFeaturedMinPost(){
    let featuredPost = {
        html: ``,
        background: ``,
    }

    postsData.forEach(function(post){
        if (post.isFeatured) {
            featuredPost.html = `
                <div class="featured__wrapper flex-column">
                    <p class="featured__wrapper__date lh1-25">${post.date}</p>
                    <h2 class="featured__wrapper__heading"><a href="./featured.html">${post.name}</a></h2>
                    <p class="featured__wrapper__desc lh1-25">${post.desc}</p>
                </div>
            `
            featuredPost.background = `url(".${post.img}") center center / cover no-repeat;`
        }
    })

    return featuredPost
}

function renderFeaturedMinPost(){
    const featured = document.getElementById('featured')
    
    featured.style.background = getFeaturedMinPost().background
    featured.innerHTML = getFeaturedMinPost().html
}

renderFeaturedMinPost()