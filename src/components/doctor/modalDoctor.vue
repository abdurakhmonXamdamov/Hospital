<template>
  <el-dialog>
      <DialogPanel
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div>
              <div>
                  <DialogTitle as="h3" class="text-lg  font-semibold leading-6 text-gray-900">
                      {{ editToggle ? 'Shifokorni tahrirlash' : 'Yangi shifokor' }}
                  </DialogTitle>
                  <div class="mt-2">
                      <el-input label="Ism-familiyasi" name="name" v-model="data.name" />
                  </div>
                  <div class="mt-2">
                      <el-phone label="Shifokor telefon raqami" name="phone" v-model="data.phone" />
                  </div>
                  <div class="mt-2">
                      <el-select label="Bo`lim" name="department" :list="activeDepartments" fieldName="_id"
                          labelName="title" v-model="data.department" />
                  </div>
                  <div class="mt-2">
                      <el-select label="Mutaxassisligi" name="spec" :list="activeSpecs" fieldName="_id"
                          labelName="title" v-model="data.spec" />
                  </div>
                  <div class="mt-2">
                      <el-select label="Jinsi" name="gender" :list="genderList" fieldName="value" labelName="label"
                          v-model="data.gender" />
                  </div>
                  <div class="mt-2">
                      <el-select label="Tugilgan viloyati" name="region" :list="regions" fieldName="id"
                          labelName="name" v-model="data.region" />
                  </div>
                  <div class="mt-2" v-if="data.region">
                      <el-select label="Tugilgan shahar/tuman" name="district"
                          :list="districts.filter(district => district.region_id == data.region)" fieldName="id"
                          labelName="name" v-model="data.district" />
                  </div>

                  <div class="mt-2">
                      <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">
                          Shifokor rasmi
                      </label>
                      <div class="mt-2">
                          <input ref="photo" id="photo" name="photo" type="file" autocomplete="photo" required=""
                              class="input" />
                      </div>
                  </div>
              </div>
          </div>
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button type="button"
                  class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  @click="add">Saqlash</button>
              <button type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  @click="close" ref="cancelButtonRef">Bekor qilish</button>
          </div>
      </DialogPanel>
  </el-dialog>
</template>
<script>
import { genderList } from '@/helpers/vars'
import { regions, districts } from '@/store/data/places'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { mapGetters, mapActions } from 'vuex'
import { CheckIcon } from '@heroicons/vue/24/outline'
export default {
  components: {
      Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, CheckIcon
  },
  data: () => ({
      data: {},
      genderList,
      regions,
      districts
  }),
  computed: {
      ...mapGetters(['activeDepartments', 'activeSpecs', 'toggle', 'id', 'editToggle'])
  },
  watch: {
      async toggle(to) {
          if (to && this.id?.length > 0 && this.editToggle) {
              await this.getTheDoctor(this.id)
          } else {
              this.data = {}
          }
      }
  },
  methods: {
      ...mapActions(['newDoctor', 'getDoctor', 'saveDoctor']),
      close() {
          this.$store.commit('setToggle', false)
      },
      async getTheDoctor(id) {
          const res = await this.getDoctor(id)
          this.data = { ...res.data }
      },
      async add() {
          const photoInput = this.$refs.photo
          const formData = new FormData()
          formData.append('file', photoInput.files[0])

          for (const key in this.data) {
              formData.append(key, this.data[key])
          }
          if (this.editToggle)
              this.saveDoctor(formData)
          else
              this.newDoctor(formData)
          this.close()
      }
  },
}
</script>