<template>
  <div id="item-3" class="section-skills">
    <h2 class="section-skills-title">Skills</h2>
    <p class="section-skills-text">I work in such program as</p>
    <ul :class="$mq" class="section-skills-list">
      <li class="section-skills-list-column">
        <img src="~/assets/Visual_Studio_Code.png" width="90px" height="90px" />
        <p class="section-skills-img-name">VC Code</p>
      </li>
      <li class="section-skills-list-column">
        <img src="~/assets/GitHub.png" width="90px" height="90px" />
        <p class="section-skills-img-name">GitHub</p>
      </li>
      <li class="section-skills-list-column">
        <img src="~/assets/html.png" width="90px" height="90px" />
        <p class="section-skills-img-name">html</p>
      </li>
      <li class="section-skills-list-column">
        <img src="~/assets/css.png" width="90px" height="90px" />
        <p class="section-skills-img-name">css</p>
      </li>
      <li class="section-skills-list-column">
        <img src="~/assets/JavaScript.png" width="90px" height="90px" />
        <p class="section-skills-img-name">JavaScript</p>
      </li>
      <li class="section-skills-list-column">
        <img src="~/assets/Vue.png" width="90px" height="90px" />
        <p class="section-skills-img-name">Vue</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.section-skills {
  max-width: 1100px;
  padding: 100px 0;
  text-align: center;
  &-title {
    font-size: 34px;
    line-height: 1.235;
    color: $black900;
  }
  &-text {
    padding: 50px 0;
    font-size: 18px;
    line-height: 1.222;
    color: $black900;
  }
  &-list {
    display: flex;
    list-style-type: none;
    padding: 0;
    &.mobile {
      display: block;
    }
    &-column {
      padding: 30px 0;
    }
  }
  &-img-name {
    font-size: 14px;
    line-height: 1.214;
    color: $grey;
    padding-top: 10px;
  }
}
</style>
