<template>
  <div>
    <navbar />
    <section-home />
    <section-about-me />
    <section-skills />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import SectionHome from '~/components/sections/SectionHome'
import SectionAboutMe from '~/components/sections/SectionAboutMe'
import SectionSkills from '~/components/sections/SectionSkills'
export default {
  components: {
    Navbar,
    SectionHome,
    SectionAboutMe,
    SectionSkills,
  },
}
</script>
