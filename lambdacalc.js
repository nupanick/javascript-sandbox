#!/usr/bin/js
'use strict'

// Evaluate according to lambda calculus application rules. For instance, [+ 2 3] should return 5.
function $e(x) {
	// If x is not an array, we're done.
	if (!Array.isArray(x)) return x
	
	// If x has only one value, we can't apply it to anything, so just unbox it and recurse.
	if (x.length === 1) return $e(x[0]) 

	// Otherwise, we know x is an array with more than one value, so let's destructure it.
	const first = x[0]
	const second = x[1]
	const others = x.slice(2, x.length)

	// If the first value is a function, apply it, otherwise ignore its argument.
	if (typeof first === 'function') {
		return $e([first(second)].concat(others))
	} else {
		return $e([first].concat(others))
	}
}

// Booleans!
const T = a => b => a

const F = a => b => b

/*
const NOT = a => 
	(a)(F)(T)

const AND = a => b => 
	(a)(b)(F)

const OR = a => b =>
	(a)(T)(b)

const XOR = a => b =>
	(a)( (b)(F)(T)) ((b)(T)(F) )

// Natural numbers!
const nZero = f => x => x
const nSucc = n => f => x => (f)(n)( (f)(x) )
*/
