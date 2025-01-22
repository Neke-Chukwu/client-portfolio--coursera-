function addRecommendation() {
    let recommendationText = prompt("Enter your recommendation:");
    if (recommendationText) {
        let list = document.getElementById("recommendation-list");
        let newItem = document.createElement("li");
        newItem.textContent = recommendationText;
        list.appendChild(newItem);
        alert("Recommendation added successfully!");
    }
}
