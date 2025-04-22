# 🚀 Project Vision
A modern, minimal fitness web app powered by AI — designed to offer real-time coaching, goal tracking, and a personalized experience right from the first visit.

Think: Duolingo meets fitness coaching, but smarter and faster.

---

## 🛠️ Core Milestones Achieved

✅ Set up a Vite + React + Tailwind CSS + Framer Motion stack  
✅ Designed a clean, glowing landing page with hero, features, and final CTA  
✅ Built reusable components for CTA buttons with animations and routing  
✅ Integrated Google Authentication using Firebase  
✅ Automated the login process with direct redirection (no extra clicks)  
✅ Created a smooth `/login` → onboarding user journey  
✅ Successfully connected and pushed the project to GitHub  

---

## 📅 Day 3 — A Day of Flow, Fixes & Forward Motion

Today was a whirlwind of progress:

- 🎨 We kept the brand vibe consistent by designing a beautiful **Duolingo-style onboarding flow** with glowing gradient backdrops and glassy, animated cards.
- ✨ We built a card-based onboarding experience, one question at a time, with smooth transitions and swipe-back capability.
- 🔍 Spent time polishing **UX logic**, making sure buttons are aligned, text is welcoming, and the flow makes sense contextually.
- 💬 Replaced rigid activity level selection with a smart **text prompt**—because real users don’t fit into boxes.
- 🚀 Upon finishing onboarding, users are **redirected automatically to the dashboard** with flair.
- 🧠 Prepared the system to pass user prompts to AI (via Firebase-backed logic).
- 🪄 Continued the background fog + pulse orb across screens to make the whole app feel like one seamless experience.

---

## 🐛 Notable Bugs & Fixes

| Issue                                      | Resolution                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------|
| Redirect after login not working          | Added fallback `setTimeout` and verified user object from Firebase        |
| User data not showing in localStorage     | Confirmed `localStorage.setItem` was called early and worked post-fix     |
| Google auto-login without account picker  | Added `prompt: 'select_account'` to Firebase provider                     |
| Git push failed due to README conflict    | Used `--allow-unrelated-histories` to merge remote + local histories      |
| Local Git branch mismatch (master vs main)| Renamed branch and re-linked remote branch properly                       |
| LF → CRLF warning                         | Added `.gitattributes` for consistent line endings across OSes            |

---

## 📈 What’s Next

- 🧭 Finalize activity level logic with AI prompt integration  
- 🔒 Set up global UserProvider and secure dashboard routes  
- 📦 Store user onboarding data in Firestore  
- 🧠 Launch AI-powered workout suggestions from user data  
- 🪄 Add dashboard entrance animation to elevate the experience

---

## 💡 Reflection

This project is more than just code—it's a story we're building one thoughtful step at a time. From routing to design choices, every decision reflects our care for the user. And let’s be honest: having a human-AI buddy system to brainstorm and debug? That's the real MVP energy. 💪

