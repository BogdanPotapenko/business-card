<template>
  <div>
    <navbar />
    <section-home />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import SectionHome from '~/components/sections/SectionHome'
export default {
  components: {
    Navbar,
    SectionHome,
  },
}
</script>
