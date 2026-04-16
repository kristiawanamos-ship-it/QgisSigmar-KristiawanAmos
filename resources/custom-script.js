/**
 * CUSTOM SCRIPT UNTUK INTERAKTIVITAS BAOLAN MAP
 * Menangani berbagai fitur interaktif seperti search, filter, zoom, dan display informasi
 */

// ============================================
// CONFIGURATION
// ============================================

const AREA_DATA = {
    'kelurahan-baru': {
        name: 'Kelurahan Baru',
        type: 'kelurahan',
        icon: '🏘️',
        description: 'Kelurahan yang terletak di wilayah Kecamatan Baolan dengan pemukiman penduduk yang ramai dan berkembang pesat.',
        features: ['Pemukiman Padat', 'Pusat Perdagangan', 'Akses Jalan Baik'],
        population: '~2,500 jiwa',
        area: '15 km²',
        coordinates: '-0.8234, 120.4567'
    },
    'kelurahan-nalu': {
        name: 'Kelurahan Nalu',
        type: 'kelurahan',
        icon: '🏘️',
        description: 'Area kelurahan dengan karakteristik geografis yang unik dan komunitas masyarakat yang solid.',
        features: ['Wisata Alam', 'Komunitas Lokal', 'Infrastruktur Berkembang'],
        population: '~1,800 jiwa',
        area: '12 km²',
        coordinates: '-0.8345, 120.4456'
    },
    'kelurahan-panasakan': {
        name: 'Kelurahan Panasakan',
        type: 'kelurahan',
        icon: '🏘️',
        description: 'Kelurahan yang dikenal dengan potensi perdagangan dan pusat aktivitas ekonomi lokal.',
        features: ['Ekonomi Lokal Kuat', 'Pusat Niaga', 'Sarana Pendidikan'],
        population: '~2,100 jiwa',
        area: '14 km²',
        coordinates: '-0.8456, 120.4345'
    },
    'kelurahan-sidoarjo': {
        name: 'Kelurahan Sidoarjo',
        type: 'kelurahan',
        icon: '🏘️',
        description: 'Area kelurahan dengan fasilitas umum lengkap dan infrastruktur yang baik untuk mendukung kehidupan masyarakat.',
        features: ['Fasilitas Kesehatan', 'Infrastruktur Lengkap', 'Layanan Publik'],
        population: '~1,950 jiwa',
        area: '13 km²',
        coordinates: '-0.8567, 120.4234'
    },
    'kelurahan-tambun': {
        name: 'Kelurahan Tambun',
        type: 'kelurahan',
        icon: '🏘️',
        description: 'Kelurahan yang menjadi bagian penting dalam pengembangan wilayah Kecamatan Baolan.',
        features: ['Pertumbuhan Ekonomi', 'Pengembangan Infrastruktur', 'Potensi Investasi'],
        population: '~2,200 jiwa',
        area: '16 km²',
        coordinates: '-0.8678, 120.4123'
    },
    'kelurahan-tuweley': {
        name: 'Kelurahan Tuweley',
        type: 'kelurahan',
        icon: '🏘️',
        description: 'Kelurahan dengan potensi wisata alam dan sumber daya yang kaya untuk pengembangan berkelanjutan.',
        features: ['Ekowisata', 'Sumber Daya Alam', 'Pelestarian Lingkungan'],
        population: '~1,700 jiwa',
        area: '11 km²',
        coordinates: '-0.8789, 120.4012'
    },
    'desa-dadakitan': {
        name: 'Desa Dadakitan',
        type: 'desa',
        icon: '🌾',
        description: 'Desa dengan potensi pertanian yang berkembang dan masyarakat yang bekerja di sektor agribisnis.',
        features: ['Pertanian Organik', 'Agribisnis Lokal', 'Peternakan'],
        population: '~800 jiwa',
        area: '8 km²',
        coordinates: '-0.8890, 120.3901'
    },
    'desa-buntuna': {
        name: 'Desa Buntuna',
        type: 'desa',
        icon: '🌾',
        description: 'Desa yang dikenal dengan produk pertanian unggulan dan tradisi budaya masyarakat yang kuat.',
        features: ['Produk Unggulan', 'Warisan Budaya', 'Komoditas Lokal'],
        population: '~750 jiwa',
        area: '9 km²',
        coordinates: '-0.8901, 120.3790'
    },
    'desa-leleannono': {
        name: 'Desa Lelean Nono',
        type: 'desa',
        icon: '🌾',
        description: 'Desa dengan ekosistem alam yang masih terjaga dan potensi ekowisata yang menjanjikan.',
        features: ['Ekosistem Alami', 'Potensi Ekowisata', 'Konservasi Alam'],
        population: '~600 jiwa',
        area: '7 km²',
        coordinates: '-0.9012, 120.3679'
    },
    'desa-pangi': {
        name: 'Desa Pangi',
        type: 'desa',
        icon: '🌾',
        description: 'Desa yang memiliki sejarah panjang dan menjadi bagian integral dari pengembangan region Baolan.',
        features: ['Sejarah Panjang', 'Tradisi Kuat', 'Nilai Budaya'],
        population: '~700 jiwa',
        area: '8 km²',
        coordinates: '-0.9123, 120.3568'
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeThemeSettings();
    console.log('✓ Baolan Map initialized successfully');
});

