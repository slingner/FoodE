import * as React from 'react';
import { Text, View, Image } from 'react-native';

export default class RecipeCard extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            overflow: 'hidden',
            margin: 30,
          }}
        >
          <View>
            <Image
              // eslint-disable-next-line no-undef
              source={require('./assets/toast.jpg')}
              style={{
                height: 135,
                width: 360,
              }}
            />
          </View>
          <View style={{ padding: 10, width: 360 }}>
            <Text>Title</Text>
            <Text style={{ color: '#777', paddingTop: 5 }}>
              Description of the image
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
