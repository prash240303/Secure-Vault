import * as React from 'react';
import { Platform } from 'react-native';
import  { Appbar, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyAvatar from './avatar';


const MyAppBar = ({title , navigation , handleAdd}) => {


    return (
        <SafeAreaView >
            <Appbar.Header mode={Platform.OS==="ios"?'center-aligned':'small'}  statusBarHeight={0} >
                <Appbar.Content title={title} />
                <Appbar.Action icon="plus" onPress={handleAdd} />
                <Appbar.Action icon={MyAvatar({username:"ag"})} onPress={() => {navigation.navigate('Profile')}} />
            </Appbar.Header>
        </SafeAreaView>
    );
}



export default MyAppBar;