// ============================================
// EVENT LISTENERS
// ============================================

function initializeEventListeners() {
    // Tab switching
    initializeTabSwitching();
    
    // Area card interactions
    initializeAreaCards();
    
    // Search functionality
    initializeSearch();
    
    // Map interactions
    initializeMapInteractions();
}

function initializeTabSwitching() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Deactivate all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Activate selected tab
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
    
    console.log(`📑 Tab switched to: ${tabName}`);
}

function initializeAreaCards() {
    document.querySelectorAll('.area-card').forEach(card => {
        card.addEventListener('click', function(e) {
            const body = this.querySelector('.area-card-body');
            body.classList.toggle('show');
            
            // Smooth scroll into view
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            const searchTerm = this.value.toLowerCase().trim();
            filterAreas(searchTerm);
        });
    }
}

function filterAreas(searchTerm) {
    const cards = document.querySelectorAll('.area-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const matches = text.includes(searchTerm) || searchTerm === '';
        
        if (matches) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show empty state if no results
    const content = document.querySelector('.tab-content.active .content');
    if (visibleCount === 0 && searchTerm !== '') {
        console.log(`🔍 Search: 0 results for "${searchTerm}"`);
    }
}

function initializeMapInteractions() {
    document.querySelectorAll('.area-card').forEach(card => {
        card.addEventListener('click', function() {
            const areaId = this.getAttribute('data-area');
            const areaData = AREA_DATA[areaId];
            
            if (areaData) {
                displayAreaInfo(areaId, areaData);
            }
        });
    });
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================

function displayAreaInfo(areaId, areaData) {
    console.log(`ℹ️ Showing info for: ${areaData.name}`);
    
    // Update popup content (if using existing OL popup)
    const popupContent = document.getElementById('popup-content');
    if (popupContent) {
        popupContent.innerHTML = generatePopupHTML(areaData);
    }
}

function generatePopupHTML(data) {
    return `
        <div class="popup-info">
            <strong>${data.icon} ${data.name}</strong>
            <p>${data.description}</p>
            <div class="location-meta">
                <div class="meta-item">
                    <span>👥 ${data.population}</span>
                </div>
                <div class="meta-item">
                    <span>📍 ${data.area}</span>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// THEME & APPEARANCE
// ============================================

function initializeThemeSettings() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('baolan-theme') || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        localStorage.setItem('baolan-theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('baolan-theme', 'light');
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getAreaStats() {
    const kelurahans = Object.values(AREA_DATA).filter(a => a.type === 'kelurahan').length;
    const desas = Object.values(AREA_DATA).filter(a => a.type === 'desa').length;
    const totalPopulation = Object.values(AREA_DATA)
        .reduce((sum, area) => {
            const pop = parseInt(area.population.match(/\d+/)[0]) * 100;
            return sum + pop;
        }, 0);
    
    return {
        kelurahans,
        desas,
        totalAreas: kelurahans + desas,
        totalPopulation
    };
}

function formatNumber(num) {
    return new Intl.NumberFormat('id-ID').format(num);
}

// ============================================
// EXPORT & PUBLIC API
// ============================================

window.BaloanMap = {
    getAreaData: (areaId) => AREA_DATA[areaId],
    getAllAreas: () => AREA_DATA,
    getAreaStats: getAreaStats,
    switchTab: switchTab,
    filterAreas: filterAreas,
    setTheme: setTheme
};

console.log('✓ Custom script loaded successfully');
