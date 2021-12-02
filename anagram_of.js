function anagram_of(str){
   if (str.length === 1) {
     return str;
   }
   let collection = [];
   let substring_anagrams = anagram_of(str.substring(1))
    console.log(substring_anagrams);
    substring_anagrams.foreach((substring_anagram,index) =>{
      let copy = [...substring_anagram]
      copy.splice(index,0,str[0])
      collection.push(copy)
  })
  return collection
}
