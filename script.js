/**
 * Jewels-AI Digital Magazine Engine
 * Developed for: Nishanth
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Swiper for the "Page Flip" feel
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        speed: 800, // Smooth transition speed
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Enable mousewheel for desktop users
        mousewheel: true,
        // Keyboard navigation
        keyboard: {
            enabled: true,
        },
    });

    // 2. The "Try-On" Trigger Logic
    const tryOnButtons = document.querySelectorAll('.btn-try-on');

    tryOnButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productID = e.target.getAttribute('data-product-id');
            const productName = e.target.getAttribute('data-product-name');
            
            launchAREngine(productID, productName);
        });
    });

    /**
     * Launch AR Engine
     * This connects the Magazine to your AR tracking logic
     */
    function launchAREngine(id, name) {
        console.log(`Initializing AR for: ${name} (ID: ${id})`);
        
        // Add a "Loading" haptic/visual feel
        const btn = document.querySelector(`[data-product-id="${id}"]`);
        btn.innerHTML = "Opening Mirror...";
        btn.style.opacity = "0.7";

        // Logic to trigger your AR Repo/Component
        // In a real scenario, this might redirect to: jewels-ai.online/try?id=123
        setTimeout(() => {
            alert(`✨ Opening Jewels-AI Mirror for: ${name}\n\nPlease allow camera access to see the sparkle!`);
            btn.innerHTML = "Try This Set";
            btn.style.opacity = "1";
        }, 1000);
    }

    // 3. The "Magic Sparkle" Animation Logic (Visual Polish)
    // This adds a subtle glint effect to the gold titles as you swipe
    swiper.on('slideChange', function () {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const title = activeSlide.querySelector('.magazine-title');
        
        if (title) {
            title.style.transition = "all 1s ease";
            title.style.filter = "brightness(1.5)";
            setTimeout(() => {
                title.style.filter = "brightness(1)";
            }, 500);
        }
    });

    // 4. Tamil/English Language Toggle Logic
    const langBtn = document.querySelector('.lang-toggle');
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            // Logic to switch JSON strings between English and Tamil
            alert("Switching to Tamil / தமிழ் மாற்றப்படுகிறது");
        });
    }
});