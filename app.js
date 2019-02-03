document.getElementById('clickElement').addEventListener('click', encode);
document.getElementById('clickElement2').addEventListener('click', decode);

function encode() {
   const wordsToCypher = document.getElementById("typed").value;
   let offset = parseInt(document.getElementById("jump").value);
   let result = cypher(wordsToCypher, offset);
   document.getElementById("finalResult").innerHTML = "Usando o número escolhido " + offset + ",<br> a sua mensagem cifrada é:<br> " + result;
};

function cypher(wordsToCypher, offset) {
   let final = "";
   if (offset < 0) {
      offset = (offset % 26) + 26
   }
   for (i = 0; i < wordsToCypher.length; i++) {
      if (wordsToCypher.charCodeAt(i) >= 65 && wordsToCypher.charCodeAt(i) <= 90) {
         code = ((wordsToCypher.charCodeAt(i) - 65 + offset) % 26) + 65;
      }
      else if (wordsToCypher.charCodeAt(i) >= 97 && wordsToCypher.charCodeAt(i) <= 122) {
         code = ((wordsToCypher.charCodeAt(i) - 97 + offset) % 26) + 97;
      }
      else {
         code = wordsToCypher.charCodeAt(i)
      }

      final += String.fromCharCode(code);
   }
   return final
}

function decode() {
   const wordsToDecypher = document.getElementById("retyped").value;
   let offset = parseInt(document.getElementById("jump2").value);
   let result2 = decypher(wordsToDecypher, offset);
   document.getElementById("finalResult2").innerHTML = "Usando o número escolhido " + offset + ",<br> a sua mensagem decifrada é:<br>" + result2;
}

function decypher(wordsToDecypher, offset) {
   let final2 = "";
   for (i = 0; i < wordsToDecypher.length; i++) {
      if (wordsToDecypher.charCodeAt(i) >= 65 && wordsToDecypher.charCodeAt(i) <= 90) {
         code = ((wordsToDecypher.charCodeAt(i) - 65 - (offset % 26) + 26) % 26 + 65);
      }
      else if (wordsToDecypher.charCodeAt(i) >= 97 && wordsToDecypher.charCodeAt(i) <= 122) {
         code = ((wordsToDecypher.charCodeAt(i) - 97 - (offset % 26) + 26) % 26 + 97);
      }
      else {
         code = wordsToDecypher.charCodeAt(i)
      }

      final2 += String.fromCharCode(code);
   }
   return final2
}