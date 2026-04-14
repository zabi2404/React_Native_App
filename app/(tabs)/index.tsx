import "@/global.css";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView =  styled(RNSafeAreaView)
export default function Home() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl  font-bold text-blue-500">
                Welcome to App!
            </Text>
          
        </SafeAreaView>
    );
}