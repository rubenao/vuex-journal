

export default{

    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    //En el children se colocan todas las rutas hijas
    children : [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry " */ '@/modules/daybook/views/NoEntrySelected.vue'),

        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry " */ '@/modules/daybook/views/EntryView.vue'),

        }
    ]
}