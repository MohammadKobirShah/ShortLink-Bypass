
---

```markdown
<h1 align="center">🚀 Shortlink Bypass – Instant Skips for Just2Earn, GPLinks & More</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20by-MohammadKobirShah-1f425f?style=for-the-badge&logo=github">
  <img src="https://img.shields.io/badge/Tampermonkey-Compatible-brightgreen?style=for-the-badge&logo=googlechrome">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge">
</p>

<p align="center">
  ✨ No timers. No overlays. No BS. Just pure link freedom — on every shady shortlink site you hate.
</p>

---

## 🎯 What Is This?

**Shortlink Bypass** is a precision userscript built to instantly bypass ad-riddled shortlink services like:

- `just2earn.co`
- `gplinks.co`
- ...and other clones using the same redirect logic.

It’s designed for users who are tired of fake countdowns, invisible buttons, and click-bait traps. This script does the work — so you don’t have to.

---

## 💡 Features

| Feature                  | Description |
|--------------------------|-------------|
| 🔄 Auto-Skip Verify       | Clicks "continue" or "verify" buttons immediately |
| ⏱️ Timer Killer           | Zeroes countdowns, cancels `setInterval` traps |
| 🧼 Overlay Remover        | Removes ads, blockers, and hidden divs |
| 💻 Clean Console Logs     | Helpful messages, no spam |
| 🌐 Broad Compatibility    | Works on all Chromium browsers w/ Tampermonkey |

---

## ⚙️ Quick Install

1. **Install Tampermonkey** → [tampermonkey.net](https://www.tampermonkey.net/)  
2. **Click to Install Script** *(coming soon)*:  
   ```bash
   https://github.com/MohammadKobirShah/shortlink-bypass/raw/main/ShortlinkBypass.user.js
   ```
3. ✅ Done. Open a shortlink and enjoy the bypass.

> Tip: Reload the page if the script didn’t trigger — some sites use redirect delays.

---

## 🔍 How It Works

```javascript
// Find clickable targets: #btn, .verify, .timerBtn
// Enable + click them
// Force timers to 0
// Hide ad overlays (.adbox, .wait-msg, etc)
```

The magic happens `onload`, with a slight delay to allow shady DOM elements to load first. It’s clean, async-friendly, and minimal.

---

## 🖼️ Sneak Peek

> Before & After Preview (Click to Zoom) 👇

<p align="center">
  <img src="./screenshot.png" alt="Demo Screenshot" width="600">
</p>

---

## 🧠 Supported Sites (So Far)

- ✅ `just2earn.co`  
- ✅ `gplinks.co`  
- ✅ All other clones using the same timer/verify logic

> Want to add more sites? [Open an issue](https://github.com/MohammadKobirShah/shortlink-bypass/issues) or PR 🔧

---

## 👨‍💻 Author

Made with ☕ and anti-ad rage by:  
**[Mohammad Kobir Shah](https://github.com/MohammadKobirShah)**  
🛠 Open Source Dev • UX Hunter • Script Warrior

---

## 💬 Got Ideas?

Have a site to support, bug to squash, or just wanna say thanks?

- Star this repo ⭐  
- Fork it 🍴  
- Open issues ✍️  
- Let’s make the web faster for everyone 💥

---

## 📜 License

This project is released under the **MIT License**.  
Use it, remix it, distribute it. Just don’t sell it without giving credit 😉

---

> _Built to skip the BS — one redirect at a time._ 🔧🤖🔨
```

---

### 🌟 Bonus Ideas

Want me to:
- Generate a **preview GIF** of the bypass in action?
- Add a **"Buy Me a Coffee"** button?
- Create a **landing page** with script installer + update feed?
- Bundle a `.user.js` with auto-update metadata?

I'm here for the *polish* phase. Let’s make this repo viral-worthy 💯
