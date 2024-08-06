import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async( key, value) => {
    try{
        await AsyncStorage.setItem(key,value);
    }catch(e){
        console.log('Error store value', e);
    }
    
}

export const getItem = async( key) => {
    try{
        await AsyncStorage.getItem(key);
    }catch(e){
        console.log('Error retrieve value', e);
    }    
}

export const removeItem = async( key) => {
    try{
        await AsyncStorage.removeItem(key);
    }catch(e){
        console.log('Error delete value', e);
    }
    
}