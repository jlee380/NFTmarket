import { View, Text, Image } from "react-native";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NTFTitle = () => {
	return (
		<View>
			<Text>NTFTitle</Text>
		</View>
	);
};

export const EthPrice = () => {
	return (
		<View>
			<Text>EthPrice</Text>
		</View>
	);
};

export const ImageCmp = ({ imgUrl, i }) => {
	return (
		<Image
			source={imgUrl}
			resizeMode="contain"
			style={{
				width: 48,
				height: 48,
				marginLeft: i === 0 ? 0 : -SIZES.font,
			}}
		/>
	);
};

export const People = () => {
	return (
		<View style={{ flexDirection: "row" }}>
			{/* {console.log(assets)} */}
			{[assets.person02, assets.person03, assets.person04].map(
				(imgUrl, i) => (
					<ImageCmp imgUrl={imgUrl} i={i} key={`People-${i}`} />
				)
			)}
		</View>
	);
};

export const EndDate = () => {
	return (
		<View
			style={{
				paddingHorizontal: SIZES.font,
				paddingVertical: SIZES.base,
				backgroundColor: COLORS.white,
				justifyContent: "center",
				alignItems: "center",
				...SHADOWS.light,
				elevation: 1,
				maxWidth: "50%",
			}}>
			<Text
				style={{
					fontFamily: FONTS.regular,
					fontSize: SIZES.small,
					color: COLORS.primary,
				}}>
				Ending in
			</Text>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.medium,
					color: COLORS.primary,
				}}>
				12h 30m
			</Text>
		</View>
	);
};

export const SubInfo = () => {
	return (
		<View
			style={{
				width: "100%",
				paddingHorizontal: SIZES.font,
				marginTop: -SIZES.font,
				flexDirection: "row",
				justifyContent: "space-between",
			}}>
			<People />
			<EndDate />
		</View>
	);
};
