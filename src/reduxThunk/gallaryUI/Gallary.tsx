import {View, Text, Button, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPhotos} from '../gallary/gallarySlice';
import {RootState} from '../store/store';
import styles from './gallaryStyle';

const Gallary = () => {
  const disapatch = useDispatch();
  const photos = useSelector((state: RootState) => state.gallary.photos);

  console.log(photos);

  useEffect(() => {
    disapatch(getPhotos());
  }, [disapatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.gallary}> Photo Gallary</Text>
      <Text style={styles.description}>
        This is a photo gallary made using redux toolkit and redux thunk
      </Text>
      <FlatList
        key={'_'}
        data={photos}
        numColumns={3}
        keyExtractor={item => '_' + item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.imageContainer}>
              <Image
                key={item.id}
                source={{uri: item.download_url}}
                style={styles.imageStyle}
              />
            </View>
          );
        }}
      />
      <View style={styles.button}>
        <Button title="Load More" onPress={() => null} />
      </View>
    </View>
  );
};

export default Gallary;
