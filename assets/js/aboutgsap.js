// gsap.from("#h1", {
//     duration: 1,
//     y: 50,         // Start 50px below their original position
//     opacity: 0,    // Start invisible
//     stagger: 0.3,  // Animate each item with a 0.3-second gap
//     ease: "power3.out", // Smooth easing
//   });
  
//   gsap.from("#a1",{
//     duration: 1,
//     x: 50,    
//     delay:0.1,         
//     stagger:0.3,
 
//   })

  const tl = gsap.timeline({ defaults: { duration: 1, delay:0.8, ease: "power3.out" } });

  // Animate each list item sequentially using the timeline
  tl.from("#h1", {
    y: 50,         // Start 50px below their final position
    opacity: 0,    // Start invisible
    stagger: 0.3   // Adds 0.3 seconds delay between each animation
  })
  .to("#h1", {
    scale: 1,    // Slightly scale up each item
    duration: 0.5, // Faster duration
    stagger: 0.2   // Overlap the scaling effect
  });

