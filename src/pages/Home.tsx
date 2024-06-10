import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor, AppSizes } from '../static/Info'
import { SvgXml } from 'react-native-svg';
import LikeSvg from '../assets/svg/Like.svg';
import AddSvg from '../assets/svg/Add.svg';
import InstagramLogo from '../assets/svg/logo.svg';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { DummyStory } from '../Dummy/Dummy';
import LinearGradient from 'react-native-linear-gradient';
import { PostComp } from '../components/Comp';



const Home = () => {

    // Hooks
    const {colors} = useTheme();

    const RenderStory = ({item}:any) => {
        return (
            <View style={{gap: 5, alignItems: 'center', borderRadius: 52}}>
                <View style={{position: 'relative'}}>
                    
                    {!item.main ?
                        <LinearGradient colors={['#D300C5', '#FF095F', '#FFBF00', '#FFBF00']} style={{width: AppSizes.storySize + 4, alignItems: 'center', justifyContent: 'center', borderRadius: 52, height: AppSizes.storySize + 4}}>
                            <Image
                                source={item.dp}
                                style={{width: AppSizes.storySize, borderWidth: 1, borderColor: colors.border, borderRadius: 52, height: AppSizes.storySize}}
                                resizeMode='cover'
                            />
                        </LinearGradient>
                    :
                        <View style={{paddingLeft: 15}}>
                            <Image
                                source={require('../assets/jpg/man0.jpeg')}
                                style={{width: AppSizes.storySize + 5, borderWidth: 1, borderColor: colors.border, borderRadius: 52, height: AppSizes.storySize + 5}}
                                resizeMode='cover'
                            />
                            <View style={{position: 'absolute', bottom: 0, right: 0, borderWidth: 2, borderColor: colors.background, backgroundColor: AppColor.lightBlue, alignItems: 'center', justifyContent: 'center', width: 21, height: 21, borderRadius: 52}}>
                                <Icon name='add-outline' size={15} color={'white'} />
                            </View>
                        </View>
                    }
                </View>
                <Text style={{color: colors.text, fontWeight: '500', fontSize: 14}}>{item.title}</Text>
            </View>
        )
    }



    return (

        <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>

            {/* Header */}
            <View style={{
                paddingHorizontal: AppSizes.horizontalPadding,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                paddingVertical: 5,
                borderColor: colors.border
            }}>

                <Text style={[{fontSize: 30, fontWeight: '500', color: colors.text}]}>Instagram</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <AddSvg width={30} height={30} color={colors.text}/>
                    <LikeSvg width={30} height={30} color={colors.text}/>
                </View>

            </View>
            
            {/* Body */}
            <View style={{flex: 1}}>
                {/* ScrollView */}
                <ScrollView style={{}} showsHorizontalScrollIndicator={false}>
                    {/* Stories */}
                    <View style={{paddingVertical: 12, borderBottomWidth: 1, borderColor: colors.border, alignItems: 'flex-start'}}>

                        <FlatList
                            horizontal
                            data={DummyStory}
                            renderItem={({item})=> <RenderStory item={item} /> }
                            keyExtractor={item => item.id}
                            contentContainerStyle={{
                                gap: 15
                            }}
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>

                    {/* Posts */}
                    <View style={{}}>
                        <PostComp />
                        <PostComp />
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>

    )

}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    customFontText: {
      fontFamily: 'Billabong', // Use the exact font name
      fontSize: 40,
    },
  });