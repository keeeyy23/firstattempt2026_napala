<script setup>
import alexKnight from '~/assets/avatar-alex-knight.png'

const documents = [
  {
    title: 'Official Transcript.pdf',
    meta: 'Uploaded Oct 12, 2023',
    icon: 'DOC'
  },
  {
    title: 'Bachelor Degree Certificate.pdf',
    meta: 'Uploaded Aug 05, 2023',
    icon: 'DEG'
  }
]
</script>

<template>
  <div class="screen-page screen-page--application">
    <div class="phone-shell">
      <header class="topbar">
        <NuxtLink class="topbar__left" to="/jobs">BACK</NuxtLink>
        <div class="topbar__title">Instant Application</div>
        <NuxtLink class="topbar__right" to="/status">MENU</NuxtLink>
      </header>

      <div class="screen-body stack stack--roomy">
        <section class="profile stack">
          <div class="avatar-ring" style="background: linear-gradient(180deg, #d1dae8 0%, #bdc9db 100%); box-shadow: none;">
            <img :src="alexKnight" alt="Alex Knight">
          </div>

          <div>
            <h1>Alex Knight</h1>
            <p><span class="highlight">Verified Student</span></p>
            <p class="screen-subtitle">Master of Computer Science</p>
          </div>
        </section>

        <section class="note-card">
          <h3>University of Tech Verification</h3>
          <p>This profile has been officially verified by the university registrar's office for the 2023-2024 academic year.</p>
          <p><strong style="color: var(--primary);">View Credentials -&gt;</strong></p>
        </section>

        <section class="stack">
          <div class="section-head">
            <h2>Academic Records</h2>
          </div>

          <div class="stack">
            <article v-for="document in documents" :key="document.title" class="doc-row">
              <div class="list-card__icon">{{ document.icon }}</div>
              <div class="doc-row__grow">
                <h3 class="doc-row__title">{{ document.title }}</h3>
                <div class="doc-row__meta">{{ document.meta }}</div>
              </div>
              <div>DL</div>
            </article>
          </div>
        </section>

        <section class="stack">
          <div class="section-head">
            <h2>Cover Letter</h2>
            <button type="button">Edit</button>
          </div>

          <div class="cover-letter">
            Dear Hiring Committee, I am writing to express my strong interest in the Research Assistant position. My Master's in Computer Science has provided me with a deep foundation in algorithm design and machine learning, which I am eager to apply to your current project.
          </div>
        </section>

        <a class="center-link" href="#">Preview Application</a>

        <NuxtLink class="primary-btn" to="/status">Submit Application -&gt;</NuxtLink>
      </div>
    </div>
  </div>
</template>
