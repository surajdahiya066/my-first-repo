// var tl=gsap.timeline()
// tl


gsap.from(".nav-link,.nav-icon", {
    opacity: 0,
    y: -100,
    duration: 2,
    stagger: 0.8

})
    gsap.from(".left p,.left h1,.left #left-p,.left button", {
        opacity: 0,
        y: 100,
        duration: 2,
        stagger: 0.3
    })


    //     })
    gsap.from(".scrol", {
        opacity: 0,
        x: 500,
        duration: 2
    })