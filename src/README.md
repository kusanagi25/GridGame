# 🧩 Grid Game – React Project

A fun 2D grid-based movement game built with **React**. Your objective: navigate from point A to point B while managing your health and move count!

---

## 🎮 Gameplay

- The player starts at the top-left corner (0, 0) and must reach the bottom-right corner (49, 49).
- Each grid cell has one of the following types: `Blank`, `Speeder`, `Lava`, or `Mud`.
- You begin with **200 health** and **450 moves**.
- Use **arrow keys** to move the player around the grid.

---

### 🧱 Tile Types & Effects

| Tile     | Health Impact | Move Cost |
|----------|----------------|------------|
| Blank    | +0             | -1         |
| Speeder  | -5             | 0          |
| Lava     | -50            | -10        |
| Mud      | -10            | -5         |

---

## 💻 Technologies Used

- React (Functional Components + Hooks)
- CSS (Grid layout and styling)
- JavaScript (Game logic and input handling)

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
npx create-react-app grid-game
cd grid-game


## 🏃‍♂️ Running the Application

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/grid-game.git
cd grid-game

### Install Dependencies 

npm install

### Start the App

npm start