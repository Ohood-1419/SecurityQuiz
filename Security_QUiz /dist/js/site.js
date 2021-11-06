//@ohood al-harbi
let questions = [
  {

    id: 1,
    question: " Do you know what is phishing email attack.?",
    answer: "yes",
    options: [
      "yes",
      "No"
        
  
    
    ]

  },
  {
    id: 2,
    question: "What kind of trigger do phishing emails use to get you to respond quickly.? ",
    answer: "emotional",
    options: [
      "emotional",
      "Unemotional"
   
  
    ]  
      

  },
    
    
  {
    id: 3,
    question:"/'Uses a real company name but incorrect email address'/, Is it Pointer of a phishing email.?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
  

    ]
  },
     {
    id: 4,
    question: "If you fall for a phishing scam, what should you do to limit the damage?",
    answer: "Change any compromised passwords.",
    options: [
      "Delete the phishing email.",
      "Change any compromised passwords."

  
    ]
  }
    ,
     {
    id: 5,
    question: "Sara finds a message on her phone that she thinks might be a scam.  She should:",
    answer: "Delete the message.",
    options: [
      "Forward the message to her friends to see if they think it's a scam too.",
      "Delete the message."
  
    ]
  }
    
    ,
     {
    id: 6,
    question: "What should you do as an employee if you suspect a phishing attack?",

         answer: "Report it so the organization can investigate.",
    options: [
      "Report it so the organization can investigate.",
      "Ignore it. "
         
  
    ]
  }
  
];


























let question_count =0 ;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>

</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
