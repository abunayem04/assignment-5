# 🧱 DevStack - Build Your Ideal Development Stack

A web app where you can explore different technologies like React, Node.js, Docker etc. and pick them to build your own custom development stack.

---

## 🌐 Live Demo & Repository
- **Live:** [https://devstack-builder.vercel.app](https://devstack-builder.vercel.app)
- **GitHub:** [https://github.com/abunayem04/assignment-5](https://github.com/abunayem04/assignment-5)

---

## 🛠️ Technologies I Used
- React + Vite
- TypeScript
- Tailwind CSS
- React-Toastify (for notifications)
- Lucide React icons
- JSON file for data

---

## ✨ Key Features

1. **Add to Stack**  
   Click "Add to Stack" button on any tech card and it goes to the sidebar. The counter updates automatically. If its already added, the button changes to "Added to Stack" and gets disabled.

2. **Toast Notifications**  
   Shows different toasts for different actions - success when you add something, warning if you try to add the same thing twice, info when you remove one, and error toast when you remove all.

3. **Responsive Design**  
   Works on mobile, tablet and desktop. The navbar has a hamburger menu on mobile and the cards stack in different grid layouts based on screen size.

---

## 📚 React Concepts Used (Q&A)

### 1. What is JSX?
JSX lets you write HTML-like syntax inside JavaScript. Its much easier to understand and write UI components this way compared to using React.createElement() manually.

---

### 2. Props vs State - whats the difference?
Props come from parent to child, you cant change them inside the child component. State is like internal data that the component manages itself and can update anytime.

---

### 3. How did you use useState?
I used useState in multiple places:
- `technologies` state to store all the tech data from JSON
- `selectedTechs` to keep track of what the user has added to their stack  
- `isLoading` for showing a loading spinner
- `menuOpen` in Navbar for the mobile menu toggle

---

### 4. Why useEffect for loading data?
Because I need to load the technology data when the component first renders. useEffect with an empty dependency array `[]` runs only once when the component mounts, so its perfect for this.

---

### 5. Why do list items need a key prop?
React needs keys to keep track of which items changed, got added, or got removed in a list. Without keys, React would re-render the entire list every time which is slow and can cause bugs.

---

### 6. What is conditional rendering?
Its when you show or hide something based on a condition. For example in YourStack component, I check if the array is empty - if yes I show "Your stack is empty" message, if not I show the list of selected technologies.

---

### 7. How does parent-child communication work?
Parent passes data down to child through props. If child needs to send something back up, parent passes a callback function as prop and the child calls it. For example, App passes `handleAddToStack` to TechGrid → TechCard, and when user clicks the button, it calls that function.

---

## 🚀 How to Run

```bash
git clone https://github.com/abunayem04/assignment-5.git
cd assignment-5
npm install
npm run dev
```
