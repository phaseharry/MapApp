import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

class Restaurant extends React.Component{
  render(){
    // const { cuisines, featured_image, location, name, photo_url, user_rating } = this.props.details;
    // const { aggregate_rating, rating_color, rating_text, votes } = user_rating;
    return (
      <View>
        {/* <Card 
          title={name}
        
        >

        </Card> */}
      </View>
    )
  }
};

const mapStateToProps = ({restaurants}, { restaurantsId }) => {
  return {
    details: restaurants.find(rest => {
      return rest.id === restaurantsId
    })
  }
}

// cover image, profile icon, rating system, reviews and lastly the link which provides
// directions to the place from your current location.

export default connect(mapStateToProps, null)(Restaurant);