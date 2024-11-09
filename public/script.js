
const textArea = document.getElementById("text_to_summarize");

const submitButton = document.getElementById("submit-button");

const summarizedTextArea = document.getElementById("summary");


// First, we disable the submit button by default when the user loads the website.
submitButton.disabled = true;



textArea.addEventListener("input", verifyTextLength);

submitButton.addEventListener("click", submitData);




// Next, we define a function called verifyTextLength(). This function will be called when the user enters something in the text area. It receives an event, called ‘e’ here
function verifyTextLength(e) {

  // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called ‘textarea’
  const textarea = e.target;

  // Check if the text in the text area is the right length - between 200 and 100,000 characters
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    // If it is, we enable the submit button.
    submitButton.disabled = false;
  } else {
    // If it is not, we disable the submit button.
    submitButton.disabled = true;
  }
}










// function submitData(e) {

//   // This is used to add animation to the submit button
//   submitButton.classList.add("submit-button--loading");

//   const text_to_summarize = textArea.value;

//   // INSERT CODE SNIPPET FROM POSTMAN BELOW
//   // This is the function where the call to the API is made. Returns the summarized text as a string.

//   const axios = require('axios');
//   let data = JSON.stringify({
//     "text_to_summarize": "Amelia, a curious astronomer, spotted a peculiar comet through her telescope. It emitted a mesmerizing glow and seemed to change course. Determined to investigate, she built a spaceship. On her journey, she encountered cosmic wonders, yet the comet remained elusive. Finally, at the edge of the universe, she understood its secret: the comet was a celestial guide, leading her to discover the boundless wonders within herself. Grateful for the voyage, Amelia returned, sharing her newfound wisdom with the world, inspiring others to explore both the cosmos and the depths of their souls."
//   });

//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'PASTE YOUR REPLIT WEBVIEW URL HERE AND IN CURRENT VALUE COLUMN/summarize',
//     headers: { 
//       'Content-Type': 'application/json', 
//       'Authorization': 'Bearer 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'
//     },
//     data : data
//   };

//   async function makeRequest() {
//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }

//   makeRequest();



  
// }




function submitData(e) {

 // This is used to add animation to the submit button
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };


    // Send the text to the server using fetch API

   // Note - here we can omit the “baseUrl” we needed in Postman and just use a relative path to “/summarize” because we will be calling the API from our Replit!  
    fetch('/summarize', requestOptions)
      .then(response => response.text()) // Response will be summarized text
      .then(summary => {
        // Do something with the summary response from the back end API!

        // Update the output text area with new summary
        summarizedTextArea.value = summary;

        // Stop the spinning loading animation
        submitButton.classList.remove("submit-button--loading");
      })
      .catch(error => {
        console.log(error.message);
      });

  // QUEST 3 .... STEP 4 ... DONE.... till here .... .
  
  }
