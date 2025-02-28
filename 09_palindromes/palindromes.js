const palindromes =  (str) => {
   let removeSpace = str.replaceAll(' ', '');
   let forwards = str.toCharArray();
   let backwards = forwards.reverse();
  if (backwards === forwards) {
    console.log("It's a palendrome!");
    return true;
    } else {
    console.log("It's not a palindrome!");
    return false;
  };
};

// Do not edit below this line
module.exports = palindromes;
