import {
    Cog6ToothIcon,
    UserIcon,
    HomeIcon,
    UsersIcon,
    BuildingOfficeIcon
} from '@heroicons/vue/24/outline'

export const menuRoute = [
        {
            path: '',
            name: 'dashboard_page',
            component: () => import('@/views/default/dashboardPage.vue'),
            meta: {
                name: 'Bosh sahifa',
                icon: HomeIcon
            }
        },
        {
            path: 'departments',
            name: 'departments',
            component: () => import('@/views/default/departmentList.vue'),
            meta: {
                name: "Bo'limlar",
                icon: UsersIcon
            }
        },
        {
            path: 'rooms',
            name: 'rooms',
            component: () => import('@/views/default/defaultRooms.vue'),
            meta: {
                name: "Xonalar",
                icon: BuildingOfficeIcon
            }
        },
        {
            path: 'doctors',
            name: 'doctors',
            component: () => import('@/views/default/doctorsList.vue'),
            meta: {
                name: 'Shifokorlar',
                icon: UserIcon
            }
        },
        {
            path: 'specs',
            name: 'specs',
            component: () => import('@/views/default/specList.vue'),
            meta: {
                name: 'Mutaxassisliklar',
                icon: UsersIcon
            }
        },
]