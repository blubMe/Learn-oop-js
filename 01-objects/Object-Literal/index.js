console.log('object literal')

const profil = {
    nama: 'fahmi irsyad',
    lokasi: {
        kota: 'Sleman',
        provinsi: 'Yogyakarta',
        Negara: 'Indonesia'
    },
    statusHubungan: function () {
        return console.log('lagi cari yang pas')
    }
}

console.log(profil.lokasi)
profil.statusHubungan()