import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screen components
import ProductListScreen from '@/screens/ProductListScreen';
import ProductDetailsScreen from '@/screens/ProductDetailsScreen';
import CartScreen from '@/screens/CartScreen';
import CheckoutScreen from '@/screens/CheckoutScreen';
import OrderConfirmationScreen from '@/screens/OrderConfirmationScreen';

// Creating a stack navigator
const Stack = createStackNavigator();

const headerOptions = {
  headerShown: false,
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductsListScreen" screenOptions={headerOptions}>
        <Stack.Screen name="ProductsListScreen" component={ProductListScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name="OrderConfirmationScreen" component={OrderConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}