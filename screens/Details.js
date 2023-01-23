import { useState } from "react"
import { Text, SafeAreaView, View, Image, FlatList } from "react-native"

import {COLORS, NFTData, assets, SIZES} from '../constants';
import NFTCard from '../components/NFTCard'
import HomeHeader from '../components/HomeHeader'
import FocusedStatusBar from "../components/FocusedStatusBar";
import Home from "./Home";
import DetailCard from "../components/DetailCard";


const Details = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar background={COLORS.primary}/>
      <View style={{flex:1, backgroundColor: COLORS.primary, flexDirection: 'column', padding: SIZES.font}}>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Image 
            source={assets.logo}
            resizeMode='contain'
            style={{
              width: 90,
              height: 25,
              
            }}
            
          />
          <View style={{width:45, height: 45}}>
            <Image 
              source={assets.person01}
              resizeMode='contain'
              style={{width: "100%", height: "100%", right: 0, top: 0}}

            />
          </View>
          
          </View>
        </View>

        
    </SafeAreaView>

  )
}

export default Details