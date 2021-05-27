function height(t) {
    if (!t) return 0
    let left = height(t.left)
    let right = height(t.right)
    return Math.max(left, right) + 1
}
var isBalanced = function (root) {
    if(!root) return true
    let left = height(root.left)
    let right = height(root.right)
    if(Math.abs(left-right)>1){
        return false
    }else{
        return isBalanced(root.left)&&isBalanced(root.right)
    }
};