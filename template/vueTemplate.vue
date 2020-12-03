<template>
  <div class="demo"></div>
</template>

<script>
// vuex
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";

// 工具函数
import { goPage } from "@/utils";

export default {
  name: "Demo",
  data() {
    return {};
  },
  props: {},
  components: {},
  mixins: [],
  components: {},
  computed: {},
  filters: {},
  watch: {
    demo: {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
      },
      immediate: true,
    },
    demo1(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  // vue-router路由守卫，前置
  beforeRouteUpdate(to, from, next) {
    next();
  },
  // 销毁组件时执行
  destroyed() {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.demo {
}
</style>
