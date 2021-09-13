<template>
  <div>
    <navbar />
    <section-home />
    <section-about-me />
    <section-skills />
    <section-portfolio />
    <section-contacts />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import SectionHome from '~/components/sections/SectionHome'
import SectionAboutMe from '~/components/sections/SectionAboutMe'
import SectionSkills from '~/components/sections/SectionSkills'
import SectionPortfolio from '~/components/sections/SectionPortfolio'
import SectionContacts from '~/components/sections/SectionContacts'
export default {
  components: {
    Navbar,
    SectionHome,
    SectionAboutMe,
    SectionSkills,
    SectionPortfolio,
    SectionContacts,
  },
}
</script>
