import { selectCartCount } from "@/features/cartSelector"
import { colors } from "@/theme/colors"
import { HandbagIcon } from "lucide-react-native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"


export const CartButton = ({onPress}: {onPress: () => void}) =>{
    const itemsCount = useSelector(selectCartCount);

    return(
        <TouchableOpacity style={styles.cartButton} onPress={onPress}>
          <HandbagIcon size={20} color="#FFFFFF" />
          {itemsCount > 0 &&
            <View style={styles.countIndicator}>
            <Text style={{fontSize: 10, color: colors.text}}>{itemsCount}</Text>
          </View>
          }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
     cartButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.button,
        elevation: 10,
        position: 'relative'
      },
      countIndicator:{
        width: 20,
        height: 20,
        backgroundColor: colors.primary,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        right: 0
      }
})