import React from 'react'
import {Text,
        View,
        StyleSheet,
        TouchableOpacity,
        ListView,
        FlatList,
        Alert} from 'react-native'
import {List,
        ListItem,
        Container,
        Header,
        Content,
        Icon,
        Card,
        CardItem,
        Body,
        Left,
        Fab,
        Right,
        Button,
        Thumbnail,
        Drawer } from 'native-base';
import { RectButton } from 'react-native-gesture-handler';
import IconI from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from "react-native-easy-grid";
import SwipeablestylePropinsi from './components/swipeablestylepropinsi'
import { connect } from 'react-redux'
import { GET_PROPINSI } from '../redux/actions/keluargaberencana'
import DrawerComp from './drawerComp';

const RowItem = ({ item }) => (
    <RectButton style={styles.rectButton} onPress={() => Alert.alert('HI')}>
    
     
              
        <ListItem key={item.id}  >
        <Left style={{flex:3,flexDirection:'column'}}>
          <Text style={{fontWeight:'bold',fontSize:11 }}>{item.Nama_Propinsi}</Text>
       
        </Left>
        <Body style={{flex:1}}>
         
          
        </Body>
       <Right style={{flex:1}}></Right>
        
      </ListItem>
    
      
      {/* <Text style={styles.fromText}>{item.from}</Text>
      <Text numberOfLines={2} style={styles.messageText}>
        {item.message}
      </Text>
      <Text style={styles.dateText}>
        {item.when} {'❭'}
      </Text> */}
    </RectButton>
  );

const SwipeableRow = ({item}) => {
   
      return (
        <SwipeablestylePropinsi itemId={item} >
          <RowItem item={item} />
        </SwipeablestylePropinsi>
      );
  };
class DataPropinsi extends React.Component{
  closeDrawer()  {
    this.drawer._root.close()
  }

  openDrawer()  {
    this.drawer._root.open()
  }
    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
     
      async componentDidMount() {
        await  this.props.dispatch(GET_PROPINSI())
      }
      gotoForm = () => {
        this.props.navigation.navigate('Formentrypropinsi')
      }
    render(){
      
      
        return(
          <Drawer
        type="static"
        styles={{
            drawer: {
              shadowColor: "#000000",
              shadowOpacity: 0.8,
              shadowRadius: 0
            }
          }}
              
        ref={(ref) => { this.drawer = ref; }}
        content={<DrawerComp navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} 
        captureGestures={true}
        
        acceptPan={true}
        panOpenMask= {10}
        negotiatePan={true}     
        >
            <Container>
            <Header androidStatusBarColor='#fff' style={{backgroundColor:'#fff'}}>
                <Left style={{flex:1}}>
                    <Button onPress={() => this.openDrawer() } transparent><IconI name='ios-menu' size={30} /></Button>
                </Left>
                <Body style={{flex:1}}>
                    <Text style={{fontFamily:'monospace', fontSize:15,color:'#4373E7'}}>Data Propinsi</Text>
                </Body>
                <Right style={{flex:1}} />
            </Header>
           
           
            <Content style={{flex:1}}>
            <FlatList
        data={this.props.propinsiitem.results}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={<Text style={{textAlign:'center'}}>Empty Data</Text>}
        renderItem={({ item, index }) => (
          <SwipeableRow item={item} index={index} />
        )}
        keyExtractor={(item, index) => `message ${index}`}
      />
            </Content>
            <Fab
            active={this.state.active}
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', alignSelf:'flex-end' }}
            position="bottomRight"
            onPress={this.gotoForm}>
            <Icon name="add" />
            
          </Fab>
          </Container>
          </Drawer>
          
        )
    }
}

const styles = StyleSheet.create({
    rectButton: {
      flex: 1,
      height: 80,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: 'white',
      borderBottomColor:'transparent', 
      borderWidth: 0
    },
    separator: {
      backgroundColor: 'rgb(200, 199, 204)',
      height: 1,
    },
    fromText: {
      fontWeight: 'bold',
      backgroundColor: 'transparent',
    },
    messageText: {
      color: '#999',
      backgroundColor: 'transparent',
    },
    dateText: {
      backgroundColor: 'transparent',
      position: 'absolute',
      right: 20,
      top: 10,
      color: '#999',
      fontWeight: 'bold',
    },
  });
  
  const mapStateToProps = (state) => {
    return {
      propinsiitem: state.propinsiReducer
    }
  }
  
  export default connect(mapStateToProps)(DataPropinsi);