<template>
  <div>
    <navbar />
    <sectionHome />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import sectionHome from '~/components/sections/sectionHome'
export default {
  components: {
    Navbar,
    sectionHome,
  },
}
</script>
