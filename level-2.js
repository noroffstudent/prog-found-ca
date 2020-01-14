/**
 * Level 2
 */

//# Question 1
for (var i = 15; i <= 25; i ++) {
    if (i % 2) {
        console.log(i);
    }
}


//# Question 2
function selfAware() {
    console.log("I am a function");
}

var innerFunction = selfAware;

function outerFunction(fn) {
    fn();
}

outerFunction(innerFunction);

