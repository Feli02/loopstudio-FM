let btn = document.getElementById('btn_burger_menu')


btn.addEventListener('click', () => {
    let background = document.getElementById('menu-mobile')

    let about = document.querySelector('.about')
    let career = document.querySelector('.career')
    let event = document.querySelector('.event')
    let product = document.querySelector('.product')
    let support = document.querySelector('.support')

    if(background.classList.contains('active-burger-menu')){
        background.classList.add('out-burger-menu')
        background.classList.remove('active-burger-menu')

        about.removeAttribute('id', 'about-link')
        career.removeAttribute('id', 'career-link')
        event.removeAttribute('id', 'event-link')
        product.removeAttribute('id', 'product-link')
        support.removeAttribute('id', 'support-link')

        about.classList.add('anim-out-about')
        career.classList.add('anim-out-career')
        event.classList.add('anim-out-event')
        product.classList.add('anim-out-product')
        support.classList.add('anim-out-support')
    }else{
        background.classList.remove('out-burger-menu')
        background.classList.add('active-burger-menu')

        support.setAttribute('id', 'support-link')
        product.setAttribute('id', 'product-link')
        event.setAttribute('id', 'event-link')
        career.setAttribute('id', 'career-link')
        about.setAttribute('id', 'about-link')

        support.classList.remove('anim-out-support')
        product.classList.remove('anim-out-product')
        event.classList.remove('anim-out-event')
        career.classList.remove('anim-out-career')
        about.classList.remove('anim-out-about')
    }
})