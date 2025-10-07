# OEM Seller Web Application

React frontend for the OEM Seller Platform.

## Features

- Modern React 18 with TypeScript
- Ant Design UI components
- JWT authentication
- Responsive design
- Product catalog with search and filtering
- Shopping cart functionality
- Order management
- User dashboard

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will be available at http://localhost:3000

### Building for Production

```bash
npm run build
```

### Testing

```bash
npm test
```

## Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_API_BASE_URL=http://localhost:5000
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── services/      # API services
├── contexts/      # React contexts
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Technologies Used

- React 18
- TypeScript
- Ant Design
- React Router
- Axios
- Moment.js
