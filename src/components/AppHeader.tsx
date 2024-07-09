import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddSvg from '../assets/svg/Add.svg';
import {AppSizes} from '../static/Info';
import {useTheme} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import LikeSvg from '../assets/svg/Like.svg';
import InstagramLogo from '../assets/svg/logo.svg';
import Icon from 'react-native-vector-icons/Ionicons';

const AppHeader = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        paddingHorizontal: AppSizes.horizontalPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 5,
        borderColor: colors.border,
      }}>
      <Text style={[{fontSize: 30, fontWeight: '500', color: colors.text}]}>
        Radiusgram
      </Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <AddSvg width={30} height={30} color={colors.text} />
        <LikeSvg width={30} height={30} color={colors.text} />
      </View>
    </View>
  );
};

export default AppHeader;
