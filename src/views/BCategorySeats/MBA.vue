<template>
  <div class="mba-page">
    <!-- Header Component -->
    <Header />
    
    <div class="mba-container">
      <div class="container">
      <!-- Form Title -->
      <div class="form-title">
        <h2>APPLICATION FORM FOR ADMISSION TO 1ST YEAR OF MBA, UNDER B-CATEGORY SEATS (MANAGEMENT QUOTA) FOR THE ACADEMIC YEAR 2025-26</h2>
      </div>

      <!-- Advertisement Link Section -->
      <div class="advertisement-section">
        <div class="advertisement-box">
          <h3>📢 Important Notice</h3>
          <div class="advertisement-content">
            <p class="advertisement-intro">Before filling out the application form, please read the advertisement for detailed information about:</p>
            <div class="advertisement-list">
              <div class="list-item">• Eligibility criteria</div>
              <div class="list-item">• Application process</div>
              <div class="list-item">• Important dates</div>
              <div class="list-item">• Fee structure</div>
              <div class="list-item">• Required documents</div>
            </div>
          </div>
          <div class="advertisement-link-container">
            <a href="#" class="advertisement-link" target="_blank">
              <i class="fas fa-external-link-alt"></i>
              View MBA B-Category Seats Advertisement
            </a>
          </div>
        </div>
      </div>

      <!-- Documents Required Section -->
      <div class="documents-section">
        <div class="documents-box">
          <h3>📋 DOCUMENTS / CERTIFICATES TO BE ENCLOSED</h3>
          <div class="documents-list">
            <div class="document-item">1. ICET 2025 Rank Card and Hall Ticket</div>
            <div class="document-item">2. SSC or its equivalent certificate</div>
            <div class="document-item">3. Intermediate or its equivalent certificate</div>
            <div class="document-item">4. Degree Provisional Certificate</div>
            <div class="document-item">5. Degree Consolidated Marks Memo</div>
            <div class="document-item">6. Degree Transfer Certificate</div>
            <div class="document-item">7. 9th to Degree Study & Conduct Certificates</div>
            <div class="document-item">8. Caste Certificate of BC/SC/ST (as applicable)</div>
            <div class="document-item">9. 3 Sets Zerox Copies of All Above Originals</div>
            <div class="document-item">10. 3 Copies of passport size photos (color)</div>
          </div>
          <div class="fee-note">
            <p><strong>NOTE:</strong> College Fee is Rs.54000/-.</p>
          </div>
        </div>
      </div>

      <!-- Application Form -->
      <form class="application-form" @submit.prevent="submitForm" ref="applicationForm">
        <!-- Top Metadata Section -->
        <div class="form-section metadata-section">
          <div class="form-row">
          <div class="form-group">
            <label for="applicationNo">APPLICATION NO.:</label>
            <input type="text" id="applicationNo" v-model="formData.applicationNo" class="form-input" 
                   @focus="highlightField" @blur="unhighlightField">
          </div>
          <div class="form-group">
            <label for="date">DATE:</label>
            <input type="date" id="date" v-model="formData.date" class="form-input"
                   @focus="highlightField" @blur="unhighlightField">
          </div>
          <div class="photo-section">
            <div class="photo-box" :class="{ 'photo-uploaded': formData.photo }">
              <div class="photo-preview" v-if="formData.photo">
                <img :src="photoPreview" alt="Photo Preview" class="preview-image">
                <button type="button" @click="removePhoto" class="remove-photo">×</button>
              </div>
              <div v-else class="photo-placeholder">
                <i class="fas fa-camera"></i>
                <p>Affix a recent passport size photo</p>
              </div>
              <input type="file" @change="handlePhotoUpload" accept="image/*" class="photo-input" ref="photoInput">
            </div>
          </div>
          </div>
        </div>

        <!-- Applicant Details Section -->
        <div class="form-section">
          <div class="form-group">
            <label>1. Name of the Course:</label>
            <span class="pre-filled">: MBA</span>
          </div>

          <div class="form-group">
            <label for="candidateName">2. Name of the Candidate:</label>
            <input type="text" id="candidateName" v-model="formData.candidateName" class="form-input" 
                   placeholder="(As per SSC in Block Letters)" required
                   @focus="highlightField" @blur="unhighlightField"
                   @input="formData.candidateName = $event.target.value.toUpperCase()">
            <div class="field-helper">Enter name exactly as it appears in SSC certificate</div>
          </div>

          <div class="form-group">
            <label for="fatherGuardianName">3. Name of the Father/Guardian:</label>
            <input type="text" id="fatherGuardianName" v-model="formData.fatherGuardianName" class="form-input" 
                   required @focus="highlightField" @blur="unhighlightField">
            <div class="field-helper">Enter father's or guardian's full name</div>
          </div>

          <div class="form-group">
            <label for="dateOfBirth">4. Date of Birth (as per SSC):</label>
            <input type="date" id="dateOfBirth" v-model="formData.dateOfBirth" class="form-input" 
                   required @focus="highlightField" @blur="unhighlightField">
            <small class="format-hint">(DD/MM/YYYY)</small>
            <div class="field-helper">Date must match SSC certificate exactly</div>
          </div>

          <div class="form-group">
            <label for="nationality">5. Nationality & Religion:</label>
            <div class="inline-inputs">
              <input type="text" id="nationality" v-model="formData.nationality" class="form-input" placeholder="Nationality" required>
              <span>&</span>
              <input type="text" id="religion" v-model="formData.religion" class="form-input" placeholder="Religion" required>
            </div>
          </div>

          <div class="form-group">
            <label for="gender">6. Gender:</label>
            <select id="gender" v-model="formData.gender" class="form-select" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div class="form-group">
            <label for="category">7. Category (OC/BC/SC/ST):</label>
            <div class="inline-inputs">
              <input type="text" id="category" v-model="formData.category" class="form-input" placeholder="Category" required>
              <label for="subCaste">Sub Caste:</label>
              <input type="text" id="subCaste" v-model="formData.subCaste" class="form-input" placeholder="Sub Caste">
            </div>
          </div>

          <div class="form-group">
            <label for="permanentAddress">8. Permanent Address:</label>
            <textarea id="permanentAddress" v-model="formData.permanentAddress" class="form-textarea" rows="3" required></textarea>
          </div>

          <div class="form-group">
            <label for="correspondenceAddress">9. Address for Correspondence:</label>
            <textarea id="correspondenceAddress" v-model="formData.correspondenceAddress" class="form-textarea" rows="3" required></textarea>
          </div>

          <div class="form-group">
            <label for="landlineNo">10. Tele Nos. Land line No. with STD Code:</label>
            <div class="inline-inputs">
              <input type="tel" id="landlineNo" v-model="formData.landlineNo" class="form-input" placeholder="Landline No.">
              <span>: Cell No.:</span>
              <input type="tel" id="cellNo" v-model="formData.cellNo" class="form-input" placeholder="Cell No." required>
            </div>
          </div>

          <div class="form-group">
            <label for="icetRank">11. ICET- 2025 Rank:</label>
            <div class="inline-inputs">
              <span>: H.T. No.:</span>
              <input type="text" id="hallTicketNo" v-model="formData.hallTicketNo" class="form-input" placeholder="Hall Ticket No.">
              <label for="rank">Rank:</label>
              <input type="number" id="rank" v-model="formData.rank" class="form-input" placeholder="Rank">
            </div>
          </div>

          <div class="form-group">
            <label>12. Percentage of Marks in Degree/qualifying exam:</label>
            <div class="marks-section">
              <div class="marks-row">
                <span>: Group %</span>
                <input type="number" v-model="formData.groupPercentage" class="form-input marks-input" step="0.01" min="0" max="100">
                <span>/</span>
                <input type="number" v-model="formData.groupMaxMarks" class="form-input marks-input" placeholder="Max Marks">
              </div>
              <div class="marks-row">
                <span>: Total %</span>
                <input type="number" v-model="formData.totalPercentage" class="form-input marks-input" step="0.01" min="0" max="100">
                <span>/</span>
                <input type="number" v-model="formData.totalMaxMarks" class="form-input marks-input" placeholder="Max Marks">
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="passingMonthYear">13. Month & Year of Passing of Qualifying Exam:</label>
            <input type="text" id="passingMonthYear" v-model="formData.passingMonthYear" class="form-input" placeholder="e.g., May 2024" required>
          </div>
        </div>

        <!-- Declaration Section -->
        <div class="form-section declaration-section">
          <h3 class="declaration-title">DECLARATION</h3>
          <p class="declaration-text">
            We solemnly declare that the details as stated above are true to the best of our knowledge and belief. 
            If any statement is found to be false, the admission may be cancelled. We will abide by the rules and 
            regulations of the institution and affiliating University which are in force from time to time.
          </p>
        </div>

        <!-- Signature Section -->
        <div class="form-section signature-section">
          <div class="signature-row">
            <div class="signature-group">
              <label>Signature of the Father/Guardian</label>
              <div class="signature-field">
                <label>Name:</label>
                <input type="text" v-model="formData.fatherGuardianSignature" class="form-input" required>
              </div>
            </div>
            <div class="signature-group">
              <label>Signature of the Candidate</label>
              <div class="signature-field">
                <label>Name:</label>
                <input type="text" v-model="formData.candidateSignature" class="form-input" required>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="form-actions">
          <button type="submit" class="submit-btn" :disabled="isSubmitting" :class="{ 'submitting': isSubmitting }">
            <span v-if="!isSubmitting">
              <i class="fas fa-paper-plane"></i>
              Submit Application
            </span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i>
              Submitting...
            </span>
          </button>
          <button type="button" @click="resetForm" class="reset-btn" :disabled="isSubmitting">
            <i class="fas fa-undo"></i>
            Reset Form
          </button>
        </div>
      </form>
      </div>
    </div>
    
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  name: 'MBA',
  data() {
    return {
      formData: {
        applicationNo: '',
        date: '',
        candidateName: '',
        fatherGuardianName: '',
        dateOfBirth: '',
        nationality: '',
        religion: '',
        gender: '',
        category: '',
        subCaste: '',
        permanentAddress: '',
        correspondenceAddress: '',
        landlineNo: '',
        cellNo: '',
        hallTicketNo: '',
        rank: '',
        groupPercentage: '',
        groupMaxMarks: '',
        totalPercentage: '',
        totalMaxMarks: '',
        passingMonthYear: '',
        fatherGuardianSignature: '',
        candidateSignature: '',
        photo: null
      },
      photoPreview: null,
      isSubmitting: false
    }
  },
  methods: {
    handlePhotoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.photo = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.photoPreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removePhoto() {
      this.formData.photo = null;
      this.photoPreview = null;
      this.$refs.photoInput.value = '';
    },
    highlightField(event) {
      event.target.parentElement.classList.add('field-focused');
    },
    unhighlightField(event) {
      event.target.parentElement.classList.remove('field-focused');
    },
    async submitForm() {
      this.isSubmitting = true;
      
      // Simulate form validation
      const requiredFields = ['candidateName', 'fatherGuardianName', 'dateOfBirth', 'nationality', 'religion', 'gender', 'category'];
      const missingFields = requiredFields.filter(field => !this.formData[field]);
      
      if (missingFields.length > 0) {
        alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
        this.isSubmitting = false;
        return;
      }
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', this.formData);
        alert('Application form submitted successfully!');
        this.resetForm();
      } catch (error) {
        alert('Error submitting form. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      Object.keys(this.formData).forEach(key => {
        if (key === 'photo') {
          this.formData[key] = null;
        } else if (key === 'photoPreview' || key === 'isSubmitting') {
          // Skip these properties
        } else {
          this.formData[key] = '';
        }
      });
      this.photoPreview = null;
      this.isSubmitting = false;
    }
  }
}
</script>

