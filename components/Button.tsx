import React, { useState } from "react";
import { Pressable, PressableProps } from "react-native";
import Animated, {
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Button = (props: PressableProps) => {
	const [isPressed, setIsPressed] = useState(false);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					scale: isPressed
						? withTiming(0.9, { duration: 150 })
						: withTiming(1, { duration: 150 }),
				},
			],
		};
	});

	return (
		<AnimatedPressable
			{...props}
			onTouchStart={() => setIsPressed(true)}
			onTouchEnd={() => setIsPressed(false)}
			style={[animatedStyle, props.style]}
		>
			{props.children}
		</AnimatedPressable>
	);
};
