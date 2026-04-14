import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView =  styled(RNSafeAreaView)
export default function Home() {
    return (
        <SafeAreaView className="flex-1  p-5  bg-white">
            <Text className="text-xl font-bold text-yellow-500">
                Welcome to App!
            </Text>
            <Link href="/Onboarding" className="w-full mt-4 rounded bg-primary text-white p-4">
                Go to Onboarding
            </Link>

            <Link href="/(auth)/SignUp" className="w-full mt-4 rounded bg-primary text-white p-4">
                Sign Up
            </Link>

            <Link href="/(auth)/SignIn" className="w-full mt-4 rounded bg-primary text-white p-4">
                Sign In
            </Link>
            <Link href="/(tabs)"
                className="w-full mt-4 rounded bg-primary text-white p-4">
                subscription
            </Link>
        </SafeAreaView>
    );
}