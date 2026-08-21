/* ==========================================================================
   BUONA PASTELARIA ARTESANAL - LOGIC & APPLICATION ENGINE
   Rua Bento Gonçalves, 880 (esq. Mário Pezzi) • Centro, Caxias do Sul - RS
   ========================================================================== */

// Client Business Configuration (Official Telefone/WhatsApp: (54) 3208-3933)
const CLIENT_CONFIG = {
    name: 'Buona Pastelaria Artesanal',
    phoneFormatted: '(54) 3208-3933',
    whatsappNumber: '555432083933',
    pixKey: '30637779000111',
    address: 'Rua Bento Gonçalves, 880 (esq. com Rua Ver. Mário Pezzi) - Centro, Caxias do Sul - RS',
    deliveryFee: 5.00,
    hours: {
        // 0: Domingo, 1: Segunda, 2: Terça, 3: Quarta, 4: Quinta, 5: Sexta, 6: Sábado
        0: { open: 16, close: 22, name: 'Domingo' },
        1: { open: 11, close: 22, name: 'Segunda-feira' },
        2: { open: 11, close: 22, name: 'Terça-feira' },
        3: { open: 11, close: 22, name: 'Quarta-feira' },
        4: { open: 11, close: 22, name: 'Quinta-feira' },
        5: { open: 11, close: 23, name: 'Sexta-feira' },
        6: { open: 11, close: 23, name: 'Sábado' }
    }
};

// Local Custom High-Res Assets & Curated Beverage Imagery
const PASTEL_IMGS = {
    carne: 'assets/pastel_carne.png',
    queijo: 'assets/pastel_queijo.png',
    doce: 'assets/pastel_doce.png',
    fritas: 'assets/fritas.jpg',
    empanadas: 'assets/empanadas.jpeg',
    cesto: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    cebola: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80',
    camarao: 'https://images.unsplash.com/photo-1559742811-822863646603?auto=format&fit=crop&w=800&q=80',
    cana: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    cocaLata: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    guaranaLata: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80',
    coca2L: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80',
    cerveja: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80'
};

