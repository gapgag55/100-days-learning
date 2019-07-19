let x,y;
let video;
let features;
let knn;
let labelP;
let ready = false;
let label = '';

function setup() {
	createCanvas(320, 240);
  video = createCapture(VIDEO);
	video.size(320, 240);
	// video.hide();
  features = ml5.featureExtractor('MobileNet', modelReady);
	labelP = createP('need training data');
	labelP.style('font-size', '32pt');

	x = width / 2;
	y = height / 2;
}

function goClassify() {
	const logits = features.infer(video);
	knn.classify(logits, function (error, result) {
		if (error) {
			console.error(error);
		} else {
			labelP.html(result.label);
			label = result.label;
			goClassify();
		}
	});
}

function keyPressed() {
	const logits = features.infer(video);
	if (key == 'L') {
    knn.addExample(logits, 'left');
    console.log('left');
  } else if (key == 'R') {
		knn.addExample(logits, 'right');
		console.log('right');
	} else if (key == 'U') {
		knn.addExample(logits, 'up');
		console.log('up');
	} else if (key == 'D') {
		knn.addExample(logits, 'down');
		console.log('down');
	} else if (key == 'S') {
		knn.save('model.json');
	}
}

function modelReady() {
	console.log('MobileNet loaded');
	knn = ml5.KNNClassifier();
	knn.load('model.json',function() {
		console.log('KNN Data Loaded');
		goClassify();
	});
}

function draw() {
	background(0);
	fill(255);
	ellipse(x, y, 36);

	if (label == 'up') {
		y--;
	} else if (label == 'down') {
		y++;
	} else if (label == 'left') {
		x--;
	} else if (label == 'right') {
		x++;
	}
}