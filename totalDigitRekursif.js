function totalDigitRekursif(angka) {
    // you can only write your code here!
    var hasil = 0
    var string = angka.toString()
    var length = string.length

    if(!angka){
        return hasil
    } else{
        hasil += Number(string[0])
    }
    return hasil + totalDigitRekursif(Number(string.slice(1)))
    
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5