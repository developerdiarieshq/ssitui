<template>
  <!-- Enquiry Modal -->
  <div
    class="modal fade"
    id="enquiryModal"
    tabindex="-1"
    aria-labelledby="enquiryModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header bg-orange text-white">
          <h5 class="modal-title" id="enquiryModalLabel">Enquiry Form</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="row g-3">
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.name"
                  class="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.contact"
                  class="form-control"
                  placeholder="Contact Number"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.subject"
                  class="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="col-12">
                <textarea
                  v-model="form.message"
                  class="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>

            <!-- Submit -->
            <div class="text-center mt-4">
              <button type="submit" class="btn btn-orange">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"

const form = reactive({
  name: "",
  contact: "",
  email: "",
  subject: "",
  message: ""
})

const submitForm = () => {
  console.log("Enquiry Submitted:", form)
  alert("Thank you! Your enquiry has been submitted.")
}
</script>

<style scoped>
.bg-orange {
  background: #FF7701;
}
.btn-orange {
  background: #FF7701;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
}
.btn-orange:hover {
  background: #e65f00;
}
</style>
