var flowers = ["rose", "tulip", "peony", "orchid", "daffoldil"];
var beatles = ["John" ,"Paul", "George", "Ringo"];

// this is a for loop
for (var i = beatles.length -1; i >= 0; i--) {
	console.log("Hello, my name is " + beatles[i]);
}


var printBeatle = function (arg) {
	console.log("Hello, my name is " + arg +"!");
}

beatles.forEach(printBeatle);