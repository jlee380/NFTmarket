import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const NFTCard = ({ data }) => {
	const navigation = useNavigation();

	return (
		<View
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
			}}>
			<View style={{ width: "100%", height: 250 }}>
				<Image
					source={data.image}
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
						borderRadius: SIZES.font,
					}}
				/>
			</View>
			<Text>NFTCard</Text>
		</View>
	);
};

export default NFTCard;
