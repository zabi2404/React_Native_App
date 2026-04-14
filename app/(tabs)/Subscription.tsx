
import { Text, View } from "react-native";

export default function Onboarding() {
    return (
        <View className="flex-1 justify-center  px-6">
            <Text className="mb-4 text-2xl font-bold text-blue-500">
                Subscriptions
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                View all your active plans in one screen.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Check billing dates before renewals happen.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Compare pricing across different services.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Cancel plans you no longer want to keep.
            </Text>
            <Text className="text-base text-gray-700">
                Stay organized and avoid unnecessary charges.
            </Text>
        </View>
    );
}
