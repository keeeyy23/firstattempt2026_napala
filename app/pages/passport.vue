<script setup>
const honors = [
  {
    title: "Dean's List",
    detail: 'Awarded for 6 consecutive semesters'
  },
  {
    title: 'Summa Cum Laude',
    detail: 'Top 1% of the graduating class'
  }
]

const skills = ['Product Strategy', 'Data Analysis', 'SQL', 'Python', 'Project Management', 'UX Research']
</script>

<template>
  <div class="screen-page screen-page--dashboard">
    <div class="phone-shell">
      <header class="topbar">
        <div class="topbar__left" />
        <div class="topbar__title">Career Passport</div>
        <NuxtLink class="topbar__right" to="/vault">SET</NuxtLink>
      </header>

      <div class="screen-body stack stack--roomy">
        <section class="profile stack">
          <div class="avatar-ring avatar-ring--icon">
            <div class="avatar-placeholder" aria-hidden="true">
              <span class="avatar-placeholder__head" />
              <span class="avatar-placeholder__body" />
            </div>
          </div>

          <div>
            <h1>Alex Johnson</h1>
            <p><span class="highlight">Verified Alumnus</span> - Class of 2020</p>
          </div>

          <NuxtLink class="primary-btn" to="/application">Generate Professional CV</NuxtLink>
        </section>

        <section class="metrics-grid">
          <div class="metric-card">
            <strong>3.9</strong>
            <span>GPA</span>
          </div>
          <div class="metric-card">
            <strong>12</strong>
            <span>Certificates</span>
          </div>
          <div class="metric-card">
            <strong>5</strong>
            <span>Honors</span>
          </div>
        </section>

        <section class="stack">
          <div class="section-head">
            <h2>Academic Honors</h2>
            <a href="#">View All</a>
          </div>

          <div class="stack">
            <article v-for="honor in honors" :key="honor.title" class="list-card">
              <div class="list-card__icon">AWD</div>
              <div class="list-card__content">
                <h3 class="list-card__title">{{ honor.title }}</h3>
                <div class="list-card__meta">{{ honor.detail }}</div>
              </div>
            </article>
          </div>
        </section>

        <section class="stack">
          <div class="section-head">
            <h2>Professional Skills</h2>
            <button type="button">Edit</button>
          </div>

          <div class="chips">
            <span v-for="skill in skills" :key="skill" class="chip">{{ skill }}</span>
            <span class="chip chip--ghost">+ Add Skill</span>
          </div>
        </section>
      </div>

      <nav class="bottom-nav">
        <NuxtLink class="is-active" to="/passport"><span class="sr-icon">ID</span><span>Passport</span></NuxtLink>
        <NuxtLink to="/jobs"><span class="sr-icon">NET</span><span>Network</span></NuxtLink>
        <NuxtLink to="/jobs"><span class="sr-icon">JOB</span><span>Jobs</span></NuxtLink>
        <NuxtLink to="/status"><span class="sr-icon">MSG</span><span>Messages</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>
