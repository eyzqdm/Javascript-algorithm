function print(n){
    setTimeout(() => {
        setTimeout(() => {
            console.log(n);
          });
    },Math.floor(Math.random() * 1000));
    
  }
  for(var i = 0; i < 100; i++){
    print(i);
  }