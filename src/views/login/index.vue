<template>
  <div class="login centerPage">
    <div class="centerCon">
      订单
      <!-- <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input> -->

    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "login",
  setup() {
    const $router = useRouter();
    const $store = useStore();
    const { ctx } = getCurrentInstance();
    const loginForm = reactive({
      emailPhone: "",
      password: ""
    });
    // $store.dispatch('user/login',{name:'zhang',password:'123'})


    return {
      // input: ref(''),
      $router,
      loginForm,
    };
  }
};
</script>

<style scoped lang="scss">

</style>
