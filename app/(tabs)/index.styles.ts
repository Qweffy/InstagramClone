import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
interface Styles {
  container: ViewStyle;
  postContainer: ViewStyle;
  postName: TextStyle;
  postDescription: TextStyle;
  listContainer: ViewStyle;
  loader: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  postName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postDescription: {
    marginTop: 8,
    color: 'gray',
    fontSize: 14,
  },
  listContainer: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  loader: {
    marginVertical: 16,
  },
});

export default styles;
