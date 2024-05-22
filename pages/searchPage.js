import React from 'react'

//INTERNAL IMPORT
import Style from '../styles/searchPage.module.css';
import { Brand } from '../components/componentsindex';
import { SearchBar } from '../searchPage/SearchBarIndex';
import { Filter } from '../components/componentsindex';
import { NFTCardTwo, Banner } from '../collectionPage/collectionIndex';
import images from "../img";

const searchPage = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
    return (
        <div className={Style.searchPage}>
          <Banner bannerImage={images.creatorbackground2} />
          <SearchBar />
          <Filter />
          <NFTCardTwo NFTData={collectionArray} />
          <Brand />
        </div>
      );
    };
    
    export default searchPage;