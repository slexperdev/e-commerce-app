import { FlatList, Image, StyleSheet, View } from "react-native";

export const ImageGallery = ({ images }: { images: string[] }) => {
  return (
      <View>
        <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
      /> 
      </View> 
  );
}

const styles = StyleSheet.create({
    imageContainer: {
      width: 300,
      height: 300,
      marginRight: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
})