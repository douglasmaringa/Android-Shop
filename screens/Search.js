import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,ScrollView ,FlatList} from 'react-native'
import { db,storage } from "../firebase";
import Searchs from "../components/Search"

const Search = ({route,navigation}) => {
    const { searched } = route.params;
    console.log(searched)
    const[products,setProducts] = useState([])
  
    useEffect(()=>{
    
        db.collection("product").where("title", "==", searched)
        .onSnapshot((querySnapshot) => {
           
          setProducts(querySnapshot.docs.map((doc)=>doc.data()))
           
    })
    },[])

    return (
        <View style={{flex:1}}>
            
          {
              products?
              (<>
              <FlatList
        data={products}
        horizontal={false}
        noOfColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <View>
            <Searchs title={item.title} image={item.image} details={item.details} price={item.price}navigation={navigation} />
            
        </View>}
     />
              
              </>):
              (<>
               <Text>no results found</Text>
              </>)
          }  
          
           
        </View>
    )
}



export default Search
