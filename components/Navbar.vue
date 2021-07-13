<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div :class="$mq + ` ${active}`" class="navbar-toggle">
        <a class="navbar-toggle-btn" @click="active = !active">
          <div class="navbar-toggle-fig"></div>
        </a>
      </div>
      <div :class="$mq + ` ${active}`" class="navbar-menu">
        <ul :class="$mq" class="navbar-menu-list">
          <li :class="$mq" class="navbar-menu-column navbar-menu-column-first">
            <a
              :class="$mq"
              class="navbar-menu-link"
              href="#item-1"
              @click="active = !active"
              >{{ $t('navbar.links.home') }}</a
            >
          </li>
          <li :class="$mq" class="navbar-menu-column">
            <a
              :class="$mq"
              class="navbar-menu-link"
              href="#item-2"
              @click="active = !active"
              >{{ $t('navbar.links.aboutMe') }}</a
            >
          </li>
          <li :class="$mq" class="navbar-menu-column">
            <a
              :class="$mq"
              class="navbar-menu-link"
              href="#item-3"
              @click="active = !active"
              >{{ $t('navbar.links.skills') }}</a
            >
          </li>
          <li :class="$mq" class="navbar-menu-column">
            <a
              :class="$mq"
              class="navbar-menu-link"
              href="#item-4"
              @click="active = !active"
              >{{ $t('navbar.links.portfolio') }}</a
            >
          </li>
          <li :class="$mq" class="navbar-menu-column navbar-menu-column-last">
            <a
              :class="$mq"
              class="navbar-menu-link"
              href="#item-5"
              @click="active = !active"
              >{{ $t('navbar.links.contacts') }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div :class="$mq + ` ${active}`" class="navbar-language">
      <div :class="$mq" class="navbar-language-column">
        <nuxt-link
          :class="$mq"
          class="navbar-language-link"
          :to="switchLocalePath('ua')"
        >
          UA
        </nuxt-link>
        <h5 :class="$mq" class="navbar-language-link">|</h5>
        <nuxt-link
          :class="$mq"
          class="navbar-language-link"
          :to="switchLocalePath('en')"
        >
          ENG
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style lang="scss" scoped>
$colors: (
  'white': #fff,
  'grey': #828282,
  'black': #000,
);

.navbar {
  max-width: 1100px;
  &-toggle {
    display: none;
    margin: 60px 20px;
    padding: 11px 0;
    position: fixed;
    width: 30px;
    cursor: pointer;
    right: 0;
    z-index: 1000;
    &-fig {
      width: 30px;
      height: 4px;
      background: map-get($colors, 'black');
      &::after,
      &::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        background: map-get($colors, 'black');
        left: 0;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
    }
    &.tablet,
    &.mobile {
      display: block;
      &.true {
        .navbar-toggle-fig {
          background-color: transparent;
          transition: none;
          &::after,
          &::before {
            top: 50%;
            bottom: auto;
          }
          &::before {
            -webkit-transform: translateY(-50%) rotate(-45deg);
            transform: translateY(-50%) rotate(-45deg);
          }
          &::after {
            -webkit-transform: translateY(-50%) rotate(45deg);
            transform: translateY(-50%) rotate(45deg);
          }
        }
      }
    }
  }
  &-menu {
    max-width: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    padding: 0 25px;
    &.tablet,
    &.mobile {
      height: 100%;
      background-color: map-get($colors, 'white');
      overflow-y: auto;
      padding: 65px 25px;
      &.false {
        display: none;
      }
    }
    &-list {
      border-bottom: 1px solid map-get($colors, 'grey');
      background-color: map-get($colors, 'white');
      transform: matrix(1, 0, 0, 1, 0, 0);
      max-width: 1100px;
      display: flex;
      padding: 20px 0;
      width: 100%;
      &.tablet,
      &.mobile {
        flex-direction: column;
        height: 100%;
        border-bottom: none;
      }
    }
    &-column {
      list-style-type: none;
      &.laptop,
      &.desktop {
        margin: 0 auto;
      }
      &.tablet,
      &.mobile {
        padding-bottom: 50px;
        margin-left: 0;
      }
    }
    &-column-first {
      &.laptop,
      &.desktop {
        margin-left: 0;
      }
    }
    &-column-last {
      &.laptop,
      &.desktop {
        margin-right: 0;
      }
    }
    &-link {
      text-decoration: none;
      font-size: 18px;
      line-height: 22px;
      color: map-get($colors, 'grey');
      &.tablet,
      &.mobile {
        font-size: 34px;
      }
    }
  }
  &-language {
    width: 210px;
    margin-right: 0;
    &.tablet,
    &.mobile {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 200px;
      z-index: 999;
      overflow: hidden;
      &.false {
        display: none;
      }
    }
    &-column {
      position: absolute;
      display: flex;
      padding: 155px 155px 0 0;
      transform: rotate(-90deg);
      font-size: 16px;
      line-height: 20px;
      &.tablet,
      &.mobile {
        position: relative;
        width: 100px;
        padding: 0 0 35px 15px;
        margin-right: 0;
        transform: rotate(90deg);
      }
    }
    &-link {
      font-size: 16px;
      line-height: 20px;
      text-decoration: none;
      color: map-get($colors, 'grey');
      padding: 0 5px;
      &.tablet,
      &.mobile {
        font-size: 34px;
      }
    }
  }
}
</style>
