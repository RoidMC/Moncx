<template>
    <Header />
  <div class="page-index">
    <Logos />
    <Examples />
        <font-awesome-icon icon="fa-solid fa-user-secret" />
        <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="zh_cn">简体中文</option>
        <option value="en_us">English</option>
      </select>
    </form>
  </div>
  <div>
    <Footer />
  </div>
</template>

<style>
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
