import React from 'react';
import Story from '../Story';
import './StoryReel.css'

interface Props {
  
}

const data = [
  {
img: require('../../assets/1.jpg'),
profile:'https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.0-1/p148x148/25158068_835218369972528_2173013237921280775_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGdjgNE7hbcqmeenEqYswL7tXmxEVpaO5O1ebERWlo7kyycKN-n7hELs9XUXILCN5dNHlMJXuvrX90JXTmFQdPm&_nc_ohc=6xjypt7mpE4AX8HkJL8&_nc_ht=scontent.fjnb11-1.fna&tp=6&oh=bf81ee04f318cab0e18d7acef1b4ae77&oe=5F6F1778',
title: 'Daniel Kakona'
  },
  {
    img: require('../../assets/2.jpg'),
    profile:'https://yt3.ggpht.com/a/AATXAJx2Y_k9sbKPRPFDTy-yShwU7gWxPN_-BS_o6dEW3g=s176-c-k-c0x00ffffff-no-rj',
    title: 'William Candillon'
      } ,
      
      {
        img: require('../../assets/3.jpg'),
        profile:'https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0xffffffff-no-rj-mo',
        title: 'Clever Prog'
    } ,
    {
      img: require('../../assets/4.jpg'),
      profile:'https://yt3.ggpht.com/a/AATXAJzfIzn2ZRwWYX4ZbVUGR10ExZvzFXuJCdw0DWrthw=s88-c-k-c0xffffffff-no-rj-mo',
      title: 'Ben Awad'
  } ,
  {
    img: require('../../assets/5.jpg'),
    profile:'https://yt3.ggpht.com/a/AATXAJyrsSOMBTseQe_FfBKuN8wwGZ3ru3WbY-e215FZ=s88-c-k-c0xffffffff-no-rj-mo',
    title: 'Vusi Thembe'
} ,
{
  img: require('../../assets/6.jpg'),
  profile:'https://yt3.ggpht.com/a/AATXAJwUTvFRp7kuNtBhxi4i9wrKsCcfYuHUJlkV3saCxA=s88-c-k-c0xffffffff-no-rj-mo',
  title: 'Dan Lok'
} ,
{
  img: require('../../assets/7.jpg'),
  profile:'https://yt3.ggpht.com/a/AATXAJwWl4SBh8_bluObjmtH82G7gn5-1N_qqbj9-fHe4g=s88-c-k-c0xffffffff-no-rj-mo',
  title: 'SuperSport'
} ,
{
  img: require('../../assets/8.jpg'),
  profile:'https://yt3.ggpht.com/a/AATXAJwx4sUPqhQs7z9X_i2O0R6moupB781kZucEWlYGIg=s88-c-k-c0xffffffff-no-rj-mo',
  title: 'Real Madrid'
} ,
{
  img: require('../../assets/9.jpg'),
  profile:'https://yt3.ggpht.com/a/AATXAJx6w_Pe3WpGBniBMLScCfAoRP8_Wk5SjL18zz5JUg=s88-c-k-c0xffffffff-no-rj-mo',
  title: 'Dananjaya'
} ,
{
  img: require('../../assets/10.jpg'),
  profile:'https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s88-c-k-c0xffffffff-no-rj-mo',
  title: 'Firebase'
} 



 
]

const StoryReel = (props: Props) => {
  return (
    <div className='storyReel'> 

     { data.map ((data,id) => (
      <Story key={id} story={data} />
     )) }
    </div>
  )
}

export default StoryReel
