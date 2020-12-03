<template>
  <div class="{{name}}"></div>
</template>

<script>
// vuex
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";

// 工具函数
import { goPage } from "@/utils";

export default {
  name: "{{Name}}",
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
    demoWatch: {
      handler(newValue, oldValue) {
        // console.log(newValue, oldValue);
      },
      immediate: true,
    },
    demoWatch1(newValue, oldValue) {
      // console.log(newValue, oldValue);
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
.{{name}} {
}
</style>
