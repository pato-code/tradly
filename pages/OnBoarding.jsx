import React , { useState , useEffect } from 'react';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
    BounceInUp,
    FadeOut,
    ZoomIn,
    ZoomOut
  } from 'react-native-reanimated';
import Container from '../components/Container';
import Boarding from '../assets/boarding.svg';
import BoardingTwo from '../assets/boarding2.svg';
import BoardingThree from '../assets/boarding3.svg';
import { View , TouchableOpacity , Text } from 'react-native';
import tailwind from 'twrnc';

export default function OnBoarding({ navigation }) {

    const opacityValue = useSharedValue(0);

    const config = {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
  
    const style = useAnimatedStyle(() => {
      return {
        opacity: withTiming(opacityValue.value, config),
      };
    });


  const onBoardItems = [
      {
          text : "Empowering Artisans, Farmers & Micro Business",
          image: Boarding,
      },
      {
        text : "Connecting NGOs, Social Enterprises with Communities",
        image: BoardingTwo,
      },
      {
        text : "Donate, Invest & Support infrastructure projects",
        image: BoardingThree,
      },
  ];
  const [page, setPage] = useState(0);  

    const goToboard = (index) => {
        setPage(index);
    }

    const nextClick = () => {
        if(page < 2){
            setPage(page + 1);
        }

    }

    useEffect(() => {
        opacityValue.value = 1;
      }, [page])
  
  return (
    <Container>
        <View style={tailwind.style('flex-3 bg-teal-600')}></View>
        <View style={tailwind.style('bg-white flex-5 px-12  justify-between pb-4')}>
            
                        
                        {onBoardItems.map((item, index) => {
                        
                            //return //index === page ??  (
                                return index === page ? (  
                                    <Animated.View key={index} style={[
                                        tailwind.style('bg-white w-80 pt-15 mt--30 rounded-lg px-4 justify-center'),
                                        style,
                                    ]}
                                    entering={BounceInUp.duration(300).delay(300)}
                                    exiting={FadeOut.duration(300)}
                                    
                                    >
                                        <item.image style={tailwind.style('w-auto ')}/>
                                    </Animated.View>
                                  ) : (
                                      null
                                  )
                              
                            //)
                            
                        })}
                        {onBoardItems.map((item, index) => {
                
                        return index === page ? (
                            <View key={index} style={tailwind.style('justify-center mx-auto')}>
                                <Animated.Text style={tailwind.style('text-teal-600/80 text-lg text-center font-thin')}
                                    entering={ZoomIn.duration(300).delay(300)}
                                    exiting={ZoomOut.duration(300)}

                                > 
                                    {item.text} 
                                </Animated.Text>
                            </View>
                            ) : (
                                null
                            )
                        })}
            
                    

            
            
            {/* this is dots */}
            <View style={tailwind.style('flex-row mx-auto justify-center')}>
            {onBoardItems.map((item, index) => {
                return index === page ? (
                    <TouchableOpacity key={index} style={tailwind.style('h-3 w-3 rounded-full bg-teal-600 mx-1')} onPress={() => goToboard(index)}>
                
                    </TouchableOpacity>
                ) : (
                <TouchableOpacity key={index} style={tailwind.style('h-3 w-3 rounded-full bg-teal-600/50 mx-1')} onPress={() => goToboard(index)}>
                </TouchableOpacity>
                )}
            )}
            {/* <TouchableOpacity style={tailwind.style('h-3 w-3 rounded-full bg-teal-600/50 mx-1')}>

                </TouchableOpacity>
                <TouchableOpacity style={tailwind.style('h-3 w-3 rounded-full bg-teal-600/30 mx-1')}>

                </TouchableOpacity> */}
            </View>
            <TouchableOpacity style={tailwind.style(' h-12 rounded-full bg-teal-600 justify-center items-center')} onPress={() => nextClick()}>
                <Text style={tailwind.style('text-white text-center text-xl')}>
                    {page === 2 ? 'Finished' : 'Next'}
                </Text>
            </TouchableOpacity>
        </View>
    </Container>
  );
}
