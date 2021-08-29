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
  await faceapi.loadSsdMobilenetv1Model('/models')
  await faceapi.loadFaceExpressionModel('/models')
  console.log(faceapi.nets)
  console.log("Application started.")
}

async function detectFace() {
  const input = document.getElementById('myImg')
  const detection = await faceapi.detectSingleFace(input).withFaceExpressions()
  console.log(detection)
  if (!detection) console.error("Undefined detection result")
  console.log(detection.expressions)
  const moods = detection.expressions

  // Find max value
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

const button = document.getElementById("myBtn")
button.addEventListener("click", detectFace)

const resultBox = document.getElementById("myResult")