import { Minus, Plus, Trash } from 'lucide-react-native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { colors } from '@/theme/colors';
import { CartItem } from '@/types';

 interface ProductCardProps extends CartItem {
  onPressRemove?: () => void;
  onPressIncreament?: () => void;
  onPressDecrement?: () => void;
}


export const CartCard = ({ product, quantity, unitPrice, onPressRemove, onPressIncreament, onPressDecrement }: ProductCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: product?.images[0] }}
        style={{ width: 80, height: 80, borderRadius: 10 }}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <ThemedText type="medium" numberOfLines={1}>
          {product?.title}
        </ThemedText>
        <ThemedText type="caption">{product?.category?.name}</ThemedText>
        <ThemedText type="defaultSemiBold">${unitPrice}</ThemedText>
      </View>
      <View style={styles.cartButtonContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.cartButton1} onPress={onPressIncreament}>
            <Plus size={18} color="white" />
          </TouchableOpacity>
            <View style={styles.quantity}>
                <ThemedText type="defaultSemiBold">{quantity}</ThemedText>
            </View>
          <TouchableOpacity style={styles.cartButton2} onPress={onPressDecrement}>
            <Minus size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
       <TouchableOpacity style={styles.trashButton} onPress={onPressRemove}>
          <Trash size={15} color={colors.primary} strokeWidth={2} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 120,
    backgroundColor: colors.button,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  cartButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    right: 100,
    alignItems: 'center',
  },
  quantityContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  cartButton1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButton2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trashButton:{
    position: 'absolute',
    right:-3,
    top: -3,
    width: 35,
    height: 35,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity:{
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
