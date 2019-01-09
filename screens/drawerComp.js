import React, {Component} from "react";
import { AppRegistry, Image,ImageBackground, StatusBar } from "react-native";
import { Container, Content, Text,Left,Right,Button,Icon,Body, List, ListItem } from "native-base";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, withNavigation } from 'react-navigation';


 class DrawerComp extends React.Component {
  render() {
    return (
      <Container>
        <Content padder style={{backgroundColor: '#ffffff'}}>
        
        <List>
        <ListItem onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }} icon>
          <Left>
              
             
              
            </Left>
            <Body>
              <Text>Data Pemakai</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'DataPropinsi' })
              ],
            }))
          }} icon>
          <Left>
              
          
              
            </Left>
            <Body>
              <Text>Data Propinsi</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          

          
          
          </List>
        </Content>
      </Container>
    );
  }
}
export default withNavigation(DrawerComp);