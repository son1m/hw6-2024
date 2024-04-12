var video;

// Update the volume information
// This must go before the play button event listener because it is called by the play button event listener
function updateVolume() {
	var volumeInfo = document.querySelector("#volume");
	volumeInfo.textContent = (video.volume * 100) + "%";
  }
  console.log("volume check")


// 1. load the video
window.addEventListener("load", function() {
    console.log("Good job opening the window");

    // connecting video element to video variable
    video = document.querySelector("#player1");
	console.log("video check")

	//update volume  
	updateVolume();

    // Turn off autoplay and looping and update volume information
    video.autoplay = false;
	updateVolume();
    video.loop = false;
});


// 2. Play video button
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
	// 2a. update volume  
	updateVolume();
});




// 3. Pause video button
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

    // 4. Slow down video 
    document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow down button clicked");
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate.toFixed(2));
    });


// 5. Speed up video
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9; 
    console.log("New speed is " + video.playbackRate.toFixed(5));
});


// 6. skip
document.querySelector("#skip").addEventListener("click", function() {
	var newTime = video.currentTime + 10;
	if (newTime >= video.duration) {
		video.currentTime = 0;
		console.log("skip button");
	} else {
		video.currentTime = newTime;
	}
	console.log("Current location is " + video.currentTime.toFixed(2));
});


// 7. Mute button 
document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted; 
	if (video.muted) {
		this.textContent = 'Unmute'; 
	} else {
		this.textContent = 'Mute'; 
	}
	console.log("Mute button check");
});


// 8. Volume slider change
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100; 
	updateVolume();
});


// 9. oldSchool style
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old school style added");
});

// 10. original style
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original style restored");
});







































// // Global declaration of the video variable
// var video;

// // Function to update volume information (assuming this is already correctly defined)
// function updateVolume() {
// 	var volumeInfo = document.querySelector("#volume");
// 	volumeInfo.textContent = (video.volume * 100) + "%";
//   }
//   console.log("volume check")

// // Window load event listener for when the DOM is fully loaded
// window.addEventListener("load", function() {
//     console.log("Good job opening the window");

//     // Initialize the video variable with the video element
//     video = document.querySelector("#player1");
    
//     // Here are your controls setup
//     setupEventListeners();
// });

// // Set up event listeners for the video controls after the page has loaded
// function setupEventListeners() {
//     // Play video button
//     document.querySelector("#play").addEventListener("click", function() {
//         console.log("Play Video");
//         video.play(); 
// });

//     // Pause video button
//     document.querySelector("#pause").addEventListener("click", function() {
//         console.log("Pause Video");
//         video.pause();
//     });

    // // Slow down video event listener
    // document.querySelector("#slower").addEventListener("click", function() {
    //     console.log("Slow down button clicked");
    //     video.playbackRate *= 0.9;
    //     console.log("New speed is " + video.playbackRate.toFixed(2));
    // });}