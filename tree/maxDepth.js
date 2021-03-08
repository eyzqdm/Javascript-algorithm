var maxDepth = function(root) {

    const pre = (e) => {
       
       if(!e) return 0
       let lefDep = pre(e.left) + 1
       let rigDep = pre(e.right) + 1
       return lefDep>rigDep? lefDep:rigDep
    }
    return pre(root)
 };