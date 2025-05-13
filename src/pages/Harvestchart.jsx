import React from 'react'
import HarvestIntro from '../components/Harvest chart/HarvestIntro'
import HarvestCalendar from '../components/Harvest chart/HarvestCalendar'
import WhyTimingMatters from '../components/Harvest chart/WhyTimingMatters'
import SpiceOfTheSeason from '../components/Harvest chart/SpiceOfTheSeason'
import SustainabilitySection from '../components/Harvest chart/SustainabilitySection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Harvestchart = () => {
  return (
<>
<HarvestIntro />
<HarvestCalendar />
<WhyTimingMatters />
<SpiceOfTheSeason />
<SustainabilitySection />
<ContactSection />

</>
  )
}

export default Harvestchart