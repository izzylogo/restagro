<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <button class="modal-cancel-button" @click="closeModal">✖</button>
      <h2 class="modal-title">Invest with Us</h2>
      <p class="modal-description">
        Please enter your email, and we will get back to you.
      </p>

      <input
        type="email"
        v-model="email"
        placeholder="Your email"
        class="modal-input"
        required
      />
      <button @click="submitEmail" class="modal-button bg-green-900">
        {{ isLoading ? "Sending..." : "Submit" }}
      </button>

      <p
        v-if="responseMessage"
        :class="{ 'success-message': success, 'error-message': !success }"
      >
        {{ responseMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser"; // ✅ Correct import

const props = defineProps(["isVisible"]);
const emit = defineEmits(["close"]);

const email = ref("");
const responseMessage = ref("");
const success = ref(false);
const isLoading = ref(false);

const closeModal = () => {
  email.value = "";
  responseMessage.value = "";
  emit("close");
};

const submitEmail = async () => {
  if (!email.value) {
    responseMessage.value = "Please enter a valid email.";
    success.value = false;
    return;
  }

  isLoading.value = true;

  try {
    const templateParams = {
      email: email.value, // Ensure this matches the variable in your EmailJS template
      message: email.value, // Ensure this matches the variable in your EmailJS template
    };

    // ✅ Send email using EmailJS
    const response = await emailjs.send(
      "service_kf20zj7", // ✅ Your EmailJS Service ID
      "template_hfogked", // ✅ Your EmailJS Template ID (same as contact form)
      templateParams,
      "BI7EyPTHmZuna1Q8m" // ✅ Your EmailJS Public Key
    );

    if (response.status === 200) {
      responseMessage.value = "Email sent successfully!";
      success.value = true;
      email.value = ""; // ✅ Clear input field after successful submission
    } else {
      responseMessage.value = "Failed to send email. Please try again.";
      success.value = false;
    }
  } catch (error) {
    console.error("❌ Error sending email:", error);
    responseMessage.value = "Network error. Try again later.";
    success.value = false;
  }

  isLoading.value = false;
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
  position: relative;
}

.modal-cancel-button {
  background: transparent;
  border: none;
  color: #d32f2f;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: color 0.3s;
}

.modal-cancel-button:hover {
  color: #b71c1c;
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.modal-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.modal-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.modal-button {
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.modal-button:hover {
  background-color: #45a049;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
