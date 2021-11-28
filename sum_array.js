function sum (arr){
  const [a, ...rest] = arr;
  if(rest.length === 0){
    return a
  }
  return a + sum(rest)
}
