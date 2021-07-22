<template>
  <div>
    <navbar />
    <section-home />
    <section-about-me />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import SectionHome from '~/components/sections/SectionHome'
import SectionAboutMe from '~/components/sections/SectionAboutMe'
export default {
  components: {
    Navbar,
    SectionHome,
    SectionAboutMe,
  },
}
</script>
