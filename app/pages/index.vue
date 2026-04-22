<script setup>
import heroImage from '~~/assets/login-hero.jpg'
import googleLogo from '~~/assets/logo-google.png'
</script>

<template>
  <div class="screen-page screen-page--auth">
    <div class="phone-shell">
      <header class="topbar">
        <div class="topbar__left" />
        <div class="topbar__title">Career Passport</div>
        <div class="topbar__right" />
      </header>

      <section class="hero-banner" :style="{ backgroundImage: `linear-gradient(180deg, rgba(15, 50, 116, 0.18) 0%, rgba(15, 50, 116, 0.65) 100%), url(${heroImage})` }">
        <h1>Welcome Back</h1>
        <p>Access your professional network and career tools.</p>
      </section>

      <div class="auth-tabs">
        <div class="auth-tabs__item is-active">Alumni</div>
        <div class="auth-tabs__item">Employer</div>
        <div class="auth-tabs__item">Staff</div>
      </div>

      <div class="screen-body stack stack--roomy">
        <div class="stack">
          <div>
            <label class="label">Email or ID</label>
            <div class="field">
              <span class="sr-icon">ID</span>
              <input type="text" placeholder="Enter your email or ID">
            </div>
          </div>

          <div>
            <label class="label">Password</label>
            <div class="field">
              <span class="sr-icon">PW</span>
              <input type="password" value="password" aria-label="Password">
              <span class="field__action">SEE</span>
            </div>
          </div>

          <a class="forgot-link" href="#">Forgot Password?</a>
        </div>

        <NuxtLink class="primary-btn" to="/passport">
          <span>Sign In</span>
          <span>-&gt;</span>
        </NuxtLink>

        <div class="separator">Or Continue With</div>

        <div class="stack">
          <button class="secondary-btn">
            <img :src="googleLogo" alt="Google" width="20" height="20">
            <span>Sign in with Google</span>
          </button>

          <button class="secondary-btn">
            <span class="sr-icon">SSO</span>
            <span>Single Sign-On (SSO)</span>
          </button>
        </div>

        <div class="stack stack--tight">
          <div class="muted-note">New to Career Passport? <strong>Request Access</strong></div>
          <div class="footer-links">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
