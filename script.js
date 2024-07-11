
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Fetch form data
        const formData = new FormData(form);
        
        // Convert form data to JSON
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Send form data to prediction endpoint
        fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            // Display prediction result
            const resultElement = document.querySelector(".result");
            resultElement.innerHTML = "<p>" + result.prediction_text + "</p>";
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
