import React , {useEffect} from 'react';
import { View , Text } from 'react-native';
import tailwind from 'twrnc';
import { SvgUri } from 'react-native-svg';
import TradlySvg from '../assets/tradly.svg';
import Container from '../components/Container';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  spring,
  withSpring
} from 'react-native-reanimated';

export default function SplashScreen({ navigation }) {
  const scale = useSharedValue(0);
  const translate = useSharedValue(0);

    const config = {
      damping: 15,
       mass: 1,
       stiffness: 500,
       overshootClamping: false,
       restSpeedThreshold: 0.001,
       restDisplacementThreshold: 0.001,
   };

   const opacityConfig = {
    duration: 1000,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
    useEffect(() => {
      scale.value = 1;
    }, [])
  
    const style = useAnimatedStyle(() => {
      return {
        transform: [{
          scale: withSpring(scale.value, config),
        },
        {
          translateY: withSpring(translate.value, config),
        }
      ],
      };
    });
  setTimeout(() => {
    translate.value = -1000;
    navigation.navigate('OnBoarding') //this.props.navigation.navigate('Login')
  }, 1500);
  return (
    <Container>
        <Animated.View style={style}>
          <TradlySvg  />
        </Animated.View>
    </Container>
  );
}
