/* script.js */
const questions = [
  "I feel overwhelmed by my emotions.",
  "I am able to handle the level of stress I experience.",
  "I have physical symptoms of anxiety, such as sweaty palms.",
  "I have strong relationships with people I care about.",
  "I've made many terrible decisions in my life.",
  "I am very self-critical.",
  "I cannot get beyond long-past traumatic events or significant losses.",
  "I am able to identify and express my emotions.",
  "I trust that if I confide in others, they will be supportive.",
  "I engage in at least one behavior that significantly impairs my ability to function on a daily basis.",
  "When I experience a strong emotion, I usually know why it's hitting me.",
  "My mood is stable.",
  "I procrastinate and/or avoid dealing with important things in my life.",
  "I often feel sad.",
  "I have a sense of purpose in life.",
  "I am lonely.",
  "I get upset or angry easily.",
  "I've noticed changes in my appetite or sleep patterns relative to when I was at my best.",
  "I'm able to bounce back from setbacks.",
  "I manage my time and my obligations; most days life feels under control."
];

const container = document.getElementById('questions-container');

if (container) {
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<p>${index + 1}. ${q}</p>
      <div class="options">
        <label><input type="radio" name="q${index}" value="1" required> </label>
        <label><input type="radio" name="q${index}" value="2"> </label>
        <label><input type="radio" name="q${index}" value="3"> </label>
        <label><input type="radio" name="q${index}" value="4"> </label>
        <label><input type="radio" name="q${index}" value="5"> </label>
      </div>`;
    container.appendChild(div);
  });

  document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) {
        score += parseInt(selected.value);
      }
    }
    const totalScore = Math.round((score / (questions.length * 5)) * 100);
    localStorage.setItem('score', totalScore);
    window.location.href = "results.html";
  });
}
