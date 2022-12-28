import { postsData } from "./data.js"

export function getPost() {
    let postHtml = ``

    postsData.forEach(function(post){
        if (post.isFeatured){
            post.data.forEach(function(article){

                let paragraphs = ``
                article.paragraphs.forEach(function(item){
                    paragraphs +=  `
                        <p class="featured-post__wrapper__article__desc">${item}</p>
                    `
                })

                postHtml += `
                    <div class="featured-post__wrapper__article">
                        <h2 class="featured-post__wrapper__article__heading lh1-25">${article.heading}</h2>        
                        ${paragraphs}
                    </div>
                `
            })
        }
    })

    return postHtml
}