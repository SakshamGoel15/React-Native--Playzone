import React from 'react';
import { Text, StyleSheet,  View, TouchableOpacity, Alert} from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";


var itemArray = new Array(9).fill('empty'); 

export default class tictactoe extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isCross: true,
      winMessage:"",
    }
  }


   drawItem = ( itemNumber ) =>{
     // decide what to draw: circle or cross or default
    
     if( itemArray[itemNumber] === "empty" ){
       itemArray[itemNumber] = this.state.isCross;
       this.setState ({ isCross: !itemArray[itemNumber] }, () =>{} );
     }
   
   //check for win
   this.winGame();
   this.stopgame();
   

   };

   stopgame = () =>{
    if(this.state.winMessage !== ""){
      Alert.alert(
       "Game over",
       'Play again?', 
       [
         {text:'ok',onPress: () => {this.resetGame()}}
       ]
     )}
   }

   chooseItemIcon = (itemNumber) => {
     // choose approiate icon

     if( itemArray[itemNumber] !== "empty" ){
     return itemArray[itemNumber]? "cross" : "circle"
     }
     return "pencil";

   };


   chooseItemColour =(itemNumber) =>{
     // choose color for icon
     if( itemArray[itemNumber] !== "empty" ){
      return itemArray[itemNumber] ? "red" : "green"
      }
      return "black";
 
   }

   resetGame = () =>{
     // reset all values and starts
     itemArray.fill("empty");
     this.setState({ winMessage:'' })
     //force update to the component
     this.forceUpdate();

    };
   

   winGame =() =>{
     //decide/checked winner
    
     if ( ( itemArray[0] !== "empty" ) && ( itemArray[0] == itemArray[1] ) && ( itemArray[1] == itemArray[2] )) {

      this.setState({ winMessage: ( itemArray[0]? 'Cross': "Circle" ).concat(' win') });
      

     }
     else if ( ( itemArray[3] !== "empty" ) && ( itemArray[3] == itemArray[4] ) && ( itemArray[4] == itemArray[5] )) {

      this.setState({ winMessage: ( itemArray[3]? 'Cross': "Circle" ).concat(' win') })
    }
    else if ( ( itemArray[6] !== "empty" ) && ( itemArray[6] == itemArray[7] ) && ( itemArray[7] == itemArray[8] )) {

      this.setState({ winMessage: ( itemArray[6]? 'Cross': "Circle" ).concat(' win') })
    }
    else if ( ( itemArray[0] !== "empty" ) && ( itemArray[0] == itemArray[3] ) && ( itemArray[3] == itemArray[6] )) {

      this.setState({ winMessage: ( itemArray[0]? 'Cross': "Circle" ).concat(' win') })
    }
    else if ( ( itemArray[1] !== "empty" ) && ( itemArray[1] == itemArray[4] ) && ( itemArray[4] == itemArray[7] )) {

      this.setState({ winMessage: ( itemArray[1]? 'Cross': "Circle" ).concat(' win') })
    }
    else if ( ( itemArray[2] !== "empty" ) && ( itemArray[2] == itemArray[5] ) && ( itemArray[5] == itemArray[8] )) {

      this.setState({ winMessage: ( itemArray[2]? 'Cross': "Circle" ).concat(' win') })
    }
    else if ( ( itemArray[0] !== "empty" ) && ( itemArray[0] == itemArray[4] ) && ( itemArray[4] == itemArray[8] )) {

      this.setState({ winMessage: ( itemArray[0]? 'Cross': "Circle" ).concat(' win') })
    }
    else if ( ( itemArray[2] !== "empty" ) && ( itemArray[2] == itemArray[4] ) && ( itemArray[4] == itemArray[6] )) {

      this.setState({ winMessage: ( itemArray[2]? 'Cross': "Circle" ).concat(' win') })
    }
    

  }


  render(){
  return (
   <View style={ Styles.hello}>
       <View style={Styles.grid}>
         <View style={Styles.row}>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(0)}>
              <Entypo
              name={this.chooseItemIcon(0)}
              size={50}
              color={this.chooseItemColour(0) }

              />
            </TouchableOpacity>
           </View>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(1)}>
              <Entypo
              name={this.chooseItemIcon(1)}
              size={50}
              color={this.chooseItemColour(1) }

              />
            </TouchableOpacity>
           </View>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(2)}>
              <Entypo
              name={this.chooseItemIcon(2)}
              size={50}
              color={this.chooseItemColour(2) }

              />
            </TouchableOpacity>
           </View>
         </View>
         <View style={Styles.row}>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(3)}>
              <Entypo
              name={this.chooseItemIcon(3)}
              size={50}
              color={this.chooseItemColour(3) }

              />
            </TouchableOpacity>
           </View>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(4)}>
              <Entypo
              name={this.chooseItemIcon(4)}
              size={50}
              color={this.chooseItemColour(4) }

              />
            </TouchableOpacity>
           </View>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(5)}>
              <Entypo
              name={this.chooseItemIcon(5)}
              size={50}
              color={this.chooseItemColour(5) }

              />
            </TouchableOpacity>
           </View>
         </View>
         <View style={Styles.row}>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(6)}>
              <Entypo
              name={this.chooseItemIcon(6)}
              size={50}
              color={this.chooseItemColour(6) }

              />
            </TouchableOpacity>
           </View>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(7)}>
              <Entypo
              name={this.chooseItemIcon(7)}
              size={50}
              color={this.chooseItemColour(7) }

              />
            </TouchableOpacity>
           </View>
           <View style={Styles.item}>
            <TouchableOpacity
              onPress = {() => this.drawItem(8)}>
              <Entypo
              name={this.chooseItemIcon(8)}
              size={50}
              color={this.chooseItemColour(8) }

              />
            </TouchableOpacity>
           </View>
         </View>
       </View>
       <Text style={Styles.winMessage}>{this.state.winMessage}</Text>
       <Button full rounded primary style={Styles.button} onPress = {() => this.resetGame() }>
         <Text  style={Styles.btntext}>Reset Game</Text>
       </Button>
   </View>
  );
}}  

const Styles = StyleSheet.create({
  hello: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    justifyContent: 'center',
  },
//   button:{
// padding: 10,

//   }
grid:{

},
row:{
  flexDirection:'row'
},
item:{
  borderWidth:2,
  borderColor: "#000",
  padding: 30,
},
winMessage:{
padding:20,
fontSize:25,
fontWeight:"bold"
},
button:{
  margin:20,
  padding:10

},
btntext:{
  color: "#fff",
  fontWeight: "bold"
}


});
