import React,{Component} from 'react'
import { Text,View ,SafeAreaView,ImageBackground, Alert,Image} from 'react-native'
import MapView,{Marker} from 'react-native-maps'
export default class IssLocationScreen  extends Component{
constructor(){
    super()
    this.state={
 location:{},


    }
}
componentDidMount(){
    this.getIssLocation()
}
getIssLocation=()=>{
axios
 .get("https://api.wheretheiss.at/v1/satellites/25544")
 .then(response=>{
this.setState({
location:response.data

})

 })
 .catch(error=>{
     Alert.alert(error.message)
 })

}
render(){
    if(Object.keys(thi.state.location).length===0){
return(
<Text>
    loading...
</Text>

)


    }
    else{

    
return(
<View style={{
flex:1,
justifyContent:"center",
alignItems:"center"

}}>
<SafeAreaView/>
<ImageBackground source={require("../assets/iss_bg.jpg")}/>
<Text> IssLocationSCREEN</Text>
<View>
<MapView region={{latitude:this.state.location.latitude,
longitude:this.state.location.longitude,
latitudeDelta:100,
longitudeDelta:100

}}></MapView>
<Marker coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}></Marker>
<Image source={require("../assets/iss_icon.png")}/>
</View>
</View>

)

}

}

}
