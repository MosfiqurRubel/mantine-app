# 🧩 Product Landing UI – React + Mantine v8

A fully responsive product landing UI built with **React**, **Vite**, and **Mantine UI v8**, featuring category-based navigation, carousel sliders, and real API integration.

This project was developed as part of a frontend assignment focusing on:

- Responsive UI implementation
- Clean component architecture
- API-driven rendering
- Professional code organization

---

## 🚀 Features

- Category tabs with horizontal carousel (drag + next / prev)
- Products displayed in **2-row carousel slides (8 items per slide)**
- Fully responsive layout (mobile, tablet, desktop)
- Real backend API integration
- Reusable UI components
- Clean utility-based badge system
- Mantine v8 (latest) only — no custom CSS hacks

---

## 🛠️ Tech Stack

- **React 19**
- **Vite 7**
- **TypeScript**
- **Mantine UI v8**
- **Mantine Carousel (Embla)**
- **Redux Toolkit (RTK Query)**
- **React Router DOM v7**

---

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## 📦 Installation & Setup

### 1️⃣ Clone the repository & Run

```bash
git clone git@github.com:MosfiqurRubel/mantine-app.git
cd mantine-app
npm install
npm run dev       # Start development server
npm run build     # Type-check and build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

Your app will be available at: [http://localhost:5173](http://localhost:5173)

## 🔗 Useful Links

- [React Documentation](https://react.dev/)
- [Redux Toolkit RTK Query](https://redux.js.org/)
- [Mantine UI](https://mantine.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)
- [Netlify](https://netlify.com/)

## 📁 Project Structure

src/

- ├── assets/ # Static images & assets
- ├── components/
- │ └── ui/
- │ ├── ProductCard.tsx
- │ ├── ProductBadge.tsx
- │ ├── Icon.tsx
- │ ├── LoadingState.tsx
- │ └── ErrorState.tsx
- │ └── home/
- │ └── ProductsSection.tsx
- │ └── ShopByCategory.tsx
- ├── app/
- │ └── store.ts # Store
- ├── features/
- │ └── api/
- │ └── apiSlice.ts # RTK Query API layer
- ├── pages/
- │ └── Home.tsx
- ├── utils/
- │ └── badges.ts # Badge resolver helper
- ├── types/
- │ └── index.ts # Shared TypeScript types
- ├── App.tsx
- └── main.tsx
