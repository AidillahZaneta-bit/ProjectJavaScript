let hari: number = 2;
switch(hari) { // switch digunakan untuk percabangan dengan banyak kondisi
    case 1: // case digunakan untuk menentukan kondisi
        console.log("Senin"); // break digunakan untuk menghentikan percabangan jika kondisi terpenuhi
        break; // break digunakan untuk menghentikan percabangan jika kondisi terpenuhi
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    case 7:
        console.log("Minggu");
        break;
        default:
            console.log("Input Salah"); // default digunakan jika tidak ada case yang sesuai
}

let huruf: string = "A";
switch (huruf) {
    case "A":
    case "a": // case digunakan untuk menentukan kondisi 
        console.log("Ini Huruf A"); 
        break;
    case "B":
    case "b":
        console.log("Ini Huruf B");
        break;
    case "C":
    case "c":
        console.log("Ini Huruf C");
        break;
    case "D":
    case "d":
        console.log("Ini Huruf D");
        break;
    case "E":
    case "e":
        console.log("Ini Huruf E");
        break;  
    default:
        console.log("Input Hanya A-E"); // default digunakan jika tidak ada case yang sesuai
}               

//Nilai Bentang
let nilai: number = 85;
switch (true) { // switch digunakan untuk percabangan dengan banyak kondisi
    case nilai > 0 && nilai < 75:
        console.log("Tidak Lulus"); 
        break;
    case nilai >= 75 && nilai < 90:
        console.log("LULUS"); // break digunakan untuk menghentikan percabangan jika kondisi terpenuhi
        break;
        default:
        console.log("Nilai Tidak Valid"); 
}

let ruangKelas: string = "R8"; //Aidillah. 02. XRPL5
switch (ruangKelas) { // switch digunakan untuk percabangan dengan banyak kondisi
    case "R1":
        console.log("Kelas X RPL 1"); 
        break;
    case "R2":
        console.log("Kelas X RPL 2");
        break;
    case "R3":
        console.log("Kelas X RPL 3");
        break;
    case "R4":
        console.log("Kelas X RPL 4");
        break;
    case "R5":
        console.log("Kelas X RPL 5");
        break;
    case "R6":
        console.log("Kelas X RPL 6");
        break;
    case "R7":
        console.log("Kelas X RPL 7");
        break;
    case "R8":
        console.log("Kelas X RPL 8");
        break;
    case "R9":
        console.log("Kelas X RPL 9");
        break;
    case "R10":
        console.log("Kelas X RPL 10");
        break;
    default:
        console.log("Kelas Tidak Ditemukan"); // default digunakan jika tidak ada case yang sesuai
}