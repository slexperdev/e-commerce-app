# ECommerce Mobile App

A modern React Native e-commerce application built with TypeScript, Redux Toolkit, and React Navigation. This app provides a complete shopping experience with product browsing, cart management, and checkout functionality.

## 🚀 Features

### Core Features
- **Product Catalog**: Browse products with image galleries and detailed descriptions
- **Shopping Cart**: Add, remove, and manage items with quantity controls
- **Product Details**: Detailed product view with image gallery and descriptions
- **Checkout Flow**: Complete order process with order confirmation
- **Responsive Design**: Optimized for both iOS and Android devices

### Technical Features
- **State Management**: Redux Toolkit for global state management
- **API Integration**: RTK Query for efficient data fetching and caching
- **Navigation**: React Navigation with stack navigator
- **TypeScript**: Full type safety throughout the application
- **Custom Theming**: Consistent design system with custom colors and fonts
- **Error Handling**: Comprehensive error states and loading indicators
- **Pull-to-Refresh**: Refresh product data with pull gesture

## 📱 Screenshots

The app includes the following screens:
- **Product List**: Grid view of products with search and filtering
- **Product Details**: Individual product view with image gallery
- **Shopping Cart**: Cart management with quantity controls
- **Checkout**: Order processing and payment
- **Order Confirmation**: Order success confirmation

## 🛠️ Tech Stack

- **React Native**: 0.81.4
- **React**: 19.1.0
- **TypeScript**: 5.8.3
- **Redux Toolkit**: 2.9.0
- **React Navigation**: 7.1.17
- **React Native Safe Area Context**: 5.6.1
- **Lucide React Native**: 0.544.0 (Icons)
- **Lottie React Native**: 7.3.4 (Animations)

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: >= 20.0.0
- **npm** or **yarn**
- **React Native CLI**: Latest version
- **Android Studio**: For Android development
- **Xcode**: For iOS development (macOS only)
- **Java Development Kit (JDK)**: 11 or higher
- **CocoaPods**: For iOS dependencies

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ECommerceApp
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. iOS Setup (macOS only)

```bash
cd ios
pod install
cd ..
```

### 4. Android Setup

Ensure you have Android Studio installed and an Android emulator running or a physical device connected.

### 5. Start Metro Bundler

```bash
npm start
# or
yarn start
```

### 6. Run the Application

#### For Android:
```bash
npm run android
# or
yarn android
```

#### For iOS:
```bash
npm run ios
# or
yarn ios
```

## 📁 Project Structure

```
ECommerceApp/
├── android/                 # Android-specific code
├── ios/                     # iOS-specific code
├── src/
│   ├── app/
│   │   └── store.ts         # Redux store configuration
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── CartCard.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── CartButton.tsx
│   │   │   └── ProductSkelton.tsx
│   │   ├── ThemedButton.tsx
│   │   ├── ThemedInput.tsx
│   │   └── ThemedText.tsx
│   ├── constants/
│   │   └── index.ts         # App constants
│   ├── features/
│   │   ├── cart.ts          # Cart Redux slice
│   │   └── cartSelector.ts  # Cart selectors
│   ├── navigation/
│   │   └── AppNavigator.tsx # Navigation configuration
│   ├── screens/
│   │   ├── ProductListScreen.tsx
│   │   ├── ProductDetailsScreen.tsx
│   │   ├── CartScreen.tsx
│   │   ├── CheckoutScreen.tsx
│   │   └── OrderConfirmationScreen.tsx
│   ├── services/
│   │   ├── baseQuery.ts     # RTK Query base configuration
│   │   └── productService.ts # Product API service
│   ├── theme/
│   │   ├── colors.ts        # Color palette
│   │   └── fonts.ts         # Font configuration
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   └── utils/               # Utility functions
├── assets/
│   ├── fonts/               # Custom fonts (Montserrat)
│   └── lotties/             # Lottie animation files
├── App.tsx                  # Main app component
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
The app uses a dark theme with the following color palette:
- **Background**: #181818
- **Text**: #FFFFFF
- **Primary**: #FF660E (Orange)
- **Secondary**: #47FFB8 (Green)
- **Button**: #282828
- **Error**: #b10900ff
- **Border**: #3A3A3C

### Typography
The app uses Montserrat font family with various weights:
- Regular, Medium, SemiBold, Bold
- Font sizes from 12px to 72px

### Components
- **ThemedText**: Consistent text styling with predefined types
- **ThemedButton**: Reusable button component
- **ThemedInput**: Styled input component
- **ProductCard**: Product display card
- **CartCard**: Cart item display card

## 🔧 Configuration

### Babel Configuration
The project uses Babel with module resolver for path aliases:
- `@/` maps to `src/` directory

### Metro Configuration
Metro bundler is configured for React Native 0.81.4 with asset handling.

### TypeScript Configuration
Strict TypeScript configuration with path mapping support.

## 📱 API Integration

The app integrates with a REST API for product data:

### Endpoints
- `GET /v1/products` - Fetch products list
- `GET /v1/products?offset=0&limit=10` - Paginated products

### Data Flow
1. **RTK Query** handles API calls and caching
2. **Redux Store** manages global state
3. **Components** consume data through selectors

## 🧪 Testing

Run tests using Jest:

```bash
npm test
# or
yarn test
```

## 📦 Building for Production

### Android
```bash
cd android
./gradlew assembleRelease
```

### iOS
1. Open `ios/ECommerceApp.xcworkspace` in Xcode
2. Select "Any iOS Device" as target
3. Product → Archive

## 🐛 Known Issues

1. **Font Loading**: Some Montserrat font variants may not load properly on certain devices
2. **Image Optimization**: Product images could benefit from lazy loading and caching
3. **Error Boundaries**: Missing error boundaries for better error handling
4. **Offline Support**: No offline data persistence implemented
5. **Performance**: Large product lists may benefit from virtualization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/slexperdev)

## 🙏 Acknowledgments

- React Native community for excellent documentation
- Redux Toolkit team for the amazing state management solution
- Lucide for the beautiful icon set
- Montserrat font family for typography


**Happy Shopping! 🛍️**