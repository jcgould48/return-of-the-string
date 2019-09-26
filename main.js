function capitalize(str) {
return str.toUpperCase();
}

function exclaim(str) {
  return str + "!";
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  
  return str[str.length-1];
}

function oneCharacter(str, x) {
  return str[x];
}

function twoCharacters(str,x,y) {
return str[x]+str[y];
}

function initials(str) {
  const num = str.indexOf(' ')
  return capitalize(str[0]+'.'+str[num+1]+'.')
}

function yeller(str) {
 
  return capitalize(str) +'!!!';
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};