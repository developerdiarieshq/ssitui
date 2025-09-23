<template>
  <div v-if="show" class="image-modal-overlay" @click="closeModal">
    <div class="image-modal" :class="{ fullscreen: isFullscreen }" @click.stop>
      <div class="modal-header">
        <h3 class="modal-title">
          <i :class="titleIcon" :style="{ color: titleIconColor }"></i>
          {{ title }}
        </h3>
        <div class="modal-controls">
          <button class="modal-btn" @click="toggleFullscreen" :title="isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'">
            <i :class="isFullscreen ? 'fa-solid fa-compress' : 'fa-solid fa-expand'"></i>
          </button>
          <button class="modal-btn" @click="closeModal" title="Close">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
      </div>
      
      <div class="modal-content">
        <div class="modal-navigation">
          <button class="nav-btn prev" @click="prevImage" :disabled="images.length <= 1">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          
          <div class="modal-image-container">
            <img 
              :src="currentImage.src" 
              :alt="currentImage.title || `Image ${currentIndex + 1}`"
              class="modal-image"
            />
            <div class="image-info" v-if="showImageInfo && (currentImage.title || currentImage.desc)">
              <h4 class="image-title">{{ currentImage.title }}</h4>
              <p class="image-desc">{{ currentImage.desc }}</p>
            </div>
          </div>
          
          <button class="nav-btn next" @click="nextImage" :disabled="images.length <= 1">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        
        <div class="modal-footer">
          <div class="image-counter">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>
          
          <div class="thumbnail-nav" v-if="images.length > 1 && showThumbnails">
            <button 
              v-for="(img, index) in images" 
              :key="index"
              class="thumbnail-btn"
              :class="{ active: index === currentIndex }"
              @click="goToImage(index)"
            >
              <img :src="img.src" :alt="img.title || `Thumbnail ${index + 1}`" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'

// Props
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: 'Image Gallery'
  },
  titleIcon: {
    type: String,
    default: 'fa-solid fa-images'
  },
  titleIconColor: {
    type: String,
    default: 'var(--orange)'
  },
  showImageInfo: {
    type: Boolean,
    default: true
  },
  showThumbnails: {
    type: Boolean,
    default: true
  }
})

// Emits
const emit = defineEmits(['close', 'update:show'])

// Reactive data
const currentIndex = ref(0)
const isFullscreen = ref(false)

// Computed
const currentImage = computed(() => {
  return props.images[currentIndex.value] || { src: '', title: '', desc: '' }
})

// Methods
const closeModal = () => {
  emit('update:show', false)
  emit('close')
  isFullscreen.value = false
  if (document.fullscreenElement) {
    document.exitFullscreen()
  }
}

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.images.length - 1
  }
}

const goToImage = (index) => {
  currentIndex.value = index
}

const toggleFullscreen = async () => {
  if (!document.fullscreenElement) {
    try {
      await document.documentElement.requestFullscreen()
      isFullscreen.value = true
    } catch (err) {
      console.error('Error attempting to enable fullscreen:', err)
    }
  } else {
    try {
      await document.exitFullscreen()
      isFullscreen.value = false
    } catch (err) {
      console.error('Error attempting to exit fullscreen:', err)
    }
  }
}

const handleKeydown = (event) => {
  if (!props.show) return
  
  switch (event.key) {
    case 'Escape':
      closeModal()
      break
    case 'ArrowLeft':
      prevImage()
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'f':
    case 'F':
      toggleFullscreen()
      break
  }
}

const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement
}

// Watchers
watch(() => props.show, (newValue) => {
  if (newValue) {
    currentIndex.value = props.initialIndex
    isFullscreen.value = false
  }
})

watch(() => props.initialIndex, (newValue) => {
  if (props.show) {
    currentIndex.value = newValue
  }
})

// Lifecycle
onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
  document.addEventListener('mozfullscreenchange', handleFullscreenChange)
  document.addEventListener('MSFullscreenChange', handleFullscreenChange)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
  document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
  document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
  document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Modal Overlay */
.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.image-modal {
  background: #fff;
  border-radius: 1rem;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.image-modal.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100vw;
  max-height: 100vh;
  border-radius: 0;
}

/* Modal Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border, #e5e7eb);
  background: #fff;
  position: relative;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ink, #1f2937);
  margin: 0;
  display: flex;
  align-items: center;
}

.modal-controls {
  display: flex;
  gap: 0.5rem;
}

.modal-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--ink, #1f2937);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-btn:hover {
  background: var(--orange, #f97316);
  color: #fff;
}

/* Modal Content */
.modal-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-navigation {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  position: relative;
}

.nav-btn {
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: #fff;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.nav-btn:hover:not(:disabled) {
  background: var(--orange, #f97316);
  transform: scale(1.1);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal-image-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100%;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.image-info {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-align: center;
  max-width: 80%;
}

.image-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}

.image-desc {
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
}

/* Modal Footer */
.modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border, #e5e7eb);
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.image-counter {
  font-weight: 600;
  color: var(--ink, #1f2937);
}

.thumbnail-nav {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  max-width: 60%;
}

.thumbnail-btn {
  background: none;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  padding: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.thumbnail-btn:hover {
  border-color: var(--orange, #f97316);
}

.thumbnail-btn.active {
  border-color: var(--orange, #f97316);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
}

.thumbnail-btn img {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.25rem;
}

/* Fullscreen Styles */
:fullscreen .image-modal-overlay {
  padding: 0;
}

:fullscreen .image-modal {
  max-width: 100vw;
  max-height: 100vh;
  border-radius: 0;
}

/* Keyboard Navigation Hints */
.modal-header::after {
  content: "F: Fullscreen • ← →: Navigate • ESC: Close";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  pointer-events: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .modal-header::after {
    display: none;
  }
  
  .modal-navigation {
    padding: 0.5rem;
  }
  
  .nav-btn {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .modal-image {
    max-height: 60vh;
  }
  
  .thumbnail-nav {
    max-width: 100%;
    justify-content: center;
  }
  
  .modal-footer {
    flex-direction: column;
    text-align: center;
  }
}
</style>
