<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    target: { type: Number, required: true },
    duration: { type: Number, default: 1500 }
})

const currentCount = ref(0)
const counterElement = ref(null)
let observer = null
let hasAnimated = false

const startAnimation = () => {
    if (hasAnimated) return 
    hasAnimated = true

    const startTime = performance.now()
    const endValue = props.target

    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / props.duration, 1)

        const easeOut = 1 - (1 - progress) * (1 - progress)

        currentCount.value = Math.floor(easeOut * endValue)

        if (progress < 1) {
            requestAnimationFrame(updateCounter)
        } else {
            currentCount.value = endValue
        }
    }

    requestAnimationFrame(updateCounter)
}

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                startAnimation()
                observer.disconnect()
            }
        },
        { threshold: 0.4 }
    )

    if (counterElement.value) {
        observer.observe(counterElement.value)
    }
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})

</script>

<template>
    <span ref="counterElement">
        {{ currentCount }}
    </span>
</template>