let config1 = {
    type: 'carousel',
    perView: 6,
    animationTimingFunc:'ease',
    breakpoints: {
        400: {
            perView:1
        },
        575: {
            perView:2
        },
        767: {
            perView: 2
        },
        991: {
            perView:3
        },
        1199: {
            perView: 4
        }
    }
};

new Glide('._doorhub_category_slider', config1).mount();

let config2 = {
    type: 'carousel',
    perView: 1,
    animationTimingFunc:'ease',
    breakpoints: {
        1000: {
            perView: 1
        }
    }
};

new Glide('._client_testimonial', config2).mount();