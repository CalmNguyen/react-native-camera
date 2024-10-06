/**
 * @format
 */

import { useEffect, useState } from 'react';
import { Image, Dimensions, Modal, AppRegistry, View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import App from './App';
import { Picker } from '@react-native-picker/picker'
import { name as appName } from './app.json';
// import camera from './src/camera'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import TikTok from './src/screens/TikTok';
import c from './src/c'
import Cacu from './cacu';
// import XuHuong29 from './src/screens/xuHuong29';
const options = [{ label: '0', value: '10' }, { label: '120', value: '0' },
{ label: '240', value: '1' },
{ label: '360', value: '2' },
{ label: '720', value: '3' },
{ label: '1080', value: '4' },
];
import CodePush from 'react-native-code-push'

const Hello = () => {

    const [val, set_val] = useState("hello")
    useEffect(() => {
        set_val("hello1")
    }, [val])
    const [visible, set_visible] = useState(false)
    const [openTikTok, setOpenTikTok] = useState(false)
    return (
        <SafeAreaView>
            <XuHuong29 visible={visible} set_visible={set_visible} />
            <TikTok visible={openTikTok} set_visible={setOpenTikTok} />
            <TouchableOpacity onPress={() => set_visible(true)}>
                <Text style={{ color: 'black', padding: 20 }}>Xu hướng 2/9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenTikTok(true)}>
                <Text style={{ padding: 20, color: 'black' }}>
                    Tik tok
                </Text>
            </TouchableOpacity>
            {/* <Cacu /> */}

        </SafeAreaView>
    )
}
export default CodePush(Hello)
function XuHuong29({ visible, set_visible }) {
    const [selectedValue, setSelectedValue] = useState(options[0].value);

    return (
        <SafeAreaView>
            <Modal
                visible={visible}
                animationType="slide" // Hoặc bạn có thể sử dụng các hiệu ứng khác như 'fade', 'none', ...
                transparent={false}
                onRequestClose={() => set_visible(false)}
            >
                <View>
                    <View style={{ height: Dimensions.get('window').height * 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                        {selectedValue == 0 && (<Image
                            source={require('./img/dc9poayRi.png')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                            style={{ width: 200, height: 200 }}
                        />)}
                        {selectedValue == 1 && (<Image
                            source={require('./img/tym2.jpg')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                            style={{ width: 240, height: 210 }}
                        />)}
                        {selectedValue == 2 && (<Image
                            source={require('./img/tym3.jpg')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                            style={{ width: 240, height: 210 }}
                        />)}
                        {selectedValue == 3 && (<Image
                            source={require('./img/tym4-removebg-preview.png')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                            style={{ width: 200, height: 200 }}
                        />)}
                    </View>
                    <View style={{ height: Dimensions.get('window').height * 0.3, alignItems: 'center' }}>
                        <Picker style={{ width: 150 }}
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            {options.map((option, index) => (
                                <Picker.Item key={index} label={option.label} value={option.value} />
                            ))}
                        </Picker>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
AppRegistry.registerComponent(appName, () => Cacu);
