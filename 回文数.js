const num = 1234321

function check(num){

    let _arr = []

    _arr = num.toString().split('')

    let i = 0
    let j = _arr.length - 1

    while(i<j)
    {
       if(_arr[i] !== _arr[j])
       {
        return false
       }
        
        i++
        j--
    }

    return true

}

 console.log(check(num))