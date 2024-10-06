/**
 * @format
 */

import { useEffect, useState, memo } from 'react';
import { Image, Dimensions, Modal, AppRegistry, View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
// import XuHuong29 from './src/screens/xuHuong29';
const options = [{ label: '120', value: '0' },
{ label: '240', value: '1' },
{ label: '360', value: '2' },
{ label: '720', value: '3' },
{ label: '1080', value: '4' },
];
function TikTok({ visible, set_visible }) {
    const [selectedValue, setSelectedValue] = useState(options[0].value);
    return (
        <SafeAreaView style={{ backgroundColor: 'black' }}>
            <Modal
                visible={visible}
                animationType="slide" // Hoặc bạn có thể sử dụng các hiệu ứng khác như 'fade', 'none', ...
                transparent={false}
                onRequestClose={() => set_visible(false)}
            >
                {/* arrow-back,Ionicons,search,EvilIcons
                heart,FontAwesome,commenting,FontAwesome
                bookmark,FontAwesome,dots-three-horizontal,Entypo */}

                <View style={{ backgroundColor: 'black' }}>
                    <View style={{ height: Dimensions.get('window').height * 0.4, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '10%' }}>
                                <View>
                                    <Ionicons name="arrow-back" size={30} color="white" />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'white', padding: 10, width: '83%', borderRadius: 10 }}>
                                <View style={{ width: '10%' }}>
                                    <EvilIcons name='search' size={30} color='white' />
                                </View>
                                <View style={{ width: '65%' }}>
                                    <Text style={{ color: 'white', fontSize: 16 }}>Tìm kiếm nội dung liên quan</Text>
                                </View>
                                <View style={{ borderLeftWidth: 1, borderLeftColor: "rgba(255,255,255,0.5)" }}>
                                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>Tìm kiếm</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: Dimensions.get('window').height * 0.6, alignItems: 'flex-end', marginRight: 10 }}>
                        <View>
                            <Image
                                source={require('../../img/review.png')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                                style={{ width: 55, height: 55, borderRadius: 100 }}
                            />
                        </View>
                        <View style={{ marginTop: 20, marginRight: 12, justifyContent: 'center' }}>
                            <FontAwesome name='heart' size={35} color='white' />
                            <Text style={{ fontSize: 14, color: 'white', textAlign: 'center' }}>200</Text>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 12 }}>
                            <FontAwesome name='commenting' size={35} color='white' />
                            <Text style={{ fontSize: 14, color: 'white', textAlign: 'center' }}>200</Text>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 18 }}>
                            <FontAwesome name='bookmark' size={35} color='white' />
                            <Text style={{ fontSize: 14, color: 'white', textAlign: 'center' }}>200</Text>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 15 }}>
                            <Entypo name='dots-three-horizontal' size={35} color='white' />
                        </View>
                        <View style={{ marginRight: 7, marginTop: 10 }}>
                            <View style={{ padding: 10, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 100 }}>
                                <Image
                                    source={require('../../img/review.png')} // hoặc sử dụng {uri: 'URL của hình ảnh'}
                                    style={{ width: 30, height: 30, borderRadius: 100 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default memo(TikTok)
