import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {LinearGradient} from 'react-native-linear-gradient';
import {AppSizes} from '../static/Info';
import MoreSvg from '../assets/svg/More.svg';
import LoveSvg from '../assets/svg/Like.svg';
import CommentSvg from '../assets/svg/Comment.svg';
import ShareSvg from '../assets/svg/Share.svg';
import BookmarkSvg from '../assets/svg/Bookmark.svg';
import {formatTimestamp, postTimeAgo} from '../utility/PerformTask';

/* ==
    Post 
    Comp
== */

interface Post {
  item: any;
}

export const PostComp = ({item}: Post) => {
  const {colors} = useTheme();

  return (
    <View>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: AppSizes.horizontalPadding,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 12,
        }}>
        {/* Profile */}
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <LinearGradient
            colors={['#D300C5', '#FF095F', '#FFBF00', '#FFBF00']}
            style={{
              width: AppSizes.postDpSize + 4,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 52,
              height: AppSizes.postDpSize + 4,
            }}>
            <Image
              source={item.account_dp}
              style={{
                width: AppSizes.postDpSize,
                borderWidth: 1,
                borderColor: colors.background,
                borderRadius: 52,
                height: AppSizes.postDpSize,
              }}
              resizeMode="cover"
            />
          </LinearGradient>
          <View>
            <Text style={{color: colors.text, fontWeight: '600', fontSize: 17}}>
              {item.account_name}
            </Text>
            {item.isSponsored ? (
              <Text style={{color: colors.text, fontSize: 15}}>Sponsored</Text>
            ) : (
              <Text style={{color: colors.text, fontSize: 15}}>
                {formatTimestamp(item.created_at)}
              </Text>
            )}
          </View>
        </View>

        {/* More Button */}
        <MoreSvg width={30} height={30} color={colors.text} />
      </View>

      {/* Media */}
      <View style={{maxHeight: 450, overflow: 'hidden'}}>
        <Image
          source={item.post_image}
          style={{maxHeight: 450, width: '100%'}}
          resizeMode="cover"
        />
      </View>

      {/* Reaction */}
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: AppSizes.horizontalPadding,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <LoveSvg width={32} height={32} color={colors.text} />
          <CommentSvg width={32} height={32} color={colors.text} />
          <ShareSvg width={32} height={32} color={colors.text} />
        </View>
        <View>
          <BookmarkSvg width={35} height={34} color={colors.text} />
        </View>
      </View>

      {/* Post Content */}
      <View style={{paddingHorizontal: AppSizes.horizontalPadding, gap: 10}}>
        {/* Likes */}
        {item.post_like > 0 && (
          <Text style={{color: colors.text, fontWeight: '600', fontSize: 18}}>
            {item.post_like.toLocaleString()} likes
          </Text>
        )}

        {/* Post Text */}
        <Text style={{fontSize: 17, color: colors.text}}>
          <Text style={{fontWeight: '600'}}>
            {item.account_name.toLowerCase()}
          </Text>{' '}
          <Text style={{opacity: 0.9}}>
            {item.post_message.length > 100
              ? item.post_message.substring(0, 100) + '...'
              : item.post_message}
          </Text>
        </Text>
        <View style={{gap: 4}}>
          <Text style={{opacity: 0.5, color: colors.text, fontSize: 17}}>
            View all {item.post_comments.toLocaleString()} comments
          </Text>
          <Text style={{opacity: 0.6, color: colors.text, fontSize: 14}}>
            {postTimeAgo(item.created_at)}
          </Text>
        </View>
      </View>
    </View>
  );
};
