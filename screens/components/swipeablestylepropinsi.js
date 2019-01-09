import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View ,Alert} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'
import ip from '../../configip'
import { connect } from 'react-redux'
import {  GET_PROPINSI } from '../../redux/actions/keluargaberencana'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, withNavigation } from 'react-navigation';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

 class SwipeablestylePropinsi extends Component {
  state = {
    isLoading: false,
   
  };

  gotoEdit(id,Nama_Propinsi) {
    Alert.alert(
      'Confirm Edit',
      `Yakin Edit ${Nama_Propinsi} ?`,
      [
        
        {text: 'Cancel', onPress: () => this.close(), style: 'cancel'},
        {text: 'OK', onPress: () => 
        
        this.props.navigation.navigate('Formeditpropinsi', {id})
      // alert(JSON.stringify(this.props))
      },
      ],
      { cancelable: false }
    )
   
  }

  handleDelete (getID,getName)  {
    Alert.alert(
      'Confirm Delete',
      `Sure to delete ${getName} ?`,
      [
        
        {text: 'Cancel', onPress: () => this.close(), style: 'cancel'},
        {text: 'OK', onPress: () => 
        
    this.gotDelete(getID)
      
      },
      ],
      { cancelable: false }
    )
    // alert(getID)
    
  }
  renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <RectButton style={styles.leftAction} onPress= {() => {this.gotoEdit(this.props.itemId.id,this.props.itemId.Nama_Propinsi )}}>
        <AnimatedIcon
          name="mode-edit"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  };
  renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <RectButton style={styles.rightAction} onPress= {() => {this.handleDelete(this.props.itemId.id,this.props.itemId.Nama_Propinsi )}}>
        <AnimatedIcon
          name="delete-forever"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  };
  updateRef = ref => {
    this._swipeableRow = ref;
  };
gotDelete(itemId) {
    this.setState({ isLoading: true })
    // Whatever you want to do with that item
    axios.delete(`${ip}/listpropinsi/${itemId}`).then(response => {
      this.setState({ isLoading: false })
      Alert.alert(
        'Success',
        'Succes Deleted',
        [
          
          {text: 'OK', onPress: () => 
          
        this.props.dispatch(GET_PROPINSI())
        
        },
        ],
        { cancelable: false }
      )
      }).catch((error) => {
  
        alert('Fail to Delete')
        this.setState({ isLoading: false })
  
      })
   
  }
  close () {
    this._swipeableRow.close();
  };

  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={80}
        rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#388e3c',
    justifyContent: 'center',
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  rightAction: {
    alignItems: 'flex-end',
    backgroundColor: '#dd2c00',
    flex: 1,
    justifyContent: 'center',
  },
});
const mapStateToProps = (state) => {
  return {
    propinsiitem: state.propinsiReducer
  }
}

const  withNav =  withNavigation(SwipeablestylePropinsi)
export default connect(mapStateToProps)(withNav);