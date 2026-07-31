const tl = gsap.timeline();

tl.to(".person",{

duration:3,

left:260,

ease:"power2.out"

})

.to(".person",{

duration:0.25,

rotation:10,

repeat:5,

yoyo:true

})

.to(".login",{

duration:1,

right:80,

opacity:1,

ease:"back.out(1.7)"

})

.from(".login h2",{

opacity:0,

y:-30,

duration:.5

})

.from(".input",{

opacity:0,

x:100,

stagger:.2

})

.from(".row",{

opacity:0

})

.from("button",{

scale:0,

duration:.5

});
