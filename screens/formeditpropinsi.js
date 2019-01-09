import React, { Component } from 'react';
import {
  View
} from 'react-native';
import axios from 'axios'
import ip from '../configip'
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Left, Body, Right, Button, Item,Input, Title, Text,Card,CardItem, Content,Form,Textarea,Picker,Icon } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFL from 'react-native-vector-icons/FontAwesome5';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import IconV from 'react-native-vector-icons/EvilIcons';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import { GET_PROPINSI_ID } from '../redux/actions/keluargaberencana'

 class Formeditpropinsi extends Component {
 
 
constructor(props) {
    super(props);
    this.state = {
      namapropinsi: '',
      idpropinsi : this.props.navigation.getParam('id', 'ID TIDAK ADA'),
    };
  }
  componentDidMount() {
    this.props.dispatch(GET_PROPINSI_ID(this.state.idpropinsi))
  }
  inputEditProfile (id) {
    this.setState({ isLoading: true })
      axios.patch(`${ip}/listpropinsi/${id}`,
        {
          Nama_Propinsi: this.state.namapropinsi
        }
      ).then((response) => {

        alert('Successfuly Add')
        this.setState({ isLoading: false })
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'DataPropinsi' })
          ],
        }))

      }).catch((error) => {

        alert('Fail to Add')
        this.setState({ isLoading: false })

      })
  }
  
  
  render() {
    return (
      <Container>
     <Header androidStatusBarColor='#fff' style={{backgroundColor:'#fff'}}>
                <Left style={{flex:1}}>
                <Button onPress={() => {this.props.navigation.goBack()}}  transparent>
                <IconI name='ios-arrow-back' size={30} />
          </Button>
                </Left>
                <Body style={{flex:1}}>
                    <Text style={{fontFamily:'monospace', fontSize:15,color:'#4373E7'}}>Entry Form </Text>
                </Body>
                <Right style={{flex:1}} />
      </Header>
      <Content style={{flex:1}}>
      <Card style={{borderRadius: 0, marginLeft: 0,marginRight: 0}}>
            <CardItem header bordered>
              <IconFL name='map-marked-alt' size={25}/>
              <Text style={{marginLeft:5}}>Nama Propinsi</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{justifyContent:'center',alignItems:'center'}}>
              <Item style={{borderRadius:5}} regular>
            <Input defaultValue={this.props.propinsiitem.data.Nama_Propinsi} onChangeText={(namapropinsi) => this.setState({ namapropinsi })} />
          </Item>
              
            <Button onPress= {() => {this.inputEditProfile(this.state.idpropinsi)}} block bordered light style={{borderColor:'gray', marginTop:10,height:50}} >
                 <IconF name='save' size={20} />
                 <Text style={{fontSize:15, fontWeight:'bold',color:'gray'}}>Edit</Text>
              </Button>
              </Body>
            </CardItem>
           
          </Card>
          </Content>

        
    </Container>
      
    );
  }
}
const mapStateToProps = (state) => {
  return {
    propinsiitem: state.propinsiReducerid
  }
}

export default connect(mapStateToProps)(Formeditpropinsi);
