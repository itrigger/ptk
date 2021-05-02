let $quote = $(".split"),
    mySplitText = new SplitText($quote, {type: "words"}),
    splitTextTimeline = gsap.timeline();

gsap.set($quote, {perspective: 400});


mySplitText.split({type: "lines"})
splitTextTimeline.from(mySplitText.lines, {
    duration: 1,
    opacity: 0,
    rotationX: -120,
    force3D: true,
    transformOrigin: "top center -150",
    stagger: 0.1
});

/*let shapes = "polygon",
    tl = gsap.timeline({repeat:-1, yoyo:true});*/

/*tl.fromTo(shapes, {drawSVG:"0%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})
    .fromTo(shapes, {drawSVG:"100%"}, {duration: 0.1, drawSVG:"10%", immediateRender:false}, "+=0.1")
    .to(shapes, {duration: 1, drawSVG:"90% 100%", stagger: 0.5})
    .to(shapes, {duration: 1, rotation:360, scale:0.7, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
    .to(shapes, {duration: 0.5, stroke:"red", scale:1.5, opacity:0, stagger: 0.2})*/

let shapes = ".logo polygon",
    tl = gsap.timeline({repeat:-1, yoyo:true,repeatDelay:5});
tl.fromTo(shapes, {drawSVG:"0%", fill:"#A80010", stroke:"#A80010"}, {duration: 1, drawSVG:"50% 50%",stroke:"#A80010", stagger: 0.1})
    //.fromTo(shapes, {drawSVG:"100%"}, {duration: 0.1, drawSVG:"10%", immediateRender:false}, "+=0.1")
    .to(shapes, {duration: 0.5, drawSVG:"90% 100%", fill:"#ffffff", stroke: "#A80010", stagger: 0.5})
    .to(shapes, {duration: 2, scale:1, drawSVG:"100%", stroke:"#A80010", fill:"#ffffff",  transformOrigin:"50% 50%"})
    .to(shapes, {duration: 0.5, fill:"#A80010", scale:1, opacity:1,stroke:"#A80010", strokeWidth:"3", stagger: 0.2,})