gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
		wrapper: '.outer-wrapper',
		content: '.bek-content',
		smooth: 1.5,
		effects: true
	})




let itemsT = gsap.utils.toArray('.bek__top .bek__item')

itemsT.forEach(item =>{
    gsap.fromTo(item, {y: 100, opacity:1}, {
        opacity: 1, y:0,
        scrollTrigger: {
        trigger: item,
        start:'-800',
      
        scrub: true
        }
    })
})
let itemsT2 = gsap.utils.toArray('.bek__top2 .bek__item')

itemsT2.forEach(item =>{
    gsap.fromTo(item, {y: 120, opacity:.6}, {
        opacity: 1, y:0,
        scrollTrigger: {
        trigger: item,
        start:'-1000',
      
        scrub: true
        }
    })
})
let itemsL = gsap.utils.toArray('.bek__left .bek__item')

itemsL.forEach(item =>{
    gsap.fromTo(item, {x: -400, opacity:0.9}, {
        opacity: 1, x:0,
        scrollTrigger: {
        trigger: item,
        start:'-800',
        end:'-100',
        scrub: true
        }
    })
})
let itemsL2 = gsap.utils.toArray('.bek__left .bek__item2')

itemsL2.forEach(item =>{
    gsap.fromTo(item, {x:0, opacity:0.5, rotate:0 , y:-100 ,scale:1}, {
        opacity: 1, x:-200, rotate:30, y:200, scale:0.8,
        scrollTrigger: {
        trigger: item,
        start:'-800',
        end:'0',
        scrub: true
        }
    })
})



let itemsr = gsap.utils.toArray('.bek__right .bek__item')

itemsr.forEach(item =>{
    gsap.fromTo(item, {x: 400, opacity:0.5}, {
        opacity: 1, x:0,
        scrollTrigger: {
        trigger: item,
        start:'-800',
        end:'-100',
        scrub: true
        }
    })
})

// ******* for canist ******* ////////////

// #1
let itemt1 = gsap.utils.toArray('.bek__left h2')

itemt1.forEach(item =>{
    gsap.fromTo(item, {x: -500, opacity:0}, {
        opacity: 1, x:0,
        scrollTrigger: {
        trigger: item,
        start:'-1000',
          end:'-500',
        scrub: true
        }
    })
})

// #2
let itemt2 = gsap.utils.toArray('.bek__right h2')

itemt2.forEach(item =>{
    gsap.fromTo(item, {x: 500, opacity:0}, {
        opacity: 1, x:0,
        scrollTrigger: {
        trigger: item,
        start:'-1000',
        end:'0',
        scrub: true
        }
    })
})



// ******* for canist ******* ////////////


}
