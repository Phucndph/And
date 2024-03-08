import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
const baitap = () => {
    const handleSubmit=()=>{
        setIsInputValid(inputValue.trim() !=='');
    };
    return (
        <View style={styles.bg}>
            <Text style={styles.tit}>Tết dương lịch</Text>
            <View style={styles.container}>
             <Text style={styles.title}>Tên sự kiện</Text>
             <Text style={styles.nd}>Bắn pháo hoa</Text>
             <Text style={styles.title}>Ngày diễn ra</Text>
             <Text style={styles.nd}>22/10/2023</Text>
             <Text style={styles.title}>Địa điểm</Text>
             <Text style={styles.nd}>Quận 1, Hồ Chí Minh</Text>
            <Button title="Chi tiết" onPress={handleSubmit}/>
            </View>
            <Text style={styles.tit}>Chung kết SeaGame</Text>
            <View style={styles.container2}>
             <Text style={styles.title}>Tên sự kiện</Text>
             <Text style={styles.nd}>Việt Nam vs Thái Lan</Text>
             <Text style={styles.title}>Ngày diễn ra</Text>
             <Text style={styles.nd}>21/10/2023</Text>
             <Text style={styles.title}>Địa điểm</Text>
             <Text style={styles.nd}>Sân vận động Mỹ Đình</Text>
             <Text style={styles.title}>Thời gian</Text>
             <Text style={styles.nd}>21.00-22.00</Text>
             <Text style={styles.title}>Hình ảnh</Text>
             <Image style={styles.img} source={require('../img/svd.jpg')}/>
            </View>
        </View>
    )
}

export default baitap

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    container: {
        width: 360,
        height: 250,
        margin: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        shadowColor: '#808080',
    },
    container2:{
        width: 360,
        height: 380,
        margin: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        shadowColor: '#808080',  
    },
    title: {
        fontSize: 15
    },
    nd: {
        fontSize: 18,
       fontWeight:'bold',
       marginBottom:10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 5,
    },
    img: {
        width: 320,
        height: 90,
        marginTop: 10,
      },
    tit:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000000',
        marginLeft:10
    }
})