let landing = document.querySelector('.landing')
let h2 = document.querySelector('.left h2');
let firstP = document.querySelector('.left p');
let firstButton = document.querySelector('.git-container');
let services = document.querySelector('.services');
let colOne = document.querySelector('.ser-content .col .one');
let colTwo = document.querySelector('.ser-content .col .two');
let colThree = document.querySelector('.ser-content .col .three');
let colFour = document.querySelector('.ser-content .col .four');
let portfolio = document.querySelector('.portfolio')
let cards = document.querySelectorAll('.portfolio .container .portfolio-content .card');
let footer = document.querySelector('footer');
let footerAbout = document.querySelectorAll('.new_footer_top .f_widget.about-widget .f_list li');
let fadeInLeft = document.querySelector('.new_footer_top .company_widget');
let footerBottom = document.querySelector('.footer_bottom');





window.onload = function() {
    h2.style.cssText = "transform: translateX(0px);"
    firstP.style.cssText = "transform: translateX(0px);"
    firstButton.style.cssText = "transform: translate(-50%, 553%);"
};

window.onscroll = () => {
    if (window.outerWidth >= 767) {
        if (window.scrollY >= services.offsetTop - 300) {
            colOne.style.cssText = "transform: translateY(0px)"
            colTwo.style.cssText = "transform: translateY(0px)"
            colThree.style.cssText = "transform: translateY(0px)"
            colFour.style.cssText = "transform: translateY(0px)"
        }else {
            colOne.style.cssText = "transform: translateY(-228px)"
            colTwo.style.cssText = "transform: translateY(228px)"
            colThree.style.cssText = "transform: translateY(-228px)"
            colFour.style.cssText = "transform: translateY(228px)"
        };
        if (window.scrollY >= portfolio.offsetTop - 300) {
            cards.forEach((e) => {
                e.style.cssText = "opacity: 1";
            });
        }else {
            cards.forEach((e) => {
                e.style.cssText = "opacity: 0";
            });
        };
        if (window.scrollY >= footer.offsetTop - 400) {
            footerAbout.forEach((e) => {
                e.style.cssText = "transform: translateX(0px)";
            });
            fadeInLeft.style.cssText = "transform: translateY(0px)"
        }else {
            footerAbout.forEach((e) => {
                e.style.cssText = "transform: translateX(-220px)";
            });
            fadeInLeft.style.cssText = "transform: translateY(-400px)"
        }
        if (window.scrollY >= footer.offsetTop - 400) {
            footerBottom.style.cssText = "transform: translateX(0%)"
        }else {
            footerBottom.style.cssText = "transform: translateX(100%)"
        }
    }
};

if (window.outerWidth <= 767) {
        colOne.style.cssText = "transform: translateY(0px)"
        colTwo.style.cssText = "transform: translateY(0px)"
        colThree.style.cssText = "transform: translateY(0px)"
        colFour.style.cssText = "transform: translateY(0px)"

        cards.forEach((e) => {
            e.style.cssText = "opacity: 1";
        });
        footerAbout.forEach((e) => {
            e.style.cssText = "transform: translateX(0px)";
        });
        fadeInLeft.style.cssText = "transform: translateY(0px)"

        footerBottom.style.cssText = "transform: translateX(0%)"

}