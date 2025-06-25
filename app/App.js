import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JourneyScreen from './screens/JourneyScreen';
import ExploreScreen from './screens/ExploreScreen';
import SignInScreen from './screens/SignInScreen';
import VerifyCodeScreen from './screens/VerifyCodeScreen';
import CompleteProfileScreen from './screens/CompleteProfileScreen';
import SpecialOfferScreen from './screens/SpecialOfferScreen';
import PopularProviderScreen from './screens/PopularProviderScreen';
import BookServiceScreen from './screens/BookServiceScreen';
import ServiceBookedScreen from './screens/ServiceBookedScreen';
import ChatScreen from './screens/ChatScreen';
import VideoCallScreen from './screens/VideoCallScreen';
import GetDirectionScreen from './screens/GetDirectionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Journey">
        <Stack.Screen name="Journey" component={JourneyScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
        <Stack.Screen name="SpecialOffer" component={SpecialOfferScreen} />
        <Stack.Screen name="PopularProvider" component={PopularProviderScreen} />
        <Stack.Screen name="BookService" component={BookServiceScreen} />
        <Stack.Screen name="ServiceBooked" component={ServiceBookedScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="VideoCall" component={VideoCallScreen} />
        <Stack.Screen name="GetDirection" component={GetDirectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;