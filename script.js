document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');

    if (!config || !config.products) {
        console.error('Config not found or invalid');
        return;
    }

    // Apply colors from config
    if (config.colors) {
        const root = document.documentElement;
        root.style.setProperty('--primary-color', config.colors.primaryColor);
        root.style.setProperty('--bg-color', config.colors.bgColor);
        root.style.setProperty('--card-bg', config.colors.cardBg);
        root.style.setProperty('--text-secondary', config.colors.textSecondary);
        root.style.setProperty('--button-hover', config.colors.buttonHover);
    }

    config.products.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';

        // Create HTML structure for the card
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image">
            </div>
            <h2 class="product-title">${product.title}</h2>
            <p class="product-subtitle">${product.subtitle}</p>
            <a href="${product.url}" class="order-button" target="_blank">Оформить</a>
        `;

        grid.appendChild(card);
    });
});
