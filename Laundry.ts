const outputElement = document.getElementById("output-laundry") as HTMLElement;

let hasilHtml = ''; //AIDILLAH. 02. XR5

const jumlahPelangganInput: string | null = prompt("Masukkan jumlah pelanggan: ");
const jumlahPelanggan: number = jumlahPelangganInput ? parseInt(jumlahPelangganInput) : 0;

let totalPendapatan: number = 0;
let jumlahPelangganValid: number = 0;

for ( let i = 1; i <= jumlahPelanggan; i++ ) {
    hasilHtml += `<h3>Pelanggan ke- ${i}</h3>`;

    const beratInput: string | null = prompt(`Masukkan berat cucian pelanggan ke-${i} (dalam kg): `);
    const berat: number = Number(beratInput);

    let hargaPerKg: number = 0;
    let totalBayar: number = 0;

    if(berat <= 0) {
        hasilHtml += `<p>Berat cucian tidak valid. Silakan masukkan berat yang lebih besar dari 0.</p>`;
        continue;
    } else {
         if (berat >= 1 && berat <= 3) {
            hargaPerKg = 5000;
    } else if (berat >= 4 && berat <= 6) {
        hargaPerKg = 4500;
    } else if (berat >= 7 && berat <= 10) {
        hargaPerKg = 4000;
    } else if (berat > 10) {
        hargaPerKg = 3500;
    }

    totalBayar = berat * hargaPerKg;
    totalPendapatan = totalPendapatan + totalBayar;
    jumlahPelangganValid = jumlahPelangganValid + 1;
    hasilHtml += `<p> 
    Pelanggan ke-${i}<br>
    Berat Pakaian: ${berat} kg<br>
    Harga per Kg: Rp ${hargaPerKg.toLocaleString('id-ID')}<br>
    <strong>Total Bayar: Rp ${totalBayar.toLocaleString('id-ID')}</strong>
    </p>`;
    }
   
    
}

let rataRataPembayaran: number = 0;
if (jumlahPelangganValid > 0) {
    rataRataPembayaran = totalPendapatan / jumlahPelangganValid;
}

hasilHtml += `
<hr>
<h2>Ringkasan Pendapatan Laundry</h2>
<p><strong>Total Pendapatan Laundry:</strong> Rp ${totalPendapatan.toLocaleString('id-ID')}</p>
<p><strong>Rata-rata Pembayaran:</strong> Rp${rataRataPembayaran.toLocaleString('id-ID')}</p>
`;

if (outputElement) {
    outputElement.innerHTML = hasilHtml;
}