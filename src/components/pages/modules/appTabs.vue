<template>
    <div
      :class="{
        'flex space-x-4': variant === 'horizontal',
      }"
    >
      <ul
        class="list-none bg-blue-900 bg-opacity-30 p-1.5 rounded-lg text-center overflow-auto whitespace-nowrap"
        :class="{
          'flex items-center mb-6': variant === 'vertical',
        }"
      >
        <li
          v-for="(tab, index) in tabList"
          :key="index"
          class="w-full px-4 py-1.5 rounded-lg"
          :class="{
            'tab-buttons shadow-xl': index + 1 === activeTab,
            'text-white': index + 1 !== activeTab,
          }"
        >
          <label
            :for="`${_uid}${index}`"
            v-text="tab"
            class="cursor-pointer block"
          />
          <input
            :id="`${_uid}${index}`"
            type="radio"
            :name="`${_uid}-tab`"
            :value="index + 1"
            v-model="activeTab"
            class="hidden"
          />
        </li>
      </ul>
      <template v-for="(tab, index) in tabList">
        <div
          :key="index"
          v-if="index + 1 === activeTab"
          class="box3"
        >
          <slot :name="`tabPanel-${index + 1}`" />
        </div>
      </template>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabList: {
        type: Array,
        required: true,
      },
      variant: {
        type: String,
        required: false,
        default: () => "vertical",
        validator: (value) => ["horizontal", "vertical"].includes(value),
      },
    },
    data() {
      return {
        activeTab: 1,
      };
    },
  };
  </script>

<style scoped>

.tab-buttons {
  color: #000000;
  font-size: 1.4rem;
  font-weight: 300;
  background: linear-gradient(to right,#3d00b9,#8d80ff);
}

.cursor-pointer {
color: #ffffff;
  font-size: 1.4rem;
  font-weight: 300;

}
.bg-blue-900{
  background-color: transparent;
  box-shadow: 0 0 40px #000;

}


</style>