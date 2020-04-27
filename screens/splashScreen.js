import React from 'react';
import {StyleSheet, View, Text,StatusBar, Dimensions,TouchableOpacity,Picker} from 'react-native';

import * as Animatable  from "react-native-animatable";
import {LinearGradient}  from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



export default class splashScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            PickerValue:''
        }
    };
    clickme(value){
        const data = this.state.PickerValue;
        if(data==""){
            alert("Please select a option");
        }
        else if(data=="Tic_Tac_Toe") {
            {this.props.navigation.navigate("Tic_Tac_Toe")}
        }
        else if(data=="Scratch_and_win_game") {
            {this.props.navigation.navigate("Scratch_and_win_game")}
        }
        else if(data=="Spanish_Number") {
            {this.props.navigation.navigate("Learn_Spanish_Numbers")}
        }
      
    }

render(){
    return(
   
       <View style={styles.hello}>
         <View style={styles.header}>
         <Animatable.Text
             animation="bounceIn"
             duration={3000}
             style={styles.text_header}
               resizeMode={"stretch"}
             >Welcome to play zone</Animatable.Text> 
         </View>
         
             <Animatable.Image
             animation="bounceIn"
             duration={3000}
               source={require('../assets/main.jpeg')}
               style={styles.logo}
               resizeMode={"stretch"}
             />


         <Picker
        
         selectedValue={this.state.PickerValue}
        style={styles.Picker}
        onValueChange={(itemValue, itemIndex) => this.setState({PickerValue: itemValue})}
      >
          <Picker.Item 
          borderRadius="50"
          color="#99AAAB"
          label="Select a Game" value="" />
        <Picker.Item label="Tic_Tac_Toe" value="Tic_Tac_Toe" />
        <Picker.Item label="Scratch_and_win_game" value="Scratch_and_win_game" />
        <Picker.Item label="Learn_Spanish_Numbers" value="Spanish_Number" />
       
      </Picker>

      <View style={styles.button}>
                 <TouchableOpacity
                 onPress={()=>this.clickme()}
                 >
                <LinearGradient 
                colors={['#5db8fe', '#39cff2']}
                style={styles.signIn}
                >
                    <Text style={styles.textSignIn}>Get started</Text>
                    <MaterialIcons name="navigate-next"
                    color="white"
                    size={20}
                    
                    />

                 </LinearGradient>
                 </TouchableOpacity>
            </View>
       </View>
       
    );
  }
}
const styles = StyleSheet.create({
  hello: {
    flex: 1,
   
     alignItems: 'center',
     justifyContent:"center",
     backgroundColor: '#fff',
    
  },
  header:{
    flex:.3,
    alignItems: 'center',
    justifyContent: "center",
},
  button:{
    alignItems:"center",
    marginTop:30,
  },
  signIn:{
    width:150,
    height:40,
     justifyContent:'center',
     alignItems:'center',
    borderRadius:50,
    flexDirection:'row',
    
},
textSignIn:{
    color:"#fff",
    fontWeight:"bold",
    
},
logo:{
    height:400

},
Picker:{
    height: 50,
    width: 175,
    marginTop:30,
    marginRight:-20,
    justifyContent:"center",
    alignItems:"center",
},
  text_header:{
    color: "#2C3335",
    fontWeight:"100",
    fontSize:35,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:80
    
   
},
 
});