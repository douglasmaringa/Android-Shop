import React from 'react'
import { View, Text,StyleSheet ,ScrollView} from 'react-native'
import category from "../data/category"
import {Image,Button} from "react-native-elements";
import CardCategory from "../components/CardCategory"

const CategoryScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <ScrollView>
         <View style={{marginTop:10, display:'flex',flexDirection:'row'}}>
 <CardCategory image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg" title="Women"navigation={navigation}/>

  <CardCategory image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10945126/2020/1/31/6f938098-0bbd-4f94-8de9-14e18e35126b1580454366416-Roadster-Men-Shirts-2491580454364351-1.jpg" title="Men" navigation={navigation}/>

  </View>
  <View style={{marginTop:10, display:'flex',flexDirection:'row'}}>
 <CardCategory image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10521330/2020/1/16/5f5d8d0d-0304-4843-987b-33b109688d671579174693371-DressBerry-Pink-Solid-Shoulder-Bag-4461579174691059-1.jpg" title="Bags"navigation={navigation}/>

  <CardCategory image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13639410/2021/3/3/bf4f1dc2-cca7-40a2-905f-907757d5631b1614767028014-Fossil-Women-Rose-Gold-Tonex-Izzy-Analogue-Watch-ES4782-9311-1.jpg" title="Watch" navigation={navigation}/>

  </View>
  <View style={{marginTop:10, display:'flex',flexDirection:'row'}}>
 <CardCategory image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13677376/2021/2/18/9bb93c3a-f5f2-4c8f-953f-e119e6a06fbc1613637986453RedTapeWomenPinkMeshWalkingShoes1.jpg" title="Shoes"navigation={navigation}/>

  <CardCategory image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12631958/2021/3/23/2d960458-9582-4c3b-88c6-7359b0ced0451616480992179-Jewels-Galaxy-Women-Gold-Plated-Layered-Necklace-59116164809-1.jpg" title="Jewelery" navigation={navigation}/>

  </View>
  </ScrollView>
        </View>
    )
}



export default CategoryScreen
