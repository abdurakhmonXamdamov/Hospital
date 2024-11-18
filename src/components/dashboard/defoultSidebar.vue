<template>
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center text-white font-semibold">
        LOGO
        </div>
        <nav class="flex flex-1 flex-col">
            <router-link 
                v-for="item of menuRoute"
                :key="item.name"
                :to="{name: item.name}"
                :class="[$route.name == item.name ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:text-white hover:bg-indigo-700', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                <component :is="item.meta?.icon" :class="[$route.name == item.name ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                {{ item.meta?.name }}
            </router-link>

            <li class="mt-auto list-none">
                <a href="#" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white">
                <Cog6ToothIcon class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white" aria-hidden="true" />
                Settings
                </a>
            </li>

        </nav>
        </div>
    </div>
</template>

<script>

import { menuRoute } from '@/helpers/menuRout';
import {
  Cog6ToothIcon,
} from '@heroicons/vue/24/outline'


export default{
    data: ()=> ({
        menuRoute
    }),
    components: {
        Cog6ToothIcon,
    }
}


</script>
