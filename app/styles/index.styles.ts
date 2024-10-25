import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Colors } from '@/constants/Colors';

interface Styles {
  container: ViewStyle;
  listContainer: ViewStyle;
  postContainer: ViewStyle;
  postHeader: ViewStyle;
  avatar: ImageStyle;
  headerText: ViewStyle;
  username: TextStyle;
  location: TextStyle;
  postImage: ImageStyle;
  postFooter: ViewStyle;
  likes: TextStyle;
  description: TextStyle;
  comments: TextStyle;
  loader: ViewStyle;
  iconsContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  postContainer: {
    backgroundColor: Colors.background,
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    justifyContent: 'center',
  },
  username: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
  location: {
    color: Colors.text,
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  postFooter: {
    padding: 10,
  },
  likes: {
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: Colors.text,
    marginBottom: 5,
  },
  comments: {
    color: 'gray',
  },
  loader: {
    marginVertical: 16,
  },
  iconsContainer: { flexDirection: 'row', gap: 10, padding: 5 },
});

export default styles;
