
  const paragraph = document.getElementById("hero_paragraph");
  const button = document.getElementById("change_text");

  button.addEventListener("click", function() {
    paragraph.textContent = "Boo, you changed the text hehe";
  });


  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });



  const form = document.getElementById("signUpForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const phone = document.getElementById("signupPhone").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("signupPasswordConfirm").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    const successMsg = document.getElementById("successMsg");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // Validation rules
    if (name.length < 3 || name.length > 30) {
      nameError.textContent = "Name must be between 3 and 30 characters.";
      isValid = false;
    }

    if (email.length > 30 || email === "") {
      emailError.textContent = "Email must be less than 30 characters.";
      isValid = false;
    }

    if (!/^\d{8}$/.test(phone)) {
      phoneError.textContent = "Phone number must be exactly 8 digits.";
      isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      passwordError.textContent = "Password must be 8+ chars, 1 capital letter, and 1 symbol.";
      isValid = false;
    }

    if (password !== confirmPassword) {
      confirmError.textContent = "Passwords do not match.";
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent = "✅ Sign-up successful!";
      form.reset();
    }
  });



   document.addEventListener("DOMContentLoaded", () => {

    const services = [
      { image: "images/image2.png", title: "Web Services", desc: "Web Dev slogans capture the essence of creating online wonders!" },
      {image: "images/image3.png", title: "Marketing Services", desc: "Web Dev slogans capture the essence of creating online wonders!" },
      { image: "images/image4.png",title: "Consulting Services", desc: "Web Dev slogans capture the essence of creating online wonders!" },
      {image: "images/image2.png", title: "Design Services", desc: "Web Dev slogans capture the essence of creating online wonders!" },
    {image: "images/image3.png",title: "Cybersecurity", desc: "Web Dev slogans capture the essence of creating online wonders!" },
    {image: "images/image4.png",title: "Cloud Solutions", desc: "Web Dev slogans capture the essence of creating online wonders!" },
     {image: "images/image3.png",title: "Mobile Apps", desc: "Web Dev slogans capture the essence of creating online wonders!" },
    {image: "images/image3.png", title: "Content Creation", desc: "Web Dev slogans capture the essence of creating online wonders!" },
     {image: "images/image4.png", title: "AI & Automation", desc: "Web Dev slogans capture the essence of creating online wonders!" },
    ];

    const grid = document.getElementById("servicesGrid");
    const loadBtn = document.getElementById("loadMoreBtn");
    let itemsToShow = 3;

    function renderServices() {

      grid.innerHTML = "";

      for (let i = 0; i < itemsToShow && i < services.length; i++) {
        const s = services[i];
        const card = document.createElement("div");
        card.classList.add("service-card");
        card.innerHTML = ` <img src="${s.image}"><h3>${s.title}</h3><p>${s.desc}</p>`;
        grid.appendChild(card);
      }

      if (itemsToShow >= services.length) {
        loadBtn.style.display = "none";
      }
    }

    loadBtn.addEventListener("click", () => {
      itemsToShow += 3;
      renderServices();
    });

    renderServices();
  });

