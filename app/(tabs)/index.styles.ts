// index.styles.ts
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';

// Definir los tipos de estilo
interface Styles {
  container: ViewStyle;
  postContainer: ViewStyle;
  postName: TextStyle;
  postDescription: TextStyle;
  listContainer: ViewStyle;
  loader: ViewStyle;
}

// Definir los estilos
const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background, // Color del fondo
  },
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  postName: {
    fontWeight: 'bold',
    fontSize: 16, // Ajustamos el tamaño de fuente
  },
  postDescription: {
    marginTop: 8,
    color: 'gray',
    fontSize: 14, // Añadimos tamaño de fuente
  },
  listContainer: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  loader: {
    marginVertical: 16, // Espaciado alrededor del ActivityIndicator
  },
});

export default styles;
