import React, { Component } from "react";
import { Swiper, SwiperItem, View, Image } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  render() {
    return (
      <View className='index'>
        <Swiper
          className='swiper-container'
          circular
          previousMargin='20px'
          nextMargin='20px'
        >
          <SwiperItem className='swiper-item'>
            <Image
              className='image-item'
              src='https://cdn.llscdn.com/sprout/Rectangle%205-d0a923f475805babb31bb1d4e1d8c4cf.png'
              mode='scaleToFill'
            />
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <Image
              className='image-item'
              src='https://cdn.llscdn.com/sprout/Rectangle%205-d0a923f475805babb31bb1d4e1d8c4cf.png'
              mode='scaleToFill'
            />
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <Image
              className='image-item'
              src='https://cdn.llscdn.com/sprout/Rectangle%205-d0a923f475805babb31bb1d4e1d8c4cf.png'
              mode='scaleToFill'
            />
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}
