🚀 Project Vision
A modern, minimal fitness web app powered by AI — designed to offer real-time coaching, goal tracking, and a personalized experience right from the first visit.

Think: Duolingo meets fitness coaching, but smarter and faster.

🛠️ Core Milestones Achieved
✅ Set up a Vite + React + Tailwind CSS + Framer Motion stack

✅ Designed a clean, glowing landing page with hero, features, and final CTA

✅ Built reusable components for CTA buttons with animations and routing

✅ Integrated Google Authentication using Firebase

✅ Automated the login process with direct redirection (no extra clicks)

✅ Created a smooth /login → onboarding user journey

✅ Successfully connected and pushed the project to GitHub

🐛 Notable Bugs & Fixes

Issue	Resolution
Redirect after login not working	Added fallback with setTimeout and verified user object from Firebase
User data not showing in localStorage	Logged user object + ensured it's parsed properly after redirect
Google auto-login without account picker	Set prompt: 'select_account' in Firebase provider
Git push failed due to README in remote	Used --allow-unrelated-histories to merge and push successfully
LF → CRLF warning on git add .	Acknowledged it's safe, and added .gitattributes for future consistency
📈 What’s Next
🧭 Duolingo-style onboarding flow

🧠 Global user context (UserProvider)

🔒 Protected dashboard for authenticated users

🏋️‍♀️ AI coaching interface

💾 Firestore / Supabase to store user goals + workouts

💡 Reflection
This project is as much about the process as the product. We've made design decisions with the user in mind, resolved issues head-on, and kept things DRY and scalable.
