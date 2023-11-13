<script setup>
import { toRefs, computed } from 'vue';
import ItemDetailGem from './ItemDetailGem.vue';

const props = defineProps({
  item: Object
})

const {item} = toRefs(props)

const itemUrl = computed(() => {
    const host = 'http://media.blizzard.com/d3/icons/items/large/'
    return `${host}${item.value?.icon}.png`
})

const itemHasGems = computed(() => {
  return Object.prototype.hasOwnProperty.call(item.value, 'gems')
})

const gemOrJewel = computed(() => {
  return item.value?.gems[0].isGem ? 'Gems' : 'Jewel'
})

const itemClassColor = computed(() => {
  return `item-${item.value?.displayColor}`
})

</script>

<template>
  <div :class="['item d3-icon-item', itemClassColor]">
    <template v-if="item">
      <small class="item-name">{{ item?.name }}</small>
      <div class="info">
        <div class="icon" :title="item?.name">
          <img :src="itemUrl" :alt="item?.name">
        </div>
        <div class="gems" v-if="itemHasGems">
          <small>{{ gemOrJewel }}:</small>
          <ul class="list-inline">
            <li v-for="(gem, i) in item?.gems" :key="'gem-'+i" class="list-inline-item">
              <ItemDetailGem :gem="gem"/>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.icon {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
}

.item {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  height: 20%;
  text-align: center;
  color: #888;
}

.info {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 10px;
}

.gems {
  text-align: center;
}

img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.list-inline {
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
}
</style>