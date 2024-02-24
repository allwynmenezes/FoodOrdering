import { StyleSheet, Image, Text, View} from 'react-native';
import Colors from '@/constants/Colors';

const ProductListItem = ({product}) => {
  return (
    <View>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: Colors.light.tint
  },
  image: {
    width: '100%',
    aspectRatio: 1
  }
});
