//  [Exercises 14] Password Generator

function changeVocals (str) {
    //code di sini
   var hasil = '';
   for( var i = 0; i < str.length; i++){
        if (str[i] === 'a'){
            hasil += 'b'
        } else if( str[i] === 'A'){
            hasil += 'B'
        } else if( str[i] === 'i'){
        hasil += 'j'
        } else if( str[i] === 'I'){
            hasil += 'J'
        } else if( str[i] === 'u'){
            hasil += 'v'
        } else if( str[i] === 'U'){
            hasil += 'V'
        } else if( str[i] === 'e'){
            hasil += 'f'
        } else if( str[i] === 'E'){
            hasil += 'F'
        } else if( str[i] === 'o'){
            hasil += 'p'
        } else if( str[i] === 'O'){
            hasil += 'p'
        } else {
            hasil += str[i]
        }
   }
   return hasil;
  }
  
  function reverseWord (str) {
    //code di sini
    var hasil = changeVocals(str).split("").reverse().join("");
    return hasil;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var hasil = '';
    for( var i = 0; i < str.length; i++){
        if( str[i].toLowerCase() === str[i]){
            hasil += str[i].toUpperCase();
        } else{
            hasil += str[i].toLowerCase();
        }
    }
    return reverseWord(hasil);
  }
  
  function removeSpaces (str) {
    //code di sini
    var hasil = '';
    for( var i = 0; i < str.length; i++){
        if( str[i] !== ' '){
            hasil += str[i];
        }
    }
    return reverseWord(hasil);
  }
  
  function passwordGenerator (name) {
    //code di sini
    if( name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    
    var change = changeVocals(name);
    var reverse = reverseWord(change);
    var setUppLow = setLowerUpperCase(reverse);
    var remove = removeSpaces(setUppLow);
    var hasil = remove;
    return hasil;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'