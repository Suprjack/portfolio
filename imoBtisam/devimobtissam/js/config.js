// ===== CONFIGURATION FACILE DU SITE =====
const siteConfig = {
    // Informations principales
    siteName: "Immo Ibtissam",
    tagline: "Immobilier de Prestige Marrakech",
    
    // Contact
    contact: {
        phone: "+212 6 XX XX XX XX",
        email: "ibtissam@immoprestige.ma",
        address: "Avenue Mohammed V, Guéliz",
        city: "Marrakech, Maroc 🇲🇦"
    },
    
    // Statistiques à afficher
    stats: {
        properties: "150+",
        clients: "300+", 
        experience: "15ans",
        satisfaction: "98%"
    },
    
    // Couleurs du site (en plus des variables CSS)
    colors: {
        primary: "#b8860b",
        gold: "#d4af37",
        bronze: "#cd7f32"
    },
    
    // Messages de notification
    messages: {
        welcome: "🏰 Bienvenue chez Immo Ibtissam",
        contactSuccess: "Merci {{name}} ! Ibtissam vous contactera sous 24h.",
        favoriteAdd: "{{property}} ajouté aux favoris ❤️",
        favoriteRemove: "{{property}} retiré des favoris"
    }
};

// Export de la configuration pour utilisation dans script.js
window.siteConfig = siteConfig;