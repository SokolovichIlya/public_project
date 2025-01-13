import router from '@/services/router'

const requireContext = require.context('./', true, /routes\/index.ts$/)

requireContext.keys().forEach(key => {   
    requireContext(key).default.forEach((item: any) => {
        router.addRoute(item)
    })
})
