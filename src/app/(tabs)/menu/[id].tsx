import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  //the variable within {} represents destructured value pass from parent component
  //using useLocalSearchParams() webhook from expo-router
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details: " + id }} />
      <Text>ProductDetailsScreen: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
