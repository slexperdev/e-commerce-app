import { StyleSheet, View } from "react-native";

export const ProductSkelton = () => {
    return (
    <View style={styles.skeletonCard}>
      <View style={styles.skeletonImage} />
      <View style={styles.skeletonContent}>
        <View style={styles.skeletonTitle} />
        <View style={styles.skeletonFooter}>
          <View style={styles.skeletonPrice} />
          <View style={styles.skeletonCartButton} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    skeletonCard: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  skeletonImage: {
    height: 150,
    backgroundColor: '#cccccc',
  },
  skeletonContent: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#e0e0e0',
  },
  skeletonTitle: {
    height: 20,
    backgroundColor: '#cccccc',
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 5,
  },
  skeletonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  skeletonPrice: {
    width: 60,
    height: 20,
    backgroundColor: '#cccccc',
    borderRadius: 4,
  },
  skeletonCartButton: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#cccccc',
  },
})