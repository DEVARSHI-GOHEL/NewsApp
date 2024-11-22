import { NavigationContainer } from "@react-navigation/native";
import { Image , View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsListScreenContainer from "../screens/NewsListScreen";
import { screenName, screenTitle } from "../utils/Contants";
import NewsDetailsScreenContainer from "../screens/NewsDetailsScreen";
import SearchIcon from '../assets/icons/search.png'
import FilterIcon from '../assets/icons/filter.png'

const Stack = createNativeStackNavigator()
// basic stack navigation, if needed can constomise the app for headers and common stlyings
export default RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: "left"
            }}>
                <Stack.Screen options={{
                    title: "News",
                }} name={screenName.NEWSLIST} component={NewsListScreenContainer} />
                <Stack.Screen options={{
                    title: "News Details"
                }} name={screenName.NEWSDETAILS} component={NewsDetailsScreenContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}