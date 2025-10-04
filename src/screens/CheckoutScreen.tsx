import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeftIcon, HomeIcon } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { colors } from '@/theme/colors';
import { ThemedTextInput } from '@/components/ThemedInput';
import { ThemedButton } from '@/components/ThemedButton';
import { selectCartCount, selectCartSubtotal } from '@/features/cartSelector';
import { discount } from '@/constants';
import { clearCart } from '@/features/cart';


export default function CheckoutScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  
  const cartItemsSubtotal = useSelector(selectCartSubtotal);
  const cartItemsCount = useSelector(selectCartCount);

  const [shippingDetails, setShippingDetails] = useState({
    recipientName: '',
    address: '',
    postalCode: '',
  });

  const handleConfirmOrder = () => {
    
    if(!shippingDetails.recipientName || !shippingDetails.address || !shippingDetails.postalCode) {
      Alert.alert('Missing Information','Please fill all the shipping details');
      return;
    }
    dispatch(clearCart());
    navigation.navigate('OrderConfirmationScreen');
  }

  const handleFormValue = (field: string, value: string) => {
    setShippingDetails({ ...shippingDetails, [field]: value });
  }

  return (
    <View style={[ styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom } ]}>
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <ThemedText type="title">Checkout</ThemedText>
          <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.reset('ProductsListScreen', {index: 0})}>
            <HomeIcon size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1}}>
       
         <View style={styles.section}>
             <ThemedText type="subtitle">Shipping Details</ThemedText>
            <ThemedTextInput placeholder='Recipient name' value={shippingDetails.recipientName} onChangeText={(text) => handleFormValue('recipientName', text)} />
            <ThemedTextInput placeholder='Region/City/District' value={shippingDetails.address} onChangeText={(text) => handleFormValue('address', text)} />
            <ThemedTextInput placeholder='Postal Code' value={shippingDetails.postalCode} onChangeText={(text) => handleFormValue('postalCode', text)} />
             <ThemedTextInput placeholder='Address Eg: 123 Main St, Springfield' />
         </View>

         <View style={[ styles.section, { marginTop: 20 } ]}>
             <ThemedText type="subtitle">Order Summary</ThemedText>
               <View style={styles.sectionListItem}>
                <ThemedText>Total Items</ThemedText>
                <ThemedText type='defaultSemiBold'>{cartItemsCount}</ThemedText>
              </View>
             <View style={styles.sectionListItem}>
                <ThemedText>Sub Total</ThemedText>
                <ThemedText type='defaultSemiBold'>${cartItemsSubtotal.toFixed(2)}</ThemedText>
              </View>
              <View style={styles.sectionListItem}>
                <ThemedText>Discount</ThemedText>
                <ThemedText type='defaultSemiBold'>${discount.toFixed(2)}</ThemedText>
              </View>
              <View style={styles.sectionListItem}>
                <ThemedText>Total</ThemedText>
                <ThemedText type='defaultSemiBold'>${(cartItemsSubtotal - discount).toFixed(2)}</ThemedText>
              </View>
         </View>
        </View>
            <ThemedButton name='Pay Now' style={{marginBottom: 30}} onPress={handleConfirmOrder} />
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
    marginBottom: 20,
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
  section:{
    backgroundColor: colors.button,
    elevation: 10,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    gap: 10,
  },
  sectionListItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
