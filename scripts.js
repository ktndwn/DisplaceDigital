




const offset = 309

let designLink = document.getElementById('design-link')
let motionLink = document.getElementById('motion-link')
let selfLink = document.getElementById('self-link')

let design = document.getElementById('design')
let motion = document.getElementById('motion')
let self = document.getElementById('self')

let designScroll = design.offsetTop - offset
let motionScroll = motion.offsetTop - offset
let selfScroll = self.offsetTop - offset






designLink.addEventListener('click', scrollToDesign => {
    let designScroll = design.offsetTop - offset
    window.scroll ({
        top: designScroll,
        behavior: 'smooth'
    })
})
motionLink.addEventListener('click', scrollToMotion => {
    let motionScroll = motion.offsetTop - offset
    window.scroll ({
        top: motionScroll,
        behavior: 'smooth'
    })
})
selfLink.addEventListener('click', scrollToAbout => {
    let selfScroll = self.offsetTop - offset
    window.scroll ({
        top: selfScroll,
        behavior: 'smooth'
    })
})






let linkColorCheck = () => {
    let designScroll = design.offsetTop - offset
    let motionScroll = motion.offsetTop - offset
    let selfScroll = self.offsetTop - offset

    if (designScroll <= window.scrollY && window.scrollY < motionScroll) {
        designLink.classList.add('triggered')
        designLink.classList.remove('link')
    } else {
        designLink.classList.add('link')
        designLink.classList.remove('triggered')
    }
    if (motionScroll <= window.scrollY && window.scrollY < selfScroll) {
        motionLink.classList.add('triggered')
        motionLink.classList.remove('link')
    } else {
        motionLink.classList.add('link')
        motionLink.classList.remove('triggered')
    }
    
    if (selfScroll <= window.scrollY) {
        selfLink.classList.add('triggered')
        selfLink.classList.remove('link')
    } else {
        selfLink.classList.add('link')
        selfLink.classList.remove('triggered')
    }
}

window.addEventListener('scroll', linkColorCheck)

linkColorCheck()





let designOneLink = document.getElementById('design1')
let designOneDisplay = '<div id="display"><img src="assets/design/hyperledger1.jpg" alt=""></img><br><img src="assets/design/hyperledger2.jpg" alt=""></img><br><img src="assets/design/hyperledger3.jpg" alt=""></img><br><img src="assets/design/hyperledger4.jpg" alt=""></img></div>'

designOneLink.addEventListener('click', () => {
    if (document.getElementById('display') == undefined) {
        document.getElementById('content').insertAdjacentHTML('afterbegin', designOneDisplay)
    } else {
        document.getElementById('content').removeChild(display)
        document.getElementById('content').insertAdjacentHTML('afterbegin', designOneDisplay)
    }
    window.scroll ({
        top: 250,
        behavior: 'smooth'
    })
    document.getElementById('display').addEventListener('click', ()=> {
        document.getElementById('content').removeChild(display)
        window.scroll ({
            top: designScroll,
            behavior: 'smooth'
        })
    })
})

let designTwoLink = document.getElementById('design2')
let designTwoDisplay = '<div id="display"><img src="assets/design/synthwave.jpg" alt=""></img></div>'

designTwoLink.addEventListener('click', () => {
    if (document.getElementById('display') == undefined) {
        document.getElementById('content').insertAdjacentHTML('afterbegin', designTwoDisplay)
    } else {
        document.getElementById('content').removeChild(display)
        document.getElementById('content').insertAdjacentHTML('afterbegin', designTwoDisplay)
    }
    window.scroll ({
        top: 250,
        behavior: 'smooth'
    })
    document.getElementById('display').addEventListener('click', ()=> {
        document.getElementById('content').removeChild(display)
        window.scroll ({
            top: designScroll,
            behavior: 'smooth'
        })
    })
})

let designThreeLink = document.getElementById('design3')
let designThreeDisplay = '<div id="display"><img src="assets/design/missioncollective.png" alt=""></img></div>'

designThreeLink.addEventListener('click', () => {
    if (document.getElementById('display') == undefined) {
        document.getElementById('content').insertAdjacentHTML('afterbegin', designThreeDisplay)
    } else {
        document.getElementById('content').removeChild(display)
        document.getElementById('content').insertAdjacentHTML('afterbegin', designThreeDisplay)
    }
    window.scroll ({
        top: 250,
        behavior: 'smooth'
    })
    document.getElementById('display').addEventListener('click', ()=> {
        document.getElementById('content').removeChild(display)
        window.scroll ({
            top: designScroll,
            behavior: 'smooth'
        })
    })
})

