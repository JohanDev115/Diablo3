<script setup>
import { toRefs } from 'vue';
import HeroDetailsLayout from '../../../layouts/HeroDetailsLayout.vue';
import HeroItem from './HeroItem.vue'

const props = defineProps({
  items: Object
})

const {items} = toRefs(props)
</script>

<template>
  <HeroDetailsLayout>
    <template #title>
      Items
    </template>
    <template #content>
      <div class="items-container">
        <div class="item head">
          <HeroItem :item="items.head" />
        </div>
        <div class="item shoulders">
          <HeroItem :item="items.shoulders" />
        </div>
        <div class="item torso">
          <HeroItem :item="items.torso" />
        </div>
        <div class="item neck">
          <HeroItem :item="items.neck" />
        </div>
        <div class="item hands">
          <HeroItem :item="items.hands" />
        </div>
        <div class="item waist">
          <HeroItem :item="items.waist" />
        </div>
        <div class="item bracers">
          <HeroItem :item="items.bracers" />
        </div>
        <div class="item left-finger">
          <HeroItem :item="items.leftFinger" />
        </div>
        <div class="item legs">
          <HeroItem :item="items.legs" />
        </div>
        <div class="item right-finger">
          <HeroItem :item="items.rightFinger" />
        </div>
        <div class="item main-hand">
          <HeroItem :item="items.mainHand" />
        </div>
        <div class="item feet">
          <HeroItem :item="items.feet" />
        </div>
        <div class="item off-hand">
          <HeroItem :item="items.offHand" />
        </div>
      </div>
    </template>
  </HeroDetailsLayout>
</template>

<style scoped>
.items-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 520px;
  justify-content: center;
  grid-template-areas:
    ". head ."
    "shoulders torso neck"
    "hands waist bracers"
    "left-finger legs right-finger"
    "main-hand feet off-hand";
}

.head {
  grid-area: head;
}
.shoulders {
  grid-area: shoulders;
}
.torso {
  grid-area: torso;
}
.neck {
  grid-area: neck;
}
.hands {
  grid-area: hands;
}
.waist {
  grid-area: waist;
}
.bracers {
  grid-area: bracers;
}
.left-finger {
  grid-area: left-finger;
}
.legs {
  grid-area: legs;
}
.right-finger {
  grid-area: right-finger;
}
.main-hand {
  grid-area: main-hand;
}
.feet {
  grid-area: feet;
}
.off-hand {
  grid-area: off-hand;
}

.item {
  width: 160px;
  height: 180px;
  background-color: #222;
  position: relative;
}

@media (max-width: 530px) {
  .items-container {
    overflow: scroll;
    justify-content: flex-start;
  }
}
</style>