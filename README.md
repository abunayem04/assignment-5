# 🧱 DevStack - Build Your Ideal Development Stack

DevStack is a simple and clean web application where developers can explore different tools and technologies, compare them, and select them into their own custom development stack sidebar.

---

## 🌐 Live Demo & Repository
- **Live Demo:** [https://devstack-builder.vercel.app](https://devstack-builder.vercel.app)
- **GitHub Repository:** [https://github.com/abunayem04/assignment-5](https://github.com/abunayem04/assignment-5)

---

## 🛠️ Technology Used
- React.js (with Vite)
- TypeScript
- Tailwind CSS
- React-Toastify
- Lucide React & DevIcons
- JSON data

---

## ✨ Main Features

1. **Add to Stack & Counter:**  
   Users can click "Add to Stack" on any card to add it to their personal sidebar list. The sidebar shows how many items are selected in real time. Once added, the button disables and shows "Added to Stack".

2. **Toast Alerts & Prevent Duplicate:**  
   If a user tries to add the same technology again, it gives a warning toast. It also shows nice success toast when adding, info toast when removing an item, and toast when clicking "Remove All".

3. **Fully Responsive & Clean UI:**  
   Works smoothly on mobile, tablet, and desktop screens with sticky navbar, mobile hamburger drawer, and clean modern gradient theme.

---

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a way to write HTML-like code inside JavaScript. I used JSX because it makes writing and understanding React UI much easier.

---

### 2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component. State is used to store data that can change inside a component.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets me store and update data in a component. I used it for things like managing the selected technologies, mobile menu, and stack items in this project.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` is used to run some code when something happens in a component, like when it first loads. I used it to fetch and load the technology data from the JSON file when the app started.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the `key` to identify each item in a list. It helps React understand which item changed, was added, or was removed.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something only when a certain condition is true. I used it in `YourStack` to show an empty stack message when there are no selected technologies.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data to a child through props. If the child needs to send something back, the parent can pass a function as a prop, and the child can call that function.

---

## 🚀 How to Run Locally

1. Clone repo:
   ```bash
   git clone https://github.com/abunayem04/assignment-5.git
   cd assignment-5
   ```

2. Install packages:
   ```bash
   npm install
   ```

3. Run dev server:
   ```bash
   npm run dev
   ```

4. Build:
   ```bash
   npm run build
   ```