// Menu Database Transcribed
const MENU_DATA = [
    // PASTÉIS SALGADOS TRADICIONAIS
    {
        id: 'bp1',
        title: 'Pastel de Carne com Ovo',
        category: 'salgados',
        description: 'Carne bovina de primeira moída e temperada na casa, pedaços de ovo cozido e orégano em massa crocante e sequinha.',
        badge: 'Mais Pedido',
        image: PASTEL_IMGS.carne,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'bp2',
        title: 'Pastel de Carne com Muçarela',
        category: 'salgados',
        description: 'Carne moída farta e suculenta combinada com generosa camada de queijo muçarela derretido estalando de quente.',
        badge: 'Favorito',
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'bp3',
        title: 'Pastel de Presunto e Queijo',
        category: 'salgados',
        description: 'Clássico presunto selecionado com muçarela farta e orégano em massa dourada e pururuca.',
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'bp4',
        title: 'Pastel de Queijo Muçarela Especial',
        category: 'salgados',
        description: 'Abundância de queijo muçarela derretido puxando fios, orégano selecionado e massa artesanal crocante.',
        badge: 'Clássico',
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'bp5',
        title: 'Pastel de Frango com Catupiry',
        category: 'salgados',
        description: 'Peito de frango desfiado suculento e bem temperado com Catupiry original cremoso e cheiro-verde.',
        badge: 'Top Vendas',
        image: PASTEL_IMGS.queijo,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 13.90, G: 18.90 }
    },
    {
        id: 'bp6',
        title: 'Pastel de Pizza Especial',
        category: 'salgados',
        description: 'Muçarela especial, presunto fatiado, rodelas de tomate fresco e toque especial de orégano da serra.',
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'bp7',
        title: 'Pastel de Calabresa com Queijo',
        category: 'salgados',
        description: 'Linguiça calabresa defumada moída com muçarela derretida, cebola suave e temperos artesanais.',
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'bp8',
        title: 'Pastel de Palmito com Muçarela',
        category: 'salgados',
        description: 'Palmito macio em rodelas com muçarela farta e orégano em massa crocante e levinha.',
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 13.90, G: 18.90 }
    },

    // PASTÉIS GOURMET & ESPECIAIS DA CASA
    {
        id: 'bg1',
        title: 'Pastel Buona Supremo',
        category: 'especiais',
        description: 'A joia da casa: carne moída nobre, bacon crocante em cubos, cheddar cremoso, ovo cozido picado e azeitonas pretas.',
        badge: 'Exclusivo Buona',
        image: PASTEL_IMGS.carne,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 16.90, G: 22.90 }
    },
    {
        id: 'bg2',
        title: 'Pastel Quatro Queijos da Serra',
        category: 'especiais',
        description: 'Harmoniosa combinação de Muçarela de Caxias, Provolone defumado, Parmesão ralado e Catupiry genuíno.',
        badge: 'Gourmet',
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 15.90, G: 21.90 }
    },
    {
        id: 'bg3',
        title: 'Pastel Gaúcho Campeiro',
        category: 'especiais',
        description: 'Carne de costela desfiada e cozida lentamente na cerveja preta, muçarela, bacon e cebola caramelizada.',
        badge: 'Especial Serra',
        image: PASTEL_IMGS.carne,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 16.90, G: 22.90 }
    },
    {
        id: 'bg4',
        title: 'Pastel Strogonoff de Filé com Champignon',
        category: 'especiais',
        description: 'Cubos macios de carne bovina ao molho de strogonoff caseiro, champignon fatiado, muçarela e batata palha fininha.',
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 16.90, G: 22.90 }
    },
    {
        id: 'bg5',
        title: 'Pastel de Camarão Cremoso ao Catupiry',
        category: 'especiais',
        description: 'Camarões selecionados refogados no azeite de oliva e ervas finas com generosa camada de Catupiry original.',
        badge: 'Premium',
        image: PASTEL_IMGS.camarao,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 19.90, G: 26.90 }
    },
    {
        id: 'bg6',
        title: 'Pastel Nordestino com Queijo Coalho',
        category: 'especiais',
        description: 'Carne seca desfiada e dessalgada artesanalmente com queijo coalho tostado e requeijão cremoso.',
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 16.90, G: 22.90 }
    },

    // PASTÉIS DOCES
    {
        id: 'bd1',
        title: 'Pastel de Chocolate com Morango',
        category: 'doces',
        description: 'Abundante recheio de chocolate nobre ao leite derretido com lâminas de morangos frescos picados na hora.',
        badge: 'Mais Pedido Doce',
        image: PASTEL_IMGS.doce,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 13.90, G: 18.90 }
    },
    {
        id: 'bd2',
        title: 'Pastel Dois Amores Nobre',
        category: 'doces',
        description: 'O encontro perfeito de brigadeiro de chocolate preto artesanal com chocolate branco cremoso.',
        badge: 'Favorito',
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 13.90, G: 18.90 }
    },
    {
        id: 'bd3',
        title: 'Pastel de Banana com Canela e Doce de Leite',
        category: 'doces',
        description: 'Bananas fatiadas caramelizadas, canela em pó perfumada, doce de leite caseiro e muçarela derretida.',
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'bd4',
        title: 'Pastel Romeu & Julieta da Serra',
        category: 'doces',
        description: 'Tradicional combinação gaúcha de queijo muçarela farto e quente com goiabada cascão cremosa derretida.',
        image: PASTEL_IMGS.doce,
        rating: '4.8',
        hasSizes: true,
        prices: { P: 12.90, G: 17.90 }
    },
    {
        id: 'bd5',
        title: 'Pastel de Nutella com M&Ms Crocantes',
        category: 'doces',
        description: 'Nutella original cremosa abundante com confeitos crocantes de chocolate M&M coloridos.',
        badge: 'Delícia Kids',
        image: PASTEL_IMGS.doce,
        rating: '5.0',
        hasSizes: true,
        prices: { P: 15.90, G: 21.90 }
    },

    // PORÇÕES & PETISCOS
    {
        id: 'bpo1',
        title: 'Cesto de Mini Pastéis Mistos (12 unid)',
        category: 'porcoes',
        description: '12 mini pastéis crocantes nos sabores: carne, queijo, frango c/ catupiry e chocolate. Acompanha molho de alho da casa.',
        badge: 'Para Compartilhar',
        image: PASTEL_IMGS.cesto,
        rating: '5.0',
        hasSizes: false,
        price: 29.90
    },
    {
        id: 'bpo2',
        title: 'Batata Frita Especial com Queijo e Bacon',
        category: 'porcoes',
        description: '500g de batata frita super crocante e dourada coberta com muçarela derretida e cubos de bacon crocante.',
        badge: 'Crocante',
        image: PASTEL_IMGS.fritas,
        rating: '4.9',
        hasSizes: false,
        price: 26.90
    },
    {
        id: 'bpo3',
        title: 'Anéis de Cebola Onion Rings (12 unid)',
        category: 'porcoes',
        description: 'Cebolas selecionadas empanadas com crosta ultra crocante e sequinha. Acompanha molho rosé.',
        image: PASTEL_IMGS.cebola,
        rating: '4.8',
        hasSizes: false,
        price: 21.90
    },

    // BEBIDAS & CALDO DE CANA
    {
        id: 'bb1',
        title: 'Caldo de Cana Natural Geladinho (500ml)',
        category: 'bebidas',
        description: 'Garapa fresquinha moída na hora, servida estupidamente gelada.',
        badge: 'Tradição',
        image: PASTEL_IMGS.cana,
        rating: '5.0',
        hasSizes: false,
        price: 9.00
    },
    {
        id: 'bb2',
        title: 'Caldo de Cana c/ Limão ou Abacaxi (500ml)',
        category: 'bebidas',
        description: 'Moído na hora com fruta fresca selecionada. Refrescância sem igual para acompanhar seu pastel.',
        badge: 'Mais Pedido',
        image: PASTEL_IMGS.cana,
        rating: '5.0',
        hasSizes: false,
        price: 10.00
    },
    {
        id: 'bb3',
        title: 'Coca-Cola Original Lata (350ml)',
        category: 'bebidas',
        description: 'Lata de 350ml bem gelada.',
        image: PASTEL_IMGS.cocaLata,
        rating: '5.0',
        hasSizes: false,
        price: 6.50
    },
    {
        id: 'bb4',
        title: 'Guaraná Antarctica Lata (350ml)',
        category: 'bebidas',
        description: 'Lata de 350ml bem gelada.',
        image: PASTEL_IMGS.guaranaLata,
        rating: '5.0',
        hasSizes: false,
        price: 6.50
    },
    {
        id: 'bb5',
        title: 'Coca-Cola Garrafa 2 Litros',
        category: 'bebidas',
        description: 'Garrafa pet 2L tamanho família.',
        image: PASTEL_IMGS.coca2L,
        rating: '5.0',
        hasSizes: false,
        price: 14.00
    },
    {
        id: 'bb6',
        title: 'Cerveja Heineken Long Neck (330ml)',
        category: 'bebidas',
        description: 'Cerveja premium puro malte geladíssima para maiores de 18 anos.',
        image: PASTEL_IMGS.cerveja,
        rating: '4.9',
        hasSizes: false,
        price: 11.00
    }
];

