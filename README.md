# Markdown to HTML Converter

A lightweight, browser-based Markdown to HTML converter built with vanilla JavaScript.  
The app converts common Markdown syntax into HTML in real time and displays both the raw HTML output and a live preview.

This project was built to deepen my understanding of JavaScript string manipulation, regular expressions, and DOM updates.

---

## 🚀 Live Demo
👉  

---

## 📸 Screenshot
*(Add a screenshot of the app interface here)*

---

## 🛠️ Built With
- HTML5
- CSS3
- JavaScript (ES6)
- Regular Expressions (RegEx)

---

## ✨ Features
- Real-time Markdown to HTML conversion
- Supports:
  - Headings (`#` to `######`)
  - Bold text (`**bold**`, `__bold__`)
  - Italic text (`*italic*`, `_italic_`)
  - Blockquotes (`> quote`)
  - Links (`[text](url)`)
  - Images (`![alt](src)`)
- Displays:
  - Raw HTML output
  - Rendered HTML preview
- Responsive layout for desktop and mobile

---

## 🧠 Key Concepts Practiced
- DOM selection and event handling
- JavaScript arrow functions
- RegEx pattern matching and replacement
- Parsing multiline input
- Separating block-level and inline formatting
- Updating `textContent` vs `innerHTML`

---

## 📂 How It Works (High Level)
1. User enters Markdown into a textarea
2. Input event triggers the `convertMarkdown()` function
3. Markdown is parsed using regular expressions
4. The converted HTML string is:
   - Displayed as raw HTML
   - Rendered in a live preview

---

## ▶️ How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/ConnorWrites/markdown-converter.git
