
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".add-recommendation").addEventListener("click", function() {
        let name = prompt("Enter your name:");
        if (!name) return;  // Stop if no name is entered

        let recommendationText = prompt("Enter your recommendation:");
        if (!recommendationText) return;  // Stop if no recommendation is entered

        // Create a new recommendation element
        let newRecommendation = document.createElement("div");
        newRecommendation.classList.add("recommendation");

        newRecommendation.innerHTML = `
            <h3>${name}</h3>
            <p>"${recommendationText}"</p>
        `;

        // Append to the recommendation list
        document.querySelector(".recommendations-container").appendChild(newRecommendation);
    });
});
