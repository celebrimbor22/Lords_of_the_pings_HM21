// Array of strings representing the available Face Expression categories
const possibleMoods = [
  'neutral',
  'happy',
  'sad',
  'angry',
  'fearful',
  'disgusted',
  'surprised'
]

async function loadModels() {
  // Load model weights for Face Detection and Face Expression
  await faceapi.loadSsdMobilenetv1Model('/models')
  await faceapi.loadFaceExpressionModel('/models')
  console.log(faceapi.nets)
  console.log("Application started.")
}

async function detectFace() {
  // Run the detection algorithm
  const detection = await faceapi.detectSingleFace(imagePlaceholder).withFaceExpressions()
  console.log(detection)
  if (!detection) console.error("Undefined detection result")
  console.log(detection.expressions)
  const moods = detection.expressions

  // Find the maximum confidence value
  // This max corresponds to the expression detected
  let maxValue = moods[possibleMoods[0]]
  let resultingExpression = possibleMoods[0]
  for (mood in moods) {
    if (possibleMoods.includes(mood)) {
      let currValue = moods[mood]
      if (currValue > maxValue) {
        maxValue = currValue
        resultingExpression = mood
      }
    }
  }

  // Display result
  console.log(resultingExpression)
  console.log(maxValue)
  resultBox.innerHTML = `Your expression is ${resultingExpression}`
}

loadModels()

// HTML DOM Elements related to the Face Detection process
const resultBox = document.getElementById("myResult")
const detectionButton = document.getElementById("myBtn")

// HTML DOM Elements related to the webcam and photo shoot 
const cameraButton = document.querySelector("#start-camera");
const video = document.querySelector("#video");
const shootButton = document.querySelector("#click-photo");
const canvas = document.querySelector("#canvas");
const imagePlaceholder = document.querySelector("#imagePlaceholder")

// When clicked, enable webcam
cameraButton.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

// When clicked, take a picture
shootButton.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
    imagePlaceholder.src = image_data_url
});

// When clicked, run Face Detection algorithm
detectionButton.addEventListener("click", detectFace)


/*playlist 

felicidad

<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9XIFQuFvzM4?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>


Enojo
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVtFO27AQ6dF?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

Tristeza
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTXGqmP0bfT3?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9Dh2wgiAwVX?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

neutral
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXd9zR7tdziuQ?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4gOolUyeDaQ?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>


*/