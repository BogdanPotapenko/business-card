<template>
  <div id="item-2" class="section-about-me">
    <h2 class="section-about-me-title">{{ $t('sectionAboutMe.title') }}</h2>
    <p class="section-about-me-text">
      {{ $t('sectionAboutMe.text1') }}
    </p>
    <p class="section-about-me-text">
      {{ $t('sectionAboutMe.text2') }}
    </p>
    <p class="section-about-me-text">
      {{ $t('sectionAboutMe.text3') }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.section-about-me {
  background-color: $grey100;
  padding: 100px 25px 100px 25px;
  text-align: center;
  &-title {
    font-size: 34px;
    line-height: 1.235;
    color: $black900;
  }
  &-text {
    max-width: 450px;
    padding-top: 20px;
    font-size: 18px;
    line-height: 1.222;
    color: $black900;
  }
}
</style>
