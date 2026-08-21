# 🌿 Happy Farm

A modern and responsive **organic farm e-commerce website** built with **Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and React Hook Form**.

**Happy Farm** is a responsive web application designed to provide a clean and user-friendly experience for discovering organic products, managing a shopping cart, exploring farm-related content, and managing website data through an admin dashboard.

## 🚀 Live Demo

**Live Website:**\
[Live Preview](https://abdelrahman-happy-farm.vercel.app)

## 📂 Repository

**GitHub:**\
[GitHub Repository](https://github.com/Abdelrahmanmohamed78/abdelrahman-happy-farm)

# 

## 📸 Screenshots

### 🏠 Home Page

<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/da0eef2d-6bed-4600-8d2d-d915c30f15ee" />

### 🛍️ Products Page

<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/8d344307-b403-4509-bad5-88bb0ab5a55c" />

### 📦 Product Details

<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/48083568-8658-4060-8235-c9bb38dd8f78" />

### 🛒 Shopping Cart

<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/ca600e67-eef8-48e1-8ce5-8d8922b1d13e" />

### 📝 Blog Page

<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/f0c07cb7-1346-49fb-af65-9a164260b9e9" />

### 📊 Admin Dashboard

<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/1164c390-b501-428f-b94a-fcd581a23455" />
<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/b7720327-22bb-4b4e-89bf-9ad0968a84a4" />
<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/08b5a989-180d-4e77-9d29-3e7b65fedd0d" />
<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/7e971ccd-a641-4b77-8a28-d2a39396f81e" />

### 📱 Responsive Design

<img width="535" height="16384" alt="Image" src="https://github.com/user-attachments/assets/ab0f2177-7f55-4425-8a04-3e7ad952efd5" />

# 

## ✨ Main Features

### 🥬 Product Management

- Display organic products.
- Product categories.
- Individual product details.
- Product ratings.
- Product pricing and detailed information.
- Dynamic product routes.
- Add, edit, and remove products through the admin dashboard.

### 🛍️ Shopping Cart

- Add products to the cart.
- Remove products.
- Update product quantities.
- Calculate the total price.

### 📝 Blog

- Browse farm-related blog posts.
- Dynamic blog details pages.
- Add and edit blog content.
- Blog categories.
- Manage blog dates through the admin dashboard.

### 📊 Admin Dashboard

A dedicated dashboard for managing the application's content and data.

**Admin features include:**

- 📦 Manage products.
- ➕ Add new products.
- ✏️ Edit existing products.
- 🗑️ Delete products.
- 📝 Manage blog posts.
- ➕ Add new blogs.
- ✏️ Edit existing blogs.
- 🗑️ Delete blogs.
- 📱 Responsive dashboard interface.

### 📋 Form Validation & Handling

The project uses **React Hook Form** together with **Zod** for structured form validation.

- Required field validation.
- Custom validation messages.
- Number validation.
- Phone validation.
- Date validation.

### 🎨 UI & Responsive Design

- Fully responsive design.
- Mobile, tablet, and desktop layouts.
- Modern organic/farm-inspired interface.
- Tailwind CSS utility classes.
- Interactive hover and transition effects.

### ⚡ State Management

- **Redux Toolkit** for global state management.
- Centralized product, blog, cart, and UI state.

# 

## 🛠️ Technologies Used

| Technology          | Purpose                |
| ------------------- | ---------------------- |
| **Next.js**         | React framework        |
| **TypeScript**      | Type safety            |
| **React**           | UI development         |
| **Tailwind CSS**    | Styling                |
| **Redux Toolkit**   | State management       |
| **React Hook Form** | Form management        |
| **Zod**             | Form/schema validation |
| **React Hot Toast** | Notifications          |
| **React Icons**     | Icons                  |

# 

## 📁 Project Structure

```text
organic-farm/
├── public/
│   └── images/
│
├── src/
│   └── app/
│       ├── about-us/
│       ├── blogs/
│       ├── products/
│       ├── cart/
│       ├── ...
│       │
│       ├── RTK/
│       │   ├── farmSlice.ts
│       │   └── store.ts
│       │
│       ├── components/
│       ├── hooks/
│       ├── types/
│       └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

# 

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Abdelrahmanmohamed78/abdelrahman-happy-farm.git
```

### 2. Navigate to the project

```bash
cd abdelrahman-happy-farm
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

# 

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Runs the production build.

### Lint

```bash
npm run lint
```

Checks the project for linting issues.

# 

## 🧠 State Management

The project uses **Redux Toolkit** to manage global application state.

Example store structure:

```text
Redux Store
│
└── farm
    ├── products
    ├── blogs
    ├── cart
    ├── ratings
    └── UI state
```

**Redux Persist** is used to preserve selected Redux state after refreshing the page.

# 

## 📝 Form Validation

Forms are handled using:

```text
React Hook Form
        ↓
     Zod
        ↓
   zodResolver
```

This provides type-safe and reusable form validation with custom error messages.

Example:

```tsx
const form = useForm<FormData>({
  resolver: zodResolver(schema),
});
```

# 

## 📱 Responsive Design

The website is designed to work across different screen sizes:

- 📱 Mobile
- 📱 Tablet
- 💻 Laptop
- 🖥️ Desktop

Tailwind CSS responsive utilities are used to create adaptive layouts.

# 

## 🚀 Deployment

The project can be deployed easily using **Vercel**.

Recommended deployment flow:

```text
GitHub
   ↓
Vercel
   ↓
Next.js Build
   ↓
Production Website
```

# 

## 👨‍💻 Author

**Abdelrahman Mohamed**

Frontend Developer specializing in modern React and Next.js applications.

### Technologies

```text
React.js
Next.js
TypeScript
JavaScript
Tailwind CSS
Redux Toolkit
React Hook Form
Zod
```

# 

## ⭐ Show Your Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.
