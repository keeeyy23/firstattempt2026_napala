<template>
  <div class="app">

    <!-- NAV -->
    <nav class="navbar">
      <div class="nav-brand">
        <div class="nav-logo">BK</div>
        <span class="nav-title">Blue Knight <span class="accent">Career Passport</span></span>
      </div>
      <ul class="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Job Board</a></li>
        <li><a href="#" class="active">Post a Job</a></li>
        <li><a href="#">Candidates</a></li>
        <li><a href="#">Analytics</a></li>
      </ul>
      <div class="nav-avatar">EN</div>
    </nav>

    <!-- HERO -->
    <div class="hero">
      <div class="breadcrumb">Dashboard › <span>Post a Career Opportunity</span></div>
      <div class="hero-header">
        <div>
          <h1 class="hero-title">Post a <span class="accent">Career</span><br>Opportunity</h1>
          <p class="hero-sub">Create a verified job listing exclusively for Blue Knight alumni. All posts require admin approval before going live.</p>
        </div>
        <div class="verified-badge">✦ Verified Employer Account</div>
      </div>
    </div>

    <!-- STEP BAR -->
    <div class="step-bar">
      <div v-for="(step, i) in steps" :key="i" :class="['step', i === currentStep ? 'active' : i < currentStep ? 'done' : '']">
        <div class="step-num">{{ i < currentStep ? '✓' : i + 1 }}</div>
        <div class="step-label">{{ step }}</div>
      </div>
    </div>

    <!-- MAIN -->
    <div class="main">

      <!-- FORM -->
      <div class="form-card">
        <div class="form-card-header">
          <div class="form-section-title">Basic Information</div>
          <div class="form-section-sub">Step 1 of 4 — Tell us the fundamentals of the role you're hiring for.</div>
        </div>

        <div class="form-body">

          <div class="section-label">Position Details</div>

          <div class="form-row">
            <div class="form-group">
              <label>Job Title <span class="req">*</span></label>
              <input v-model="form.jobTitle" type="text" placeholder="e.g. Senior Product Designer" />
            </div>
            <div class="form-group">
              <label>Department</label>
              <select v-model="form.department">
                <option value="">Select department</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Operations</option>
                <option>Human Resources</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Employment Type <span class="req">*</span></label>
              <select v-model="form.empType">
                <option value="">Select employment type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Freelance</option>
              </select>
            </div>
            <div class="form-group">
              <label>Required Degree <span class="req">*</span></label>
              <select v-model="form.degree">
                <option value="">Select degree requirement</option>
                <option>Any Degree</option>
                <option>BS Information Technology</option>
                <option>BS Computer Science</option>
                <option>BS Engineering</option>
                <option>BS Business Administration</option>
              </select>
            </div>
          </div>

          <div class="form-divider"></div>
          <div class="section-label">Location & Compensation</div>

          <div class="form-group">
            <label>Work Setup <span class="req">*</span></label>
            <div class="location-pills">
              <button
                v-for="opt in ['🏢 On-site', '☁️ Remote', '🔄 Hybrid']"
                :key="opt"
                :class="['pill-btn', form.workSetup === opt ? 'selected' : '']"
                @click="form.workSetup = opt"
              >{{ opt }}</button>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Location</label>
              <input v-model="form.location" type="text" placeholder="City, Province or Country" />
            </div>
            <div class="form-group">
              <label>Expiration Date <span class="req">*</span></label>
              <input v-model="form.expDate" type="date" />
            </div>
          </div>

          <div class="form-group">
            <label>Salary Range (PHP)</label>
            <div class="salary-row">
              <input v-model="form.salaryMin" type="number" placeholder="Min e.g. 30,000" />
              <div class="salary-sep">to</div>
              <input v-model="form.salaryMax" type="number" placeholder="Max e.g. 60,000" />
            </div>
          </div>

          <div class="form-divider"></div>
          <div class="section-label">Skills & Tags</div>

          <div class="form-group">
            <label>Required Skills <span class="req">*</span></label>
            <div class="skills-input-wrap" @click="$refs.skillInput.focus()">
              <div v-for="(skill, i) in form.skills" :key="i" class="skill-tag">
                {{ skill }} <button @click.stop="removeSkill(i)">×</button>
              </div>
              <input
                ref="skillInput"
                class="skills-text-input"
                v-model="skillInputVal"
                placeholder="Type skill and press Enter..."
                @keydown.enter.prevent="addSkill"
              />
            </div>
          </div>

          <div class="form-divider"></div>
          <div class="section-label">Posting Settings</div>

          <div v-for="toggle in toggles" :key="toggle.key" class="toggle-row">
            <div class="toggle-info">
              <div class="toggle-label"><span class="toggle-icon">{{ toggle.icon }}</span>{{ toggle.label }}</div>
              <div class="toggle-desc">{{ toggle.desc }}</div>
            </div>
            <label class="switch">
              <input type="checkbox" v-model="form[toggle.key]" />
              <span class="slider"></span>
            </label>
          </div>

        </div>

        <div class="form-footer">
          <div style="display:flex; gap:0.75rem; align-items:center;">
            <button class="btn-secondary">← Back</button>
            <div class="autosave"><div class="autosave-dot"></div> Draft saved</div>
          </div>
          <button class="btn-primary" @click="submitForm">Continue to Description →</button>
        </div>
      </div>

      <!-- SIDEBAR -->
      <div class="sidebar">

        <!-- LIVE PREVIEW -->
        <div class="side-card">
          <div class="side-card-header">👁 Live Preview</div>
          <div class="preview-mini">
            <div class="preview-job-title">{{ form.jobTitle || 'Job Title' }}</div>
            <div class="preview-company">Blue Knight Corp · {{ form.location || 'Location' }}</div>
            <div class="preview-tags">
              <span class="preview-tag green">{{ form.empType || 'Full-time' }}</span>
              <span class="preview-tag">{{ form.workSetup || 'On-site' }}</span>
              <span v-if="form.expDate" class="preview-tag amber">Expires {{ form.expDate }}</span>
            </div>
            <div v-if="form.alumniExclusive" class="preview-alumni-badge">🎓 Alumni-Exclusive</div>
          </div>
        </div>

        <!-- HIRING TEAM -->
        <div class="side-card">
          <div class="side-card-header">👥 Hiring Team</div>
          <div class="side-card-body">
            <div class="team-members">
              <div class="team-member" v-for="member in team" :key="member.initials">
                <div class="member-avatar" :style="{ background: member.color }">{{ member.initials }}</div>
                <div class="member-info">
                  <div class="member-name">{{ member.name }}</div>
                  <div class="member-role">{{ member.role }}</div>
                </div>
                <span :class="['member-badge', member.badgeClass]">{{ member.badge }}</span>
              </div>
            </div>
            <button class="add-member-btn">+ Add Team Member</button>
          </div>
        </div>

        <!-- GUIDELINES -->
        <div class="side-card">
          <div class="side-card-header">📌 Posting Guidelines</div>
          <div class="side-card-body">
            <div v-for="g in guidelines" :key="g.title" class="guideline-item">
              <div class="guideline-icon" :style="{ background: g.bg }">{{ g.icon }}</div>
              <div class="guideline-text"><strong>{{ g.title }}</strong>{{ g.text }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- SUCCESS MODAL -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <div class="modal-icon">✓</div>
        <div class="modal-title">Submitted for Approval!</div>
        <div class="modal-text">Your job posting has been submitted. An admin will review and approve it within 24–48 hours.</div>
        <div class="modal-ref">Reference: BK-JP-2026-0412</div>
        <button class="modal-close" @click="showModal = false">Back to Dashboard</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const currentStep = ref(0)
const steps = ['Basic Info', 'Description', 'Requirements', 'Review & Submit']
const showModal = ref(false)
const skillInputVal = ref('')

const form = reactive({
  jobTitle: '',
  department: '',
  empType: '',
  degree: '',
  workSetup: '🏢 On-site',
  location: '',
  expDate: '',
  salaryMin: '',
  salaryMax: '',
  skills: ['Figma', 'UI/UX', 'Prototyping'],
  showSalary: true,
  alumniExclusive: true,
  freshGrad: false,
  verifiedBadge: false,
})

const toggles = [
  { key: 'showSalary', icon: '📋', label: 'Show Salary Range', desc: 'Listings with salary get 2× more applications' },
  { key: 'alumniExclusive', icon: '🎓', label: 'Alumni-Exclusive Listing', desc: 'Only verified Blue Knight alumni can view and apply' },
  { key: 'freshGrad', icon: '🌱', label: 'Fresh Graduate Friendly', desc: 'Mark this role as open to fresh graduates' },
  { key: 'verifiedBadge', icon: '🛡️', label: 'Request Verified Employer Badge', desc: 'Increases alumni trust — requires admin approval' },
]

const team = [
  { initials: 'EN', name: 'Employer Napala', role: 'Hiring Manager', badge: 'Admin', badgeClass: 'badge-admin', color: 'linear-gradient(135deg,#1d4ed8,#60a5fa)' },
  { initials: 'HR', name: 'HR Department', role: 'Reviewer', badge: 'Reviewer', badgeClass: 'badge-reviewer', color: 'linear-gradient(135deg,#7c3aed,#a78bfa)' },
]

const guidelines = [
  { icon: '✓', bg: 'rgba(16,185,129,0.1)', title: 'Admin Approval Required', text: 'All listings are reviewed within 24–48 hours before going live.' },
  { icon: '🔒', bg: 'rgba(59,130,246,0.1)', title: 'Verified Employers Only', text: 'Your account must be verified to post alumni-exclusive roles.' },
  { icon: '⏱', bg: 'rgba(245,158,11,0.1)', title: 'Auto-Expiry', text: 'Posts auto-archive on the expiration date.' },
  { icon: '🚫', bg: 'rgba(239,68,68,0.1)', title: 'No Fake Listings', text: 'Spam or ghost listings will result in account suspension.' },
]

function addSkill() {
  const val = skillInputVal.value.trim()
  if (val) { form.skills.push(val); skillInputVal.value = '' }
}

function removeSkill(i) { form.skills.splice(i, 1) }

function submitForm() { showModal.value = true }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --navy: #0a1628; --navy-mid: #112240; --blue: #1d4ed8;
  --blue-bright: #2563eb; --blue-accent: #3b82f6; --sky: #60a5fa;
  --white: #f8faff; --gray-100: #e8edf5; --gray-200: #c8d3e8;
  --gray-400: #8899bb; --gray-600: #4a5a7a;
  --green: #10b981; --amber: #f59e0b; --gold: #fbbf24;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { background: var(--navy); color: var(--white); font-family: 'DM Sans', sans-serif; }

.app { min-height: 100vh; background: var(--navy); position: relative; }
.app::before {
  content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background: radial-gradient(ellipse 80% 60% at 20% 0%, rgba(29,78,216,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 80% 100%, rgba(96,165,250,0.10) 0%, transparent 55%);
}

.navbar {
  position: sticky; top: 0; z-index: 100;
  background: rgba(10,22,40,0.85); backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(96,165,250,0.12);
  padding: 0 2rem; display: flex; align-items: center;
  justify-content: space-between; height: 64px;
}
.nav-brand { display: flex; align-items: center; gap: 0.75rem; }
.nav-logo {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, var(--blue), var(--sky));
  border-radius: 10px; display: flex; align-items: center;
  justify-content: center; font-family: 'Sora', sans-serif;
  font-weight: 800; font-size: 0.85rem; color: white;
}
.nav-title { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 1rem; }
.nav-title .accent, .accent { color: var(--sky); }
.nav-links { display: flex; gap: 0.25rem; list-style: none; }
.nav-links a {
  padding: 0.4rem 0.9rem; border-radius: 8px; color: var(--gray-400);
  text-decoration: none; font-size: 0.875rem; font-weight: 500; transition: all 0.2s;
}
.nav-links a:hover { color: var(--white); background: rgba(255,255,255,0.05); }
.nav-links a.active { color: var(--white); background: rgba(59,130,246,0.15); }
.nav-avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: linear-gradient(135deg, #1d4ed8, #60a5fa);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 700; border: 2px solid rgba(96,165,250,0.3);
}

.hero { position: relative; z-index: 1; padding: 3rem 2rem 2rem; max-width: 1100px; margin: 0 auto; }
.breadcrumb { font-size: 0.8rem; color: var(--gray-400); margin-bottom: 1.5rem; }
.breadcrumb span { color: var(--sky); }
.hero-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
.hero-title { font-family: 'Sora', sans-serif; font-size: 2.2rem; font-weight: 800; line-height: 1.1; letter-spacing: -0.04em; }
.hero-sub { margin-top: 0.6rem; color: var(--gray-400); font-size: 0.95rem; max-width: 480px; line-height: 1.5; }
.verified-badge {
  display: flex; align-items: center; gap: 0.5rem;
  background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3);
  border-radius: 100px; padding: 0.4rem 1rem; font-size: 0.78rem;
  font-weight: 600; color: var(--green); white-space: nowrap; align-self: flex-start; margin-top: 0.5rem;
}

