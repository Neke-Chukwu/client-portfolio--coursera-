document.addEventListener('DOMContentLoaded', function () {
    const showFormButton = document.getElementById('showRecommendationForm');
    const contactSection = document.getElementById('contact');
    const submitButton = document.getElementById('submitRecommendation');
    const popup = document.getElementById('popup');
    const popupCloseButton = popup.querySelector('.close-popup');

    showFormButton.addEventListener('click', function () {
        contactSection.style.display = 'block';
        showFormButton.style.display = 'none';
    });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevents form submission (if inside a form)
        addRecommendation();
    });

    popupCloseButton.addEventListener('click', function () {
        showPopup(false);
    });
});
function showPopup(show) {
    const popup = document.getElementById('popup');
    if (show) {
    popup.style.visibility = 'visible';
    } 
    else {
    popup.style.visibility = 'hidden';
    }
}

function addRecommendation() {
    const name = document.getElementById('recommendationName').value.trim();
    const message = document.getElementById('new_recommendation').value.trim();
    const recommendationsContainer = document.getElementById('all_recommendations');

    if (!message) {
        alert('Please enter a message!');
        return;
    }

    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation';
    newRecommendation.innerHTML = name ? `<h3>${name}</h3><p>"${message}"</p>` : `<p>"${message}"</p>`;

    recommendationsContainer.appendChild(newRecommendation);

    // Clear fields and hide form
    document.getElementById('recommendationName').value = '';
    document.getElementById('new_recommendation').value = '';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('showRecommendationForm').style.display = 'block';

    // Show thank-you popup
    document.getElementById('popup').querySelector('h3').textContent = 'Thanks for the recommendation';
    showPopup(true);
    }