// App State Management
let cart = [];
let currentFilter = 'todos';
let searchQuery = '';
let selectedItemForModal = null;
let currentModalSize = 'G';
let fulfillmentType = 'delivery'; // 'delivery' | 'retirada'
let selectedPayment = 'Pix (Chave Copia e Cola)';
const deliveryFee = 5.00;
const BUONA_WHATSAPP = '555432083933';

let cartDrawer;
let cartOverlay;
let cartItemsContainer;
let cartCountBadge;
let cartSubtotalEl;
let cartDeliveryFeeEl;
let cartGrandTotalEl;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    cartDrawer = document.getElementById('cart-drawer');
    cartOverlay = document.getElementById('cart-overlay');
    cartItemsContainer = document.getElementById('cart-items-container');
    cartCountBadge = document.getElementById('cart-count');
    cartSubtotalEl = document.getElementById('cart-subtotal');
    cartDeliveryFeeEl = document.getElementById('cart-delivery-fee');
    cartGrandTotalEl = document.getElementById('cart-total-price');

    loadCartFromStorage();
    renderMenu();
    setupFilters();
    setupCartDrawerListeners();
    checkBusinessHours();
    setupOniraCta();
    initPWA();
    updateCartUI();
    if (window.lucide) lucide.createIcons();

    // Fade out splash screen after animations finish
    const splash = document.getElementById('pwa-splash');
    if (splash) {
        setTimeout(() => {
            splash.classList.add('fade-out');
            setTimeout(() => splash.remove(), 700);
        }, 1100);
    }
});

