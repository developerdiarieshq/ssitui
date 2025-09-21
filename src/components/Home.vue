<template>
  <div>
   <Header />
    <NavBar />  
    <NoticeBar />
    <HeroCarousel />
    <IndustryHighlights />
    
    <VisionMissionQuality />
    <CoursesOffered />
    <PlacementHighlights />
    <EventsCirculars />
    <CampusLife />
    <Statistics />
    <MOUs />
    <QuickLinks />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import NoticeBar from '@/components/NoticeBar.vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import IndustryHighlights from './IndustryHighlights.vue'
import Statistics from '@/components/Statistics.vue'
import VisionMissionQuality from '@/components/VisionMissionQuality.vue'
import CoursesOffered from '@/components/CoursesOffered.vue'
import PlacementHighlights from '@/components/PlacementHighlights.vue'
import CampusLife from '@/components/CampusLife.vue'
import MOUs from '@/components/MOU.vue'
import QuickLinks from '@/components/QuickLinks.vue'
import EventsCirculars from '@/components/EventsCirculars.vue'
import Footer from '@/components/Footer.vue'
</script>
