<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Tizimga kirish
          </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" @submit.prevent="login">
              <div>
                  <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Login</label>
                  <div class="mt-2">
                      <input id="login" name="login" type="login" v-model="user.login" autocomplete="login"
                          required="" class="input" />
                  </div>
              </div>


              <div>
                  <div class="flex items-center justify-between">
                      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mahfiy
                          kalit</label>
                  </div>
                  <div class="mt-2">
                      <input id="password" name="password" type="password" v-model="user.password"
                          autocomplete="current-password" required="" class="input" />
                  </div>
              </div>

              <div>
                  <button type="submit" class="btn__sub">Kirish</button>
              </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
              Akkaunt yo'qmi?
              {{ " " }}
              <router-link :to="{ name: 'registration' }" href="#"
                  class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Ro'yhatdan
                  o'ting</router-link>
          </p>
      </div>
  </div>
</template>
<script>
export default {
  data: () => ({
      user: {},
  }),
  methods: {
      async login() {
          this.$store.dispatch('login', this.user)
      },
  },
};
</script>
<style lang=""></style>
