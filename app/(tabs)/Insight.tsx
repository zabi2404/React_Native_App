
import { Text, View } from "react-native";

export default function Onboarding() {
    return (
        <View className="flex-1 justify-center bg-white px-6">
            <Text className="mb-4 text-2xl font-bold text-blue-500">
                Insights
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Track your weekly progress in one place.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Review habits that are improving over time.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Compare trends from your recent activity.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Spot areas that need more consistency.
            </Text>
            <Text className="text-base text-gray-700">
                Use these insights to plan your next steps.
            </Text>
        </View>
    );
}
