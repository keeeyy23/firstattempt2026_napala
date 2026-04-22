<script setup>
const records = [
  {
    title: 'e-Diploma',
    meta: 'University of Excellence - 2023',
    verified: 'Verified Oct 12',
    icon: 'EDU'
  },
  {
    title: 'Academic Transcript',
    meta: 'Official Grade Report',
    verified: 'Verified Sep 28',
    icon: 'DOC'
  },
  {
    title: 'AWS Cloud Practitioner',
    meta: 'Certification ID: AWS-88219',
    verified: 'Verified Aug 15',
    icon: 'AWS'
  }
]
</script>

<template>
  <div class="screen-page screen-page--vault">
    <div class="phone-shell">
      <header class="topbar topbar--dark">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div class="list-card__icon" style="width: 36px; height: 36px; background: #fff; color: var(--primary);">SAFE</div>
          <div>
            <div class="topbar__title">Digital Vault</div>
            <div class="topbar__subtitle">Secure Storage</div>
          </div>
        </div>
        <NuxtLink class="topbar__right" to="/passport">SET</NuxtLink>
      </header>

      <div class="screen-body stack stack--roomy">
        <section class="vault-status">
          <div>
            <div style="font-size: 14px; color: var(--primary);">Vault Status</div>
            <strong>Encrypted &amp; Secure</strong>
          </div>
          <div style="font-size: 20px; font-weight: 800;">SAFE</div>
        </section>

        <section class="stack">
          <div class="section-head">
            <h2>Verified Records</h2>
            <span class="vault-badge">3 Items</span>
          </div>

          <div class="stack">
            <article v-for="record in records" :key="record.title" class="vault-card">
              <div class="vault-card__top">
                <div class="list-card__icon">{{ record.icon }}</div>
                <div>
                  <h3 class="list-card__title">{{ record.title }}</h3>
                  <div class="list-card__meta">{{ record.meta }}</div>
                  <div class="vault-card__verify">OK {{ record.verified }}</div>
                </div>
              </div>

              <div class="vault-card__actions">
                <div class="vault-card__actions-left">
                  <button type="button" class="icon-btn">DOWN</button>
                  <button type="button" class="icon-btn">SHARE</button>
                </div>
                <button type="button" class="primary-btn" style="width: auto; min-width: 74px; min-height: 44px; padding: 0 18px;">View</button>
              </div>
            </article>
          </div>
        </section>

        <div style="height: 1px; background: var(--line);" />

        <section class="split-card">
          <div>
            <h3 class="list-card__title" style="font-size: 17px;">Vault Auto-Lock</h3>
            <div class="list-card__meta">Lock vault after 5 minutes of inactivity</div>
          </div>
          <div class="toggle" />
        </section>
      </div>

      <nav class="bottom-nav">
        <NuxtLink to="/passport"><span class="sr-icon">HOME</span><span>Home</span></NuxtLink>
        <NuxtLink class="is-active" to="/vault"><span class="sr-icon">LOCK</span><span>Vault</span></NuxtLink>
        <NuxtLink to="/application"><span class="sr-icon">ID</span><span>Identity</span></NuxtLink>
        <NuxtLink to="/passport"><span class="sr-icon">ME</span><span>Profile</span></NuxtLink>
      </nav>
    </div>
  </div>
</template>
