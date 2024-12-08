gsap.from("#a1",{
 x:100,
 duration:1.5,
 delay:0.5,
 opacity:0,
 stagger: 0.1
 
 

})


gsap.from("#a2",{
    x:-10,
    opacity:0.8,
    duration:0.5,
    scale:0.90,
    scrollTrigger:{
        trigger:"#a2",  
        scroll:"body",
        scrub:1,

    }
})
gsap.from("#a4",{
    x:-10,
    opacity:0.8,
    duration:0.5,
    scale:0.90,
    scrollTrigger:{
        trigger:"#a4",  
        scroll:"body",
        scrub:1,

    }
})
gsap.from("#a5",{
    x:-10,
    opacity:0.8,
    duration:0.5,
    scale:0.90,
    scrollTrigger:{
        trigger:"#a5",  
        scroll:"body",
        scrub:1,

    }
})
gsap.from("#a6",{
    x:-10,
    opacity:0.8,
    duration:0.5,
    scale:0.90,
    scrollTrigger:{
        trigger:"#a6",  
        scroll:"body",
        scrub:1,

    }
})
gsap.from("#a7",{
    x:-10,
    opacity:0.8,
    duration:0.5,
    scale:0.90,
    scrollTrigger:{
        trigger:"#a7",  
        scroll:"body",
        scrub:1,

    }
})
gsap.from("#a8",{
    x:-10,
    opacity:0.8,
    duration:0.5,
    scale:0.90,
    scrollTrigger:{
        trigger:"#a8",  
        scroll:"body",
        scrub:1,

    }
})
gsap.from("#a9",{
    x:-10,
    opacity:0.8,
    duration:0.5,
    scale:0.90,
    scrollTrigger:{
        trigger:"#a9",  
        scroll:"body",
        scrub:1,

    }
});
gsap.from(".header-area",{
    opacity: "1",
    y: "-10",
    backgroundColor: "transparent",
    position: "relative",
    
});
gsap.to(".header-area", {
    y: "0",
    opacity: 1,
    position: "fixed",
    backgroundColor: "#000000c5",
    backdropFilter: "blur(12px)",
    zIndex: "9",
    scrollTrigger: {
        trigger: ".elementtrigger",
        start: "top 20%",
        scroller: "body",
        // markers:true,    
        scrub: true,
    }
})




