Instructions
    
    1. Clone: 
    git clone https://github.com/s-murtaza/ai-game-agents.git

    2. Dependancies: 
    npm install

    3. Run: 
    npm run dev 

🎮 Gaming Zone Overview
A fun React-based game hub with two intelligent games:

🧩 Puzzle Agent – Uses A* (A-Star) search to solve sliding puzzles.
Multi-Level Gameplay
Progress through five levels with increasing difficulty:

Level 1 → 3×3
Level 2 → 4×4
Level 3 → 5×5
Smart Shuffle
Each grid is randomized but always solvable.

Auto-Solver with A*
Visualize the A* search algorithm in action solving any board state.

Timer & Best Score Tracker
See how fast you can complete each level — best scores are saved in localStorage.

Responsive, Minimal UI
Designed with a clean and intuitive layout for smooth interaction.

❌ Tic-Tac-Toe – Uses the Minimax algorithm for unbeatable AI.
Multi difficulty computer levels
Multi player gameplay

🧠 Technologies Used
React for UI

React Router for navigation

Custom hooks & context for state management

Web Workers for solving puzzles asynchronously

A* Algorithm with heuristics like Manhattan, Hamming, etc.

Minimax Algorithm with pruning for Tic-Tac-Toe AI

CSS Animations and Arcade-style UI
