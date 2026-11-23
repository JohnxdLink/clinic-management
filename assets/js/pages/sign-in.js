const signInForm = document.getElementById("sign-in-form");
const errorMessage = document.getElementById("error-message");
const signInButton = document.getElementById("sign-in-button");

const API_URL = "http://localhost:3000/api/auth";

signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  errorMessage.textContent = "";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    signInButton.disabled = true;
    signInButton.textContent = "Signing in...";

    const response = await fetch(`${API_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const result = await response.json();

    console.log(result);

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Invalid username or password.");
    }

    // Save authentication data
    sessionStorage.setItem("token", result.data.token);
    sessionStorage.setItem("user", JSON.stringify(result.data.user));

    // Successful authentication
    alert(result.message || "Sign-in successfully.");

    window.location.href = "../pages/dashboard.html";
  } catch (error) {
    errorMessage.textContent = error.message;

    alert(error.message || "An error occurred while signing in.");
  } finally {
    signInButton.disabled = false;
    signInButton.textContent = "Sign In";
  }
});
