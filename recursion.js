#!/usr/bin/js
'use strict'

let factorial = (n) => 
	n === 0 ? 
	1 :
	n * factorial(n-1)

let tail_factorial = (n) => {
	let part_factorial = (n, acc) =>
		n === 0 ?
		acc :
		part_factorial(n-1, n*acc)
	return part_factorial(n, 1)
}

let look_ma_no_curly_braces = (n) => (
	f => f(f, n, 1)
)(
	(f, n, acc) =>
		n === 0 ?
		acc : 
		f(f, n-1, n*acc)
)

console.log(factorial(5))
console.log(tail_factorial(7))
console.log(look_ma_no_curly_braces(10))
