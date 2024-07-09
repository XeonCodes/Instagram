import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {DummyPosts, DummyStory} from '../Dummy/Dummy';
import {PostComp} from '../components/PostComp';
import AppHeader from '../components/AppHeader';
import {onRefresh, handleLoadMore} from '../utility/PostFunctions';
import StoryComp from '../components/StoryComp';

const Home = () => {
  // Hooks
  const {colors} = useTheme();

  // State
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const Item = () => {
    return <View style={{paddingVertical: 10}}></View>;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      {/* Header */}
      <AppHeader />

      {/* Stories */}

      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderColor: colors.border,
          alignItems: 'flex-start',
        }}>
        <FlatList
          horizontal
          data={DummyStory}
          renderItem={({item}) => <StoryComp item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            gap: 15,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Posts */}
      <FlatList
        ItemSeparatorComponent={Item}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={DummyPosts}
        renderItem={({item}) => <PostComp item={item} />}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={
          <View style={{height: 55, alignItems: 'center'}}>
            {isFetchingMore && (
              <ActivityIndicator size={'small'} style={{marginTop: 5}} />
            )}
          </View>
        }
        ListEmptyComponent={<View></View>}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  );
};

export default Home;
