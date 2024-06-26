import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe, 
  Title, 
  Category, 
  Filter, 
  NFTCard, 
  Collection, 
  FollowerTab, 
  AudioLive,
  Brand, 
  Video
} from '../components/componentsindex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title 
      heading="Audio Collection"
      paragraph=""
      />
      <AudioLive />

      <Title 
      heading="New Collection"
      paragraph=""
      />
      <FollowerTab/>
      <Collection />
      <Title 
      heading="Featured NFTs"
      paragraph="Discover the most outstanding NFTs."
      />
      <Filter />
      <NFTCard />
      <Title 
      heading="Browse by category"
      paragraph="Explore the NFTs in the most featured categories"
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  )
}

export default Home