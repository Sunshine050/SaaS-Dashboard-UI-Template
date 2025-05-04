# SaaS Dashboard UI Template

A modern, professional SaaS Dashboard UI template built with React, TypeScript, and Tailwind CSS.


## Features

- **Fully Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI Components**: Button, Card, Input, Select, Modal, Table, and more
- **Dashboard Analytics**: Charts, graphs, and data visualization components
- **Dark/Light Mode**: Built-in theme switching with localStorage persistence
- **Multiple Pages**: Dashboard, Profile, Settings, Billing, and more
- **Smooth Animations**: Motion effects using Framer Motion
- **Data Visualization**: Beautiful charts and statistics using Recharts
- **Production Ready**: Well-structured code with TypeScript and linting configurations

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide Icons
- React Router

## Project Structure

```
/src
  /components
    /ui                  # Base UI components (Button, Card, Input, etc.)
    /dashboard           # Dashboard-specific components (StatCard, Charts, etc.)
  /context
    ThemeContext.tsx     # Dark/light mode context provider
  /layouts
    DashboardLayout.tsx  # Main layout with sidebar and navbar
    Sidebar.tsx          # App sidebar navigation
    Navbar.tsx           # Top navigation bar
  /pages
    DashboardPage.tsx    # Main dashboard view
    ProfilePage.tsx      # User profile page
    SettingsPage.tsx     # User and app settings
    BillingPage.tsx      # Subscription management and billing
    ComponentsPage.tsx   # UI component showcase
    NotFoundPage.tsx     # 404 page
    LandingPage.tsx      # Landing/preview page
  /data
    mockData.ts          # Mock data for demo purposes
  /App.tsx               # Main app component with routing
  /main.tsx              # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/sunshine050/saas-dashboard-template.git
   cd saas-dashboard-template
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Building for Production

1. Create a production build
   ```
   npm run build
   # or
   yarn build
   ```

2. The build will be available in the `dist` directory

## Customization

### Themes

The template supports dark and light modes. You can customize the colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: { /* customize primary color palette */ },
      secondary: { /* customize secondary color palette */ },
      // Add more colors as needed
    }
  }
}
```

### Adding New Pages

1. Create a new page component in the `/pages` directory
2. Add the route in `App.tsx`:
   ```jsx
   <Route path="/your-page" element={<YourPage />} />
   ```

### Adding New Components

Create new components in the appropriate directory:
- UI components in `/components/ui`
- Dashboard-specific components in `/components/dashboard`

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)
- [Pexels](https://www.pexels.com/) for the demo images