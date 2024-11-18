<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> -->
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Ro'yhatdan o'tish
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="reg()">
        <div>
          <label
            for="login"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Login</label
          >
          <div class="mt-2">
            <input
              v-model="user.login"
              id="login"
              name="login"
              type="login"
              autocomplete="login"
              required
              class="input"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Parol</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="user.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="input"
            />
          </div>
        </div>

        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Foydalanuvchi nomi</label
          >
          <div class="mt-2">
            <input
              v-model="user.name"
              id="name"
              name="name"
              type="name"
              autocomplete="name"
              required
              class="input"
            />
          </div>
        </div>

        <div>
          <button type="submit" class="btn__sub">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Akkaunt bormi?
        {{ " " }}
        <router-link :to="{name: 'login'}"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >Tizimga kirish</router-link>
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
    async reg() {
        this.$store.dispatch('reg', this.user)
    },

  },
};
</script>
