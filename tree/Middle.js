const tree = {
    val:"1",
    left:{
        val:"2",
        left:{
            val:"3",
            left:null,
            right:null
        },
        right:{
            val:"4",
            left:null,
            right:null
        }
    },
    right:{
        val:"5",
        left:null,
        right:{
            val:"6",
            left:null,
            right:null
        }
    }
}

const Middle = (tree) => {

    if(!tree) return
    Middle(tree.left)
    console.log(tree.val)
    Middle(tree.right)
}
Middle(tree)