import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'lightgrey', paddingTop: 50 }}
      >
        <Text style={{ margin: 30, fontSize: 25 }}>Welcome, User!</Text>
        <Text style={{ margin: 30, fontSize: 15 }}>Recommended Recipes</Text>
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        >
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
        <View style={{ flex: 1 }}>
          {/* Rest of the app comes ABOVE the action button component !*/}
          <ActionButton buttonColor='rgba(231,76,60,1)'>
            <ActionButton.Item
              buttonColor='#9b59b6'
              title='Profile'
              onPress={() => console.log('notes tapped!')}
            >
              <Icon name='md-person' style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#3498db'
              title='Explore Recipes'
              onPress={() => {}}
            >
              <Icon name='md-pizza' style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#1abc9c'
              title='New Recipe'
              onPress={() => {}}
            >
              <Icon name='md-nutrition' style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
