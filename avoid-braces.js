/**
 * Code written without curly braces. Because I can.
 */

/**
 * A trampoline method used for unbounded loops.
 * Accepts a parameter, bounce, which should have either bounce.next or
 * bounce.result. If bounce.next exists, it will be called, else bounce.result
 * will be returned.
 */
const trampoline = (bounce) =>
	("next" in bounce)
	? bounce.next()
	: bounce.result

/**
 * A helper function to create an object with properties (hard to do without
 * braces!)
 */
const assoc = (obj, kvPairs) => (
	obj || new Object,
	obj
)


/**
 * A test function for trampoline, which uses it to implement factorial.
 */
const factorial = (n) => ((fact_iter) =>
	trampoline(fact_iter(n, 1))
)(
	/* fact_iter goes here */
)

// test
console.log("Object created without braces: " + (
	(foo) => (
		foo = new Object,
		foo.value = 42,
		foo
	))()
)

console.log("Was scope violated? Global foo is now " + typeof foo)
