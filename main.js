// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function () {
  const likeGlyphs = document.querySelectorAll('.like-glyph');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  likeGlyphs.forEach(function (glyph) {
    glyph.addEventListener('click', function () {
      mimicServerCall()
        .then(() => {
          // Success response
          glyph.classList.add('activated-heart');
        })
        .catch(() => {
          // Failure response
          modalMessage.textContent = 'Error: Server request failed.';
          modal.classList.remove('hidden');

          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });

    // Add an event listener for the case when a user clicks on a full heart
    glyph.addEventListener('dblclick', function () {
      // Assuming 'empty-heart' is the class for an empty heart
      glyph.classList.remove('activated-heart');
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
