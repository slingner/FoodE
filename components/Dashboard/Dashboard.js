import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import PlusButton from '../PlusButton/PlusButton';
import RecipeCard from '../RecipeCard/RecipeCard';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  state = {
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
    activeIndex: 0,
  };

  _renderItem = ({ item, index }) => {
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
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'lightgrey',
          paddingTop: 50,
        }}
      >
        <ScrollView style={{}}>
          <Text style={{ margin: 30, fontSize: 25 }}>Welcome, User!</Text>
          <Text style={{ margin: 30, fontSize: 15 }}>Recommended Recipes</Text>

          {/* <-- Carousel of Recommended Recipes Based on Time--> */}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
              layout={'default'}
              // ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem={(index) => setState({ activeIndex: index })}
            />
          </View>
          <View>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </View>
        </ScrollView>
        <PlusButton navigate={navigate} />
      </SafeAreaView>
    );
  }
}
