<template>
  <el-dialog>
    <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div>
                <div>
                  <DialogTitle
                    as="h3"
                    class="text-lg font-semibold leading-6 text-gray-900"
                    >{{ editToggle ? 'Mutaxasislikni tarirlash' : 'Yangi mutaxasislik' }}</DialogTitle
                  >
                  <div class="mt-2">
                        <label
                          for="title"
                          class="block text-sm font-medium leading-6 text-gray-900">Mutaxasislik nomi</label>
                        <div class="mt-2">
                          <input
                            v-model="data.title"
                            id="title"
                            name="title"
                            type="title"
                            autocomplete="title"
                            required
                            class="input"
                          />
                        </div>
                  </div>
                </div>
              </div>
              <div
                class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  @click="add"> 
                    Saqlash
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  @click="close"
                  ref="cancelButtonRef">
                  Bekor qilish
                </button>
              </div>
            </DialogPanel>
  </el-dialog>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";

import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    data: {}
  }),
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
  },
  computed: {
    ...mapGetters(['toggle', 'id', 'editToggle'])
    },
  watch: {
        async toggle(to) {
            if (to && this.id?.length > 0 && this.editToggle) {
                await this.getSpec(this.id)
            } else {
                this.data = {}
            }
        }
    },
  methods: {
    ...mapActions(['newSpec', 'saveSpec']),
    close() {
      this.$store.commit('setToggle', false)
      this.data = {}
    },
    add() {
            if (this.editToggle) {
                this.saveSpec(this.data)
            } else {
                this.newSpec(this.data)
            }
            this.close()
        },
    async getSpec(id) {
            const res = await this.$store.dispatch('getSpec',id)
            console.log(res);
            this.data = { ...res.data }
        },
  },  
};
</script>
