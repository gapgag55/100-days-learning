# 100-days-learning

## Day 1 - July 17, 2019

**Topic:** 
Machine Learning with ML5.js

**What have I learnt:** 
1. Supervised learning is related to bunch of datasets which given to the system to learning
2. Mobilenet is a set of models of algorithms for Machine Learning
3. P5-manager is a tool for ease of workflow
4. Tensorflow.js is a library on top of Tensorflow which interprets only python to c++
5. ML5 is a library on top of Tensorflow.js
6. Feature Extractor is the process to extract the feature from the input such as image or video into the number combined with ML algorithm become the classifier model

**Result:**
1. [Image Classification](https://github.com/gapgag55/100-days-learning/tree/master/image-classification)
2. [Webcam Image Classification](https://github.com/gapgag55/100-days-learning/tree/master/webcam-image-classification)
3. [Feature Extractor Classification](https://github.com/gapgag55/100-days-learning/tree/master/feature-extractor-classification)

**Resource:**
1. [ML5.js: Image Classification with MobileNet](https://www.youtube.com/watch?v=yNkAuWz5lnY&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=2)
2. [P5 Manager Tutorial](https://www.youtube.com/watch?v=LdWleSHQTcw)

## Day 2 - July 18, 2019
**Topic:** 
Machine Learning with ML5.js (Cont.)

**What have I learnt:** 
1. Classification in feature extraction ML5.js is just classifying particular image with specific label
2. Regression in feature extraction ML5.js releated to assign the number to particular image as the label
3. When model is saved, there are two files model.json and model.weight.bin whereas model.json contains the neuron networks and model.weight.bin contains the weight of each neuron networks

**Result:**
1. [ML5.js: Feature Extractor Regression](https://github.com/gapgag55/100-days-learning/tree/master/feature-extractor-regression)
2. [ML5.js: Save and Load Model](https://github.com/gapgag55/100-days-learning/tree/master/save-load-model)

**Resource:**
1. [ML5.js: Feature Extractor Regression](https://www.youtube.com/watch?v=aKgq0m1YjvQ&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=6)
2. [ML5.js: Save and Load Model](https://www.youtube.com/watch?v=eU7gIy3xV30&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=7)

## Day 3 - July 19, 2019
**Topic:** 
Machine Learning with ML5.js (Cont.)

**What have I learnt:** 
1. MobileNet is an image model which has more than 1,000 image classification
2. Semantic Fingerprint is the output of neuron network process and can be named as a logits
3. When normalizing the logits, the output of array will become the probability of label 
4. In training, KNN with ML5.js is just add logits with label to knn.addExample(logits, label)
5. KNN uses cosine similarity to calculate distance each of logits
   
**Result:**
1. [ML5.js: K-nearest-neighbor](https://github.com/gapgag55/100-days-learning/tree/master/KNN-classification)


**Resource:**
1. [ML5.js: KNN Classification Part 1](https://www.youtube.com/watch?v=KTNqXwkLuM4&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=8)
2. [ML5.js: KNN Classification Part 2](https://www.youtube.com/watch?v=KTNqXwkLuM4&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=9)
3. [ML5.js: KNN Classification Part 3](https://www.youtube.com/watch?v=KTNqXwkLuM4&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=10)
4. [How to build a Teachable Machine with TensorFlow.js](https://observablehq.com/@nsthorat/how-to-build-a-teachable-machine-with-tensorflow-js)