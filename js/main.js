
// Pre-Loader
// var loader = document.getElementById("preLoader");

// window.addEventListener("load", function(){
    // loader.style.display= "none";
// });

// Iphone-x-4
gsap.to(".rocket1",{
    scrollTrigger: {
        trigger: "#iphone-x-4",
        start: "top center",
        scrub: 1,
        // markers: true
    },
    y: -50,
    ease: "none",
    duration: 3
});
// Iphone-x-4

// Iphone-x-horizontal
gsap.to(".rocket2",{
    scrollTrigger: {
        trigger: "#iphone-x-horizontal",
        start: "top center",
        scrub: 1,
        // markers: true
    },
    y: -50,
    ease: "none",
    duration: 3
});
// Iphone-x-horizontal

// Iphone-with-colors
gsap.to(".rocket3",{
    scrollTrigger: {
        trigger: "#iphone-x-color",
        start: "top center",
        scrub: 1,
        // markers: true
    },
    y: -50,
    ease: "none",
    duration: 3
});
// Iphone-with-colors

// slick-line-Iphone-x-horizontal
gsap.to(".slick-line1",{
    scrollTrigger: "#iphone-x-horizontal",
    width: "100%",
    ease: "none",
    duration: 1
});
// slick-line-Iphone-x-horizontal

// slick-line-line-animation
gsap.to(".slick-line2",{
    scrollTrigger: {
        trigger: "#line-animation",
        start: "top center",
        // markers: true
    },
    width: "100%",
    ease: "none",
    duration: 1
});
// slick-line-line-animation