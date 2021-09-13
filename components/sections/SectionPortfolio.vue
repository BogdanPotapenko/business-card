<template>
  <div id="portfolio" class="section-portfolio">
    <h2 class="section-portfolio-title">{{ $t('sectionPortfolio.title') }}</h2>
    <div class="section-portfolio-img">
      <a href="http://narkolog.kharkov.ua/" target="blank">
        <img src="~/assets/section-portfolio-img.png"
      /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-portfolio {
  background-color: $grey100;
  padding: 100px 25px;
  text-align: center;
  &-title {
    font-size: 34px;
    line-height: 1.235;
    color: $black900;
    padding-bottom: 50px;
  }
  &-img {
    max-width: 1100px;
    img {
      width: 100%;
    }
  }
}
</style>
