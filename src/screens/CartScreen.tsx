import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon, Handbag, Home } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from "@/theme/colors";
import { ThemedText } from '@/components/ThemedText';
import { CartCard } from '@/components/ui/CartCard';
import { ThemedButton } from '@/components/ThemedButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectCartItems, selectCartSubtotal } from '@/features/cartSelector';
import { removeFromCart, updateQuantity } from '@/features/cart';
import { ID } from '@/types';
import { useCallback } from 'react';
import { discount } from '@/constants';

export default function CartScreen({navigation}: any) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItemsSubtotal = useSelector(selectCartSubtotal);
  const cartItemsCount = useSelector(selectCartCount);

  const handleRemoveCartItem = (productId: ID) =>{
    dispatch(removeFromCart({productId}));
  }

  const handleIncrement = useCallback(
    (productId: ID) => {
      const item = cartItems.find((it) => String(it.productId) === String(productId));
      if (item) dispatch(updateQuantity({ productId, quantity: item.quantity + 1 }));
    },
    [dispatch, cartItems]
  );


 const handleDecrement = useCallback(
    (productId: ID) => {
      const item = cartItems.find((it) => String(it.productId) === String(productId));
      if (item) {
        const newQty = item.quantity - 1;
        dispatch(updateQuantity({ productId, quantity: newQty }));
      }
    },
    [dispatch, cartItems]
  );



  return (
    <View style={[ styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
     <View style={{ paddingHorizontal: 20, flex: 1 }}>
       <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <ThemedText type="title">My Cart</ThemedText>
        <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.push('ProductsListScreen')}>
          <Home size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{ flexDirection: 'column', gap: 15 }}>
          {cartItems.length > 0 ? 
          cartItems.map((item, index) =>(
            <CartCard key={index} onPressRemove={() => handleRemoveCartItem(item.productId)} onPressIncreament={() => handleIncrement(item.productId)} onPressDecrement={() => handleDecrement(item.productId)} {...item} />
          ))
        :
          <View style={styles.emptyContainer}>
            <Handbag color='white' size={40} />
            <ThemedText type='medium' style={{width: 200, textAlign:'center'}}>Your cart is empty</ThemedText>
            </View>
        }
        </View>
      </ScrollView>
    
     </View>
       <View style={styles.footer}>
        <View style={styles.footerContent}>
          <ThemedText>Total Items</ThemedText>
          <ThemedText type='defaultSemiBold'>{cartItemsCount}</ThemedText>
        </View>
        <View style={styles.footerContent}>
          <ThemedText>Sub Total</ThemedText>
          <ThemedText type='defaultSemiBold'>${cartItemsSubtotal.toFixed(2)}</ThemedText>
        </View>
        <View style={styles.footerContent}>
          <ThemedText>Discount</ThemedText>
          <ThemedText type='defaultSemiBold'>${discount.toFixed(2)}</ThemedText>
        </View>
        <View style={styles.divider} />
          <View style={styles.footerContent}>
            <ThemedText>Total</ThemedText>
            <ThemedText type='defaultSemiBold'>${(cartItemsSubtotal - discount).toFixed(2)}</ThemedText>
          </View>
      <ThemedButton disabled={!cartItemsCount} name='Checkout' onPress={() => navigation.navigate('CheckoutScreen')} />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  menuButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button,
    elevation: 10,
  },
  footer: {
    height: 250,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: colors.button,
    elevation: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  footerContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider:{
    height: 1,
    backgroundColor: colors.border,
  },
  emptyContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop: 80,
    rowGap: 10,
    opacity: 0.5,
  }

});