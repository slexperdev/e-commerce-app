import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useCallback, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuIcon, TriangleAlert } from 'lucide-react-native';

import { ThemedText } from '@/components/ThemedText';
import { ProductCard } from '@/components/ui/ProductCard';
import { colors } from '@/theme/colors';
import { useLazyFetchProductsQuery } from '@/services/productService';
import { ProductSkelton } from '@/components/ui/ProductSkelton';
import { useDispatch } from 'react-redux';
import { ApiError, Product } from '@/types';
import { addToCart } from '@/features/cart';
import { CartButton } from '@/components/ui/CartButton';

export default function ProductListScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  // Get products from the API
  const [fetchProducts, { data: products, error, isLoading, isFetching }] =
    useLazyFetchProductsQuery();
    

  useEffect(() => {
    const loadProducts = async () => {
      await fetchProducts();
    };
    loadProducts();
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  }, [dispatch]);

  const handleRefresh = async () =>{
    await fetchProducts();
  }

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <MenuIcon size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <ThemedText type="title">Shopping</ThemedText>
        <CartButton onPress={() => navigation.navigate('CartScreen')} />
      </View>

      <ThemedText
        style={{
          marginTop: 20,
        }}
        type="subtitle"
      >
        Popular Products
      </ThemedText>

      {error && 
      <View style={styles.errorAlert}>
        <TriangleAlert color='white'/>
        <ThemedText>{(error as ApiError).error || 'Something went wrong'}</ThemedText>
      </View> }

      {isLoading ? (
        <FlatList
          data={Array.from({ length: 6 })}
          renderItem={() => <ProductSkelton />}
          keyExtractor={(_, idx) => idx.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
          contentContainerStyle={{
            paddingBottom: 20,
            marginTop: 10,
            rowGap: 10,
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          /* @ts-ignore */
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              {...item}
              onPressCard={() =>
                navigation.navigate('ProductDetailsScreen', { product: item })
              }
              onAddToCart={() => handleAddToCart(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
          contentContainerStyle={{
            paddingBottom: 20,
            marginTop: 10,
            rowGap: 10,
          }}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          onRefresh={handleRefresh}
          refreshing={isFetching}
        />
      )}
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
  categoryContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  errorAlert:{
    marginTop: 20,
    width: '100%',
    padding: 10,
    backgroundColor: colors.error,
    borderRadius: 10,
    flexDirection:'row',
    gap: 10
  }
});
