<script setup>
import techflowLogo from '~/assets/logo-techflow.png'
import luminaLogo from '~/assets/logo-lumina.png'
import blueKnightLogo from '~/assets/logo-blueknight.png'

const jobs = [
  {
    title: 'Senior Product Designer',
    company: 'TechFlow Systems - San Francisco, CA',
    salary: '$140k - $180k',
    type: 'Full-time',
    posted: '2 days ago',
    match: '98% Match',
    logo: techflowLogo
  },
  {
    title: 'Frontend Engineer (React)',
    company: 'Lumina Creative - Remote',
    salary: '$120k - $155k',
    type: 'Contract',
    posted: '5 hours ago',
    match: '92% Match',
    logo: luminaLogo
  },
  {
    title: 'UX Research Lead',
    company: 'Blue Knight Corp - Austin, TX',
    salary: '$150k - $200k',
    type: 'Full-time',
    posted: '1 week ago',
    match: '89% Match',
    logo: blueKnightLogo
  }
]
</script>

<template>
  <div class="screen-page screen-page--jobs">
    <div class="phone-shell">
      <header class="topbar">
        <NuxtLink class="topbar__left" to="/passport">BACK</NuxtLink>
        <div class="topbar__title">Job Search</div>
        <NuxtLink class="topbar__right" to="/status">ALRT</NuxtLink>
      </header>

      <div class="screen-body stack stack--roomy">
        <div class="search-box">
          <span class="sr-icon">SRC</span>
          <div class="search-box__grow">Search job title, company...</div>
          <span class="sr-icon">FLT</span>
        </div>

        <div class="filter-row">
          <span class="filter-pill is-active">Degree v</span>
          <span class="filter-pill">Skills v</span>
          <span class="filter-pill">Location v</span>
          <span class="filter-pill">Remote v</span>
        </div>

        <section class="stack">
          <div class="section-head">
            <h2>Hand-Picked for You</h2>
            <a href="#">See all</a>
          </div>

          <div class="stack stack--roomy">
            <article v-for="job in jobs" :key="job.title" class="job-card">
              <div class="job-card__head">
                <img class="job-card__logo" :src="job.logo" :alt="job.title">
                <div>
                  <h3 class="job-card__title">{{ job.title }}</h3>
                  <p class="job-card__company">{{ job.company }}</p>
                </div>
                <div class="match-pill">{{ job.match }}</div>
              </div>

              <div class="job-meta">
                <span>PAY {{ job.salary }}</span>
                <span>TYPE {{ job.type }}</span>
                <span>WHEN {{ job.posted }}</span>
              </div>

              <div class="job-actions">
                <NuxtLink class="primary-btn" to="/application">Apply Now</NuxtLink>
                <button type="button" class="icon-btn">SAVE</button>
              </div>
            </article>
          </div>
        </section>
      </div>

      <nav class="bottom-nav">
        <NuxtLink class="is-active" to="/jobs"><span class="sr-icon">SRC</span><span>Search</span></NuxtLink>
        <NuxtLink to="/status"><span class="sr-icon">APP</span><span>Applied</span></NuxtLink>
        <NuxtLink to="/status"><span class="sr-icon">MSG</span><span>Messages</span></NuxtLink>
        <NuxtLink to="/passport"><span class="sr-icon">ME</span><span>Profile</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>
