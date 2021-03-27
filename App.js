import * as React from 'react';
import { Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./screens/HomeScreen"
import CategoriesScreen from "./screens/CategoryScreen"
import SingleScreen from "./screens/SingleScreen"
import CartScreen from "./screens/CartScreen"
import Search from "./screens/Search"
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//you first create stacks and put the screens for each stack. 
function HomeStack (){
//if you wanna add more routes to home page just add more screens to the home stack.
  return(
    <Stack.Navigator initialRouteName="Home" >
      {/*Initial is so that the all screens arent displayed at once it displays a single screen*/}
    <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Fulcrumy Store',
          headerStyle: {
            backgroundColor: '#FF8080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'#FFFFFF',
          },
          headerTitleAlign: 'center',
          cardStyle: {
      backgroundColor: 'white'
    }
        }}/>
    <Stack.Screen name="single" component={SingleScreen} options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#FF8080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'#FFFFFF',
          },
          headerTitleAlign: 'center',
          cardStyle: {
      backgroundColor: 'white'
    }
        }}/>
        <Stack.Screen name="search" component={Search}initialParams={{searched:"hello"}} options={{
          title: 'Results',
          headerStyle: {
            backgroundColor: '#FF8080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'#FFFFFF',
          },
          headerTitleAlign: 'center',
          cardStyle: {
      backgroundColor: 'white'
    }
        }}/>
    </Stack.Navigator>
    
  )
}
function CategoryStack (){
  return(
    <Stack.Navigator initialRouteName="Category">
    <Stack.Screen name="Category" component={CategoriesScreen} options={{
          title: 'Categories',
          headerStyle: {
            backgroundColor: '#FF8080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'#FFFFFF',
          },
          headerTitleAlign: 'center',
          cardStyle: {
      backgroundColor: 'white'
    }
        }}/>
    </Stack.Navigator>
  )
}
function CartStack (){
  return(
    <Stack.Navigator initialRouteName="Cart">
    <Stack.Screen name="Cart" component={CartScreen}/>
    </Stack.Navigator>
  )
}

//My tabs is the bottom nav bar it will hold all the stacks 
//The home tab will hold the homestack so if youre in the categories tab you can access the home stack.
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#FF8080',
      inactiveTintColor: 'black',
       style: {
                backgroundColor: 'white',
                paddingBottom: 3
          }
   }}>
      <Tab.Screen name="Home" component={HomeStack} 
      
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size,activeColor }) => (
          <MaterialCommunityIcons name="home" color={color}  size={size}  />
        ),
        
      }}/>
      
       <Tab.Screen name="Categories" component={CategoryStack} 
      options={{
        tabBarLabel: 'Categories',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="gift" color={color} size={size} />
        ),
      }}/>
       
      <Tab.Screen name="Cart" component={CartStack} 
      options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

//here we will now export our nav bar which has a stack inside it.
//sometimes it will also has a drawer.
export default function App() {
  return (
    <NavigationContainer>
       <StateProvider initialState={initialState} reducer={reducer}>
      <MyTabs />
      </StateProvider>
    </NavigationContainer>
  );
}
