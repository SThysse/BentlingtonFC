let tl = gsap.timeline({
    scrollTrigger: {
        trigger:  '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:  '.home',
        start: '0%',
        end: '60%',
        scrub: 1,
    },
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger:  '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

tl.fromTo('.sliding-text', {y: 0}, {y: -400});
tl2.fromTo('.logo', {scale: 6}, {scale: 1, top: '2rem', left: '3rem', x: '50%', y: '30%'});
tl4.fromTo('.square', {left: '70%'}, {left:'100%', opacity:'0', rotation: '90',});


//Pinning timeline messes with animations, always put at the bottom//
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger:  '.home',
        start: '0%',
        end: '250%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});
