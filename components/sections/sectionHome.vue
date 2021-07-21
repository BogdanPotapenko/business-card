<template>
  <div id="item-1" :class="$mq" class="section-home">
    <div :class="$mq" class="section-home-column">
      <div :class="$mq" class="section-home-name">
        <h3>{{ $t('sectionHome.name') }}</h3>
      </div>
      <div :class="$mq" class="section-home-info">
        <i18n path="sectionHome.info" tag="p">
          <template v-slot:break>
            <br />
          </template>
        </i18n>
      </div>
    </div>
    <img
      :class="$mq"
      class="section-home-img"
      src="~/assets/section-home-img.jpg"
    />
  </div>
</template>

<style lang="scss" scoped>
$colors: (
  'black900': #000,
);

.section-home {
  max-width: 1150px;
  padding: 40px 25px 50px 25px;
  &-column {
    display: flex;
    align-items: flex-end;
    padding: 50px 0;
    &.tablet,
    &.mobile {
      display: block;
      padding: 0 0 50px 0;
    }
  }
  &-name {
    width: min-content;
    margin-left: 0;
    font-size: 47px;
    line-height: 1.255;
    color: map-get($colors, 'black900');
    &.mobile {
      font-size: 40px;
    }
  }
  &-info {
    width: 55%;
    margin: 0;
    font-size: 18px;
    line-height: 1.222;
    color: map-get($colors, 'black900');
    &.tablet,
    &.mobile {
      padding-top: 25px;
    }
  }
  &-img {
    width: 100%;
    height: 400px;
    &.tablet,
    &.mobile {
      height: 500px;
    }
  }
}
</style>
