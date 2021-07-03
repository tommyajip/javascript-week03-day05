// Objectives

//     Mampu menggunakan built in function pada Array seperti .push, .shift, .unshift, dll
//     Mampu membuat function dan mengerti penggunaan parameter dari sebuah function
//     Mampu menggunakan template literals

// RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
// Directions
// Antrian

// Diberikan sebuah function ganjilGenap yang menerima satu parameter plat bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).

// Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.

function ganjilGenap(plat) {
  if (plat === "") {
    return "plat tidak ditemukan"
  } else if (plat === undefined) {
    return "invalid data"
  }

  let hasil = plat.split(";");
  let hitungGenap = 0;
  let hitungGanjil = 0;
  for (let i = 0; i < hasil.length; i++) {
    if (hasil[i] % 2 == 0) {
      hitungGenap++;
    } else {
      hitungGanjil++;
    }
  }

  if (hitungGenap == 0) {
    return "plat ganjil sebanyak " + hitungGanjil + " dan plat genap tidak ditemukan";
  } else if (hitungGanjil == 0) {
    return "plat genap sebanyak " + hitungGenap + " dan plat ganjil tidak ditemukan";
  } else {
    return "plat genap sebanyak " + hitungGenap + " dan plat ganjil sebanyak " + hitungGanjil;
  }
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data