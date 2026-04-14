
import { Text, View } from "react-native";

export default function Onboarding() {
    return (
        <View className="flex-1 justify-center  px-6">
            <Text className="mb-4 text-2xl font-bold text-blue-500">
                Settings
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Update your profile details anytime.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Manage app notifications and reminders.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Choose the preferences that suit your routine.
            </Text>
            <Text className="mb-2 text-base text-gray-700">
                Control privacy options for your account.
            </Text>
            <Text className="text-base text-gray-700">
                Keep everything personalized and secure.
            </Text>
        </View>
    );
}
