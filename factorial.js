function factorial(num) {
    let product = 1;
    for(i=1; i<=num; i++)  {
    console.log(i);
        product *= i;
    
  }
  console.log(product);
  return product;
}

factorial(0);