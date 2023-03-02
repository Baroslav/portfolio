let offset  = 0;
let screanWidht = window.innerWidth;


const commentSlider = document.querySelector(".comment-slider");

document.addEventListener('click', documentClick) // burger open and close function

function documentClick(e) {
    const targetItem = e.target;
        
    if(targetItem.closest('.nav-burger')) {
        document.documentElement.classList.toggle('menu-open');
    }

}

const prev = () => {
    if(screanWidht <= 423) {
        offset+=308;
    }
    else if(screanWidht <= 697) {
        offset+=418;
    }
    else {
        offset+=678;
    }

    if(offset = 0) {
        offset = 0;
    }

    commentSlider.style.left=offset + "px";
}
const next = () => {
    if(screanWidht <= 423) {
        offset-=308;
    }
    else if(screanWidht <= 697) {
        offset-=418;
    }
    else {
        offset-=678;
    }

    if(offset < -1356) {
        offset = 0;
    }
    else if(offset < -836 && screanWidht <= 697) {
        offset = 0;
    }

    commentSlider.style.left = offset + "px";
}


document.querySelector(".prev").addEventListener("click" , prev);
document.querySelector(".next").addEventListener("click" , next);
