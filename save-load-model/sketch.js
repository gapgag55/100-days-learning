let mobilenet;
let classifier;
let video;
let label = 'Loading model';
let happyButton;
let sadButton;
let trainButton;
let saveButton;

function modelReady() {
	console.log('Model is ready!!');
	classifier.load('model.json', customModelReady);
}

function customModelReady() {
	console.log('Custom Model is ready!!');
	label = 'model ready';
	classifier.classify(gotResults);
}

function videoReady() {
	console.log('Video is ready!!');
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
}

function draw() {
	background(0);
	image(video, 0, 0);
	fill(255);
	textSize(20);
	text(label, 10, height - 20);
}