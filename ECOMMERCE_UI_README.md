# 🛍️ Complete eCommerce Admin Dashboard UI

A fully functional, production-ready eCommerce admin dashboard built with React, TypeScript, Tailwind CSS, and Recharts.

## ✨ Features

### 📊 Dashboard

- Real-time analytics and KPI metrics
- Sales overview charts (Area, Bar, Line)
- Customer trend tracking
- Recent orders table
- Multiple chart visualizations using Recharts

### 📦 Products Management

- Complete product inventory listing
- Search and filter functionality
- Product status management (Active/Inactive)
- Stock level indicators with color-coded badges
- Rating display
- Quick actions (View, Edit, Delete)
- Pagination support
- Product detail modal

### 🛒 Orders Management

- Order tracking and status management
- Customer order history
- Payment status indicators
- Multiple order statuses (Pending, Processing, Shipped, Delivered, Cancelled)
- Order statistics cards
- Export functionality
- Order detail modal with comprehensive information

### 👥 Customers Management

- Complete customer database
- Customer profile cards with contact information
- Total spending and order history
- Customer status management (Active/Inactive)
- Contact details (Email, Phone, Location)
- Join date tracking
- Quick actions for managing customers

### 📑 Categories Management

- Category listing with card layout
- Product count per category
- Category descriptions
- Image emoji displays for visual identification
- Search functionality
- Pagination support
- Category detail modal

### 📦 Inventory Management

- Real-time stock level tracking
- Low stock alerts with visual warnings
- Out-of-stock tracking
- Warehouse location management
- Reorder level settings
- SKU management
- Stock status indicators (In Stock, Low Stock, Out of Stock)
- Alert notifications for items needing attention

### 📊 Analytics & Reports

- Comprehensive business metrics
- Sales and revenue charts
- Sales by category (Pie Chart)
- Customer trend analysis
- Top products listing
- Top customers tracking
- Multiple time range options (7 days, 30 days, 3 months, 6 months, 1 year)
- Revenue growth indicators

### ⭐ Reviews Management

- Customer review moderation
- Star rating display
- Review approval/rejection workflow
- Review status management (Approved, Pending, Rejected)
- Comment display and management
- Product and customer information
- Quick moderation actions

### 🎟️ Coupons & Discounts

- Coupon code management
- Discount type support (Percentage, Fixed Amount)
- Usage tracking and redemption count
- Expiration date management
- Status management (Active, Expired, Inactive)
- Copy coupon code functionality
- Coupon detail modal
- Search functionality

### ⚙️ Settings