<style scoped>
.mba-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.mba-container {
  flex: 1;
  padding: 2rem 0;
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}


/* Form Title */
.form-title {
  background: #2c3e50;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
}

.form-title h2 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
}

/* Advertisement Section */
.advertisement-section {
  margin-bottom: 2rem;
}

.advertisement-box {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 2px solid #ffc107;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.2);
}

.advertisement-box h3 {
  color: #856404;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.advertisement-content {
  text-align: left;
  margin-bottom: 1.5rem;
}

.advertisement-intro {
  color: #856404;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  text-align: left;
}

.advertisement-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.list-item {
  color: #856404;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  white-space: nowrap;
  flex-shrink: 0;
}

.advertisement-link-container {
  text-align: center;
  margin-top: 1rem;
}

.advertisement-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ffc107;
  color: #212529;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
}

.advertisement-link:hover {
  background: #e0a800;
  color: #212529;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
}

.advertisement-link i {
  font-size: 0.9rem;
}

/* Documents Section */
.documents-section {
  margin-bottom: 2rem;
}

.documents-box {
  background: linear-gradient(135deg, #e8f4fd 0%, #d1ecf1 100%);
  border: 2px solid #17a2b8;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(23, 162, 184, 0.2);
}

.documents-box h3 {
  color: #0c5460;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}

.documents-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.document-item {
  background: rgba(255, 255, 255, 0.7);
  color: #0c5460;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 4px solid #17a2b8;
  box-shadow: 0 2px 5px rgba(23, 162, 184, 0.1);
  transition: all 0.3s ease;
}

.document-item:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(23, 162, 184, 0.2);
}

.fee-note {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 193, 7, 0.2);
  border-radius: 8px;
  border: 2px solid #ffc107;
  margin-top: 1rem;
}

