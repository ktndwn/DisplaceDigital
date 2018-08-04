


let linkWithoutTitle = '<div class="link" id="showcase-link">SHOWCASE</div><h1 id="placeholder-title">Displace Digital</h1><div class="link" id="contact-link">CONTACT</div>'
let linkWithTitle = '<div class="link" id="showcase-link">SHOWCASE</div><h1 class="link" id="title-link">Displace Digital</h1><div class="link" id="contact-link">CONTACT</div>'
let above = true
let linkListener = () => {
    document.getElementById('showcase-link').addEventListener('click', ()=> {
        document.getElementById('showcase-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
    
    document.getElementById('contact-link').addEventListener('click', ()=> {
        document.getElementById('contact-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    if (!above) {
        document.getElementById('title-link').addEventListener('click', ()=> {
            document.getElementById('video-container').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

linkListener()


window.addEventListener('scroll', function(e) {
    videoContainerHalfHeight = document.getElementById('video-container').clientHeight/2.1
    windowHeight = window.scrollY
    if (videoContainerHalfHeight > windowHeight && above == false) {
        above = true
        removeTitle()
        linkListener()
    } else if (videoContainerHalfHeight < windowHeight && above == true){
        above = false
        addTitle()
        linkListener()
    }
})

let removeTitle = () => {
    if (above) {
        document.getElementById('link-container').innerHTML = linkWithoutTitle
    }
}

let addTitle = () => {
    if (!above) {
        document.getElementById('link-container').innerHTML = linkWithTitle
    }
}



