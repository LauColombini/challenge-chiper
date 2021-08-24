import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useDate } from '../CustomHooks/useDate';

const PostCard = ({ post }) => {

  const data = post.data;
  const navigation = useNavigation();
  const { fecha } = useDate(data.created_utc);

  const handleOnPress = ()=>{
    navigation.navigate('HeaderNav', data)
  }
  

  return (
    <TouchableOpacity onPress={() => handleOnPress()} style={styles.containerRedit}>
      <Image source={{ uri: data.thumbnail }} style={styles.image} />

      <View style={styles.container}>
       
        <View>
          <Text style={styles.author}>{data.author}</Text>
        </View>          

        <Text style={styles.title}>{data.title}</Text>
        
        <View style={styles.numAndText}>
          <Text style={styles.text}>{data.num_comments}</Text>
          <Text style={styles.keyText}> Comentarios</Text>
        </View>

        <View style={styles.numAndText}>
          <Text style={styles.keyText}>Score: </Text>
          <Text style={styles.text}>{data.score}</Text>
        </View>

        <View>
          <Text style={styles.text}>{fecha}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default PostCard

const styles = StyleSheet.create({
  containerRedit: {
    backgroundColor: 'rgba(20,20,20,0.7)',
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  keyText:{
    color:'#FF0000'
  },
  container: {
    padding: 15,
    flex: 1,
  },
  title: {
    marginVertical: 10,
    color: '#f4f4f4',
    fontWeight: 'bold',
    fontSize: 16
  },
  text: {
    color: '#343430',
    fontSize: 13,
  },
  author:{
    color: '#343430',
    fontSize: 15,
  },
  numAndText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 85,
  }
})