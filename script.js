const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      window.location.href = "thankyou.html";
    } else {
      alert("Something went wrong. Please try again.");
    }

  } catch (error) {
    alert("Network error. Please try again.");
  }
});
