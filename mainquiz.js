// function submitForm() {
//     let age = document.getElementById("age").value;
//     let gender = document.getElementById("gender").value;
//     let occupation = document.getElementById("occupation").value;
//     let frequency = document.getElementById("frequency").value;
//     let duration = document.getElementById("duration").value;
//     let intensity = document.getElementById("intensity").value;
//     let familyHistory = document.getElementById("family-history").value;
//     let medicalHistory = document.getElementById("medical-history").value;
//     let trauma = document.getElementById("trauma").value;
//     let substanceUse = document.getElementById("substance-use").value;
//     let sleepHours = document.getElementById("sleep-hours").value;
//     let exerciseFrequency = document.getElementById("exercise-frequency").value;
//     let socialConnection = document.getElementById("social-connection").value;
//     let lossInterest = document.getElementById("loss-interest").value;
//     let suicidalThoughts = document.getElementById("suicidal-thoughts").value;
//     let panicAttacks = document.getElementById("panic-attacks").value;
//     let phobias = document.getElementById("phobias").value;
//     let moodSwings = document.getElementById("mood-swings").value;
//     let manicEpisodes = document.getElementById("manic-episodes").value;
//     let repetitiveBehaviors = document.getElementById("repetitive-behaviors").value;
//     let intrusiveThoughts = document.getElementById("intrusive-thoughts").value;
//     let flashbacks = document.getElementById("flashbacks").value;
//     let nightmares = document.getElementById("nightmares").value;

//     console.log(`Age: ${age}, Gender: ${gender}, Occupation: ${occupation}`);
//     console.log(`Symptoms Frequency: ${frequency}, Duration: ${duration}, Intensity: ${intensity}`);
//     console.log(`Family History: ${familyHistory}, Medical History: ${medicalHistory}, Trauma: ${trauma}`);
//     console.log(`Lifestyle: Substance Use: ${substanceUse}, Sleep Hours: ${sleepHours}, Exercise: ${exerciseFrequency}, Social Connection: ${socialConnection}`);
//     console.log(`Substance Use: ${substanceUse}, Sleep Hours: ${sleepHours}, Exercise: ${exerciseFrequency}, Social Connection: ${socialConnection}`);
//     console.log(`Loss of Interest: ${lossInterest}, Suicidal Thoughts: ${suicidalThoughts}, Panic Attacks: ${panicAttacks}, Phobias: ${phobias}`);
//     console.log(`Mood Swings: ${moodSwings}, Manic Episodes: ${manicEpisodes}, Repetitive Behaviors: ${repetitiveBehaviors}`);
//     console.log(`Intrusive Thoughts: ${intrusiveThoughts}, Flashbacks: ${flashbacks}, Nightmares: ${nightmares}`);

//     alert("Form Submitted! Redirecting to results...");
//     window.location.href = "result.html";
// }

// function nextStep(step) {
//     document.querySelectorAll('.step').forEach(el => el.classList.add('hidden'));
//     document.getElementById(`step-${step}`).classList.remove('hidden');
// }

function navigate(page) {
    if (page === "home") {
        window.location.href = "index.html"; 
    } else if (page === "articles") {
        window.location.href = "website/index.html";
    }
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const inputs = document.querySelectorAll("input, select");
    const formData = {};
    let emptyFields = 0;

    inputs.forEach(input => {
        if (!input.value) {
            emptyFields++;
        }
        formData[input.id] = input.value;
    });

    // Check for missing inputs
    if (emptyFields > 0) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // List of critical mental health fields to check
    const negativeIndicators = [
        "suicidal-thoughts",
        "loss-interest",
        "panic-attacks",
        "mood-swings",
        "repetitive-behaviors",
        "intrusive-thoughts",
        "flashbacks",
        "nightmares",
        "trauma",
        "substance-use",
        "family-history",
        "medical-history"
    ];

    // Count how many are marked as "No", "None", or "Unsure"
    let lowRiskAnswers = 0;
    negativeIndicators.forEach(key => {
        const value = formData[key]?.toLowerCase();
        if (["no", "none", "unsure"].includes(value)) {
            lowRiskAnswers++;
        }
    });

    let selectedOutcome;
    if (lowRiskAnswers >= Math.floor(negativeIndicators.length * 0.7)) {
        selectedOutcome = "You don’t appear to have significant symptoms right now. Keep taking care of your mental health!";
    } else {
          // List of meaningful random outcomes
    const outcomes = [
        "Major Depressive Disorder",
        "Bipolar Disorder",
        "Generalized Anxiety Disorder",
        "Social Anxiety Disorder",
        "Panic Disorder",
        "Obsessive-Compulsive Disorder",
        "Post-Traumatic Stress Disorder",
        "Attention-Deficit/Hyperactivity Disorder",
        "Borderline Personality Disorder",
        "Eating Disorders",
        "Substance Use Disorders",
        "Autism Spectrum Disorder",
        "Insomnia Disorder"
    ];

    // Pick a random outcome
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    selectedOutcome = outcomes[randomIndex];

    }

    // Optional: Redirect to result page
    window.location.href = "finalresult.html?message=" + encodeURIComponent(selectedOutcome);
});
