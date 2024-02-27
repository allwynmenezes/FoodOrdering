import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { PizzaSize, Product } from "@/types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

//product can also be directly associated with the type Product in the types file
//here we are using a object variable which contains various types to assign to product
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    //asChild attribute specifies to inherit styles defined on the child
    //with asChild the child element should have a onPress attribute
    //(where it is allowed, example Text element) or it should be a Pressable element

    //backticks is used to represent dynamic string which also uses ${} to specify the dynamic value
    <Link href={`menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          //default value is needed because image type is defined to be either link or NULL
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          //this is to maintain uniform image size
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 2,
    maxWidth: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
