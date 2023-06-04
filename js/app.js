// TODOs: Make a Voting app for goats

// TODO: global variables for elements

// This is to listen for clicks
let votingArea = document.getElementById('voting-area');

// This is for putting the voting results
let resultsArea = document.getElementById('results-area'); 

// This is to put the images of the two goats into the DOM.
let goat1Img = document.getElementById('goat1');
let goat2Img = document.getElementById('goat2');

// TODO: put voting and results area into HTML

// Goat Constructor
function Goat(name, imgSrc) {
    // Goat has
    this.name = name;       // image
    this.imgSrc = imgSrc;   // a name
    this.voteCount = 0;     // vote count
    this.viewCount = 0;     // view count
}

let cruisinGoat = new Goat("CrusinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goat("FloatYourGoat", "./img/float-your-goat.jpg");
let goatAway = new Goat("GoatAway", "./img/goat-away.jpg");
let goatOutOfHand = new Goat("GoatOutOfHand", "./img/goat-out-of-hand.jpg");
let kissingGoat = new Goat("KissingGoat", "./img/kissing-goat.jpg");
let sassyGoat = new Goat("SassyGoat", "./img/sassy-goat.jpg");
let smilingGoat = new Goat("SmilingGoat", "./img/smiling-goat.jpg");
let sweaterGoat = new Goat("SweaterGoat", "./img/sweater-goat.jpg");

let goatArray = [];
goatArray.push(cruisinGoat);
goatArray.push(floatGoat);
goatArray.push(goatAway);
goatArray.push(goatOutOfHand);
goatArray.push(kissingGoat);
goatArray.push(sassyGoat);
goatArray.push(smilingGoat);
goatArray.push(sweaterGoat);



// TODO: Voting Machine DOM

// TODO: make this random goats!
// input: goat objects
// it takes in goat objects and puts them into the dom
function setGoatImages(goat1, goat2) {
    goat1Img.src = goat1.imgSrc;
    goat1Img.alt = goat1.name;
    goat1Img.title = goat1.name;
    goat2Img.src = goat2.imgSrc;
    goat2Img.alt = goat2.name;
    goat2Img.title = goat2.name;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setRandomGoatImages() {
    let goatIndex1 = getRandomInt(goatArray.length);
    let goatIndex2 = getRandomInt(goatArray.length);
    while(goatIndex1 === goatIndex2) {
      goatIndex1 = getRandomInt(goatArray.length);
      goatIndex2 = getRandomInt(goatArray.length);
    }
    let goat1 = goatArray[goatIndex1];
    let goat2 = goatArray[goatIndex2];
    setGoatImages(goat1, goat2);
}

// setGoatImages(goatArray[0], goatArray[1]);
setRandomGoatImages();

// Step 1, get the elements
// voting area, above
// let votingArea = document.getElementById('voting-area');

// Step 2 define the eventHandler

function handleGoatClick(event) {
    event.preventDefault();
    let target = event.target;
    let goatName = target.alt;
    console.log(goatName);
    // TODO, I have the goat's name
    //       I want the goat object
    let theBestGoat;
    for(let i=0; i<goatArray.length; i++) {
        let goat = goatArray[i];
        if(goat.name === target.alt) {
            theBestGoat = goat;
        }
    }

    theBestGoat.voteCount++;
    console.log(theBestGoat.voteCount);
    setRandomGoatImages();
}

// Step 3 add the event handler
votingArea.addEventListener("click", handleGoatClick);


// TODO: render results

function renderResults() {
    console.log("clicked button");
    resultsArea.innerHTML = "";
    let goatUL = document.createElement("ul");
    for(let i=0; i<goatArray.length; i++) {
        let goat = goatArray[i];
        let goatName = goat.name;
        let goatVoteCount = goat.voteCount;
        let report = `The goat named ${goatName} got ${goatVoteCount} votes`;
        let goatLI = document.createElement("li");
        goatLI.textContent = report;
        goatUL.appendChild(goatLI);
    }
    resultsArea.appendChild(goatUL);
}

// // TODO: make a button to show vote results
let showResultsButton = document.getElementById("show-results-button");
showResultsButton.addEventListener("click", renderResults);
