// Données des propriétés avec vraies images
const properties = [
    {
        id: 1,
        type: 'riad',
        title: 'Riad Authentique Médina',
        price: '4,200,000 MAD',
        location: 'Médina, Marrakech',
        image: 'images/Generated Image May 28, 2025 - 6_32AM.jpeg',
        badge: 'Coup de Cœur',
        features: { bedrooms: 5, bathrooms: 6, surface: '420m²', special: 'Fontaine' },
        description: 'Riad majestueux du 18ème siècle entièrement restauré.'
    },
    {
        id: 2,
        type: 'riad',
        title: 'Salon Traditionnel Luxe',
        price: '3,800,000 MAD',
        location: 'Médina, Marrakech',
        image: 'images/Generated Image May 28, 2025 - 6_36AM (1).jpeg',
        badge: 'Authentique',
        features: { bedrooms: 4, bathrooms: 5, surface: '380m²', special: 'Salon' },
        description: 'Magnifique riad avec salon traditionnel aux détails exceptionnels.'
    },
    {
        id: 3,
        type: 'villa',
        title: 'Villa Moderne Panoramique',
        price: '8,500,000 MAD',
        location: 'Palmeraie, Marrakech',
        image: 'images/Generated Image May 28, 2025 - 6_40AM (1).jpeg',
        badge: 'Exclusivité',
        features: { bedrooms: 6, bathrooms: 8, surface: '650m²', special: 'Vue Atlas' },
        description: 'Villa contemporaine avec vue panoramique sur l\'Atlas.'
    }
];
// Génération des cartes de propriétés
function generatePropertyCard(property) {
    return `
        <div class="property-card loading" data-category="${property.type}">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px 12px 0 0;">
                <span class="property-badge">${property.badge}</span>
                <button class="property-favorite">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="property-content">
                <div class="property-price">${property.price}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.location}</span>
                </div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.features.bedrooms} chambres</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.features.bathrooms} SDB</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.features.surface}</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-star"></i>
                        <span>${property.features.special}</span>
                    </div>
                </div>
                <p class="property-description">${property.description}</p>
                <div class="property-actions">
                    <a href="#" class="btn btn-primary">Visiter</a>
                    <a href="#contact" class="btn btn-outline">Plus d'infos</a>
                </div>
            </div>
        </div>
    `;
}

// Notification système
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const colors = { success: '#27ae60', error: '#e74c3c', info: '#b8860b' };
    
    notification.style.cssText = `
        position: fixed; top: 100px; right: 20px; background: ${colors[type]}; color: white;
        padding: 1rem 1.5rem; border-radius: 12px; z-index: 10000; max-width: 400px;
        transform: translateX(100%); transition: transform 0.3s ease;
    `;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
// Initialisation du site
document.addEventListener('DOMContentLoaded', function() {
    // Génération des propriétés
    const propertiesGrid = document.getElementById('propertiesGrid');
    if (propertiesGrid) {
        properties.forEach(property => {
            propertiesGrid.innerHTML += generatePropertyCard(property);
        });
    }
    
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Property filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            const propertyCards = document.querySelectorAll('.property-card');
            
            propertyCards.forEach(card => {
                const category = card.getAttribute('data-category');
                card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
            });
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const name = formData.get('name');
            showNotification(`Merci ${name} ! Ibtissam vous contactera sous 24h.`, 'success');
            this.reset();
        });
    }
    
    showNotification('🏰 Bienvenue chez Immo Ibtissam', 'success');
});
// Ajout de plus de propriétés avec les vraies images
const additionalProperties = [
    {
        id: 4,
        type: 'penthouse',
        title: 'Penthouse Luxury Hivernage',
        price: '6,800,000 MAD',
        location: 'Hivernage, Marrakech',
        image: 'images/Generated Image May 28, 2025 - 6_37AM (2).jpeg',
        badge: 'Ultra-Moderne',
        features: { bedrooms: 4, bathrooms: 5, surface: '380m²', special: 'Cuisine Luxe' },
        description: 'Penthouse ultra-moderne avec cuisine de chef et vue imprenable. Finitions marbre et équipements haut de gamme.'
    },
    {
        id: 5,
        type: 'villa',
        title: 'Villa Prestige Suite Royale',
        price: '12,500,000 MAD',
        location: 'Palmeraie, Marrakech',
        image: 'images/Generated Image May 28, 2025 - 6_42AM (2).jpeg',
        badge: 'Prestige Absolu',
        features: { bedrooms: 8, bathrooms: 10, surface: '850m²', special: 'Suite Royale' },
        description: 'Villa d\'exception avec suite royale aux finitions artisanales. Plafonds sculptés et décoration marocaine authentique.'
    },
    {
        id: 6,
        type: 'appartement',
        title: 'Appartement Moderne Centre',
        price: '2,850,000 MAD',
        location: 'Guéliz, Marrakech',
        image: 'images/Generated Image May 28, 2025 - 6_41AM.jpeg',
        badge: 'Centre-ville',
        features: { bedrooms: 3, bathrooms: 3, surface: '180m²', special: '2 Parkings' },
        description: 'Appartement haut standing au cœur de Guéliz. Résidence sécurisée avec piscine et services premium.'
    }
];

// Fusion avec les propriétés existantes
properties.push(...additionalProperties);

// Fonction pour animer les compteurs
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .about-stat-number');
    
    counters.forEach(counter => {
        const target = counter.innerText;
        const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
        
        if (numericTarget && numericTarget > 0) {
            let current = 0;
            const increment = Math.ceil(numericTarget / 40);
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericTarget) {
                    counter.innerText = target;
                    clearInterval(timer);
                } else {
                    if (target.includes('M')) {
                        counter.innerText = Math.floor(current) + 'M+';
                    } else if (target.includes('%')) {
                        counter.innerText = Math.floor(current) + '%';
                    } else if (target.includes('ans')) {
                        counter.innerText = Math.floor(current) + 'ans';
                    } else {
                        counter.innerText = Math.floor(current) + '+';
                    }
                }
            }, 60);
        }
    });
}

// Intersection Observer pour les animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, { threshold: 0.1 });

// Observer pour les statistiques
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
});

// Ajout des observateurs
document.addEventListener('DOMContentLoaded', function() {
    // Observer tous les éléments avec animation
    document.querySelectorAll('.loading').forEach(el => observer.observe(el));
    
    // Observer les sections de statistiques
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) statsObserver.observe(statsSection);
    
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) statsObserver.observe(aboutStats);
});