.step-bar {
  position: relative; z-index: 1; max-width: 1100px; margin: 0 auto;
  padding: 1.5rem 2rem 0; display: flex; align-items: center;
}
.step { display: flex; align-items: center; gap: 0.6rem; flex: 1; position: relative; }
.step:not(:last-child)::after {
  content: ''; position: absolute; left: 2.2rem; right: 0; top: 50%;
  transform: translateY(-50%); height: 2px; background: rgba(96,165,250,0.15); z-index: -1;
}
.step-num {
  width: 36px; height: 36px; border-radius: 50%; border: 2px solid rgba(96,165,250,0.2);
  background: var(--navy-mid); display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 700; color: var(--gray-400); flex-shrink: 0; transition: all 0.3s;
}
.step.active .step-num { border-color: var(--blue-accent); background: var(--blue); color: white; box-shadow: 0 0 16px rgba(59,130,246,0.4); }
.step.done .step-num { border-color: var(--green); background: rgba(16,185,129,0.15); color: var(--green); }
.step-label { font-size: 0.78rem; font-weight: 500; color: var(--gray-400); white-space: nowrap; }
.step.active .step-label { color: var(--white); }

.main {
  position: relative; z-index: 1; max-width: 1100px; margin: 2rem auto;
  padding: 0 2rem 4rem; display: grid; grid-template-columns: 1fr 340px; gap: 2rem; align-items: start;
}

