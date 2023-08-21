import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import Layouts from './Layouts/Layouts'
import { InertiaProgress } from '@inertiajs/progress'
//import 'bootstrap/dist/css/bootstrap.min.css'

InertiaProgress.init({
    delay: 500,
    color: 'red',
    includeCSS: true,
    showSpinner: true,
})

createInertiaApp({
    progress: true,
    //title: title => `${title} - My App`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        page.default.layout = name.startsWith('Public/') ? undefined : page => <Layouts children={page} />
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    }
})