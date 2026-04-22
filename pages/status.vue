<script setup>
import googleLogo from '~/assets/logo-google.png'
import sarahAvatar from '~/assets/avatar-sarah.png'

const timeline = [
  { title: 'Interview Invitation Sent', when: 'Today, 10:45 AM', current: true },
  { title: 'Application Shortlisted', when: 'Yesterday, 02:15 PM' },
  { title: 'Resume Viewed by Hiring Manager', when: 'Oct 24, 2023' },
  { title: 'Application Submitted', when: 'Oct 22, 2023' }
]

const steps = [
  { label: 'Applied', state: 'done' },
  { label: 'Viewed', state: 'done' },
  { label: 'Shortlisted', state: 'done' },
  { label: 'Interview', state: 'current' },
  { label: 'Hired', state: 'upcoming' }
]
</script>

<template>
  <div class="screen-page screen-page--status" style="background: #091428;">
    <div class="phone-shell phone-shell--flat">
      <header class="topbar topbar--dark">
        <NuxtLink class="topbar__left" to="/application">BACK</NuxtLink>
        <div class="topbar__title">Application Status</div>
        <NuxtLink class="topbar__right" to="/vault">MENU</NuxtLink>
      </header>

      <div class="screen-body screen-body--loose stack stack--roomy" style="background: #fff;">
        <section class="status-hero">
          <div class="status-hero__company">
            <img class="status-hero__logo" :src="googleLogo" alt="Google">
            <div>
              <h1 class="screen-heading">Senior Software Engineer</h1>
              <p class="screen-subtitle">Google - Mountain View, CA</p>
            </div>
          </div>

          <div class="status-pill">In Progress</div>
        </section>

        <section class="status-steps">
          <div
            v-for="step in steps"
            :key="step.label"
            :class="['status-step', step.state === 'done' ? 'is-done' : '', step.state === 'current' ? 'is-current' : '']"
          >
            <div class="status-step__dot">{{ step.state === 'done' ? 'OK' : step.state === 'current' ? 'NOW' : '...' }}</div>
            <div>{{ step.label }}</div>
          </div>
        </section>

        <section class="message-card">
          <img :src="sarahAvatar" alt="Sarah Jenkins">
          <div>
            <h3 class="list-card__title">Sarah Jenkins</h3>
            <div class="list-card__meta">Senior Technical Recruiter</div>
            <div class="list-card__copy">"Hi Alex! Great news - the team was really impressed with your portfolio. We'd like to move forward with a technical interview. Are you available this Thursday?"</div>
          </div>
          <div>MSG</div>
        </section>

        <section class="stack">
          <div class="section-head">
            <h2>Timeline of Events</h2>
          </div>

          <div class="timeline">
            <article
              v-for="item in timeline"
              :key="item.title"
              :class="['timeline-item', item.current ? 'is-current' : '']"
            >
              <h3>{{ item.title }}</h3>
              <p>{{ item.when }}</p>
            </article>
          </div>
        </section>
      </div>

      <nav class="bottom-nav">
        <NuxtLink to="/jobs"><span class="sr-icon">JOB</span><span>Jobs</span></NuxtLink>
        <NuxtLink class="is-active" to="/status"><span class="sr-icon">APP</span><span>Applied</span></NuxtLink>
        <NuxtLink to="/status"><span class="sr-icon">MSG</span><span>Messages</span></NuxtLink>
        <NuxtLink to="/passport"><span class="sr-icon">ME</span><span>Profile</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>
