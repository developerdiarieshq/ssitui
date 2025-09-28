<template>
  <div class="btech-page">
    <!-- Header Component -->
    <Header />
    
    <div class="btech-container">
      <div class="container">
        <h1 class="page-title">BTECH B-Category Seats</h1>
        <div class="content-section">
          <p>BTECH application form content will be added here.</p>
        </div>
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
  name: 'BTECH',
  data() {
    return {
      // Component data will be added here
    }
  }
}
</script>

<style scoped>
.btech-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.btech-container {
  flex: 1;
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.page-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
}

.content-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 1200px;
}
</style>
