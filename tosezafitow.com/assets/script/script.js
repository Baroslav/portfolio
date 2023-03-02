$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.navBar_menu').toggleClass('active')
    })
})


if (window.matchMedia("(max-width: 992px)").matches) {
    $('.subBlogPostSectionMobile').slick({
     dots: false,
     infinite: true,
     speed: 300,
     arrows: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     centerMode: true,
 });
} 

$(document).ready(function() {
    $('.tableNav').click(function(event) {
        $('.sabMenu,.tableOfContentArrow').toggleClass('active')
    })
})



$(document).ready(function() {
    $('.categoriTabsInterviews').click(function(event) {
        $('.categori_sab_sab_menuInterviews,.categoriTabsImgInterviews').toggleClass('active')
    })
})

$(document).ready(function() {
    $('.categoriTabsFitness').click(function(event) {
        $('.categori_sab_sab_menuFitness,.categoriTabsImgFitness ').toggleClass('active')
    })
})

$(document).ready(function() {
    $('.categoriTabsFitnessNews').click(function(event) {
        $('.categori_sab_sab_menuFitnessNews,.categoriTabsImgFitnessNews ').toggleClass('active')
    })
})