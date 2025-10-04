import { colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";
import { HomeIcon } from "lucide-react-native";


export default function OrderConfirmationScreen({navigation}: {navigation: any}) {
  const insets = useSafeAreaInsets();

  return (
     <View style={[ styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom } ]}>
      <LottieView
        source={require('../../assets/lotties/success.json')}
        autoPlay
        loop={false}
        style={{ width: 150, height: 150 , marginBottom: 20}}
      />
      <ThemedText type="subtitle">
        Payment Successful!
      </ThemedText> 
           <ThemedText type="default">
        Your order has been placed.
      </ThemedText>
      <ThemedButton onPress={() => navigation.reset({ index: 0, routes: [{ name: 'ProductsListScreen' }] })} style={{marginTop: 20}} name='Back to Home' icon={<HomeIcon color='white' size={18} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});