// PWA Service Worker Registration
function initPWA() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('SW Registered for Buona Pastelaria', reg.scope))
                .catch(err => console.log('SW Registration failed:', err));
        });
    }
}

// Business Hours Engine (Brasília Time Zone)
function checkBusinessHours() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const brtDate = new Date(utc - (3 * 3600000));
    
    const day = brtDate.getDay();
    const hour = brtDate.getHours() + (brtDate.getMinutes() / 60);
    const schedule = CLIENT_CONFIG.hours[day];

    const statusBadge = document.getElementById('business-status');
    const statusText = document.getElementById('status-text');

    if (!statusBadge || !statusText) return;

    if (schedule && hour >= schedule.open && hour < schedule.close) {
        statusBadge.className = 'status-badge open';
        statusText.textContent = `Aberto agora • Fecha às ${schedule.close}:00`;
    } else {
        statusBadge.className = 'status-badge closed';
        if (schedule && hour < schedule.open) {
            statusText.textContent = `Fechado • Abre hoje às ${schedule.open}:00`;
        } else {
            statusText.textContent = 'Fechado no momento • Pedidos pelo WhatsApp';
        }
    }
}

// Render Menu Cards
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    let filtered = MENU_DATA;

    if (currentFilter !== 'todos') {
        filtered = filtered.filter(item => item.category === currentFilter);
    }

    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-search" style="grid-column: 1/-1; text-align: center; padding: 48px 20px;">
                <i data-lucide="search-x" style="width: 48px; height: 48px; color: #94A3B8; margin-bottom: 12px;"></i>
                <h3 style="font-size: 1.2rem; color: #0F172A; margin-bottom: 6px;">Nenhum item encontrado</h3>
                <p style="color: #64748B; font-size: 0.9rem;">Tente buscar por outro sabor ou selecione uma categoria acima.</p>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    grid.innerHTML = filtered.map(item => {
        const hasSizes = item.hasSizes;
        const defaultPrice = hasSizes ? item.prices.G : item.price;
        const priceDisplay = `R$ ${defaultPrice.toFixed(2).replace('.', ',')}`;

        return `
            <div class="menu-card" data-id="${item.id}">
                <div class="card-img-box" onclick="openItemModal('${item.id}')" style="cursor: pointer;">
                    <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
                    ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
                    <div class="card-rating">
                        <i data-lucide="star" style="width: 12px; height: 12px; fill: #FFC107;"></i>
                        <span>${item.rating}</span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title" onclick="openItemModal('${item.id}')" style="cursor: pointer;">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>
                    
                    ${hasSizes ? `
                        <div class="size-selector" id="size-sel-${item.id}">
                            <button class="size-btn" onclick="setItemCardSize('${item.id}', 'P', ${item.prices.P})">
                                Médio (P) • R$ ${item.prices.P.toFixed(2).replace('.', ',')}
                            </button>
                            <button class="size-btn active" onclick="setItemCardSize('${item.id}', 'G', ${item.prices.G})">
                                Grande (G) • R$ ${item.prices.G.toFixed(2).replace('.', ',')}
                            </button>
                        </div>
                    ` : ''}

                    <div class="card-bottom">
                        <div class="card-price">
                            <span class="price-label">${hasSizes ? 'A partir de:' : 'Valor:'}</span>
                            <span class="price-value" id="price-val-${item.id}">${priceDisplay}</span>
                        </div>
                        <button class="btn-add-item" onclick="quickAddToCart('${item.id}')">
                            <i data-lucide="plus" style="width: 16px; height: 16px;"></i> Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide) lucide.createIcons();
}

// Switch Size on Card Directly
function setItemCardSize(itemId, size, price) {
    const container = document.getElementById(`size-sel-${itemId}`);
    if (container) {
        const buttons = container.querySelectorAll('.size-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        if (size === 'P') buttons[0].classList.add('active');
        if (size === 'G') buttons[1].classList.add('active');
    }
    const priceEl = document.getElementById(`price-val-${itemId}`);
    if (priceEl) {
        priceEl.textContent = `R$ ${price.toFixed(2).replace('.', ',')}`;
    }
}
window.setItemCardSize = setItemCardSize;

// Quick Add To Cart from Card
function quickAddToCart(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    if (item.hasSizes) {
        const container = document.getElementById(`size-sel-${itemId}`);
        let chosenSize = 'G';
        if (container) {
            const isPActive = container.querySelectorAll('.size-btn')[0].classList.contains('active');
            if (isPActive) chosenSize = 'P';
        }
        addToCart(item.id, chosenSize, 1, '');
    } else {
        addToCart(item.id, null, 1, '');
    }
}
window.quickAddToCart = quickAddToCart;

// Open Item Details Modal
function openItemModal(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    selectedItemForModal = item;
    currentModalSize = item.hasSizes ? 'G' : null;

    const modal = document.getElementById('item-modal');
    if (!modal) return;

    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-desc').textContent = item.description;
    document.getElementById('modal-qty').textContent = '1';
    document.getElementById('modal-obs').value = '';

    const sizesContainer = document.getElementById('modal-sizes-box');
    if (item.hasSizes) {
        sizesContainer.style.display = 'block';
        sizesContainer.innerHTML = `
            <label class="modal-label" style="display:block; font-size:0.84rem; font-weight:700; color:#475569; margin-bottom:6px;">Escolha o Tamanho:</label>
            <div class="size-selector modal-size-sel" style="display:flex; gap:8px;">
                <button class="size-btn" id="m-size-p" onclick="selectModalSize('P')" style="flex:1;">
                    Médio (P) • R$ ${item.prices.P.toFixed(2).replace('.', ',')}
                </button>
                <button class="size-btn active" id="m-size-g" onclick="selectModalSize('G')" style="flex:1;">
                    Grande (G) • R$ ${item.prices.G.toFixed(2).replace('.', ',')}
                </button>
            </div>
        `;
    } else {
        sizesContainer.style.display = 'none';
    }

    updateModalTotalPrice();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
}
window.openItemModal = openItemModal;

function selectModalSize(size) {
    currentModalSize = size;
    const btnP = document.getElementById('m-size-p');
    const btnG = document.getElementById('m-size-g');
    if (btnP && btnG) {
        if (size === 'P') {
            btnP.classList.add('active');
            btnG.classList.remove('active');
        } else {
            btnG.classList.add('active');
            btnP.classList.remove('active');
        }
    }
    updateModalTotalPrice();
}
window.selectModalSize = selectModalSize;

function changeModalQty(delta) {
    const qtyEl = document.getElementById('modal-qty');
    let qty = parseInt(qtyEl.textContent) + delta;
    if (qty < 1) qty = 1;
    if (qty > 50) qty = 50;
    qtyEl.textContent = qty;
    updateModalTotalPrice();
}
window.changeModalQty = changeModalQty;

function updateModalTotalPrice() {
    if (!selectedItemForModal) return;
    const qty = parseInt(document.getElementById('modal-qty').textContent) || 1;
    let unitPrice = selectedItemForModal.hasSizes 
        ? selectedItemForModal.prices[currentModalSize] 
        : selectedItemForModal.price;
    const total = unitPrice * qty;
    document.getElementById('modal-total-btn-price').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function confirmModalAddToCart() {
    if (!selectedItemForModal) return;
    const qty = parseInt(document.getElementById('modal-qty').textContent) || 1;
    const obs = document.getElementById('modal-obs').value.trim();
    
    addToCart(selectedItemForModal.id, currentModalSize, qty, obs);
    closeItemModal();
}
window.confirmModalAddToCart = confirmModalAddToCart;

function closeItemModal() {
    const modal = document.getElementById('item-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    selectedItemForModal = null;
}
window.closeItemModal = closeItemModal;

// Cart Core Operations (CLAEM UNIFIED STANDARD)
function addToCart(itemId, size, qty = 1, obs = '') {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    const unitPrice = item.hasSizes ? (item.prices[size] || item.prices.G) : item.price;
    const title = size ? `${item.title} (${size === 'P' ? 'Médio' : 'Grande'})` : item.title;
    const cartItemId = `${itemId}_${size || 'std'}_${obs || ''}`;

    const existingIndex = cart.findIndex(c => c.cartItemId === cartItemId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            cartItemId,
            id: item.id,
            title: title,
            baseTitle: item.title,
            size: size,
            price: unitPrice,
            quantity: qty,
            notes: obs,
            image: item.image
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`🥟 "${title}" adicionado ao carrinho!`);
    openCart();
}
window.addToCart = addToCart;

// Change Quantity in Cart
function changeQuantity(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCartToStorage();
        updateCartUI();
    }
}
window.changeQuantity = changeQuantity;

// Update Item Notes
function updateItemNotes(index, text) {
    if (cart[index]) {
        cart[index].notes = text;
        saveCartToStorage();
    }
}
window.updateItemNotes = updateItemNotes;

// Update Cart Visual State & Counters (Claem Master Standard)
function updateCartUI() {
    const totalQuantity = cart.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
    const subtotal = cart.reduce((sum, i) => sum + ((Number(i.price) || 0) * (Number(i.quantity) || 0)), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? (subtotal > 0 ? deliveryFee : 0) : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    // Header Badges & Count
    if (cartCountBadge) cartCountBadge.innerText = totalQuantity;
    const allBadges = document.querySelectorAll('.cart-count');
    allBadges.forEach(b => b.innerText = totalQuantity);

    // Header Clear Button
    const clearHeaderBtn = document.getElementById('cart-clear-header');
    if (clearHeaderBtn) {
        clearHeaderBtn.style.display = totalQuantity > 0 ? 'inline-flex' : 'none';
    }

    // Floating Mobile Bar
    const floatingCart = document.getElementById('floating-cart-bar');
    const floatingCount = document.getElementById('floating-cart-count');
    const floatingTotal = document.getElementById('floating-cart-total');

    if (floatingCount) floatingCount.innerText = `${totalQuantity} ${totalQuantity === 1 ? 'item' : 'itens'}`;
    if (floatingTotal) floatingTotal.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    if (floatingCart) {
        floatingCart.classList.toggle('visible', totalQuantity > 0);
    }

    // Drawer Totals
    if (cartSubtotalEl) cartSubtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (cartDeliveryFeeEl) {
        cartDeliveryFeeEl.innerText = fulfillmentType === 'delivery' 
            ? `R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}` 
            : 'Grátis (Balcão)';
    }
    if (cartGrandTotalEl) cartGrandTotalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

    // Render Drawer Items
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty" style="text-align: center; padding: 40px 20px; color: #A1A1AA;">
                <i data-lucide="shopping-bag" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.5; color: #EA580C;"></i>
                <p style="font-weight: 700; color: #FFF; margin-bottom: 4px;">Seu carrinho está vazio.</p>
                <span style="font-size: 0.85rem; color: #94A3B8;">Escolha os melhores pastéis crocantes no cardápio!</span>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    cartItemsContainer.innerHTML = cart.map((item, idx) => {
        const itemPrice = Number(item.price) || 0;
        const itemQty = Number(item.quantity) || 1;
        const itemTotal = itemPrice * itemQty;
        return `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>R$ ${itemPrice.toFixed(2).replace('.', ',')} un.</p>
                <input type="text" class="cart-item-note-input" placeholder="Obs: ex. sem orégano, bem frito..." value="${item.notes || ''}" onchange="updateItemNotes(${idx}, this.value)">
                <span class="cart-item-price">Total: R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="cart-controls">
                <button type="button" class="cart-qty-btn" onclick="changeQuantity(${idx}, -1)" aria-label="Diminuir">-</button>
                <span class="cart-qty-num">${itemQty} un</span>
                <button type="button" class="cart-qty-btn" onclick="changeQuantity(${idx}, 1)" aria-label="Aumentar">+</button>
            </div>
        </div>
        `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
}

// Drawer Open / Close Functions
function openCart() {
    if (cartDrawer) cartDrawer.classList.add('active', 'open');
    if (cartOverlay) cartOverlay.classList.add('active', 'open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('active', 'open');
    if (cartOverlay) cartOverlay.classList.remove('active', 'open');
    document.body.style.overflow = 'auto';
}

function toggleCartDrawer(show = true) {
    if (show) openCart();
    else closeCart();
}
window.openCart = openCart;
window.closeCart = closeCart;
window.toggleCartDrawer = toggleCartDrawer;

// Cart Drawer Listeners Setup
function setupCartDrawerListeners() {
    // Fulfillment Toggle (Delivery vs Retirada)
    const fulfillmentBtns = document.querySelectorAll('.delivery-toggle .del-btn');
    fulfillmentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            fulfillmentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            fulfillmentType = btn.dataset.type || btn.getAttribute('data-type') || 'delivery';

            const addressBox = document.getElementById('address-box');
            if (addressBox) {
                addressBox.style.display = fulfillmentType === 'delivery' ? 'block' : 'none';
            }
            updateCartUI();
        });
    });

    // Payment Method Toggle (Pix, Cartão, Dinheiro)
    const paymentBtns = document.querySelectorAll('.payment-toggle .pay-btn');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            paymentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPayment = btn.dataset.pay || btn.getAttribute('data-pay') || 'Pix (Chave Copia e Cola)';

            const cashChangeBox = document.getElementById('cash-change-box');
            const pixInfoBox = document.getElementById('pix-lock-box');

            const isCash = selectedPayment.toLowerCase().includes('dinheiro');
            const isPix = selectedPayment.toLowerCase().includes('pix');

            if (cashChangeBox) cashChangeBox.style.display = isCash ? 'block' : 'none';
            if (pixInfoBox) pixInfoBox.style.display = isPix ? 'block' : 'none';

            updateCartUI();
        });
    });

    // ESC key closes drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeConfirmation();
        }
    });
}

// Clear Cart Modal Confirmation Functions
function openConfirmation() {
    const overlay = document.getElementById('confirm-clear');
    if (!overlay) return;

    const desc = document.getElementById('confirm-desc');
    const totalQty = cart.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
    const subtotal = cart.reduce((sum, i) => sum + ((Number(i.price) || 0) * (Number(i.quantity) || 0)), 0);

    if (desc) {
        const itemLabel = totalQty === 1 ? '1 item' : `${totalQty} itens`;
        desc.innerHTML = `Você vai remover <strong>${itemLabel}</strong>, no valor de <strong>R$ ${subtotal.toFixed(2).replace('.', ',')}</strong>.`;
    }

    overlay.hidden = false;
    if (window.lucide) window.lucide.createIcons();
}

function closeConfirmation() {
    const overlay = document.getElementById('confirm-clear');
    if (overlay) overlay.hidden = true;
}

function clearCart() {
    if (cart.length === 0) {
        showToast('🥟 Seu carrinho já está vazio.');
        return;
    }
    openConfirmation();
}

function aplicarLimpeza() {
    cart = [];
    saveCartToStorage();
    closeConfirmation();
    updateCartUI();
    showToast('🗑️ Pedido limpo com sucesso.');
}

window.openConfirmation = openConfirmation;
window.closeConfirmation = closeConfirmation;
window.clearCart = clearCart;
window.aplicarLimpeza = aplicarLimpeza;

// Copy Pix Key with Dynamic Visual Feedback
function copyPixKey() {
    const pixKey = CLIENT_CONFIG.pixKey || '30.637.779/0001-11';
    const btn = document.getElementById('btn-copy-pix-key');

    const handleSuccess = () => {
        if (btn) {
            btn.classList.add('copied');
            btn.innerHTML = '<i data-lucide="check"></i> <span>✓ Chave Pix Copiada!</span>';
            if (window.lucide) lucide.createIcons();
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = '<i data-lucide="copy"></i> <span>Copiar Chave Pix</span>';
                if (window.lucide) lucide.createIcons();
            }, 2500);
        }
        showToast('🔑 Chave Pix (CNPJ) copiada com sucesso!');
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pixKey).then(handleSuccess).catch(() => {
            prompt('Copie a chave Pix:', pixKey);
        });
    } else {
        prompt('Copie a chave Pix:', pixKey);
    }
}
window.copyPixKey = copyPixKey;

// Send Order via WhatsApp (Claem Standard)
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! Adicione pelo menos um pastel antes de enviar.');
        return;
    }

    const customerName = customerNameInput ? customerNameInput.value.trim() : '';
    const customerAddress = customerAddressInput ? customerAddressInput.value.trim() : '';

    if (fulfillmentType === 'delivery' && !customerAddress) {
        alert('Por favor, informe seu endereço completo para entrega.');
        if (customerAddressInput) {
            customerAddressInput.classList.add('input-error');
            customerAddressInput.focus();
            customerAddressInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
                customerAddressInput.classList.remove('input-error');
            }, 3500);
        }
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + ((Number(i.price) || 0) * (Number(i.quantity) || 0)), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? deliveryFee : 0;
    const total = subtotal + activeDeliveryFee;

    let msg = `${fulfillmentType === 'delivery' ? 'Entrega em domicílio' : 'Retirada no balcão'}

`;

    cart.forEach(i => {
        const itemSum = (Number(i.price) || 0) * (Number(i.quantity) || 0);
        msg += `*${i.quantity}x* ${i.title}
`;
        if (i.notes) msg += `_Obs: ${i.notes}_
`;
        msg += `*R$ ${itemSum.toFixed(2).replace('.', ',')}*

`;
    });

    msg += `*Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*
`;
    if (fulfillmentType === 'delivery') {
        msg += activeDeliveryFee > 0 ? `Entrega: R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}
