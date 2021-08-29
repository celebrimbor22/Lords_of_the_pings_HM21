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

const repoPath = 'Lords_of_the_pings_HM21'

async function loadModels() {
  // Load model weights for Face Detection and Face Expression
  console.log(window.location.hostname)
  console.log(window.location.pathname)
  await faceapi.loadSsdMobilenetv1Model(`/models`)
  await faceapi.loadFaceExpressionModel(`/models`)
  console.log(faceapi.nets)
  console.log("Application started.")
}

async function detectFace() {
  // Run the detection algorithm
  let successfulDetection = true
  let moods = {}
  const detection = await faceapi.detectSingleFace(imagePlaceholder).withFaceExpressions()
  console.log(detection)
  if (!detection) {
    console.error("Undefined detection result")
    successfulDetection = false
  } else {
    console.log(detection.expressions)
    moods = detection.expressions
  }

  // Find the maximum confidence value
  // This max corresponds to the expression detected
  let resultingExpression = 'undefined'
  if (successfulDetection) {
    let maxValue = moods[possibleMoods[0]]
    resultingExpression = possibleMoods[0]
    for (mood in moods) {
      if (possibleMoods.includes(mood)) {
        let currValue = moods[mood]
        if (currValue > maxValue) {
          maxValue = currValue
          resultingExpression = mood
        }
      }
    }
    // Print result to console
    console.log(resultingExpression)
    console.log(maxValue)
  }

  // Draw rectangle on top of detected face
  if (successfulDetection) {
    console.log(detection.detection._box)
    const box = detection.detection._box
    canvas.getContext('2d').beginPath()
    canvas.getContext('2d').lineWidth = "3"
    canvas.getContext('2d').strokeStyle = "red"
    canvas.getContext('2d').rect(box.x, box.y, box.width, box.height);
    canvas.getContext('2d').stroke()
  }

  // Display the result
  if (successfulDetection) {
    resultBox.innerHTML = `Your expression is ${resultingExpression}`
  } else {
    resultBox.innerHTML = `We did not detect a face :(`
  }

  setTimeout(() => {
    // Redirect to second page once 5 secs have elapsed
    const newURL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/Results.html?result=${resultingExpression}`
    console.log(newURL)
    window.location.href = newURL;
  }, 5000);
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