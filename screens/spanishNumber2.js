import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text ,ScrollView} from 'react-native';
import {Audio} from 'expo-av';


const listbackgroundColours =  {
  1: "#3498DB",
  2: "#E44236",
  3: "#2ecc72",
  4: "#EEC213",
  5: "#2B2B52",
  6: "#E74292",
  7: "#EAF0F1",
  8: "#BB2CD9",
  9: "#EA7773",
  10: "#758AA2",
}

const soundList = {
  one: require('../assets/one.wav'),
  two: require('../assets/two.wav'),
  three: require('../assets/three.wav'),
  four: require('../assets/four.wav'),
  five: require('../assets/five.wav'),
  six: require('../assets/six.wav'),
  seven: require('../assets/seven.wav'),
  eight: require('../assets/eight.wav'),
  nine: require('../assets/nine.wav'),
  ten: require('../assets/ten.wav'),
}


export default class spanishNumber2 extends React.Component{



  //function to play sound
  
  playSound = async number =>{
    const soundObject  = new Audio.Sound();
    try{

      let path = soundList[number]
      await soundObject.loadAsync(path)
       await soundObject
       .playAsync()
       .then( async playbackStatus => {
         setTimeout(()=>{
           soundObject.unloadAsync();

         }, playbackStatus.playableDurationMillis);
       })
       .catch (error => {
         console.log(error)
       })
    }catch(error) {
       console.log(error)
    }

  };


  render(){
    return(
      <ScrollView>
      <View style={styles.hello}>
        <View style = {styles.gridContainer}>
          <Image
          style = {styles.logo}
          source={require('../assets/LearnSpanish.jpg')}/>
          
          
          <View style = {styles.rowContainer}>
            <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[1]},  styles.item]}
            onPress={()=>{ this.playSound("one")}}
            >
             <Text style = {styles.itemText}>one</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.rowContainer}>
             <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[2]},  styles.item]}
            onPress={()=>{ this.playSound("two")}}
            >
             <Text style = {styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>
        
          <View style = {styles.rowContainer}>
            <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[3]},  styles.item]}
            onPress={()=>{ this.playSound("three")}}
            >
             <Text style = {styles.itemText}>three</Text>
            </TouchableOpacity>
           </View>
          <View style = {styles.rowContainer}>
           <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[4]},  styles.item]}
            onPress={()=>{ this.playSound("four")}}
            >
             <Text style = {styles.itemText}>four</Text>
            </TouchableOpacity>
          </View>
        
          <View style = {styles.rowContainer}>
            <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[5]},  styles.item]}
            onPress={()=>{ this.playSound("five")}}
            >
             <Text style = {styles.itemText}>five</Text>
            </TouchableOpacity>
           
          </View>
          <View style = {styles.rowContainer}>
            <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[6]},  styles.item]}
            onPress={()=>{ this.playSound("six")}}
            >
             <Text style = {styles.itemText}>six</Text>
            </TouchableOpacity>
          </View>
        
          <View style = {styles.rowContainer}>
            <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[7]},  styles.item]}
            onPress={()=>{ this.playSound("seven")}}
            >
             <Text style = {styles.itemText}>seven</Text>
            </TouchableOpacity>
            </View>
          <View style = {styles.rowContainer}>
            <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[8]},  styles.item]}
            onPress={()=>{ this.playSound("eight")}}
            >
             <Text style = {styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>
          
          <View style = {styles.rowContainer}>
            <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[9]},  styles.item]}
            onPress={()=>{ this.playSound("nine")}}
            >
             <Text style = {styles.itemText}>nine</Text>
            </TouchableOpacity>

          </View>
          <View style = {styles.rowContainer}>
            <TouchableOpacity 
            style = {[ {backgroundColor: listbackgroundColours[10]},  styles.item]}
            onPress={()=>{ this.playSound("ten")}}
            >
             <Text style = {styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  hello: {
    flex: 1,
    backgroundColor: '#fff',
    //  alignItems: 'center',
    // justifyContent: 'center',
  },
  gridContainer:{
    flex:1,
    margin:5
  },
  logo:{
    height:300,
    width:"100%",
   
   
  },
  rowContainer:{
   flexDirection:"row"

  },
  item:{
    flex:1,
    height:110,
    alignItems: "center",
    justifyContent: "center",
    margin:2,
  },
  itemText:{
    color: "#FFF",
    fontSize:20
  },
})