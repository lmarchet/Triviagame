var questions = [{
	question: "What is the Italian word for pie?",
	answers: ["torta", "tiramisu", "pizza",  "limoncello"],
	answer: 2
},{
	question: "What is the national flower of Wales?",
	answers: ["Lily", "Jasmine", "Daisy", "Daffodil"],
	answer: 3
},{
	question: "Which Australian marsupial enjoy eating eucalyptus leaves?",
	answers: ["Koala bear", "Laddy bug", "Blue Jay", "Nemo"],
	answer: 0
},{
	question: "Which reptile, according to the song, should you never smile at?",
	answers: ["Comodo dragon", "Crocodile", "snake", "lumbriga"],
	answer: 1
},{
	question: "Alfred, an ancient King of Wessex, is famous for burning what?",
	answers: ["insence", "forests", "trees", "Cakes"],
	answer: 3
}];

var triviaArr = ["question1", "question2", "question3", "question4", "question5"];
var currentQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var seconds = 0;
var time = 0;
var risposta = true;
var userChoice;
counter = 0;

$("#startButton").on("click", function() {
	$(this).hide();
	newGame();
});

function newGame() {
	$("#finalMessage").html("");
	$("#correctAnswers").html("")
	$("#wrongAnswers").html("")
	$("#noAnswer").html("");
	currentQuestion = 0;
	correctAnswer = 0;
	
	newQuestion();
}

function newQuestion() {
	$("#message").html("");
	$("#rightAnswer").html("");
	
	risposta = true;
	
	//sets up new trivia question
	// need a for loop to show the questions
	
	$("#currentQuestion").html("Question " + (currentQuestion + 1) + " out of " + questions.length);
	$(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");
	
	var optionsDiv = $("<div>"); // create a new div in each interation for the 4 answers
	optionsDiv.html(questions[currentQuestion].answers[currentQuestion]);
	optionsDiv.attr({"counter": counter + 1});
	optionsDiv.addClass("diffAnswers");
	$(".answers").append(optionsDiv);
	

	timer();

	
function timer() {
	seconds = 1000;
	$("#timer").html("<h3>Time left: " + seconds + "</h3>");
	risposta = true;

	//sets timer to countdown 1000  that equals to 1 second
	time = setInterval(showTimer, 1000);
}

function showTimer() {
	seconds--;
	$("#timer").html("<h3>Time left: " + seconds + "</h3>");
	if(seconds < 1) {
		clearInterval(time);
		risposta = false;
		answerTrivia();
	}
}

function answerTrivia() {
	$("#currentQuestion").html("");
	$(".diffAnswers").html("");
	$(".question").html("");

	//need to create a if-else statement to check if the answer provided is correct, wrong, or no answer provided
	}

// need to show the final results