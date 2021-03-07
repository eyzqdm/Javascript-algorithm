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

const Postorder  = (tree) => {

    if(!tree) return
    Postorder (tree.left)
    Postorder (tree.right)
    console.log(tree.val)
}
Postorder (tree)