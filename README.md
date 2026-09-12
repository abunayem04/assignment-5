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

## 📚 React Questions and Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX means JavaScript XML. It allows us to write HTML-like syntax directly inside our JavaScript code. We use it in React because it makes building the UI much easier and more readable compared to writing `React.createElement` over and over again.

---

### 2. What is the difference between props and state?
**Answer:**  
Props are used to pass data down from a parent component to a child, and they are strictly read-only. State, on the other hand, is for data that belongs to the component itself and can change over time. Whenever the state updates, React automatically re-renders the component to show the new data.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
`useState` is a hook that lets us add state variables to functional components. In my project, I used it in `App.tsx` to store the fetched `technologies` array, track the `selectedTechs` for the sidebar, and manage the `isLoading` status. I also used it in the Navbar to handle toggling the mobile menu on and off.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
`useEffect` lets us run side effects—like fetching data—after the component renders. I used it in `App.tsx` to fetch the `technologies.json` data when the app first loads. By passing an empty dependency array `[]`, I made sure the fetch request only happens once when the component mounts, rather than running repeatedly on every render.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
When mapping over arrays to display a list, React needs a unique `key` for each item to keep track of them. This helps React figure out exactly which items were added, removed, or changed. This way, it only updates the modified items instead of re-rendering the whole list, which is much better for performance.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:**  
Conditional rendering is basically using JavaScript logic (like ternary operators) to decide what UI to show. In `YourStack.tsx`, I check if `count === 0`. If that's true, I display the "Your stack is empty" message. Otherwise, it renders the list of selected items and the clear button. I also used it to change the "Add to Stack" button to "Added" when an item is already selected.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
Data goes from parent to child through props (for example, passing `technology={tech}` down to `TechCard`). To send data back up to the parent, the parent passes a function down as a prop. The child component can then call that function and pass the data inside it, like when calling `onAddToStack(tech)` on a button click.

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
