import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import HeroSections from '../components/Sections/HeroSections'
import Categories from '../components/Sections/PopularCategories'
import TodayBestDeals from '../components/Sections/TodayBestDeals'
import TopDeals from '../components/Sections/TopDeals'
import BestSeller from '../components/Sections/BestSeller'
import OfferSections from '../components/Sections/OfferSections'

const Home = () => {
  return (
    <div className="min-h-screen bg-surface-950">

      {/* Hero Section - Always Below Navbar */}
      <div className="pt-[130px]">
        <HeroSections />
      </div>

      {/* Navbar (Fixed) */}
      <Navbar />

      {/* Main Content */}
      <main>

        <Categories />

        <TodayBestDeals />

        <TopDeals />

        <BestSeller />

        <OfferSections />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home