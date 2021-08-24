import React from 'react'
import { View ,StyleSheet} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const ExternalLink = ({ route }) => {
  const query = route.params.permalink;
  const { top } = useSafeAreaInsets();
  const uri = `http://reddit.com${query}`;

  return (
    <View style={{ marginTop: top, flex: 1 }}>
      <WebView style={{ flex: 1 }} source={{ uri }} javaScriptEnabled={true} />
    </View>
  );
}

export default ExternalLink

const styles = StyleSheet.create({
  container: {
    flex: 1
  }  
})
