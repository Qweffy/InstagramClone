import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  SectionList,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import HomeContext from '@/app/context/HomeContext';
// @ts-ignore
import defaultAvatar from '@/assets/images/default-avatar.png';
import styles from '@/app/styles/index.styles';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

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
              <View style={styles.postHeader}>
                <Image source={defaultAvatar} style={styles.avatar} />
                <View style={styles.headerText}>
                  <Text style={styles.username}>{item.name}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
              <Image source={{ uri: item.image }} style={styles.postImage} />
              <View style={styles.iconsContainer}>
                <TabBarIcon name="heart-outline" color={Colors.text} />
                <TabBarIcon name="chatbubble-outline" color={Colors.text} />
                <TabBarIcon name="paper-plane-outline" color={Colors.text} />
              </View>
              <View style={styles.postFooter}>
                <Text style={styles.likes}>{item.likes} Me gusta</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.comments}>{item.comments} respuestas</Text>
              </View>
            </View>
          )}
          ListFooterComponent={
            loading ? (
              <ActivityIndicator
                size="large"
                color={Colors.text}
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
