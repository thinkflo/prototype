import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'
const GTM_CONTAINER_ID = 'G-85JVV1G3YJ'

const analytics = Analytics({
    app: 'pixelpusher-prototype', // Call this whatever you like.
    plugins: [
        googleTagManager({
            containerId: GTM_CONTAINER_ID,
						enabled: true,
        }),
    ]
})

export default analytics