.fee-note p {
  color: #856404;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
}

/* Form Styles */
.application-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.application-form:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.form-section:last-child {
  border-bottom: none;
}

.metadata-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.form-row {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;
}

.form-group {
  margin-bottom: 1.5rem;
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e1e8ed;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fff;
  position: relative;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  transform: translateY(-1px);
}

.form-input:hover, .form-select:hover, .form-textarea:hover {
  border-color: #bdc3c7;
}

/* Field Focus State */
.field-focused .form-input,
.field-focused .form-select,
.field-focused .form-textarea {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

/* Field Helper Text */
.field-helper {
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  font-style: italic;
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.pre-filled {
  color: #27ae60;
  font-weight: bold;
  font-size: 1.1rem;
}

.format-hint {
  color: #666;
  font-style: italic;
  margin-top: 0.25rem;
  display: block;
}

.inline-inputs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.inline-inputs input {
  flex: 1;
  min-width: 150px;
}

.inline-inputs span {
  color: #666;
  font-weight: bold;
}

.photo-section {
  flex: 0 0 200px;
}

.photo-box {
  border: 2px dashed #ddd;
  padding: 1.5rem;
  text-align: center;
  border-radius: 12px;
  background: #f9f9f9;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.photo-box:hover {
  border-color: #3498db;
  background: #f0f8ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.2);
}

.photo-box.photo-uploaded {
  border-color: #27ae60;
  background: #f0fff4;
}

.photo-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.photo-placeholder i {
  font-size: 2rem;
  color: #3498db;
}

.photo-placeholder p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.photo-preview {
  position: relative;
  display: inline-block;
}

.preview-image {
  width: 120px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.remove-photo {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e74c3c;
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.remove-photo:hover {
  background: #c0392b;
  transform: scale(1.1);
}

.photo-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.marks-section {
  margin-top: 0.5rem;
}

.marks-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.marks-input {
  flex: 0 0 120px;
}

/* Declaration Section */
.declaration-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #e9ecef;
}

.declaration-title {
  color: #2c3e50;
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.declaration-text {
  line-height: 1.6;
  color: #555;
  margin: 0;
}

/* Signature Section */
.signature-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.signature-row {
  display: flex;
  gap: 3rem;
  justify-content: space-between;
}

.signature-group {
  flex: 1;
}

.signature-group label {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: block;
}

.signature-field {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.signature-field label {
  margin: 0;
  font-weight: normal;
  flex: 0 0 auto;
}

.signature-field input {
  flex: 1;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #eee;
}

.submit-btn, .reset-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.submit-btn {
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #219a52 0%, #27ae60 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-btn.submitting {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
}

.reset-btn {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
}

.reset-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #c0392b 0%, #a93226 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.reset-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Button Ripple Effect */
.submit-btn::before, .reset-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.submit-btn:active::before, .reset-btn:active::before {
  width: 300px;
  height: 300px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-header {
    flex-direction: column;
    text-align: center;
  }
  
  .form-row {
    flex-direction: column;
    gap: 1rem;
  }
  
  .signature-row {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .inline-inputs {
    flex-direction: column;
    align-items: stretch;
  }
  
  .marks-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .marks-input {
    flex: 1;
  }
}
</style>
