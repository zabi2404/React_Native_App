import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl  font-bold text-blue-500">
                Welcome to App!
            </Text>
            <Link href="/Onboarding" className="mt-4 rounded bg-primary text-white p-4">
                Go to Onboarding
            </Link>

            <Link href="/(auth)/SignUp" className="mt-4 rounded bg-primary text-white p-4">
                Sign Up
            </Link>

            <Link href="/(auth)/SignIn" className="mt-4 rounded bg-primary text-white p-4">
                Sign In
            </Link>
            <Link href={
{
    pathname:"/subscription/[id]",
    params:{id:"claude"},
}
            } className="mt-4 rounded bg-primary text-white p-4">
                Claude subscription
            </Link>
        </View>
    );
}