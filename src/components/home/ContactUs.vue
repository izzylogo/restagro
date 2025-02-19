<template>
  <section class="contact-us-section">
    <div class="container">
      <h2 class="section-title">Contact Us</h2>
      <div class="card">
        <p class="section-description">
          We would love to hear from you! Please fill out the form below, and we will get
          back to you as soon as possible.
        </p>
        <form @submit.prevent="submitForm" class="contact-form">
          <input
            type="text"
            v-model="name"
            placeholder="Your Name"
            required
            class="form-input"
          />
          <input
            type="email"
            v-model="email"
            placeholder="Your Email"
            required
            class="form-input"
          />
          <textarea
            v-model="message"
            placeholder="Your Message"
            required
            class="form-textarea"
          ></textarea>
          <button type="submit" class="form-button">
            {{ isLoading ? "Sending..." : "Send Message" }}
          </button>
          <p v-if="responseMessage" class="response-message">{{ responseMessage }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser"; // ✅ Correct Import

// Form fields
const name = ref("");
const email = ref("");
const message = ref("");
const responseMessage = ref("");
const isLoading = ref(false);

const submitForm = async () => {
  if (!name.value || !email.value || !message.value) {
    responseMessage.value = "Please fill in all fields.";
    return;
  }

  isLoading.value = true;

  try {
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    // ✅ Send email using EmailJS
    const response = await emailjs.send(
      "service_kf20zj7", // ✅ Your EmailJS Service ID
      "template_hfogked", // ✅ Your EmailJS Template ID (same as contact form)
      templateParams,
      "BI7EyPTHmZuna1Q8m" // ✅ Your EmailJS Public Key
    );

    if (response.status === 200) {
      responseMessage.value = "Your message has been sent successfully!";
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      responseMessage.value = "Failed to send the message. Please try again.";
    }
  } catch (error) {
    console.error("❌ Error sending email:", error);
    responseMessage.value = "Network error. Try again later.";
  }

  isLoading.value = false;
};
</script>

<style scoped>
.contact-us-section {
  padding: 40px 20px;
  background-color: white; /* Set background color to white */
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.card {
  background-color: white; /* White background for the card */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.section-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-input,
.form-textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-textarea {
  height: 100px; /* Set a height for the textarea */
}

.form-button {
  background-color: #4caf50; /* Green background for the button */
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #45a049; /* Darker green on hover */
}

.response-message {
  margin-top: 10px;
  font-weight: bold;
}
</style>
