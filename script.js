document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const rCarbsElement = document.getElementById("rCarbs");
    const proteinOuncesElement = document.getElementById("proteinOunces");
    const rProteinElement = document.getElementById("rProtein");
    const rCorrectionElement = document.getElementById("rCorrection");
    const totalRElement = document.getElementById("totalR");
    const cardDeckContainer = document.getElementById("cardDeckContainer");
  
    calculateButton.addEventListener("click", function () {
      const carbsInput = parseFloat(document.getElementById("carbs").value);
      const proteinInput = parseFloat(document.getElementById("protein").value);
      const currentMgdl = parseFloat(document.getElementById("current-mgdl").value);
  
      if (isNaN(carbsInput) || isNaN(proteinInput) || isNaN(currentMgdl)) {
        alert("Please enter valid numbers for Carbs, Protein, and Current mg/dl.");
      } else {
        // Calculate R for Carbs
        const rCarbs = (carbsInput * 1/8).toFixed(2);
        rCarbsElement.textContent = rCarbs;
  
        // Calculate Protein in ounces
        const proteinOunces = (proteinInput / 28).toFixed(2);
        proteinOuncesElement.textContent = proteinOunces;
  
        // Calculate R for Protein
        const rProtein = (proteinOunces * 0.6666666667).toFixed(2);
        rProteinElement.textContent = rProtein;
  
        // Calculate R for Correction
        let rCorrection = 0;
        if (currentMgdl < 100) {
          rCorrection = "No correction required";
        } else {
          rCorrection = Math.floor((currentMgdl - 100) / 40);
        }
        rCorrectionElement.textContent = rCorrection;
  
        // Calculate Total R
        let totalR = 0;
        if (rCarbs !== "NaN" && rProtein !== "NaN") {
          totalR = (
            parseFloat(rCarbs) +
            parseFloat(rProtein) +
            parseFloat(rCorrection)
          ).toFixed(2);
        }
        totalRElement.textContent = totalR;
  
        // Draw card decks
        drawCardDecks(proteinOunces);
      }
    });
  
    function drawCardDecks(proteinOunces) {
      // Calculate the number of card decks (1 deck per 3 ounces)
      const decksNeeded = Math.floor(proteinOunces / 3);
  
      // Clear the previous card decks
      cardDeckContainer.innerHTML = "";
  
      // Draw card decks
      for (let i = 0; i < decksNeeded; i++) {
        const cardDeckImage = document.createElement("img");
        cardDeckImage.src = "card_deck.jpeg"
        cardDeckImage.alt = "Card Deck";
        cardDeckImage.className = "card-deck";
        cardDeckContainer.appendChild(cardDeckImage);
      }
    }
  });
  

