# Lords_of_the_pings_HM21
---
## **BuddyBot** - *Your Emotional Assistant App*
----

## Table of contents:
1. [Face Detection and Facial Expression](#Face-Detection-and-Facial-Expression)
2. [Chatbot made with IBM Watson Assistant](#ibm-watson-assistant)

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

IBM Watson Assistant is a service on the IBM Cloud to help you build and deploy virtual assistants. IBM cloud service provide you with the script to use in the java script code to desplay the assitant.

Watson work by nodes, each node has an specifict funtion that can lead to another node or end there. The firts half of the diagram it havr have a series of simple question to make feel the user more confortable chating with the bot.

The next part of the chatbot consists in train the AI to recognize four basic emotions: angry, happiness, sadness, and neutral. 
The node methodology was continued, but this time, each node detects an emotion and proceeds to process the feeling and provide a solution. Each node was trained with keywords, which help Watson's training.

Depending on the feeling detected in the sentence, the chatbot will give a result, selected in a bank of responses and gives the telephone number and the TeQueremos link in order for the user to keep track of their emotional state.


