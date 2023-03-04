let offset = 0;

const commentCaurusel = document.querySelector(".comments-slider");
const blogCaurusel = document.querySelector(".blog-slider");

const prevCommentBtn = document.querySelector(".comment-prev");
const nextCommentBtn = document.querySelector(".comment-next");

const prevBlogItemBtn = document.querySelector(".blog-prev");
const nextBlogItemBtn = document.querySelector(".blog-next");
const screenWidth = window.innerWidth;


document.addEventListener('click', documentClick) // burger open and close function

function documentClick(e) {
    const targetItem = e.target;
        
    if(targetItem.closest('.nav-burger')) {
        document.documentElement.classList.toggle('menu-open');
    }

}




const prevComment = () => {

    if(screenWidth < 767.98) {
        offset+=100;
    }
    else{
        offset +=50; 
    }

    if(offset > 0) {
        offset = 0;
    }

    commentCaurusel.style.left = offset + "%";
}

const nextComment = () => {
    if(screenWidth < 767.98) {
        offset-=100;
    }
    else {
        offset -=50; 
    }

    if(screenWidth > 767.98 && offset <-50) {
        offset = 0;
    }
    else if(screenWidth < 767.98 && offset <-201) {
        offset=0;
    }
    
    commentCaurusel.style.left = offset + "%";
}


const prevBlogItem = () => {
    if(screenWidth < 575.98) {
        offset += 100;
    }
    else {
        offset +=50
    }

    if(offset > 0) {
        offset = 0;
    }

    blogCaurusel.style.left = offset + "%";
}

const nextBlogItem = () => {
    if(screenWidth < 575.98) {
        offset -= 100;
    }
    else {
        offset -=50;
    }
    if(screenWidth < 575.98 && offset < -200) {
        offset = 0;
    }
    else if (screenWidth > 575.98 && offset < -50) {
        offset = 0;
    }
    
    blogCaurusel.style.left = offset + "%";
}



prevCommentBtn.addEventListener("click" , prevComment);
nextCommentBtn.addEventListener("click" , nextComment);

prevBlogItemBtn.addEventListener("click" , prevBlogItem);
nextBlogItemBtn.addEventListener("click" , nextBlogItem);
