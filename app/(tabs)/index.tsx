import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  SectionList,
  View,
  ActivityIndicator,
} from 'react-native';
import HomeContext from '@/app/context/HomeContext';
import styles from './index.styles';
export default function HomeScreen() {
  const { posts, loading, loadMorePosts } = useContext(HomeContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <SectionList
          sections={[{ title: 'Posts', data: posts }]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Text style={styles.postName}>{item.name}</Text>
              <Text style={styles.postDescription}>{item.description}</Text>
            </View>
          )}
          ListFooterComponent={
            loading ? (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={styles.loader}
              />
            ) : null
          }
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
}
