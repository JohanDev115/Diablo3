<template>
  <section>
    <h1 class="title">
      <slot name="title" />
    </h1>
    <div class="content">
      <slot name="content" />
    </div>
  </section>
</template>

<style lang="stylus" scoped>
section {
  background-color: #333;
  padding: 20px;
  border-radius: 16px
  margin-bottom: 30px
}
.title
  margin-bottom: 14px

.content
  margin-bottom: 26px
</style>