` : `Entrega a combinar
`;
        msg += `*Total: R$ ${total.toFixed(2).replace('.', ',')}*
`;
    } else {
        msg += `*Total: R$ ${subtotal.toFixed(2).replace('.', ',')}*
`;
    }
    msg += `
`;

    if (customerName) msg += `*${customerName}*
`;
    if (fulfillmentType === 'delivery' && customerAddress) {
        msg += `${customerAddress}
`;
    }

    const isCash = selectedPayment.toLowerCase().includes('dinheiro');
    const isPix = selectedPayment.toLowerCase().includes('pix');

    if (isPix) {
        msg += `Pagamento em Pix — combinamos a chave por aqui
`;
    } else if (isCash) {
        msg += `Pagamento em dinheiro — ${cashChange ? `troco para R$ ${cashChange}` : 'sem troco'}
`;
    } else {
        msg += `Pagamento no cartão — favor levar a maquininha
`;
    }

    msg += `
_Enviado pelo site da Pastelaria Buona_`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${BUONA_WHATSAPP}?text=${encoded}`;
    window.open(url, '_blank');
}
window.sendWhatsAppOrder = sendWhatsAppOrder;

// Storage Helpers
function saveCartToStorage() {
    try {
        localStorage.setItem('buona_cart_data', JSON.stringify(cart));
    } catch (e) {
        console.warn('Storage not available:', e);
    }
}

