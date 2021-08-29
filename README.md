# Lords_of_the_pings_HM21

## Table of contents:
1. [Face Detection and Facial Expression](#Face-Detection-and-Facial-Expression)
2. [Chatbot made with IBM Watson Assistant](##IBM-Watson-Assistant)

## Face Detection and Facial Expression

The library used to detect the facial expressions of the pictures taken is [face-api.js](https://justadudewhohacks.github.io/face-api.js/docs/index.html#getting-started), which is a high-level interface on top of TensorFlow.js

The Neural Network used to detect faces in the provided picture is SSD Mobilenet V1, model pretrained on the [WIDER FACE dataset](http://shuoyang1213.me/WIDERFACE/).

Additionally, a second model, employing depthwise separable convolutions and densely connected blocks, is used as part of this interface, to detect the facial expression of a person based on the following categories:
- neutral
- happy
- sad
- angry
- fearful
- disgusted
- surprised

### How it works?

The users will take a picture of themselves with an integrated webcam. After that, with the press of a button, the face detection algorithm is run on the picture and sends back the result of the aforementioned categories. Below are 4 examples from the results obtained:

![Happy Test](/images/happy-test.png)
![Sad Test](/images/sad-test.png)
![Angry Test](/images/angry-test.png)
![Neutral Test](/images/neutral-test.png)

## IBM Watson Assistant
