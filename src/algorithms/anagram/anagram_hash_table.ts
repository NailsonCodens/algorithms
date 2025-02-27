export function anagramHashTable(s, t){
  if(s.length !== t.length){
    return false;
  }

  const countS = {};
  const countT = {};

  for(let i = 0; i < s.length; i++){
    countS[s[i]] = countS[s[i]] !== undefined ? countS[s[i]] += 1 : countS[s[i]] = 1
    countT[t[i]] = countT[t[i]] !== undefined ? countT[t[i]] += 1 : countS[t[i]] = 1

    //countT[t[i]] = (countT[t[i]] || 0) + 1 
  }

  for(const key in countS){
    if(countS[key] !== countT[key]){
      return false;
    }
  }

  return true
}