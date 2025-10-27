<template>
  <!-- PDF Viewer Modal -->
  <div v-if="show" class="pdf-modal-overlay" @click="close">
    <div class="pdf-modal" @click.stop>
      <div class="pdf-modal-header">
        <h3 class="pdf-modal-title">
          <i class="fa-solid fa-file-pdf"></i>
          {{ title }}
        </h3>
        <div class="pdf-modal-actions">
          <button class="modal-btn" @click="toggleFullscreen" title="Toggle Fullscreen (F)">
            <i class="fa-solid fa-expand"></i>
          </button>
          <button class="modal-btn" @click="download" title="Download PDF">
            <i class="fa-solid fa-download"></i>
          </button>
          <button class="modal-btn close-btn" @click="close" title="Close (ESC)">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
      </div>
      <div class="pdf-modal-content">
        <div v-if="isLoading" class="pdf-loading">
          <div class="loading-spinner"></div>
          <p class="loading-text">Loading PDF...</p>
        </div>
        <iframe 
          :src="url" 
          class="pdf-iframe"
          :class="{ 'loading': isLoading }"
          title="PDF Viewer"
          frameborder="0"
          @load="onLoad"
          @error="onError"
        ></iframe>
      </div>
      <div class="pdf-modal-footer">
        <span class="keyboard-hint">Press F for fullscreen, ESC to close</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  url: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})

// Emits
const emit = defineEmits(['close'])

// State
const isLoading = ref(false)

// Methods
const close = () => {
  emit('close')
}

const download = () => {
  if (props.url) {
    let downloadUrl = props.url
    
    // Convert Google Drive preview URL to direct download URL
    if (downloadUrl.includes('drive.google.com/file/d/') && downloadUrl.includes('/preview')) {
      const fileId = downloadUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1]
      if (fileId) {
        downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
      }
    }
    
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = props.title + '.pdf'
    link.target = '_blank' // Open in new tab for external URLs
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

const toggleFullscreen = () => {
  const pdfModal = document.querySelector('.pdf-modal')
  if (!pdfModal) return

  if (!document.fullscreenElement) {
    // Enter fullscreen
    pdfModal.requestFullscreen().catch(err => {
      console.error('Error attempting to enable fullscreen:', err)
    })
  } else {
    // Exit fullscreen
    document.exitFullscreen().catch(err => {
      console.error('Error attempting to exit fullscreen:', err)
    })
  }
}

const onLoad = () => {
  isLoading.value = false
}

const onError = () => {
  isLoading.value = false
  console.error('Failed to load PDF')
}

// Keyboard shortcuts for PDF modal
const handleKeydown = (event) => {
  if (!props.show) return
  
  switch(event.key) {
    case 'Escape':
      // Exit fullscreen first if in fullscreen, then close modal
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        close()
      }
      break
    case 'f':
    case 'F':
      toggleFullscreen()
      break
  }
}

// Watch for modal changes to handle keyboard events
watch(() => props.show, (isOpen) => {
  if (isOpen) {
    isLoading.value = true
    document.addEventListener('keydown', handleKeydown)
    
    // Automatically enter fullscreen when modal opens
    setTimeout(() => {
      const pdfModal = document.querySelector('.pdf-modal')
      if (pdfModal && !document.fullscreenElement) {
        pdfModal.requestFullscreen().catch(err => {
          console.error('Error attempting to enable fullscreen:', err)
        })
      }
    }, 100) // Small delay to ensure modal is rendered
  } else {
    document.removeEventListener('keydown', handleKeydown)
  }
})

// Cleanup on unmount
import { onUnmounted } from 'vue'
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* PDF Modal Styles */
.pdf-modal-overlay{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.9);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:9999;
  padding:1rem;
}

.pdf-modal{
  width:95%;
  max-width:1200px;
  height:90%;
  background:#fff;
  border-radius:1rem;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  box-shadow:0 20px 60px rgba(0,0,0,0.3);
  transition:all 0.3s ease;
}

.pdf-modal-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem 1.5rem;
  background:var(--ink, #1a1a1a);
  color:#fff;
  border-bottom:1px solid var(--border, #e5e5e5);
}

.pdf-modal-title{
  margin:0;
  font-size:1.2rem;
  font-weight:700;
  display:flex;
  align-items:center;
  gap:0.5rem;
}

.pdf-modal-title i{
  color:#ff4757;
}

.pdf-modal-actions{
  display:flex;
  align-items:center;
  gap:0.5rem;
}

.modal-btn{
  width:40px;
  height:40px;
  border:none;
  background:rgba(255,255,255,0.1);
  color:#fff;
  border-radius:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:all 0.3s ease;
  font-size:1rem;
}

.modal-btn:hover{
  background:rgba(255,255,255,0.2);
  transform:scale(1.05);
}

.modal-btn.close-btn:hover{
  background:#ff4757;
}

.pdf-modal-content{
  flex:1;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}

.pdf-iframe{
  width:100%;
  height:100%;
  border:none;
  background:#f8f9fa;
  transition:opacity 0.3s ease;
}

.pdf-iframe.loading{
  opacity:0;
}

.pdf-loading{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  text-align:center;
  color:var(--muted, #666);
}

.loading-spinner{
  width:40px;
  height:40px;
  border:4px solid #f3f3f3;
  border-top:4px solid var(--orange, #f97316);
  border-radius:50%;
  animation:spin 1s linear infinite;
  margin:0 auto 1rem;
}

.loading-text{
  margin:0;
  font-size:1rem;
  font-weight:500;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.pdf-modal-footer{
  padding:0.5rem 1rem;
  background:#f8f9fa;
  border-top:1px solid var(--border, #e5e5e5);
  text-align:center;
}

.keyboard-hint{
  font-size:0.75rem;
  color:var(--muted, #666);
  font-style:italic;
}

/* Responsive Design */
@media (max-width: 768px) {
  .pdf-modal{
    width:98%;
    height:95%;
  }
  
  .pdf-modal-header{
    padding:.8rem 1rem;
  }
  
  .pdf-modal-title{
    font-size:1rem;
  }
  
  .pdf-modal-footer{
    padding:.4rem .8rem;
  }
  
  .keyboard-hint{
    font-size:0.7rem;
  }
}

/* Fullscreen mode enhancements */
:fullscreen .pdf-modal-overlay,
:-webkit-full-screen .pdf-modal-overlay,
:-moz-full-screen .pdf-modal-overlay,
:-ms-fullscreen .pdf-modal-overlay {
  padding: 0;
}

:fullscreen .pdf-modal,
:-webkit-full-screen .pdf-modal,
:-moz-full-screen .pdf-modal,
:-ms-fullscreen .pdf-modal {
  width: 100%;
  height: 100%;
  max-width: none;
  border-radius: 0;
  box-shadow: none;
}

/* CSS Custom Properties for theme compatibility */
:root {
  --ink: #1a1a1a;
  --border: #e5e5e5;
  --orange: #f97316;
  --muted: #666;
}
</style>
