import { Link } from "expo-router";
import { Text, View } from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function SubscriptionDetails() {
    const {id} = useLocalSearchParams<{id:string}>()
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl  font-bold text-blue-500">
                SubscriptionDetails
                <View className="flex-1 items-center justify-center bg-white">
                <Link href={'/'}>Go back</Link>
                </View>

            </Text>
        </View>
    );
}