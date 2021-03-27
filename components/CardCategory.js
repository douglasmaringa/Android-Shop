import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import { SearchBar ,Image,Card} from 'react-native-elements';

const CardCategory = ({image,title,navigation}) => {
    return (
        <View style={{padding:10,borderColor: '#F0F0F0',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,marginLeft:5}}>
            <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Categories")
        }}>
            <Image
           source={{ uri: image }}
           style={{ width: 130, height: 120 ,}}
        />
        <Text style={{fontSize:12,borderRadius:10,borderColor:'gray',borderBottomColor:'black'}}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
}

export default CardCategory
