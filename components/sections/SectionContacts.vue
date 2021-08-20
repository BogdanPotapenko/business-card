<template>
  <div id="item-5" class="section-contacts">
    <h2 class="section-contacts-title">{{ $t('sectionContacts.title') }}</h2>
    <div class="section-contacts-text">
      <i18n path="sectionContacts.text" tag="p">
        <template v-slot:break>
          <br />
        </template>
      </i18n>
    </div>
    <button class="section-contacts-button">
      {{ $t('sectionContacts.buttonText') }}
    </button>
    <ul class="section-contacts-list">
      <li
        v-for="(social, index) in socials"
        :key="index"
        class="section-contacts-img"
      >
        <a :href="`${social.url}`">
          <img :src="`/images/${social.src}`" width="60px" height="60px" />
        </a>
      </li>
    </ul>
    <div class="section-contacts-bottom-text">
      <p>{{ $t('sectionContacts.bottomText') }}</p>
      <p>{{ socialsName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com',
          src: 'linkedin.png',
        },
        {
          name: 'Telegram',
          url: 'https://web.telegram.org',
          src: 'telegram.png',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/',
          src: 'Instagram.png',
        },
        {
          name: 'Gmail',
          url: 'https://mail.google.com/',
          src: 'Gmail.png',
        },
      ],
    }
  },
  computed: {
    socialsName() {
      return this.socials
        .map(function (obj) {
          return obj.name
        })
        .join(', ')
    },
  },
}
</script>

<style lang="scss" scoped>
.section-contacts {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  &-title {
    font-size: 34px;
    line-height: 1.235;
    color: $black900;
  }
  &-text {
    padding: 30px 0;
    font-size: 18px;
    line-height: 1.222;
    color: $black900;
  }
  &-button {
    padding: 10px 30px;
    border-radius: 50px;
    background: $black900;
    border-color: $black900;
    font-size: 18px;
    line-height: 1.222;
    color: $white;
  }
  &-list {
    max-width: 600px;
    padding: 50px 0;
    display: flex;
    list-style-type: none;
  }

  &-bottom-text {
    font-size: 14px;
    line-height: 1.214;
    color: $grey;
  }
}
</style>
