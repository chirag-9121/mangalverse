## Live deployment 🚀
[mangalverse.vercel.app](https://mangalverse.vercel.app/)

## About the project
MangalVerse is a web application that uses two NASA APIs, APOD and Mars Rover Photos, and presents the data in an intuitive, user-friendly manner. This project is a monorepo that uses Next.js as its frontend, and the backend is running on Node.js and Express.

## Tech Stack
**Frontend:** React, Next.js, TailwindCSS, ShadCN UI, Magic UI

**Backend:** Node, Express

**Deployment:** Render, Vercel

## Getting Started

1. Get a free NASA API key at https://api.nasa.gov/

2. Clone the repo
    ```bash
    git clone https://github.com/chirag-9121/mangalverse.git
    ```

3. Enable linting by installing [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugins.

4. Install npm dependencies
    - For backend
    ```bash
    cd backend
    npm install
    ```

    - For frontend
    ```bash
    cd frontend
    npm install
    ```

5. Set up environment variables
    - For backend in the `.env` file
    ```bash
    NASA_API_BASE=https://api.nasa.gov
    NASA_API_KEY=your_nasa_api_key_here
    PORT=8000
    ```

    - For frontend in the `.env.local` file
    ```bash
    NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
    ```

6. Run the app
    - For backend
    ```bash
    cd backend
    npm run dev
    ```

    - For frontend
    ```bash
    cd frontend
    npm run dev
    ```

**Open http://localhost:3000 with your browser to see the result.**

## Usage
You can start editing the server by modifying `backend/server.js`.

Make changes to the frontend by modifying `frontend/app/page.js`.

## Screenshots
![image](https://github.com/user-attachments/assets/7b8d7274-c6a8-49f1-bc1d-fc056ee9d68b)
![image](https://github.com/user-attachments/assets/62659b33-6f0d-4493-81b9-b8722c407c56)
<div align="center">
  <img src="https://github.com/user-attachments/assets/f9118df7-367e-4bd9-b5f9-76f212f21a3c" width=400/>
  <img src="https://github.com/user-attachments/assets/7de25a4e-5843-4b6a-a5b9-fb86dbf0c3cc" width=400/>
</div>





## Contact
Chirag Gupta - chirag9121@gmail.com

Project Link: [https://github.com/chirag-9121/mangalverse](https://github.com/chirag-9121/mangalverse)
