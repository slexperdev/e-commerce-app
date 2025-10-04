import { ArrowLeftIcon} from 'lucide-react-native';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { colors } from '@/theme/colors';
import { Product } from '@/types';
import { useRoute } from '@react-navigation/native';
import { ThemedButton } from '@/components/ThemedButton';
import { ImageGallery } from '@/components/ui/ImageGallery';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart';
import { CartButton } from '@/components/ui/CartButton';

export default function ProductDetailsScreen({navigation}: any) {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const dispatch = useDispatch();

  const { product } = route.params as { product: Product };

   const handleAddToCart = () =>{
      dispatch(addToCart({product, quantity: 1}));
    }

  return (
    <View
      style={[ styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <ThemedText type="title">Details</ThemedText>
        <CartButton onPress={() => navigation.navigate('CartScreen')} />
      </View>
      <ImageGallery images={product.images} />
      <View style={styles.content}>
        <ThemedText type="defaultSemiBold" style={{ flex: 1, marginRight: 20 }} numberOfLines={2} ellipsizeMode="tail">{product.title}</ThemedText>
        <ThemedText type="defaultSemiBold">$ {product.price}</ThemedText>
      </View>
      <ThemedText type="caption" style={{ marginTop: 5}}>{product.category.name}</ThemedText>
      <ThemedText type="defaultSemiBold" style={{marginTop: 20}}>Description</ThemedText>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 5, marginBottom: 20}}>
        <ThemedText type="medium" >{product.description}{product.description}{product.description}</ThemedText>
      </ScrollView>

        <ThemedButton style={{marginBottom: 20}} name="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
  content:{
    marginTop: 20,
    flexDirection:'row',
    justifyContent:'space-between',
  }
});
