function countX (str){
  if(str.length === 0){
    return 0
  }
  if(str[0] === 'x'){
    return 1 + countX(str.substring(1))
  }else {
    return countX(str.substring(1))
  }
}
