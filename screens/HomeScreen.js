import React,{useState,useEffect} from 'react'
import { View, Text,StatusBar,ScrollView,FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import { SearchBar ,Image} from 'react-native-elements';
import running from "../assets/running1.jpg"
import Card from "../components/Card"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardCategory from '../components/CardCategory';
import data from "../data/category"
import { db,storage } from "../firebase";

const HomeScreen = ({navigation}) => {
const [search,setSearch] = useState("shirt");
const[products,setProducts] = useState([])
  useEffect(()=>{
    
      db.collection("product")
      .onSnapshot((querySnapshot) => {
         
        setProducts(querySnapshot.docs.map((doc)=>doc.data()))
         
  })
  },[])
 
  const handleSearch =()=>{
    console.log(search)
    if(search){
      navigation.navigate('search', {searched:search});
    }else{
      alert("Search Cannot be empty")
    }
  }

    return (
        <View style={{flex:1,backgroundColor:'white' }}>
           <StatusBar  
     backgroundColor = "#FF8080"  
     barStyle = "dark-content"  
      
   />  
   <View style={{display:'flex',flexDirection:'row'}}>
         <SearchBar
        placeholder="Type Here..."
        value={search}
        onChangeText={(text)=>{
          setSearch(text)
        }}
        searchIcon={false}
        containerStyle={{backgroundColor:'white',color:'white,',width:280}}
        inputContainerStyle={{backgroundcolor:'white',color:'white'}}
        inputStyle={{color:'black',fontWeight:'700'}}
        lightTheme={true}
        round={true}
      />
      <View style={{marginTop:15}}>
        <TouchableOpacity onPress={handleSearch}>
      <MaterialCommunityIcons name="search-web" color="black" size={29}/>
      </TouchableOpacity>
      </View>
      </View>
   <ScrollView>
      <View style={{marginLeft:10}}>
      <Image
  source={{uri:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/23/fdd21ce7-7fbf-4c1e-b3a8-168bf871219c1616513286703-Dressberry_Desk.jpg'}}
  style={{ width: 300, height: 70 ,borderRadius:10, marginTop:2}}
/>
      </View>

     
        <View style={{display:'flex',flexDirection:'row',maxWidth:300}}>
      <Text style={{fontSize:12,fontWeight:'700',marginLeft:10,marginTop:5}}>Categories</Text>
      <Text style={{fontSize:12,fontWeight:'700',marginLeft:'auto',marginTop:6,color:'#FF8080'}}>See All</Text>
      </View>

  <View style={{marginTop:10, display:'flex',flexDirection:'row'}}>
 <CardCategory image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg" title="Women"navigation={navigation}/>

  <CardCategory image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/3f4c7e30-abae-4fac-97f8-c83bedf5f25c1612377587856-Content-Men-CargoTrousers.jpg" title="Men" navigation={navigation}/>

  </View>
  <View style={{display:'flex',flexDirection:'row',maxWidth:300}}>
      <Text style={{fontSize:12,fontWeight:'700',marginLeft:10,marginTop:5}}>Featured Products</Text>
      <Text style={{fontSize:12,fontWeight:'700',marginLeft:'auto',marginTop:6,color:'#FF8080'}}>See All</Text>
      </View>
      <ScrollView>
        <FlatList
        data={products}
        horizontal={true}
        noOfColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <View>
            <Card title={item.title} image={item.image} details={item.details} price={item.price}navigation={navigation} />
            
        </View>}
     />
     </ScrollView>
     </ScrollView>
        </View>
      );
    }

    const styles = StyleSheet.create({
      search:{
        backgroundColor:'white',
        
      },
    })

export default HomeScreen
