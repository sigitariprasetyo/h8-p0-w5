function sorting(arrNumber) {
    // code di sini
    var sort = arrNumber.sort((a, b) => b - a)
    return sort;
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var result0 = []
    if(arrNumber.length === 0){
        return result0
    }

    var bigest = 0;
    var total = 0;
    arrNumber.forEach(element => {
        if( element === arrNumber[0]){
        bigest = element
        total++
        }
    });
    
    var result = 'angka paling besar adalah ' + bigest + ' dan jumlah kemunculan sebanyak ' + total + ' kali.'
    return result
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));