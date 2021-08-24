import React from 'react'
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';
import { useRedits } from '../CustomHooks/useRedits'

const New = () => {
  const { redits, isLoading } = useRedits('/new.json');
  return (
    isLoading ? (
      <View style={styles.loading}>
        <ActivityIndicator color="white" size={50} />
      </View>
    ) : (
      <View style={styles.container}>
        <FlatList data={redits} renderItem={({ item }) => <PostCard post={item} />} />
      </View>
    )
  )
}

export default New;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black'
  }
})