function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem('buona_cart_data');
        if (saved) {
            const raw = JSON.parse(saved);
            if (Array.isArray(raw)) {
                cart = raw.map(item => {
                    const price = typeof item.price === 'number' ? item.price : (typeof item.unitPrice === 'number' ? item.unitPrice : 0);
                    const qty = typeof item.quantity === 'number' ? item.quantity : (typeof item.qty === 'number' ? item.qty : 1);
                    return {
                        cartItemId: item.cartItemId || `${item.id}_${item.size || 'std'}`,
                        id: item.id,
                        title: item.title || 'Item',
                        baseTitle: item.baseTitle || item.title || 'Item',
                        size: item.size || null,
                        price: price,
                        quantity: qty,
                        notes: item.notes || item.obs || '',
                        image: item.image || ''
                    };
                }).filter(item => item.price > 0 && item.quantity > 0);
            } else {
                cart = [];
            }
        }
    } catch (e) {
        cart = [];
    }
}

// Toast Notifications (Claem Standard)
function showToast(message, type = 'success') {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        document.body.appendChild(toast);
    }
    toast.className = `toast-box ${type === 'error' ? 'toast-error' : 'toast-success'}`;
    toast.innerHTML = message;
    toast.classList.add('show');

    if (window._toastTimeout) clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}
