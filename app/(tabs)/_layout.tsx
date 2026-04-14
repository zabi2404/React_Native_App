import { clsx } from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tabs from "../constants/Data";
import { colors, components } from "../constants/theme";

interface TabsIconProps {
    focused: boolean;
    icon: any;
}

const tabBar = components.tabBar;
const TabLayout = () => {
    const inset = useSafeAreaInsets();

    const TabsIcon = ({ focused, icon }: TabsIconProps) => (
        <View className={clsx('tabs-pill', focused && 'tabs-active')}>
            <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
    );

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                height: tabBar.height,
                bottom: Math.max(inset.bottom, tabBar.horizontalInset),
                marginHorizontal: tabBar.horizontalInset,
                // marginVertical: 2,
                borderRadius: tabBar.radius,
                backgroundColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarItemStyle: {
                paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6
            },
            tabBarIconStyle: {
                width: tabBar.iconFrame,
                height: tabBar.iconFrame,
                alignItems: 'center'
            }
        }}>
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => <TabsIcon focused={focused} icon={tab.icon} />
                    }}
                />
            ))}
            <Tabs.Screen
                name="subscription/[id]"
                options={{
                    href: null,
                }}
            />
            {/* This hides the dynamic route from the bottom tab bar */}
        </Tabs>
    );
};

export default TabLayout;