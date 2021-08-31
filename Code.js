function Check(Word){
WordLength = Word.length // get the word length
result=''; // declear variable to store the result

switch(true) {
  case WordLength < 3:
    result='too short'
    break;

  case  WordLength == 3:
    if (Word.charAt(0) == Word.charAt(2)){ // if the first and the last char is equial return 'symmetrical'
   	 result='symmetrical';
   }
   	else{
   		result=' not symmetrical';
   	}
    break;

  case  WordLength > 3 && WordLength%2==0: //if the word length is even and greater than 3
    WordArray =Word.split(''); //store the letters in an array

    const middleIndex = Math.ceil(WordArray.length / 2); //divide the array into equil parts
    const firstHalf = WordArray.splice(0, middleIndex);   
    const secondHalf = WordArray.splice(-middleIndex);
    secondHalfReversed= secondHalf.reverse() //reverse the second half 
    
    if (firstHalf.join('') == secondHalfReversed.join('')){ 
        result='symmetrical';
    } else{
    	result=' not symmetrical';
    }
    break;
  case  WordLength > 3 && WordLength%2!=0: //if the word length is odd and greater 
    WordArray =Word.split('');

    const middleIndex2 = Math.ceil(WordArray.length / 2);
    const firstHalf2 = WordArray.splice(0, middleIndex2);  
    firstHalf2.pop() // remove the letter in the middle
    const secondHalf2 = WordArray.splice(-middleIndex2);
    secondHalfReversed2= secondHalf2.reverse()

     if (firstHalf2.join('') == secondHalfReversed2.join('')){
        result='symmetrical';
    } else{
    	result=' not symmetrical';
    }
    break;
}

document.getElementById('answer').innerHTML= result; // show the result 
}
