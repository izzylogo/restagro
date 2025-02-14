<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <button class="modal-cancel-button" @click="closeModal">✖</button>
      <h2 class="modal-title">Invest with Us</h2>
      <p class="modal-description">
        Please enter your email, and we will get back to you.
      </p>
      <input type="email" v-model="email" placeholder="Your email" class="modal-input" />
      <button @click="submitEmail" class="modal-button">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["isVisible", "onClose"]);
const email = ref("");

const submitEmail = () => {
  console.log("Email submitted:", email.value);
  closeModal();
};

const closeModal = () => {
  email.value = ""; // Clear the email input
  props.onClose(); // Emit close event to parent
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Darker overlay for better visibility */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px); /* Apply blur effect to the background */
}

.modal-content {
  background: #f9f9f9; /* Light background for the modal */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  max-width: 500px; /* Increase the maximum width of the modal */
  width: 90%; /* Responsive width */
  position: relative; /* Position relative for absolute positioning of the close button */
}

.modal-cancel-button {
  background: transparent;
  border: none;
  color: #d32f2f; /* Softer red color for cancel button */
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: color 0.3s;
}

.modal-cancel-button:hover {
  color: #b71c1c; /* Even softer red on hover */
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
  color: #333; /* Dark text color */
  margin-bottom: 10px;
}

.modal-description {
  font-size: 16px;
  color: #666; /* Lighter text color for description */
  margin-bottom: 20px;
}

.modal-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc; /* Light border */
  border-radius: 4px;
  margin-bottom: 20px;
}

.modal-button {
  background-color: #4caf50; /* Green background for submit button */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.modal-button:hover {
  background-color: #45a049; /* Darker green on hover */
}
</style>
