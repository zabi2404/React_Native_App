import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SubscriptionDetails() {
    const {id} = useLocalSearchParams<{id:string}>()
    return (
        <View className="flex-1 items-center justify-center ">
            <Text className="text-xl  font-bold text-blue-500">
                SubscriptionDetails
                <View className="flex-1 items-center justify-center">
                <Link href={'/'}>Go back</Link>
                </View>

            </Text>
        </View>
    );
}