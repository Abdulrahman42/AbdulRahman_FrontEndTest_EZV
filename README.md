This is a modern Todo List application built with Next.js, Redux Toolkit Query (RTK Query), and TypeScript. It features server-side rendering with Incremental Static Regeneration (ISR), pagination, and a responsive UI. The app connects to the JSONPlaceholder API for demonstration purposes.

https://abdul-rahman-front-end-test-ezv.vercel.app/

Features
🚀 Next.js App Router - Modern routing and data fetching

🔄 Incremental Static Regeneration - Automatic revalidation every 30 seconds

📊 RTK Query - Efficient data fetching and caching

📱 Responsive Design - Works on all device sizes

📝 Todo Management - View, add, and paginate todos

🔢 Pagination - 10 items per page with navigation

🔒 Type Safety - Full TypeScript integration

⚡ Optimized Performance - Static generation with client-side hydration

## Technologies Used
- [Next.js (v15)](https://nextjs.org/) - React framework <br>
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management <br>
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Data fetching <br>
- [TypeScript](https://www.typescriptlang.org/) - Static typing <br>
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS <br>
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Mock API <br>

## Getting Started
### Prerequisites
- Node.js v18 or higher <br>
- npm or yarn

### Installation
1. Clone the repository:

```bash
git clone https://github.com/Abdulrahman42/AbdulRahman_FrontEndTest_EZV.git
cd AbdulRahman_FrontEndTest_EZV
```
2. Install dependencies:

```bash
npm install
# or
yarn install
```
3. Start the development server:

```bash
npm run dev
# or
yarn dev
```
4. Open your browser at http://localhost:3000

## Project Structure

```bash
.
├── app/                    # App router directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── providers.tsx       # Redux provider
├── components/             # Reusable components
│   ├── TodoForm.tsx        # Todo creation form
│   ├── TodoList.tsx        # Todo display component
│   └── TodoPagination.tsx  # Pagination controls
├── store/                  # Redux store configuration
│   ├── api.ts              # RTK Query API definition
│   └── store.ts            # Redux store setup
├── types/                  # TypeScript definitions
│   └── todo.d.ts           # Todo interface
├── public/                 # Static assets
├── styles/                 # Global styles
│   └── globals.css
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Deployment
### Deploy to Vercel
The easiest way to deploy this application is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Go to Vercel Dashboard
3. Import your repository
4. Vercel will automatically detect it's a Next.js app and configure settings
5. Click "Deploy" - your app will be live in minutes!

Created with ❤️ by Abdul Rahman
