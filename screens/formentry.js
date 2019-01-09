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
import IconC from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import IconV from 'react-native-vector-icons/EvilIcons';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import { GET_KONTRASEPSI,GET_PROPINSI } from '../redux/actions/keluargaberencana'

class Formentry extends Component {
   componentDidMount() {
     this.props.dispatch(GET_KONTRASEPSI())
     this.props.dispatch(GET_PROPINSI())
  }
constructor(props) {
    super(props);
    this.inputEditProfile = this.inputEditProfile.bind(this);
    this.state = {
      idpropinsi:'',
      idkontrasepsi:'',
      jumlahpemakai:'',
      selected1: undefined,
      selected2: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value,
    });
  }
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
    // alert(this.state.selected2)
  }
  

 

 
  inputEditProfile () {
    this.setState({ isLoading: true })
      axios.post(`${ip}/listpemakaikontrasepsi`,
        {
          id_propinsi: this.state.selected1,
          id_kontrasepsi: this.state.selected2,
          jumlah_pemakai : this.state.jumlahpemakai
        }
      ).then((response) => {

        alert('Successfuly Add')
        this.setState({ isLoading: false })
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' })
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
              <Text style={{marginLeft:5}}>Data Propinsi</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{justifyContent:'center',alignItems:'center'}}>
              
              <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined, color: '#868686', transform: [{ scaleX: 1.0 }, { scaleY: .8 }] }}
                placeholder="Select Propinsi"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
                
              >
             
             {this.props.propinsiitem.results.map((type) => {
                  return <Picker.Item  textStyle={{fontSize: 8}} label={type.Nama_Propinsi} key={type.id} value={type.id} />
                })}
              </Picker>
            </Item>

              </Body>
            </CardItem>
           
          </Card>

          <Card style={{borderRadius: 0, marginLeft: 0,marginRight: 0}}>
            <CardItem header bordered>
            <IconMC name='baby' size={25}/>
              <Text style={{marginLeft:5}}>Data Kontrasepsi</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{justifyContent:'center',alignItems:'center'}}>
              
              <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined, color: '#868686', transform: [{ scaleX: 1.0 }, { scaleY: .8 }] }}
                placeholder="Pilih Kontrasepsi"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                
              >
             
                {this.props.kontrasepsiitem.results.map((type) => {
                  return <Picker.Item  textStyle={{fontSize: 8}} label={type.Nama_Kontrasepsi} key={type.id} value={type.id} />
                })}
              </Picker>
            </Item>

              </Body>
            </CardItem>
           
          </Card>

          <Card style={{borderRadius: 0, marginLeft: 0,marginRight: 0}}>
            <CardItem header bordered>
              <IconE name='list' size={25} />
              <Text style={{marginLeft:5}}>Details</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{justifyContent:'center',alignItems:'center'}}>
              <View style={{borderColor:'#E5E5E5', borderWidth:1,borderRadius:5,width:330}}>
               <Content padder>

                <Item style={{height:25, marginBottom:20}}>
                  <IconC style={{marginRight:10,}} name='data-usage' size={20} color='#6D6D6D' />
                  <Input onChangeText={(jumlahpemakai) => this.setState({ jumlahpemakai })} placeholder='Jumlah Pemakai' keyboardType='numeric'/>
                 </Item>
                 

               </Content>
                
                 
              </View>
              <Button onPress={this.inputEditProfile.bind(this)} block bordered light style={{borderColor:'gray', marginTop:10,height:50}} >
                 <IconF name='save' size={20} />
                 <Text style={{fontSize:15, fontWeight:'bold',color:'gray'}}>Save</Text>
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
    propinsiitem: state.propinsiReducer,
    kontrasepsiitem: state.kontrasepsiReducer
  }
}

export default connect(mapStateToProps)(Formentry);
