import * as flsFunctions from './modules/functions.js';
import * as burger from './modules/burger.js';
import * as menuAccordion from './modules/menuAccordion.js';
import * as hero from './modules/hero.js';
import * as companiesSlider from './modules/companiesSlider.js';
import * as phoneMask from './modules/phoneMask.js';
import * as rangeInput from './modules/rangeInput.js';
import * as mediaAbout from './modules/mediaAbout.js';
import * as calculator from './modules/calculator.js';
import * as tabs from './modules/tabs.js';
import * as certificates from './modules/certificates.js';
import * as galleryPopup from './modules/galleryPopup.js';
import * as select from './modules/select.js';
import * as showcase from './modules/showcase.js';
import * as breadcrumbs from './modules/breadcrumbs.js';
import * as canBeInteresting from './modules/canBeInteresting.js';
import * as articles from './modules/articles.js';
import * as tree from './modules/tree.js';
import * as modal from './modules/modal.js';


flsFunctions.isWebp()


$(".droplist").on("mouseleave", function() {
    if ($(".nav").is(":hover") && $(".droplist-open:hover").has($(this)).length == 0) {
        return
    }
    $(this).css("display", "flex")
    setTimeout(() => {
        if (!$(this).is(":hover") && !$(".nav").is(":hover")) {
            $(this).animate({opacity: 0}, 100)
        }
    }, 500)
    setTimeout(() => {
        $(this).css("display", "").css("opacity", "")
    }, 1000)
})

$(".cookies__close").click(function() {
    $(this).parents(".cookies").hide()
})

// $(".droplist-open").on("mouseleave", function() {
//     console.log("leave")
//     $(this).find(".droplist").css("display", "flex")
//     setTimeout(() => {
//         if (!$(this).find(".droplist") && !$(".nav").is(":hover")) {
//             $(this).animate({opacity: 0}, 500)
//         }
//     }, 200)
//     setTimeout(() => {
//         $(this).find(".droplist").css("display", "").css("opacity", "")
//     }, 1000)
// })