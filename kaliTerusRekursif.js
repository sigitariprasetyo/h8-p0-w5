function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var string = angka.toString()
    var length = string.length
    var hasil = Number(string[0])

    if(length === 1){
        return hasil
    } else {
        for( var i = 1; i < length; i++){
            hasil *= Number(string[i])
        }
    }
    return kaliTerusRekursif(hasil)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6