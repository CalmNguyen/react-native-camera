/**
 * @format
 */

import { useEffect, useState, memo } from 'react';
import { Image, Dimensions, Modal, AppRegistry, View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import XuHuong29 from './src/screens/xuHuong29';
const options = [{ label: '120', value: '0' },
{ label: '240', value: '1' },
{ label: '360', value: '2' },
{ label: '720', value: '3' },
{ label: '1080', value: '4' },
];
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
                    <View style={{ height: Dimensions.get('window').height * 0.7, justifyContent: 'center', alignItems: 'center', }}>

                        {selectedValue == 0 && (
                            <Image
                                source={require('../../img/dc9poayRi.png')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                                style={{ width: 100, height: 100 }}
                            />)}
                        {selectedValue == 1 && (<Image
                            source={require('../../img/tym2.jpg')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                            style={{ width: 120, height: 100 }}
                        />)}
                        {selectedValue == 2 && (<Image
                            source={require('../../img/tym3.jpg')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                            style={{ width: 120, height: 100 }}
                        />)}
                        {selectedValue == 3 && (<Image
                            source={require('../../img/tym4-removebg-preview.png')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                            style={{ width: 100, height: 100 }}
                        />)}
                    </View>
                    <View style={{ height: Dimensions.get('window').height * 0.3, alignItems: 'center' }}>
                        <Picker
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
export default memo(XuHuong29)
