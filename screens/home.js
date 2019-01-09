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
import Swipeablestyle from './components/swipeablestyle'
import { connect } from 'react-redux'
import { GET_PEMAKAI } from '../redux/actions/keluargaberencana'
import DrawerComp from './drawerComp';

const RowItem = ({ item }) => (
    <RectButton style={styles.rectButton} onPress={() => Alert.alert('HI')}>
    
     
              
        <ListItem key={item.id}  >
        <Left style={{flex:3,flexDirection:'column'}}>
        <Text style={{fontWeight:'bold',fontSize:15 }}>Transaksi {item.id}</Text>
          <Text style={{fontWeight:'bold',fontSize:11 }}>Dengan jumlah sebesar {item.jumlah_pemakai} Pemakai</Text>
          <Text>{item.address}</Text>
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
        <Swipeablestyle itemId={item} >
          <RowItem item={item} />
        </Swipeablestyle>
      );
  };
class Home extends React.Component{
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
        await  this.props.dispatch(GET_PEMAKAI())
      }
      gotoForm = () => {
        this.props.navigation.navigate('Formentry')
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
                    <Text style={{fontFamily:'monospace', fontSize:15,color:'#4373E7'}}>Data Pemakai</Text>
                </Body>
                <Right style={{flex:1}} />
            </Header>
           
           
            <Content style={{flex:1}}>
            <FlatList
        data={this.props.pemakaiitem.results}
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
  const DATA = [
    {
      from: "D'Artagnan",
      when: '3:11 PM',
      message:
        'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
    },
    {
      from: 'Aramis',
      when: '11:46 AM',
      message:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
    },
    {
      from: 'Athos',
      when: '6:06 AM',
      message:
        'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
    },
    {
      from: 'Porthos',
      when: 'Yesterday',
      message:
        'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
    },
    {
      from: 'Domestos',
      when: '2 days ago',
      message:
        'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
    },
    {
      from: 'Cardinal Richelieu',
      when: '2 days ago',
      message:
        'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
    },
    {
      from: "D'Artagnan",
      when: 'Week ago',
      message:
        'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.',
    },
    {
      from: 'Cardinal Richelieu',
      when: '2 weeks ago',
      message:
        'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. ',
    },
  ];
  const mapStateToProps = (state) => {
    return {
      pemakaiitem: state.pemakaiReducer
    }
  }
  
  export default connect(mapStateToProps)(Home);