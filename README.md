<img src="https://socialify.git.ci/juniorSarh/React-ts-link-vault/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="React-ts-link-vault" width="640" height="320" />

# 🔗 Link Vault

A lightweight React + TypeScript app for storing, tagging, and searching your favorite links — all stored locally in your browser (no backend required). Built with **Vite** for blazing-fast development and modern builds.

---

## ✨ Features

- Add links with **title, url, description, and tags**
- **Search** links from the top navigation bar
- **Edit & Delete** saved links inline
- Data persistence via **LocalStorage**
- **React 19 + TypeScript 5** for safety and speed
- ESLint config with React hooks & refresh plugins

---
# Steps Taken to Build the React App
* Set up React Project
* npm create vite@latest
* Project name React-ts-link-vault
* cd React-ts-link-vault
* npm install
* npm run dev
---
# How to clone and run the Project
1. git clone https://github.com/juniorSarh/React-ts-link-vault
2. cd Link-Vault
3. npm install
4. npm run dev


## 🚀 Getting Started

### Prerequisites
- Node.js **18+ (LTS)** or **20+**
- npm, yarn, or pnpm

### Installation & Usage

```bash
# install dependencies
npm install

# start dev server
npm run dev

# type-check + build for production
npm run build

# preview production build
npm run preview

# run linting
npm run lint
```

The dev server will usually run at: [http://localhost:5173](http://localhost:5173)

---

## 🧱 Project Structure

```plaintext
src/
  components/
    NavBar.tsx
    MainComponent.tsx
    Footer.tsx
    LinkForm.tsx
    LinkList.tsx
  types/
    link.ts
  utils/
    storage.ts
  App.tsx
  App.css
  main.tsx
index.html
```

---

## 🧠 State Flow

- **App.tsx**  
  - Holds search state (`searchInput`, `query`)  
  - Passes committed query to `MainComponent`

- **NavBar**  
  - Controlled search input  
  - Calls back to `App` when user triggers search

- **MainComponent**  
  - Loads and filters links from LocalStorage  
  - Renders `LinkList` and `LinkForm`

- **LinkForm**  
  - Add or update a link  
  - Saves back to LocalStorage

- **LinkList**  
  - Displays stored links  
  - Provides **Edit** and **Delete** actions

---

## 🗂️ Data Model

```ts
export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
  tags?: string[];
  createdAt: number;
  updatedAt?: number;
};
```

- **Storage Key**: `link-vault:links`  
- Stored as an array of `LinkItem`

---

## 🧰 Utility Example

`utils/storage.ts`:

```ts
const KEY = "link-vault:links";

export function loadLinks() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveLinks(links: unknown) {
  localStorage.setItem(KEY, JSON.stringify(links));
}
```

---

## 📦 Deployment

Any static host works (Vercel, Netlify, GitHub Pages, etc.):  

```bash
npm run build
# deploy the /dist folder
```

---

## 🛠️ Development Notes

- Lint before commits:  
  ```bash
  npm run lint
  ```
- Suggested commit style:  
  - `feat: add edit flow to LinkForm`  
  - `fix: persist tags array correctly`  
  - `chore: upgrade vite`

---

## 🔮 Roadmap

- Grouping by tags/folders  
- Import/export JSON  
- Cloud sync option  
- Sorting and analytics (e.g., most clicked)

---

## 📄 License

MIT (adjust if needed)

---

## 🙌 Credits

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- You, for building **Link Vault** 🔗

