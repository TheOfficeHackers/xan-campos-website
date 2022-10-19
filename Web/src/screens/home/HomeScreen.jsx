import React from 'react'
import { Header } from '../../components'
import vynilpic from "../../images/vinilos-close-pic.png"
import CoverPicture from '../../components/cover-picture/CoverPicture'
import Footer from '../../components/footer/Footer'
import Bio from '../../components/bio/Bio'

function HomeScreen() {
  return (
    <>
      <Header />
      <CoverPicture src={vynilpic} />
      <Bio />
      <Footer />
    </>
  )
}

export default HomeScreen