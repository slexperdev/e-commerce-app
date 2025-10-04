import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { ThemedText } from '../ThemedText';
import { Product } from '@/types';
import { colors } from '@/theme/colors';
import { HandbagIcon } from 'lucide-react-native';

 interface ProductCardProps extends Product {
  onPressCard?: () => void;
  onAddToCart?: () => void;
}

export const ProductCard = ({ title, price, images, onPressCard, onAddToCart }: ProductCardProps) => {
  return (
    <Pressable style={styles.productButton} onPress={onPressCard}>
      <Image source={{ uri: images[0] }} style={styles.productImage} />
      <View style={styles.content}>
        <ThemedText type="medium" style={styles.productTitle} numberOfLines={2}>
          {title}
        </ThemedText>

        <View style={styles.footer}>
          <ThemedText type="defaultSemiBold">${price}</ThemedText>
          <TouchableOpacity style={styles.cartButton} onPress={onAddToCart}>
            <HandbagIcon size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  productTitle: {
    flex: 1,
  },
  productImage: {
    height: 150,
  },
  productButton: {

    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.button,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  cartButton:{
    width: 35,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    elevation: 5,
  }
});
