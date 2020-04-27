import React from 'react';
import { Alert,TouchableOpacity, Image, StyleSheet, View, Text ,ScrollView,Dimensions} from 'react-native';
// import {Audio} from 'expo-av';
import{Button} from 'native-base';
import * as Animatable  from "react-native-animatable";

import{FontAwesome} from "@expo/vector-icons"

//get array of length 25
var itemArray = new Array(25).fill("empty");


export default class scratchandwingame extends React.Component{
constructor(props){
  super(props);
  this.state = {
    randomNumber:"",
    winMessage:"",
    winPrice:"",
    count: 0,
  };
}

//when app loads up

componentDidMount(){
  // call generate random number method
 this.setState({randomNumber: this.generateRandomNumber()})
//  this.setState({winMessage: this.winGame()})
};

generateRandomNumber = () => {
  // generate random number
 let randomNumber = Math.floor(Math.random()*25);
 this.setState({randomNumber: randomNumber, isScractched: true});
 return randomNumber;
 
};

scratchItem = (itemNumber) => {
  // decide lucky or unlucky
  this.setState({
    count: this.state.count + 1
  }); 
  if(this.state.count === 5 && this.state.winMessage=="lucky" ){
    Alert.alert(
      "hey u win",
      'Play again?', 
      [
        {text:'ok',onPress: () => {this.resetGame()}}
      ]
      )
    }
  else if( this.state.winMessage=="lucky"){
    Alert.alert(
      "you Win",
      'Play again?', 
      [
        {text:'ok',onPress: () => {this.resetGame()}}
      ]
      )
    }
    
  else if(this.state.count === 5 ){
    Alert.alert(
      "you scratch five times",
      'Play again?', 
      [
        {text:'ok',onPress: () => {this.resetGame()}}
      ]
      )
    }
  
  else if(this.state.randomNumber == itemNumber){
    itemArray[itemNumber] = "lucky"
    var winMessage = itemArray[itemNumber]
    this.setState({ winMessage: winMessage});
    var winPrice = "YOU WIN"
    this.setState({ winPrice : winPrice })
  }
  else{
    itemArray[itemNumber] = "unlucky"

  }
  // this.winGame();
  this.forceUpdate();

};
scratchItemIcon = (itemNumber) => {

  //todo find right icon
  
  
    if(itemArray[itemNumber] === "lucky"){
      return 'dollar'
    }
    else if(itemArray[itemNumber] === "unlucky"){
       return 'frown-o'
    }
    return'circle'
  };

scratchItemColor = (itemNumber) => {
  //todo find right color



  if(itemArray[itemNumber] === "lucky"){
    return 'green'
  }
  else if(itemArray[itemNumber] === "unlucky"){
     return 'red'
  }
  return'black'
};

resetGame =() =>{
  //todo button-reset the game
  this.setState({randomNumber: this.generateRandomNumber()},
  ()=>{
    itemArray.fill("empty");
    var count=0;
    this.setState({count: count})
    this.setState({winMessage: ""})
    this.setState({winPrice: ""})
    this.forceUpdate();
  }
  )
};
showAllItem =()=>{
  // button-reveal all icons
  itemArray.fill('unlucky');
  itemArray[this.state.randomNumber] ='lucky';
  this.forceUpdate();
}



stopGame= () =>{
  if(this.state.count === 5 ){
    Alert.alert(
      "you scratch five times",
      'Play again?', 
      [
        {text:'ok',onPress: () => {this.resetGame()}}
      ]
      )
    }
  };




render(){
    return(
      <View style={styles.hello}>
        <Animatable.Text
             animation="bounceIn"
             duration={3000}
             style={styles.text_header}
               resizeMode={"stretch"}
             >You have only five chance!!</Animatable.Text> 
       
     
         {/* <Text style={styles.topText}>{this.state.randomNumber}</Text> */}
      
       
         <Text style={styles.winMessage}>{this.state.winPrice}</Text>
       
       <View style={styles.grid}>

         <View style={styles.itemrow}>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(0)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(0)}
             size={50}
             color = {this.scratchItemColor(0)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(1)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(1)}
             size={50}
             color = {this.scratchItemColor(1)}

             />
           </TouchableOpacity>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(3)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(3)}
             size={50}
             color = {this.scratchItemColor(3)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(4)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(4)}
             size={50}
             color = {this.scratchItemColor(4)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(5)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(5)}
             size={50}
             color = {this.scratchItemColor(5)}

