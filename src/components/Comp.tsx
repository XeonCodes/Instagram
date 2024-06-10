import { Image, StyleSheet, Text, View } from "react-native"
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "react-native-linear-gradient";
import { AppSizes } from "../static/Info";
import MoreSvg from '../assets/svg/More.svg';
import LoveSvg from '../assets/svg/Like.svg';
import CommentSvg from '../assets/svg/Comment.svg';
import ShareSvg from '../assets/svg/Share.svg';
import BookmarkSvg from '../assets/svg/Bookmark.svg';


/* ==
    Post 
    Comp
== */
export const PostComp = () => {

    const {colors} = useTheme();

    return (
        <View>

            {/* Header */}
            <View style={{paddingHorizontal: AppSizes.horizontalPadding, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <LinearGradient colors={['#D300C5', '#FF095F', '#FFBF00', '#FFBF00']} style={{width: AppSizes.postDpSize + 4, alignItems: 'center', justifyContent: 'center', borderRadius: 52, height: AppSizes.postDpSize + 4}}>
                        <Image
                            source={require("../assets/jpg/man1.jpeg")}
                            style={{width: AppSizes.postDpSize, borderWidth: 1, borderColor: colors.background, borderRadius: 52, height: AppSizes.postDpSize}}
                            resizeMode='cover'
                        />
                    </LinearGradient>
                    <View>
                        <Text style={{color: colors.text, fontWeight: '600', fontSize: 17}}>Sam Mike</Text>
                        <Text style={{color: colors.text, fontSize: 15}}>Sponsored</Text>
                    </View>
                </View>
                <MoreSvg width={30} height={30} color={colors.text}/>
            </View>


            {/* Media */}
            <View style={{height: 450, alignItems: 'center'}}>
                <Image
                    source={require("../assets/png/post7.png")}
                    style={{height: 450, width: "100%" }}
                    resizeMode='cover'
                />
            </View>

            {/* Reaction */}
            <View style={{paddingVertical: 12, paddingHorizontal: AppSizes.horizontalPadding, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <LoveSvg width={32} height={32} color={colors.text}/>
                    <CommentSvg width={32} height={32} color={colors.text}/>
                    <ShareSvg width={32} height={32} color={colors.text}/>
                </View>
                <View>
                    <BookmarkSvg width={35} height={34} color={colors.text}/>
                </View>
            </View>

            {/* Post Content */}
            <View style={{paddingHorizontal: AppSizes.horizontalPadding, gap: 10}}>

                {/* Likes */}
                <Text style={{color: colors.text, fontWeight: '600', fontSize: 18}}>12,000 likes</Text>

                {/* Post Text */}
                <Text style={{fontSize: 17, color: colors.text}}><Text style={{fontWeight:'600'}}>olumide</Text> <Text style={{opacity: 0.9}}>The Platform June 12 special will be held at The Ball Room of the Marriott Hotel GRA Ikeja!...</Text></Text>
                <View style={{gap: 4}}>
                    <Text style={{opacity: 0.5, color: colors.text, fontSize: 17}}>View all 660 comments</Text>
                    <Text style={{opacity: 0.6, color: colors.text, fontSize: 14}}>2hrs ago</Text>
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 100,
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });