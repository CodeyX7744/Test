function power(num, power) {
  let product = 1;
  let arr = [];
	for(let i = 0; i<power; i++) {
    
    arr[i] = num;

  }

  arr.forEach(num => {
    product *= num;
    console.log(product);
  })
 
  return product;
};


power(4,3);
