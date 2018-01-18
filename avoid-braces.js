/**
 * Code written without curly braces. Because I can.
 */

/**
 * A trampoline method used for unbounded loops.
 * Accepts a parameter, bounce, which should have either bounce.next or
 * bounce.result. If bounce.next exists, it will be called, else bounce.result
 * will be returned.
 *
 * ED: I can't figure out how to do this with no curly braces.
 */
const trampoline = (bounce) => {
	while ('next' in bounce) bounce = bounce.next()
	return bounce.result
}

/**
 * A really, REALLY simple test of trampoline.
 */
const countdownStep = (n) => (
	(bounce) => (
		bounce = new Object,
		(n == 0)
			? bounce.result = "Blastoff!"
			: bounce.next = () => (
				console.log(n),
				countdownStep(n-1)
			),
		bounce
	)
)()
const countdown = (n) => trampoline(countdownStep(n))


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

console.log("Countdown from 10")
console.log(countdown(10))
