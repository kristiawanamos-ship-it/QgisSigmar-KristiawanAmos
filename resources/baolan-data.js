/**
 * DATA STATISTICS UNTUK BAOLAN
 * File ini berisi data statistik untuk setiap wilayah
 */

const BAOLAN_STATS = {
    kabupaten: 'Tolitoli',
    provinsi: 'Sulawesi Tengah',
    kecamatan: 'Baolan',
    
    overview: {
        totalWilayah: 10,
        totalKelurahan: 6,
        totalDesa: 4,
        totalPopulasi: 18000,
        totalArea: 113,
        populasiDensity: 159.3
    },
    
    kelurahans: [
        {
            id: 1,
            name: 'Kel. Baru',
            dataId: 'kelurahan-baru',
            populasi: 2500,
            area: 15,
            primaryActivity: 'Perdagangan & Pemukiman',
            infrastructure: 'Lengkap',
            economicLevel: 'Menengah-Atas'
        },
        {
            id: 2,
            name: 'Kel. Nalu',
            dataId: 'kelurahan-nalu',
            populasi: 1800,
            area: 12,
            primaryActivity: 'Wisata & Komunitas',
            infrastructure: 'Berkembang',
            economicLevel: 'Menengah'
        },
        {
            id: 3,
            name: 'Kel. Panasakan',
            dataId: 'kelurahan-panasakan',
            populasi: 2100,
            area: 14,
            primaryActivity: 'Perdagangan & Pendidikan',
            infrastructure: 'Lengkap',
            economicLevel: 'Menengah'
        },
        {
            id: 4,
            name: 'Kel. Sidoarjo',
            dataId: 'kelurahan-sidoarjo',
            populasi: 1950,
            area: 13,
            primaryActivity: 'Layanan Publik & Kesehatan',
            infrastructure: 'Lengkap',
            economicLevel: 'Menengah'
        },
        {
            id: 5,
            name: 'Kel. Tambun',
            dataId: 'kelurahan-tambun',
            populasi: 2200,
            area: 16,
            primaryActivity: 'Pengembangan & Investasi',
            infrastructure: 'Lengkap',
            economicLevel: 'Menengah-Atas'
        },
        {
            id: 6,
            name: 'Kel. Tuweley',
            dataId: 'kelurahan-tuweley',
            populasi: 1700,
            area: 11,
            primaryActivity: 'Ekowisata & Lingkungan',
            infrastructure: 'Berkembang',
            economicLevel: 'Menengah'
        }
    ],
    
    desas: [
        {
            id: 7,
            name: 'Desa Dadakitan',
            dataId: 'desa-dadakitan',
            populasi: 800,
            area: 8,
            primaryActivity: 'Pertanian & Agribisnis',
            infrastructure: 'Dasar',
            economicLevel: 'Menengah-Bawah',
            mainProducts: ['Padi', 'Palawija', 'Ternak']
        },
        {
            id: 8,
            name: 'Desa Buntuna',
            dataId: 'desa-buntuna',
            populasi: 750,
            area: 9,
            primaryActivity: 'Pertanian & Budaya',
            infrastructure: 'Dasar',
            economicLevel: 'Menengah-Bawah',
            mainProducts: ['Komoditas Lokal', 'Kerajinan']
        },
        {
            id: 9,
            name: 'Desa Lelean Nono',
            dataId: 'desa-leleannono',
            populasi: 600,
            area: 7,
            primaryActivity: 'Konservasi & Ekowisata',
            infrastructure: 'Dasar',
            economicLevel: 'Menengah-Bawah',
            mainProducts: ['Produk Organik', 'Wisata Alam']
        },
        {
            id: 10,
            name: 'Desa Pangi',
            dataId: 'desa-pangi',
            populasi: 700,
            area: 8,
            primaryActivity: 'Pertanian & Sejarah',
            infrastructure: 'Dasar',
            economicLevel: 'Menengah-Bawah',
            mainProducts: ['Hasil Bumi', 'Warisan Budaya']
        }
    ],
    
    facilities: {
        healthcare: {
            name: 'Fasilitas Kesehatan',
            count: 15,
            distribution: {
                rumahSakit: 1,
                puskesmas: 5,
                poskesdes: 9
            }
        },
        education: {
            name: 'Fasilitas Pendidikan',
            count: 45,
            distribution: {
                sma: 3,
                smp: 8,
                sd: 34
            }
        },
        infrastructure: {
            name: 'Infrastruktur',
            roads: '120 km',
            electricity: '95%',
            waterAccess: '85%',
            internetAccess: '60%'
        }
    },
    
    economy: {
        mainSectors: [
            'Pertanian & Agribisnis',
            'Perdagangan & Jasa',
            'Pariwisata',
            'Pendidikan',
            'Kesehatan'
        ],
        growthRate: '4.5% per tahun',
        laborForce: {
            farming: 35,
            trading: 25,
            services: 20,
            government: 15,
            other: 5
        }
    },
    
    demographics: {
        ageDistribution: {
            under18: 28,
            working_age: 62,
            over60: 10
        },
        education: {
            primary: 20,
            secondary: 40,
            tertiary: 25,
            noEducation: 15
        }
    }
};

// Export untuk digunakan di script lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BAOLAN_STATS;
}

console.log('✓ Baolan Statistics loaded');
