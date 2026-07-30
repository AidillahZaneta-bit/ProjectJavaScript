//Deklarasi Objek
const karakter = {
    Nama: "Cia",
    Level: 100,
    HP: 20,
    Senjata: "Pistol"
};
//output
console.log(karakter);
//dot notation
console.log(karakter.Nama);
console.log(karakter.Senjata);
//bracket notation
console.log(karakter['HP']);
console.log(karakter['Level']);
//template literal
console.log(`Nama Karakter adalah ${karakter.Nama}`);
console.log(`Karakter telah mencapai level ${karakter.Level}`);
console.log(`Karakter menggunakan senjata berupa ${karakter.Senjata} untuk melawan para musuh`);
console.log(`Karakter tetap bertahan dan berusaha dengan sisa HP nya sebesar ${karakter.HP}`);