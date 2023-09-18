let tl=gsap.timeline()
tl.from(".logo ,.nav-item",{
    y:-100,
    duration:1,
    delay:1
})
tl.from(".image",{
    x:20,
    opacity:0,
    scale:3,
    duration:1,
    delay:1
})
tl.from(".title",{
    opacity:0,
    scale:2,
   
})