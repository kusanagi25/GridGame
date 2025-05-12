# 🧪 Testing Guide – Grid Game (React)

This guide explains how to run and write tests for the Grid Game built in React using **Jest** and **React Testing Library**.

---

## ✅ What We're Testing

| Test Type      | Purpose                                                             |
|----------------|---------------------------------------------------------------------|
| Unit Test      | Validate tile effect logic (e.g., Lava reduces 50 health)           |
| UI Test        | Ensure health and moves render properly                             |
| Behavior Test  | Simulate arrow key input to verify position and state updates       |

---

## 🧰 Tools Used

- **Jest** – Test runner and assertions
- **React Testing Library** – For interacting with and querying the DOM
- **Create React App** – Comes pre-configured with both libraries

---

## 🚀 How to Run Tests

```bash
npm test