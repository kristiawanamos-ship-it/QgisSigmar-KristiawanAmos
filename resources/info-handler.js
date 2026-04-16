/**
 * INFO PAGE & STATISTICS HANDLER
 * Menangani tampilan informasi detail dan statistik
 */

// ============================================
// INFO PAGE HANDLER
// ============================================

class InfoPageManager {
    constructor() {
        this.isOpen = false;
        this.init();
    }
    
    init() {
        console.log('📊 InfoPageManager initialized');
        // Event listeners akan ditambahkan saat DOM ready
    }
    
    openInfoPage() {
        const infoPage = document.getElementById('infoPage');
        if (infoPage) {
            infoPage.classList.remove('hidden');
            this.isOpen = true;
            console.log('📖 Info page opened');
        }
    }
    
    closeInfoPage() {
        const infoPage = document.getElementById('infoPage');
        if (infoPage) {
            infoPage.classList.add('hidden');
            this.isOpen = false;
            console.log('🔚 Info page closed');
        }
    }
    
    toggleInfoPage() {
        if (this.isOpen) {
            this.closeInfoPage();
        } else {
            this.openInfoPage();
        }
    }
}

// ============================================
// STATISTICS GENERATOR
// ============================================

class StatisticsGenerator {
    static generateOverviewStats(stats) {
        return `
            <div class="info-section">
                <h2>📊 Statistik Umum Kecamatan Baolan</h2>
                <div class="info-stats-row">
                    <div class="stat-box">
                        <div class="stat-box-number">${stats.overview.totalWilayah}</div>
                        <div class="stat-box-label">Total Wilayah</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-box-number">${stats.overview.totalKelurahan}</div>
                        <div class="stat-box-label">Kelurahan</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-box-number">${stats.overview.totalDesa}</div>
                        <div class="stat-box-label">Desa</div>
                    </div>
                </div>
                <div class="info-grid">
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Total Populasi</div>
                        <div class="info-grid-item-value">${this.formatNumber(stats.overview.totalPopulasi)} jiwa</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Total Area</div>
                        <div class="info-grid-item-value">${stats.overview.totalArea} km²</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Kepadatan</div>
                        <div class="info-grid-item-value">${stats.overview.populasiDensity} jiwa/km²</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Provinsi</div>
                        <div class="info-grid-item-value">${stats.provinsi}</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    static generateKelurahansStats(kelurahans) {
        let html = `
            <div class="info-section">
                <h2>🏘️ Data Kelurahan</h2>
                <div class="info-grid">
        `;
        
        kelurahans.forEach(kel => {
            html += `
                <div class="info-grid-item">
                    <div class="info-grid-item-label">${kel.name}</div>
                    <div style="margin: 8px 0;">
                        <div style="font-size: 12px; color: #667eea; margin: 4px 0;">👥 ${this.formatNumber(kel.populasi)} jiwa</div>
                        <div style="font-size: 12px; color: #667eea; margin: 4px 0;">📍 ${kel.area} km²</div>
                        <div style="font-size: 11px; color: #999; margin: 6px 0;">${kel.primaryActivity}</div>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
        return html;
    }
    
    static generateDesasStats(desas) {
        let html = `
            <div class="info-section">
                <h2>🌾 Data Desa</h2>
                <div class="info-grid">
        `;
        
        desas.forEach(desa => {
            html += `
                <div class="info-grid-item">
                    <div class="info-grid-item-label">${desa.name}</div>
                    <div style="margin: 8px 0;">
                        <div style="font-size: 12px; color: #4caf50; margin: 4px 0;">👥 ${this.formatNumber(desa.populasi)} jiwa</div>
                        <div style="font-size: 12px; color: #4caf50; margin: 4px 0;">📍 ${desa.area} km²</div>
                        <div style="font-size: 11px; color: #999; margin: 6px 0;">${desa.primaryActivity}</div>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
        return html;
    }
    
    static generateEconomyStats(economy) {
        let html = `
            <div class="info-section">
                <h2>💼 Sektor Ekonomi</h2>
                <h3>Sektor Utama</h3>
                <ul class="info-list">
        `;
        
        economy.mainSectors.forEach((sector, index) => {
            html += `<li>${sector}</li>`;
        });
        
        html += `</ul>
                <h3>Distribusi Tenaga Kerja</h3>
                <div class="info-chart">
        `;
        
        const laborKeys = Object.keys(economy.laborForce);
        const laborValues = Object.values(economy.laborForce);
        
        laborKeys.forEach((key, index) => {
            const value = laborValues[index];
            const label = this.formatLaborKey(key);
            html += `
                <div class="chart-bar">
                    <div class="chart-bar-label">${label}</div>
                    <div class="chart-bar-fill" style="width: ${value * 5}px;">
                        <div class="chart-bar-value">${value}%</div>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
        return html;
    }
    
    static generateFacilitiesStats(facilities) {
        let html = `
            <div class="info-section">
                <h2>🏥 Fasilitas Umum</h2>
                <div class="info-grid">
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Fasilitas Kesehatan</div>
                        <div class="info-grid-item-value">${facilities.healthcare.count}</div>
                        <div style="font-size: 11px; color: #999; margin-top: 6px;">
                            RS: ${facilities.healthcare.distribution.rumahSakit} |
                            Puskesmas: ${facilities.healthcare.distribution.puskesmas}
                        </div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Fasilitas Pendidikan</div>
                        <div class="info-grid-item-value">${facilities.education.count}</div>
                        <div style="font-size: 11px; color: #999; margin-top: 6px;">
                            SMA: ${facilities.education.distribution.sma} |
                            SMP: ${facilities.education.distribution.smp}
                        </div>
                    </div>
                </div>
                <h3>Infrastruktur</h3>
                <div class="info-grid">
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Jaringan Jalan</div>
                        <div class="info-grid-item-value">${facilities.infrastructure.roads}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Sambungan Listrik</div>
                        <div class="info-grid-item-value">${facilities.infrastructure.electricity}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Akses Air Bersih</div>
                        <div class="info-grid-item-value">${facilities.infrastructure.waterAccess}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-item-label">Akses Internet</div>
                        <div class="info-grid-item-value">${facilities.infrastructure.internetAccess}</div>
                    </div>
                </div>
            </div>
        `;
        return html;
    }
    
    static formatNumber(num) {
        return new Intl.NumberFormat('id-ID').format(num);
    }
    
    static formatLaborKey(key) {
        const mapping = {
            farming: 'Pertanian',
            trading: 'Perdagangan',
            services: 'Jasa',
            government: 'Pemerintah',
            other: 'Lainnya'
        };
        return mapping[key] || key;
    }
}

// ============================================
// INITIALIZATION ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const infoPage = new InfoPageManager();
    window.InfoPageManager = infoPage;
    console.log('✓ Info page system initialized');
});

// ============================================
// EXPORT & PUBLIC API
// ============================================

window.InfoManager = {
    StatisticsGenerator: StatisticsGenerator,
    openPage: function() {
        if (window.InfoPageManager) {
            window.InfoPageManager.openInfoPage();
        }
    },
    closePage: function() {
        if (window.InfoPageManager) {
            window.InfoPageManager.closeInfoPage();
        }
    },
    togglePage: function() {
        if (window.InfoPageManager) {
            window.InfoPageManager.toggleInfoPage();
        }
    }
};

console.log('✓ Statistics generator loaded');
