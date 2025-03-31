<template>
  <section class="contact-us-section">
    <div class="container">
      <h2 class="section-title animate-on-scroll">Contact Us</h2>
      <div class="card">
        <p class="section-description animate-on-scroll">
          We would love to hear from you! Please fill out the form below, and we will get
          back to you as soon as possible.
        </p>
        <div class="direct-email-box mb-6 p-4 bg-green-50 rounded-lg text-center animate-on-scroll">
          <p class="text-gray-700 mb-2 animate-on-scroll">
            ✨ Prefer direct communication? Reach out to us at:
          </p>
          <a
            href="mailto:restagrosolution@gmail.com"
            class="text-green-700 hover:text-green-800 font-medium transition-colors duration-300 animate-on-scroll"
          >
          restagrosolutions@gmail.com
          </a>
        </div>
        <form @submit.prevent="submitForm" class="contact-form">
          <input
            type="text"
            v-model="name"
            placeholder="Your Name"
            required
            class="form-input animate-on-scroll"
          />
          <input
            type="email"
            v-model="email"
            placeholder="Your Email"
            required
            class="form-input animate-on-scroll"
          />
          <textarea
            v-model="message"
            placeholder="Your Message"
            required
            class="form-textarea animate-on-scroll"
          ></textarea>
          <button type="submit" class="form-button animate-on-scroll">
            {{ isLoading ? "Sending..." : "Send Message" }}
          </button>
          <p v-if="responseMessage" class="response-message animate-on-scroll">{{ responseMessage }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

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

    const response = await emailjs.send(
      "service_kf20zj7",
      "template_hfogked",
      templateParams,
      "BI7EyPTHmZuna1Q8m"
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
  background-color: white;
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
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-title.show {
  opacity: 1;
  transform: translateY(0);
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-description.show {
  opacity: 1;
  transform: translateY(0);
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
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.form-input.show,
.form-textarea.show {
  opacity: 1;
  transform: translateY(0);
}

.form-input:focus,
.form-textarea:focus {
  border-color: #4caf50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
}

.form-textarea {
  height: 100px;
}

.form-button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.form-button.show {
  opacity: 1;
  transform: translateY(0);
}

.form-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

.form-button:active {
  transform: translateY(0);
}

.response-message {
  margin-top: 10px;
  font-weight: bold;
  color: #4caf50;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.response-message.show {
  opacity: 1;
  transform: translateY(0);
}

/* Email box hover effect */
.direct-email-box {
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.direct-email-box.show {
  opacity: 1;
  transform: translateY(0);
}

.direct-email-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Animation classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