             />
           </TouchableOpacity>


         </View>
       
         <View style={styles.itemrow}>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(6)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(6)}
             size={50}
             color = {this.scratchItemColor(6)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(7)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(7)}
             size={50}
             color = {this.scratchItemColor(7)}

             />
           </TouchableOpacity>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(8)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(8)}
             size={50}
             color = {this.scratchItemColor(8)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(9)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(9)}
             size={50}
             color = {this.scratchItemColor(9)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(10)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(10)}
             size={50}
             color = {this.scratchItemColor(10)}

             />
           </TouchableOpacity>


         </View>
       
         <View style={styles.itemrow}>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(11)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(11)}
             size={50}
             color = {this.scratchItemColor(11)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(12)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(12)}
             size={50}
             color = {this.scratchItemColor(12)}

             />
           </TouchableOpacity>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(13)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(13)}
             size={50}
             color = {this.scratchItemColor(13)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(14)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(14)}
             size={50}
             color = {this.scratchItemColor(14)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(15)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(15)}
             size={50}
             color = {this.scratchItemColor(15)}

             />
           </TouchableOpacity>


         </View>
       
         <View style={styles.itemrow}>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(16)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(16)}
             size={50}
             color = {this.scratchItemColor(16)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(17)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(17)}
             size={50}
             color = {this.scratchItemColor(17)}

             />
           </TouchableOpacity>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(18)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(18)}
             size={50}
             color = {this.scratchItemColor(18)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(19)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(19)}
             size={50}
             color = {this.scratchItemColor(19)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(20)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(20)}
             size={50}
             color = {this.scratchItemColor(20)}

             />
           </TouchableOpacity>


         </View>
       
         <View style={styles.itemrow}>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(21)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(21)}
             size={50}
             color = {this.scratchItemColor(21)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(22)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(22)}
             size={50}
             color = {this.scratchItemColor(22)}

             />
           </TouchableOpacity>
           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(23)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(23)}
             size={50}
             color = {this.scratchItemColor(23)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(24)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(24)}
             size={50}
             color = {this.scratchItemColor(24)}

             />
           </TouchableOpacity>

           <TouchableOpacity style={styles.item} onPress={()=>{
             this.scratchItem(25)
           }}>
             <FontAwesome 
             name = {this.scratchItemIcon(25)}
             size={50}
             color = {this.scratchItemColor(25)}

             />
           </TouchableOpacity>


         </View>
       
       
       </View>
       <Button rounded success style={styles.button} onPress={()=>{this.showAllItem()}}>
         <Text style={styles.buttonText}>Show All coupons</Text>
       </Button>
       <Button rounded Primary style={styles.button} onPress={()=>{this.resetGame()}}>
         <Text style={styles.buttonText}>Reset Game</Text>
       </Button>
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  hello: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    justifyContent: "center",
  },
  grid:{

  },
  itemrow:{
  flexDirection: "row"
  },
  item:{
   alignItems: "center",
    padding:10,
    borderColor:'#000',
    borderWidth:2,
    minWidth:70

  },
  button:{
    marginVertical:15,
    padding:30,
  },
  buttonText:{
    color:"#fff",
    fontSize:18,

  },
  topBar:{
    
  backgroundColor:"#3C40C6",
  height:50,
  justifyContent: "center",
  // alignContent:"center",
  // alignItems:"center",
  margin:2,
  width: Dimensions.get('window').width,
  marginVertical:20,
  marginTop:1,

  },
  topText:{
    
    textAlign:"center",
},
winMessage:{
  padding:20,
  fontSize:25,
  fontWeight:"bold"
  },
  text_header:{
    color: "#2C3335",
    fontWeight:"100",
    fontSize:30,
    
    
    
    
   
},
});