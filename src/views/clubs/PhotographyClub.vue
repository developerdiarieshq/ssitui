<template>
  <div class="photography-club-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Photography Club</h1>
        <p class="subtitle">Capturing Moments, Creating Memories</p>
        <p class="context">
          The Photography Club explores the art of visual storytelling through photography, organizing workshops, exhibitions, and competitions to develop creative and technical skills.
        </p>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content">
      <!-- ABOUT SECTION -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-camera"></i>
            About Photography Club
          </h2>
          <div class="description">
            <p>
              The Photography Club at Sai Spurthi Institute of Technology is dedicated to nurturing the art of photography among students. We believe that photography is not just about capturing images, but about telling stories, expressing emotions, and documenting life's precious moments.
            </p>
            <p>
              Our club provides hands-on training in various photography techniques, from basic composition to advanced digital editing. We organize photo walks, workshops, and exhibitions to showcase student work and inspire creativity in visual storytelling.
            </p>
          </div>
        </div>
      </section>

      <!-- ACTIVITIES -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-calendar-check"></i>
            Key Activities
          </h2>
          <div class="activities-grid">
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-walking"></i>
              </div>
              <div class="activity-content">
                <h3>Photo Walks</h3>
                <p>Regular outdoor photography sessions and exploration</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div class="activity-content">
                <h3>Workshops</h3>
                <p>Technical workshops on camera settings and editing</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-images"></i>
              </div>
              <div class="activity-content">
                <h3>Photo Exhibitions</h3>
                <p>Regular exhibitions showcasing student photography</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div class="activity-content">
                <h3>Competitions</h3>
                <p>Monthly photography contests with themes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-target"></i>
            Objectives
          </h2>
          <div class="objectives-grid">
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-eye"></i>
              </div>
              <div class="objective-content">
                <h3>Visual Literacy</h3>
                <p>Develop understanding of visual composition and aesthetics</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-cogs"></i>
              </div>
              <div class="objective-content">
                <h3>Technical Skills</h3>
                <p>Master camera techniques and digital editing tools</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-lightbulb"></i>
              </div>
              <div class="objective-content">
                <h3>Creative Expression</h3>
                <p>Encourage artistic vision and creative storytelling</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-users"></i>
              </div>
              <div class="objective-content">
                <h3>Community Building</h3>
                <p>Create a supportive community of photography enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PHOTOGRAPHY TYPES -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-images"></i>
            Photography Genres
          </h2>
          <div class="genres-grid">
            <div class="genre-item">
              <div class="genre-icon">
                <i class="fa-solid fa-mountain"></i>
              </div>
              <div class="genre-content">
                <h3>Landscape Photography</h3>
                <p>Capturing natural beauty and scenic vistas</p>
              </div>
            </div>
            <div class="genre-item">
              <div class="genre-icon">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="genre-content">
                <h3>Portrait Photography</h3>
                <p>Focusing on people and character expression</p>
              </div>
            </div>
            <div class="genre-item">
              <div class="genre-icon">
                <i class="fa-solid fa-leaf"></i>
              </div>
              <div class="genre-content">
                <h3>Nature Photography</h3>
                <p>Wildlife, flora, and natural phenomena</p>
              </div>
            </div>
            <div class="genre-item">
              <div class="genre-icon">
                <i class="fa-solid fa-city"></i>
              </div>
              <div class="genre-content">
                <h3>Street Photography</h3>
                <p>Urban life and candid moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MEMBERS -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-users"></i>
            Club Members
          </h2>
          <div class="members-grid">
            <div class="member-item">
              <div class="member-avatar">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="member-info">
                <h3>Mr. A. Gopi</h3>
                <p>Faculty Coordinator</p>
                <span class="member-role">Coordinator</span>
              </div>
            </div>
            <div class="member-item">
              <div class="member-avatar">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="member-info">
                <h3>Student President</h3>
                <p>Final Year CSE</p>
                <span class="member-role">President</span>
              </div>
            </div>
            <div class="member-item">
              <div class="member-avatar">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="member-info">
                <h3>Student Vice-President</h3>
                <p>Third Year EEE</p>
                <span class="member-role">Vice-President</span>
              </div>
            </div>
            <div class="member-item">
              <div class="member-avatar">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="member-info">
                <h3>Student Secretary</h3>
                <p>Second Year ECE</p>
                <span class="member-role">Secretary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section class="card-section">
        <div class="card contact-card">
          <h2 class="section-title">
            <i class="fa-solid fa-envelope"></i>
            Contact Photography Club
          </h2>
          <div class="contact-info">
            <p>Join us to explore the world through your lens and develop your photography skills!</p>
            <div class="contact-actions">
              <a href="mailto:photographyclub@ssit.edu.in" class="contact-btn">
                <i class="fa-solid fa-envelope"></i>
                Email Photography Club
              </a>
              <a href="tel:+919876543210" class="contact-btn">
                <i class="fa-solid fa-phone"></i>
                Call Coordinator
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PhotographyClub',
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>
/* THEME VARIABLES */
:root {
  --orange: #f97316;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
  --ink: #111827;
}

