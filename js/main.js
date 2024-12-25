// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = nav.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : '';
    spans[1].style.opacity = nav.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = nav.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : '';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '1';
        });
    });
});

// Populate benefits section
const benefitsGrid = document.querySelector('.benefits__grid');
benefits.forEach(benefit => {
    const benefitCard = document.createElement('div');
    benefitCard.className = 'benefit-card';
    benefitCard.innerHTML = `
        <div class="benefit-card__icon">
            <svg class="icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
        </div>
        <h3>${benefit.title}</h3>
        <p>${benefit.description}</p>
    `;
    benefitsGrid.appendChild(benefitCard);
});

// Populate services section
const servicesGrid = document.querySelector('.services__grid');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
        <div class="service-card__icon">
            <svg class="icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
            </svg>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    servicesGrid.appendChild(serviceCard);
});

// Populate testimonials section
const testimonialsGrid = document.querySelector('.testimonials__grid');
testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
        <div class="testimonial-card__stars">
            ${'★'.repeat(testimonial.rating)}
        </div>
        <p class="testimonial-card__text">${testimonial.text}</p>
        <p class="testimonial-card__author">${testimonial.name}</p>
    `;
    testimonialsGrid.appendChild(testimonialCard);
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();