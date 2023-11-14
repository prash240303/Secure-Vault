import React from 'react';
import { SafeAreaView , Text, View , StyleSheet , Dimensions} from 'react-native';
import { Button} from 'react-native-paper';
import MyAvatar from '../components/avatar';
import { auth } from '../firebaseConfig';

const width = Dimensions.get('window').width;

function Profile({ username, profilePic, navigation }) {
    const onLogout = async () => {
        try{
            await auth.signOut();
            console.log("logout");
            navigation.navigate('Login');
        }catch(err){
            console.log(err);
        }
    }
  return (
    <SafeAreaView style={style.homepage}>
        
            <Text>Profile</Text>
            <MyAvatar source={require('../assets/favicon.png')} size={170}/>
            <Text>{username==""?"username":username}</Text>
            <Button title="Logout" onPress={onLogout} mode='contained'>Logout</Button>
        
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    homepage:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingHorizontal: width*0.02,
    },
})

export default Profile;
