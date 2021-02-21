/*
 * @Author: your name
 * @Date: 2021-02-06 09:30:27
 * @LastEditTime: 2021-02-21 14:54:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript-algorithm\反转单词.js
 */
var reverseWords = function(s) {


    return s.split(' ').map(v=>v.split('').reverse().join('')).join(' ')

};

