import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  DiscoverScreen,
  Home,
  PaymentDetailsScreens,
  Scanners,
  SignUp,
} from '@screens';
import {enableScreens} from 'react-native-screens';
import {Discover, Favorite, HomeIcon, Setting, Shop} from '@assets';

enableScreens();

const Tab = createBottomTabNavigator();

const App = () => {
  const TabIcon = ({focused, children}) => {
    return (
      <View
        style={[
          styles.tabIcon,
          {backgroundColor: focused ? 'black' : 'transparent'},
        ]}>
        {children}
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            height: 65,
            backgroundColor: 'white',
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused}>
                <HomeIcon />
              </TabIcon>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Scanners}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused}>
                <Shop />
              </TabIcon>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused}>
                <Discover />
              </TabIcon>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={SignUp}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused}>
                <Favorite />
              </TabIcon>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={PaymentDetailsScreens}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused}>
                <Setting />
              </TabIcon>
            ),
            tabBarLabel: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    borderRadius: 5,
    padding: 8,
  },
});

export default App;
