let mobilenet;
let classifier;
let video;
let label = '';
let ukuButton;
let whistleButton;
let trainButton;

function modelReady() {
	console.log('Model is ready!!');
}

function videoReady() {
	console.log('Video is ready!!');
}

function whileTraining(loss) {
	if (loss == null) {
		console.log('Training Complete');
		classifier.classify(gotResults);
	} else {
		console.log(loss);
	}
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
	} else {
		label = results[0].label;
		classifier.classify(gotResults);
	}
}

function setup() {
	createCanvas(640, 530);
	video = createCapture(VIDEO);
	video.hide();
	background(0);
	mobilenet = ml5.featureExtractor('MobileNet', modelReady);
	classifier = mobilenet.classification(video, videoReady);

	ukuButton = createButton('ukuButton');
	ukuButton.mousePressed(function() {
		classifier.addImage('ukulele');
	});

	whistleButton = createButton('whistleButton');
	whistleButton.mousePressed(function() {
		classifier.addImage('whistle');
	});

	trainButton = createButton('trainButton');
	trainButton.mousePressed(function() {
		classifier.train(whileTraining);
	});
}

function draw() {
	background(0);
	image(video, 0, 0);
	fill(255);
	textSize(20);
	text(label, 10, height - 20);
}