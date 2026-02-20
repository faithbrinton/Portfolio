document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.contact-form");

  // If this prints, JS is loading.
  console.log("✅ script.js loaded");

  if (!form) {
    console.log("❌ contact form not found (check your HTML)");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("✅ submit intercepted");

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      console.log("Formspree response:", response.status);

      if (response.ok) {
        window.location.href = "thankyou.html";
      } else {
        alert("Form submit failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  });
});
