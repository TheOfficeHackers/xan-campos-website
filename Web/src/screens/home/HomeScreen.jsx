import React from 'react'
import { Header } from '../../components'
import CoverPicture from '../../components/cover-picture/CoverPicture'
import Footer from '../../components/footer/Footer'
import Bio from '../../components/bio/Bio'
import NextConcertsHome from '../../components/next-concerts-home/NextConcertsHome'
import WorksHome from '../../components/works-home/WorksHome'
import VideosHome from '../../components/videos-home/VideosHome'

function HomeScreen() {
  return (
    <>
      <Header />
      <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666428895/xan-campos-web/2_r4oyyi.png" />
      <Bio />
      <NextConcertsHome />
      <WorksHome />
      <VideosHome />
      <Footer />
    </>
  )
}


export default HomeScreen