/* PAGE LAYOUT */
.photography-club-page {
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
}

.container {
  width: min(1180px, 92%);
  margin-inline: auto;
  padding: 0 1rem;
}

/* HERO SECTION */
.hero {
  background: var(--ink);
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.hero .title {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 0.3rem 0;
  color: white;
}

.hero .subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  opacity: 0.9;
  color: white;
}

.hero .context {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  color: white;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.5;
}

/* CONTENT SECTIONS */
.content {
  padding: 1rem 0 2rem;
}

.card-section {
  margin-bottom: 2rem;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(2, 6, 23, .04);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--border);
}

.section-title i {
  color: var(--orange);
}

/* DESCRIPTION */
.description p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: 1.5rem;
}

.description p:last-child {
  margin-bottom: 0;
}

/* ACTIVITIES GRID */
.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.activity-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.activity-icon {
  width: 50px;
  height: 50px;
  background: var(--orange);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.activity-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.activity-content p {
  font-size: 0.95rem;
  color: var(--ink);
  margin: 0;
  line-height: 1.5;
}

/* OBJECTIVES GRID */
.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.objective-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.objective-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.objective-icon {
  width: 50px;
  height: 50px;
  background: var(--orange);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.objective-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.objective-content p {
  font-size: 0.95rem;
  color: var(--ink);
  margin: 0;
  line-height: 1.5;
}

/* GENRES GRID */
.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.genre-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.genre-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.genre-icon {
  width: 50px;
  height: 50px;
  background: var(--orange);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.genre-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.genre-content p {
  font-size: 0.95rem;
  color: var(--ink);
  margin: 0;
  line-height: 1.5;
}

/* MEMBERS GRID */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.member-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.member-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.member-avatar {
  width: 60px;
  height: 60px;
  background: var(--orange);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.member-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.3rem 0;
}

.member-info p {
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0 0 0.5rem 0;
}

.member-role {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: var(--ink);
  color: white;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
}

/* CONTACT CARD */
.contact-card {
  background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%);
  border: 2px solid var(--orange);
}

.contact-info p {
  font-size: 1rem;
  color: var(--ink);
  margin-bottom: 1.5rem;
}

.contact-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: var(--orange);
  color: white;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.contact-btn:hover {
  background: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
}

.contact-btn i {
  font-size: 1.1rem;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .hero .title {
    font-size: 2rem;
  }
  
  .hero .subtitle {
    font-size: 1rem;
  }
  
  .hero .context {
    font-size: 0.9rem;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .activities-grid {
    grid-template-columns: 1fr;
  }
  
  .objectives-grid {
    grid-template-columns: 1fr;
  }
  
  .genres-grid {
    grid-template-columns: 1fr;
  }
  
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-actions {
    flex-direction: column;
  }
  
  .contact-btn {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 0;
  }
  
  .hero .title {
    font-size: 1.8rem;
  }
  
  .hero .subtitle {
    font-size: 0.95rem;
  }
  
  .card {
    padding: 1rem;
  }
  
  .activity-item {
    flex-direction: column;
    text-align: center;
  }
  
  .activity-icon {
    align-self: center;
  }
  
  .objective-item {
    flex-direction: column;
    text-align: center;
  }
  
  .objective-icon {
    align-self: center;
  }
  
  .genre-item {
    flex-direction: column;
    text-align: center;
  }
  
  .genre-icon {
    align-self: center;
  }
  
  .member-item {
    flex-direction: column;
    text-align: center;
  }
  
  .member-avatar {
    align-self: center;
  }
}
</style>
