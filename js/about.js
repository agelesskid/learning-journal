import { getPost } from "./post.js"

function getFeaturedWrapper(post) {
    document.querySelector('.featured-post__wrapper').innerHTML = `${post}`
}

getFeaturedWrapper(getPost())