.form-card {
  background: rgba(17,34,64,0.6); border: 1px solid rgba(96,165,250,0.1);
  border-radius: 20px; overflow: hidden; backdrop-filter: blur(10px);
}
.form-card-header {
  padding: 1.75rem 2rem; border-bottom: 1px solid rgba(96,165,250,0.08);
  background: rgba(29,78,216,0.06);
}
.form-section-title { font-family: 'Sora', sans-serif; font-size: 1.15rem; font-weight: 700; }
.form-section-sub { font-size: 0.82rem; color: var(--gray-400); margin-top: 0.25rem; }
.form-body { padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.section-label { font-family: 'Sora', sans-serif; font-size: 0.7rem; font-weight: 700; color: var(--sky); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: -0.5rem; }
.form-divider { height: 1px; background: rgba(96,165,250,0.07); }

label { font-size: 0.8rem; font-weight: 600; color: var(--gray-200); letter-spacing: 0.02em; text-transform: uppercase; }
.req { color: var(--sky); }

input[type="text"], input[type="date"], input[type="number"], select, textarea {
  background: rgba(10,22,40,0.7); border: 1px solid rgba(96,165,250,0.15);
  border-radius: 10px; color: var(--white); font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem; padding: 0.7rem 1rem; outline: none; transition: all 0.2s; width: 100%; -webkit-appearance: none;
}
input::placeholder, textarea::placeholder { color: var(--gray-600); }
input:focus, select:focus, textarea:focus { border-color: rgba(59,130,246,0.5); box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
select option { background: var(--navy-mid); color: var(--white); }

.salary-row { display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.75rem; align-items: center; }
.salary-sep { color: var(--gray-400); font-size: 0.8rem; text-align: center; }

.location-pills { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.pill-btn {
  padding: 0.55rem 1.2rem; border-radius: 8px; border: 1px solid rgba(96,165,250,0.2);
  background: rgba(10,22,40,0.6); color: var(--gray-400); font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.2s;
}
.pill-btn.selected { border-color: var(--blue-accent); background: rgba(59,130,246,0.15); color: var(--white); }

.skills-input-wrap {
  display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.6rem 0.75rem;
  background: rgba(10,22,40,0.7); border: 1px solid rgba(96,165,250,0.15);
  border-radius: 10px; min-height: 50px; cursor: text; transition: all 0.2s;
}
.skill-tag {
  display: flex; align-items: center; gap: 0.35rem;
  background: rgba(59,130,246,0.18); border: 1px solid rgba(59,130,246,0.3);
  border-radius: 6px; padding: 0.2rem 0.6rem; font-size: 0.78rem; font-weight: 600; color: var(--sky);
}
.skill-tag button { background: none; border: none; color: var(--sky); cursor: pointer; font-size: 1rem; opacity: 0.6; padding: 0; }
.skills-text-input { background: none; border: none; color: var(--white); font-family: 'DM Sans', sans-serif; font-size: 0.88rem; outline: none; min-width: 120px; flex: 1; padding: 0.1rem 0.25rem; }
.skills-text-input::placeholder { color: var(--gray-600); }

.toggle-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.9rem 1.1rem; background: rgba(10,22,40,0.5);
  border: 1px solid rgba(96,165,250,0.1); border-radius: 10px;
}
.toggle-info { display: flex; flex-direction: column; gap: 0.2rem; }
.toggle-label { font-size: 0.875rem; font-weight: 600; color: var(--white); display: flex; align-items: center; gap: 0.5rem; }
.toggle-desc { font-size: 0.75rem; color: var(--gray-400); }
.toggle-icon { font-size: 1rem; background: rgba(59,130,246,0.12); border-radius: 6px; padding: 0.2rem 0.3rem; }

.switch { position: relative; width: 46px; height: 26px; flex-shrink: 0; }
.switch input { display: none; }
.slider { position: absolute; inset: 0; background: rgba(96,165,250,0.15); border: 1px solid rgba(96,165,250,0.2); border-radius: 100px; cursor: pointer; transition: all 0.25s; }
.slider::before { content: ''; position: absolute; width: 18px; height: 18px; border-radius: 50%; background: var(--gray-400); top: 3px; left: 3px; transition: all 0.25s; }
.switch input:checked + .slider { background: rgba(59,130,246,0.3); border-color: var(--blue-accent); }
.switch input:checked + .slider::before { transform: translateX(20px); background: var(--blue-accent); box-shadow: 0 0 8px rgba(59,130,246,0.5); }

.form-footer {
  padding: 1.5rem 2rem; border-top: 1px solid rgba(96,165,250,0.08);
  display: flex; gap: 1rem; align-items: center; justify-content: space-between;
  background: rgba(10,22,40,0.3);
}
.btn-primary {
  display: flex; align-items: center; gap: 0.6rem; padding: 0.8rem 2rem;
  background: linear-gradient(135deg, var(--blue), var(--blue-bright)); border: none;
  border-radius: 10px; color: white; font-family: 'Sora', sans-serif;
  font-size: 0.9rem; font-weight: 700; cursor: pointer; transition: all 0.2s;
  box-shadow: 0 4px 20px rgba(29,78,216,0.4);
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(29,78,216,0.5); }
.btn-secondary {
  padding: 0.8rem 1.5rem; background: transparent; border: 1px solid rgba(96,165,250,0.2);
  border-radius: 10px; color: var(--gray-400); font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem; font-weight: 500; cursor: pointer; transition: all 0.2s;
}
.btn-secondary:hover { border-color: rgba(96,165,250,0.4); color: var(--white); }
.autosave { font-size: 0.75rem; color: var(--gray-400); display: flex; align-items: center; gap: 0.4rem; }
.autosave-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

.sidebar { display: flex; flex-direction: column; gap: 1.25rem; position: sticky; top: 84px; }
.side-card { background: rgba(17,34,64,0.6); border: 1px solid rgba(96,165,250,0.1); border-radius: 16px; overflow: hidden; backdrop-filter: blur(10px); }
.side-card-header { padding: 1rem 1.25rem; border-bottom: 1px solid rgba(96,165,250,0.07); font-family: 'Sora', sans-serif; font-size: 0.82rem; font-weight: 700; color: var(--gray-200); text-transform: uppercase; letter-spacing: 0.06em; }
.side-card-body { padding: 1.25rem; }

.preview-mini { padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
.preview-job-title { font-family: 'Sora', sans-serif; font-size: 1rem; font-weight: 700; color: var(--white); }
.preview-company { font-size: 0.78rem; color: var(--gray-400); }
.preview-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.preview-tag { font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 5px; background: rgba(59,130,246,0.12); color: var(--sky); border: 1px solid rgba(59,130,246,0.2); }
.preview-tag.green { background: rgba(16,185,129,0.1); color: var(--green); border-color: rgba(16,185,129,0.2); }
.preview-tag.amber { background: rgba(245,158,11,0.1); color: var(--amber); border-color: rgba(245,158,11,0.2); }
.preview-alumni-badge { display: flex; align-items: center; gap: 0.4rem; font-size: 0.72rem; font-weight: 600; color: var(--gold); background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.2); border-radius: 6px; padding: 0.35rem 0.7rem; align-self: flex-start; }

.team-members { display: flex; flex-direction: column; gap: 0.6rem; }
.team-member { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0; }
.member-avatar { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; flex-shrink: 0; border: 1.5px solid rgba(96,165,250,0.2); }
.member-info { flex: 1; }
.member-name { font-size: 0.82rem; font-weight: 600; color: var(--white); }
.member-role { font-size: 0.72rem; color: var(--gray-400); }
.member-badge { font-size: 0.65rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
.badge-admin { background: rgba(251,191,36,0.15); color: var(--gold); border: 1px solid rgba(251,191,36,0.25); }
.badge-reviewer { background: rgba(96,165,250,0.12); color: var(--sky); border: 1px solid rgba(96,165,250,0.2); }
.add-member-btn { width: 100%; padding: 0.6rem; background: rgba(10,22,40,0.5); border: 1px dashed rgba(96,165,250,0.2); border-radius: 8px; color: var(--gray-400); font-family: 'DM Sans', sans-serif; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; margin-top: 0.5rem; display: flex; align-items: center; justify-content: center; gap: 0.4rem; }
.add-member-btn:hover { border-color: rgba(59,130,246,0.4); color: var(--sky); }

.guideline-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.6rem 0; border-bottom: 1px solid rgba(96,165,250,0.05); }
.guideline-item:last-child { border-bottom: none; }
.guideline-icon { width: 28px; height: 28px; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; flex-shrink: 0; }
.guideline-text { font-size: 0.78rem; color: var(--gray-400); line-height: 1.5; }
.guideline-text strong { color: var(--gray-200); display: block; margin-bottom: 0.1rem; }

.modal-overlay { position: fixed; inset: 0; background: rgba(5,12,25,0.85); backdrop-filter: blur(6px); z-index: 200; display: flex; align-items: center; justify-content: center; }
.modal { background: var(--navy-mid); border: 1px solid rgba(96,165,250,0.2); border-radius: 20px; padding: 2.5rem; max-width: 420px; width: 90%; text-align: center; }
.modal-icon { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, rgba(16,185,129,0.2), rgba(59,130,246,0.15)); border: 2px solid rgba(16,185,129,0.3); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; }
.modal-title { font-family: 'Sora', sans-serif; font-size: 1.3rem; font-weight: 800; margin-bottom: 0.5rem; }
.modal-text { font-size: 0.875rem; color: var(--gray-400); line-height: 1.6; margin-bottom: 1.5rem; }
.modal-ref { background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); border-radius: 8px; padding: 0.6rem 1rem; font-size: 0.78rem; color: var(--sky); font-weight: 600; margin-bottom: 1.5rem; }
.modal-close { padding: 0.8rem 2rem; background: linear-gradient(135deg, var(--blue), var(--blue-bright)); border: none; border-radius: 10px; color: white; font-family: 'Sora', sans-serif; font-size: 0.9rem; font-weight: 700; cursor: pointer; width: 100%; }

@media (max-width: 768px) {
  .main { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .sidebar { position: static; }
  .hero-title { font-size: 1.6rem; }
  .navbar { padding: 0 1rem; }
  .nav-links { display: none; }
}
</style>