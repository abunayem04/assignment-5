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
JSX stands for JavaScript XML. It basically lets us write HTML elements directly inside our JavaScript/React code. We use it because it is super easy to read and write our website UI, instead of creating HTML elements using complex `React.createElement()` functions.

---

### 2. What is the difference between props and state?
**Answer:**  
Props are used to send data from a parent component down to a child component, and the child component can only read it, not change it. State is the component's own internal data that can change when a user clicks or does something. Whenever state changes, React automatically re-renders that component to show the updated data on the screen.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
`useState` is a React hook that helps us create and update state variables inside our components. In this project, I used `useState` in `App.tsx` for keeping track of all technologies (`technologies`), the selected items in the sidebar (`selectedTechs`), and the loading state (`isLoading`). I also used it in `Navbar.tsx` for opening and closing the mobile menu (`mobileMenuOpen`).

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
`useEffect` is used to handle side tasks like fetching data from an API or file after the component loads. I used `useEffect` in `App.tsx` with an empty array `[]` so that when the website first opens, it fetches the `technologies.json` file just once and doesn't get stuck in an infinite loading loop.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
When we show a list using `.map()`, React needs a unique `key` on each item so it knows exactly which specific item was added, removed, or changed. This helps React update only that one item instead of re-rendering the whole entire list, which keeps the website fast.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:**  
Conditional rendering means showing or hiding different UI parts based on whether a condition is true or false. I used it in `YourStack.tsx` where if the stack is empty (`count === 0`), it shows the 'Your stack is empty' box, but if items are selected, it shows the list of technologies and the 'Remove All' button. I also used it on the card buttons to switch between 'Add to Stack' and 'Added to Stack'.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
To pass data from parent to child, we simply send it through **props** (for example: `<TechCard technology={tech} />`). To send something back from child to parent, the parent passes a function to the child as a prop, and when the user clicks a button, the child calls that function with the data (for example: `onAddToStack(tech)`).

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