- Store configuration
- Security settings (Password management)
- Notification preferences
- API key management
- Integration status dashboard
- Currency and timezone settings
- Tax rate configuration
- Email and SMS notification preferences

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Table.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── SearchBar.tsx
│   │   └── index.ts
│   └── ui/                     # Layout components
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       ├── Dashboard.tsx
│       └── Footer.tsx
├── features/
│   ├── analytics/              # Analytics & Reports
│   │   └── Analytics.tsx
│   ├── categories/             # Categories management
│   │   └── Categories.tsx
│   ├── coupons/                # Coupons & Discounts
│   │   └── Coupons.tsx
│   ├── customers/              # Customers management
│   │   └── Customers.tsx
│   ├── inventory/              # Inventory management
│   │   └── Inventory.tsx
│   ├── orders/                 # Orders management
│   │   └── Orders.tsx
│   ├── products/               # Products management
│   │   └── Products.tsx
│   ├── reviews/                # Reviews management
│   │   └── Reviews.tsx
│   └── settings/               # Settings
│       └── Settings.tsx
├── types/
│   └── index.ts               # TypeScript type definitions
├── App.tsx                    # Main app component with routing
├── App.css
├── main.tsx
├── index.css
└── vite.config.ts
```

## 🎨 UI Components

### Common Components

All reusable components are located in `src/components/common/`:

- **Button**: Customizable button with variants (primary, secondary, danger, success) and sizes
- **Badge**: Status indicator badges with multiple variants
- **Card**: Reusable card layout with CardHeader, CardBody, CardFooter
- **Table**: Generic table component with pagination support
- **Input**: Form input with label, error handling, and icon support
- **Modal**: Modal dialog for confirmations and details
- **SearchBar**: Search input with clear functionality

### Layout Components

- **Header**: Top navigation with search, notifications, user profile
- **Sidebar**: Navigation menu with active page indicator
- **Dashboard**: Main dashboard with charts and overview

## 📱 Responsive Design

- Mobile-first responsive design
- Grid layouts that adapt from 1 to 4 columns based on screen size
- Collapsible sidebar on smaller screens
- Touch-friendly buttons and controls
- Optimized for tablets and desktops

## 🎯 Key Features

### 1. **Navigation**

- Click-based navigation between pages
- Active page highlighting in sidebar
- Smooth page transitions

### 2. **Data Management**

- CRUD operations (Create, Read, Update, Delete)
- Search and filter functionality
- Pagination for large datasets
- Mock data for demonstration

### 3. **User Feedback**

- Status badges with color coding
- Success/error messages
- Loading states
- Empty state messages

### 4. **Charts & Visualizations**

- Area charts for trends
- Bar charts for comparisons
- Line charts for progression
- Pie charts for distribution
- All powered by Recharts

## 🛠️ Technologies Used

- **React 19.2.7**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS 4.3.1**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Icons**: Additional icons
- **Recharts 3.9.2**: Chart library
- **Vite 8.1.0**: Build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd "React js Work and Practice/Dashboard"
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 💡 Usage Guide

### Navigation

Click on any menu item in the sidebar to navigate to different sections:

- **Dashboard**: View overall business metrics
- **Products**: Manage your product inventory
- **Categories**: Organize products by categories
- **Orders**: Track and manage customer orders
- **Customers**: View and manage customer information
- **Inventory**: Monitor stock levels
- **Analytics**: View detailed business reports
- **Reviews**: Moderate customer reviews
- **Coupons**: Create and manage discount codes
- **Settings**: Configure store preferences

### Search & Filter

Most pages include search functionality. Simply type in the search box to filter results in real-time.

### Pagination

Large datasets are paginated. Use the Previous/Next buttons at the bottom of tables to navigate between pages.

### Modals

Click on action buttons (Eye, Edit, etc.) to open detail modals with more information about items.

## 📊 Mock Data

The dashboard includes realistic mock data for demonstration purposes:

- 4+ sample products
- 4+ sample orders
- 4+ sample customers
- 4+ sample categories
- 5+ sample inventory items
- 3+ sample reviews
- 4+ sample coupons

All data is stored in component state and can be easily replaced with API calls.

## 🔧 Customization

### Changing Colors

Modify Tailwind CSS classes throughout the components. Key color variables:

- Primary: `blue-600`
- Success: `green-600`
- Warning: `yellow-600` / `orange-600`
- Danger: `red-600`

### Adding New Pages

1. Create a new component in `src/features/[feature]/`
2. Add the import to `App.tsx`
3. Add a case to the switch statement in `renderPage()`
4. Add a link to the `Sidebar` component
5. Update the `PageType` type definition

### API Integration

Replace mock data with API calls:

```typescript
const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  const response = await fetch("/api/products");
  const data = await response.json();
  setProducts(data);
};
```

## 📈 Performance Considerations

- Pagination implemented for large datasets
- Memoization ready for components
- Optimized re-renders with proper state management
- Icon libraries are tree-shakable
- CSS is optimized with Tailwind's production build

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
npm run dev -- --port 3000
```

### Build Errors

Ensure all dependencies are installed:

```bash
npm install
npm run build
```

### TypeScript Errors

The project uses strict TypeScript. Make sure all types are properly defined.

## 📝 Notes

- This is a frontend-only implementation with mock data
- All state is managed locally using React hooks
- No backend or database integration in this version
- Styles are built with Tailwind CSS utility classes
- All icons are from Lucide React and React Icons

## 🎓 Learning Resources

This project demonstrates:

- React functional components and hooks
- TypeScript type definitions
- Tailwind CSS responsive design
- Component composition and reusability
- State management with React hooks
- Responsive layout patterns
- Modal and form patterns
- Data table implementation
- Chart integration

## 📄 License

This project is provided as-is for educational and development purposes.

## 🤝 Support

For questions or issues, refer to the individual component files for implementation details.

---

**Built with ❤️ for modern eCommerce management**
