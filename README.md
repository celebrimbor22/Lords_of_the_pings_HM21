# Lords_of_the_pings_HM21


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

The users will take a picture of themselves with an integrated webcam. After that, with the press of a button, the face detection algorithm is run on the picture and sends back the result of the aforementioned categories. 

## IBM Watson Assistant

IBM Watson Assistant is a service on the IBM Cloud to help you build and deploy virtual assistants.
Watson work by nodes, each node has an soecifict funtion that can lead to another node or end there. In the firts half of the diagram have a series of simple question to make feel the user more confortable chating with the bot
