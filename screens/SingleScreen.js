import React,{useState,useEffect} from 'react'
import { View, Text,ScrollView,Pressable } from 'react-native'
import { useStateValue } from "../StateProvider";
import {Image,Button} from "react-native-elements";
import { db,storage } from "../firebase";

const SingleScreen = ({route,navigation}) => {
    const { title, image,details,price } = route.params;
    console.log(price)

    const add =()=>{
        db.collection("cart").add({
            title:title, image: image,price:price,username:'douglas'
           });
    }
    return (
        <View style={{borderColor: '#F0F0F0',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,}}>
<ScrollView>
        <Image
           source={{ uri: image }}
           style={{ width: 320, height: 250 ,resizeMode:'cover'}}
        />
        
        <Text style={{fontSize:18,fontWeight:'700',borderRadius:10,marginTop:6,padding:10,borderColor:'gray',borderBottomColor:'black'}}>{title}</Text>
        <Text style={{fontSize:16,borderRadius:10,padding:10,borderColor:'gray',borderBottomColor:'black'}}>${price}</Text>
        <Text style={{fontSize:16,borderRadius:10,marginTop:10,padding:10,borderColor:'gray',borderBottomColor:'black'}}>{details}</Text>

        {/*<Pressable style={{backgroundColor:'#FF8080',borderRadius:10,width:150,height:50}}>
        <Text style={{fontSize:16,borderRadius:10,marginTop:10,padding:10,borderColor:'gray',borderBottomColor:'black',textAlign:'center',color:'white',fontWeight:'700'}}>Add To Cart</Text>
    </Pressable>*/}
        <Button title="Add To Cart" buttonStyle={{backgroundColor:'#FF8080'}} onPress={add}/>
        </ScrollView>
        </View>
    )
}

export default SingleScreen