window.showToast = showToast;

// Setup Category & Search Filters
function setupFilters() {
    const filterBtns = document.querySelectorAll('.category-filters .filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentFilter = e.currentTarget.getAttribute('data-category');
            renderMenu();
        });
    });

    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderMenu();
        });
    }
}

/* ==========================================================================
   CONVITE FLUTUANTE DA ONIRA LABS (MASTER TEMPLATE FUNCTION)
   ========================================================================== */
function setupOniraCta() {
    const cta = document.getElementById('onira-cta');
    const fechar = document.getElementById('onira-cta-close');
    if (!cta || !fechar) return;

    const CHAVE = 'buona_cta_onira';
    if (localStorage.getItem(CHAVE) === 'dispensado') return;

    fechar.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        cta.style.display = 'none';
        localStorage.setItem(CHAVE, 'dispensado');
    });

    let mostrado = false;
    function talvezMostrar() {
        if (mostrado || window.scrollY < 300) return;
        mostrado = true;
        cta.style.display = 'flex';
        if (window.lucide) lucide.createIcons();
        window.removeEventListener('scroll', talvezMostrar);
    }

    window.addEventListener('scroll', talvezMostrar, { passive: true });
    
    setTimeout(() => {
        if (!mostrado && window.scrollY > 250) {
            talvezMostrar();
        }
    }, 1200);
}

