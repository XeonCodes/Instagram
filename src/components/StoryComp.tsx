import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {AppColor, AppSizes} from '../static/Info';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const StoryComp = ({item}: any) => {
  const {colors} = useTheme();

  return (
    <View style={{gap: 5, alignItems: 'center', borderRadius: 52}}>
      <View style={{position: 'relative'}}>
        {!item.main ? (
          <LinearGradient
            colors={['#D300C5', '#FF095F', '#FFBF00', '#FFBF00']}
            style={{
              width: AppSizes.storySize + 4,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 52,
              height: AppSizes.storySize + 4,
            }}>
            <Image
              source={item.dp}
              style={{
                width: AppSizes.storySize,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 52,
                height: AppSizes.storySize,
              }}
              resizeMode="cover"
            />
          </LinearGradient>
        ) : (
          <View style={{paddingLeft: 15}}>
            <Image
              source={require('../assets/jpg/man0.jpeg')}
              style={{
                width: AppSizes.storySize + 5,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 52,
                height: AppSizes.storySize + 5,
              }}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                borderWidth: 2,
                borderColor: colors.background,
                backgroundColor: AppColor.lightBlue,
                alignItems: 'center',
                justifyContent: 'center',
                width: 21,
                height: 21,
                borderRadius: 52,
              }}>
              <Icon name="add-outline" size={15} color={'white'} />
            </View>
          </View>
        )}
      </View>
      <Text style={{color: colors.text, fontWeight: '500', fontSize: 14}}>
        {item.title}
      </Text>
    </View>
  );
};

export default StoryComp;

const styles = StyleSheet.create({});
