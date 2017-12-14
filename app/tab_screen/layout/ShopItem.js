import {
	Platform,
	StyleSheet,
	Text,
	Button,
	Image,
	TouchableHighlight,
	View
} from 'react-native';
import React, { Component } from 'react';
import * as font from '../../constants/FontCons'; 
import WHCImageButton from '../../components/WHCImageButton';

export default class ListItem extends React.Component {
	render(){
		const item = this.props.itemInfo;
		return(
			<TouchableHighlight onPress={this._onPressButton}>
				<View style={styles.item}>
					<View style={styles.itemBar}>
						<Image
							style = {styles.userImg} 
							source = {item.userIcon} />
						<Text style = {styles.author}>{item.author}</Text>
						<Text style = {styles.date}>发布日期: {item.date}</Text>
					</View>
					<View style = {styles.center}>
                        <View style = {styles.centerleft}>
                            <Text style = {styles.title} numberOfLines = {2}>{item.title}</Text>
                            <Text style = {styles.content} numberOfLines = {2}>{item.detail}</Text>
                        </View>
                        <Image style = {styles.logoImg}
                            source = {item.logoUrl}
                        />
                    </View>
                    <View style = {styles.bottombar}>
                        <WHCImageButton
                            style = {styles.bottomButton}
                            imageSource = {item.collectionIcon}
                            text = {item.collectionCount}
                            imageStyle = {styles.collectionImg}
                            textStyle = {styles.bottomButtonText}
                            underlayColor = 'transparent'
                            onPress = {this._clickCollection}
                        />

                        <WHCImageButton
                            style = {styles.bottomButton}
                            imageSource = {item.msgIcon}
                            text = {item.msgCount}
                            imageStyle = {styles.msgImg}
                            textStyle = {styles.bottomButtonText}
                            underlayColor = 'transparent'
                            onPress = {this._clickMsg}
                        />
                    </View>
				</View>
			</TouchableHighlight>
			);
		}
	}

const styles = StyleSheet.create({
	item:{
		paddingTop: 0,
        marginBottom: 10,
        backgroundColor: '#fff',
	},
	itemBar:{
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
	},
    userImg: {
        height: 30,
        width: 30,
        marginLeft: 20,
        borderRadius: 15,
    },
    author: {
        marginLeft: 8,
    },
    date: {
        textAlign: 'right',
        flexGrow: 1,
        marginRight: 20,
        color: '#8D9DA0',
    },
    center: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingRight: 20,
        height: 110,
    },
    centerleft: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 10,
        flexShrink: 10,
        height: 90,
    },
    title: {
        fontSize: 17,
        color: font.themeBlack,
        fontWeight: 'bold',
    },
    logoImg: {
        height: 90,
        width: 90,
        borderRadius: 3,
        flexShrink: 0,

    },
    bottombar: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom:10,
        alignItems: 'center',
    },
    bottomButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomButtonText: {
        color: '#94A2B0',
        fontSize: 12,
        marginLeft: 5,
    },
    collectionImg: {
        width: 16,
        height: 16,
    },
    msgImg: {
        width: 13,
        height: 13,
        marginLeft: 20,
    }
});