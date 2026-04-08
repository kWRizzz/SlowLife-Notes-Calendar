# 🌙 SlowLife-Notes-Calendar


A beautifully crafted **React + Tailwind CSS** productivity app that blends **calendar, weather, and date-based notes** into one smooth, aesthetic experience.

Designed with a modern SaaS feel, smooth animations, and performance-optimized interactions.

---

## 🚀 Live Features

### 📅 Advanced Calendar

* Monthly navigation (past & future)
* Accurate date alignment (real Date logic)
* Range selection (start → end)
* Today highlight
* Notes indicator (**"N" badge**) on dates
* Fully responsive layout

---

### 📝 Date-Based Notes System

* Add, edit, delete notes
* Notes are stored **per specific date**
* Click any date → related notes instantly appear
* Smooth animations using Framer Motion

---

### 🌦️ Weather Integration

* Displays weather based on selected date
* Supports **past weather data**
* Uses **Open-Meteo API (no API key required)**
* Dynamic weather icons:

  * ☀️ Sunny
  * ☁️ Cloudy
  * 🌧️ Rainy

---

### 🎨 Dynamic Theme System

* 🌑 Dark Theme (default)
* 🌈 Gradient Glass Theme
* Floating animated theme toggle button
* Entire UI updates:

  * Calendar
  * Notes
  * Hero section
  * Indicators

---

### ✨ Interactive Background (Performance Optimized)

* Mouse-follow glow effect
* Uses **requestAnimationFrame + useRef (no lag)**
* Instant response (no React re-render bottleneck)
* Smooth GPU-accelerated animation

---

### 📱 Fully Responsive

* Desktop → Sidebar + Main layout
* Mobile → Calendar stacked above Notes
* Adaptive spacing, fonts, and UI

---

## ⚡ Performance Highlights

* ❌ No heavy re-renders on mouse movement
* ✅ Direct DOM updates for animation
* ✅ requestAnimationFrame optimization
* ✅ Lightweight & smooth UI

---

## 🛠️ Tech Stack

* **React.js**
* **Tailwind CSS**
* **Framer Motion**
* **React Icons**
* **Open-Meteo API (fetch)**

---

## 📂 Project Structure

```bash
src/
│── Components/
│   ├── Hero.jsx
│   ├── Calendar.jsx
│   ├── SideBar.jsx
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation

```bash
git clone https://github.com/kWRizzz/SlowLife-Notes-Calendar
cd client
npm install
npm run dev
```

---

## 🧠 Core Concepts Used

* State Lifting (App → Calendar → Sidebar → Hero)
* Date-based data structure
* Dynamic UI rendering
* API integration using `fetch`
* Animation with Framer Motion
* Performance optimization (no lag animations)

---

## 💡 Future Enhancements

* 💾 LocalStorage / Database persistence
* 📊 Activity heatmap (GitHub-style)
* 🧠 AI-powered note suggestions
* 🔔 Reminder system
* 📍 Auto-detect location weather
* 🖱️ Drag-select date range

---

## 📸 UI Highlights

* Gradient backgrounds
* Glassmorphism effects
* Floating UI interactions
* Smooth transitions

---

## 🙌 Author

**Krishna Bhargava**

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🚀 Build on top of it

---

> Built with focus, aesthetics, and a little bit of obsession 😎