let designFourLink = document.getElementById('design4')
let designFourDisplay = '<div id="display"><img src="assets/design/jupiter1.png" alt=""></img><br><img src="assets/design/jupiter2.png" alt=""></img><br><img src="assets/design/jupiter3.png" alt=""></img><br><img src="assets/design/jupiter4.png" alt=""></img></div>'

designFourLink.addEventListener('click', () => {
    if (document.getElementById('display') == undefined) {
        document.getElementById('content').insertAdjacentHTML('afterbegin', designFourDisplay)
    } else {
        document.getElementById('content').removeChild(display)
        document.getElementById('content').insertAdjacentHTML('afterbegin', designFourDisplay)
    }
    window.scroll ({
        top: 250,
        behavior: 'smooth'
    })
    document.getElementById('display').addEventListener('click', ()=> {
        document.getElementById('content').removeChild(display)
        window.scroll ({
            top: designScroll,
            behavior: 'smooth'
        })
    })
})

let designFiveLink = document.getElementById('design5')
let designFiveDisplay = '<div id="display"><img src="assets/design/shoprite1.jpg" alt=""></img><br><img src="assets/design/shoprite2.jpg" alt=""></img><br><img src="assets/design/shoprite3.jpg" alt=""></img></div>'

designFiveLink.addEventListener('click', () => {
    if (document.getElementById('display') == undefined) {
        document.getElementById('content').insertAdjacentHTML('afterbegin', designFiveDisplay)
    } else {
        document.getElementById('content').removeChild(display)
        document.getElementById('content').insertAdjacentHTML('afterbegin', designFiveDisplay)
    }
    window.scroll ({
        top: 250,
        behavior: 'smooth'
    })
    document.getElementById('display').addEventListener('click', ()=> {
        document.getElementById('content').removeChild(display)
        window.scroll ({
            top: designScroll,
            behavior: 'smooth'
        })
    })
})

let designSixLink = document.getElementById('design6')
let designSixDisplay = '<div id="display"><img src="assets/design/ethereum.jpg" alt=""></img></div>'

designSixLink.addEventListener('click', () => {
    if (document.getElementById('display') == undefined) {
        document.getElementById('content').insertAdjacentHTML('afterbegin', designSixDisplay)
    } else {
        document.getElementById('content').removeChild(display)
        document.getElementById('content').insertAdjacentHTML('afterbegin', designSixDisplay)
    }
    window.scroll ({
        top: 250,
        behavior: 'smooth'
    })
    document.getElementById('display').addEventListener('click', ()=> {
        document.getElementById('content').removeChild(display)
        window.scroll ({
            top: designScroll,
            behavior: 'smooth'
        })
    })
})

let designSevenLink = document.getElementById('design7')
let designSevenDisplay = '<div id="display"><img src="assets/design/particle.jpg" alt=""></div>' 

designSevenLink.addEventListener('click', () => {
    if (document.getElementById('display') == undefined) {
        document.getElementById('content').insertAdjacentHTML('afterbegin', designSevenDisplay)
    } else {
        document.getElementById('content').removeChild(display)
        document.getElementById('content').insertAdjacentHTML('afterbegin', designSevenDisplay)
    }
    window.scroll ({
        top: 250,
        behavior: 'smooth'
    })
    document.getElementById('display').addEventListener('click', ()=> {
        document.getElementById('content').removeChild(display)
        window.scroll ({
            top: designScroll,
            behavior: 'smooth'
        })
    })
})

let designEightLink = document.getElementById('design8')
let designEightDisplay = '<div id="display"><img src="assets/design/bc1.jpg" alt=""></img><br><img src="assets/design/bc2.jpg" alt=""></img></div>' 

designEightLink.addEventListener('click', () => {
    if (document.getElementById('display') == undefined) {
        document.getElementById('content').insertAdjacentHTML('afterbegin', designEightDisplay)
    } else {
        document.getElementById('content').removeChild(display)
        document.getElementById('content').insertAdjacentHTML('afterbegin', designEightDisplay)
    }
    window.scroll ({
        top: 250,
        behavior: 'smooth'
    })
    document.getElementById('display').addEventListener('click', ()=> {
        document.getElementById('content').removeChild(display)
        window.scroll ({
            top: designScroll,
            behavior: 'smooth'
        })
    })
})


//
// design 9 is a direct link
//





