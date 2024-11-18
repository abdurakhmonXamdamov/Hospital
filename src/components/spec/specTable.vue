<template>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-0">N:</th>
                  <th scope="col" class="th">Bo'lim nomi</th>
                  <th scope="col" class="th">Vaqti</th>
                  <th scope="col" class="th">Holati</th>
                  <th scope="col" class="relative py-3.5 pl-3 text-base font-semibold text-gray-900 pr-4 sm:pr-0">Tahrirlash</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="item, index of specs" :key="item._id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ index + 1}}</td>
                  <td class="td">{{ item.title }}</td>
                  <td class="td">{{ formatDate(item.createdTime) }}</td>
                  <td class="td">
                    <button @click="changeStatusSpec({
                      _id: item._id,
                      status: item.status == 1 ? 0 : 1
                    })" :class="`btn__sub ${item.status == 1 ? 'btn__active' : 'btn__passive'} w-20 text-base`">{{ item.status == 1 ? 'Faol' : 'Nofaol' }}</button></td>
                  <td class="relative text-center whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0 space-x-3">
                    <button @click="edit(item._id)" class="text-teal-600 hover:text-indigo-900 ">
                        <PencilSquareIcon class="size-5 text-teal-500"/>
                    </button>
                    <button @click="remove(item._id)" class="text-indigo-600 hover:text-indigo-900">
                        <TrashIcon class="size-5 text-red-500 "/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <el-confirm title="Mutaxasislikni o`chirmoqchisiz. Qarorigiz qattiymi?" text="O`chirilgan ma`lumotlarni qayta tiklab bo`lmaydi."
        @response="confirmRemove" />
</template>
<script>

import moment from 'moment';
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';
import { mapActions, mapGetters } from 'vuex';
export default {
        data: () => ({
              id: ''
          }),
        components: {
            TrashIcon,
            PencilSquareIcon,
            moment
        },
        props: ['info'],
        methods:{
          ...mapActions(['changeStatusSpec', 'removeSpec']),
          allDepart(){
            this.$store.dispatch('allSpecs')
          },
          formatDate(date) {
              return moment(date).format('MMMM Do YYYY, h:mm:ss a');
          },
          async confirmRemove(value) {
            if (value) {
                await this.removeSpec(this.id)
                this.id = ''
            }
          },
          edit(id) {
              this.$store.commit('setEdit', {
                  id,
                  editToggle: true
              })
              this.$store.commit('setToggle', true)
          },
          remove(_id) {
              this.id = _id
              this.$store.commit('setConfirmToggle', true)
          }
        },
        computed: {
          ...mapGetters(['specs'])
        },
        async mounted() {
          await this.allDepart()
        }
    }
</script>