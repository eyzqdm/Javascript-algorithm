const arr = ["car","car","car"]


function checkCommon(strs){


    if(strs.length === 1) return strs[0]
    let i = 0;
    var test1 = ''
    var test2 = ''

    function check (){

        if(i === strs.length) return

        for(let j=0;j<strs.length-1;j++)
        {
            console.log(strs[j],strs[j+1])
            test1 = strs[j].split(' ')[0]
            test2 = strs[j+1].split(' ')[0]
            // console.log(test1[i],test2[i])
           if (test1[i] !== test2[i]) break;
            if(j === strs.length - 2)
            {
                i++
                check()
            }
        }
    }

    function qianzhui(i){

        const test = strs[0]

        console.log(test)

        let str = ''

        for (let x = 0; x<i;x++)
        {
            str = str + test[x]
        }

        return str
    }

    check();

    return i === 0? '': qianzhui(i)
    
    
    
}

console.log(checkCommon(arr))