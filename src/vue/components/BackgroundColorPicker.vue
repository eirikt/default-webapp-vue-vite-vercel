<script setup lang='ts'>
const props = defineProps({
    htmlElement: HTMLElement
})

const tailwindBackgroundColorClassNames = [
    'bg-white',
    'bg-red-300',
    'bg-amber-200',
    'bg-gray-300',
    'bg-blue-300',
    'bg-violet-300',
    'bg-green-200'
]

function changeBackgroundColor(newBackgroundTailwindColorClassName: string): void {
    const articleValue: HTMLElement | undefined = props.htmlElement
    if (!articleValue) {
        console.error('"article" ref value does not exist')
        return
    }
    const classList: DOMTokenList = articleValue.classList
    const classListArray: string[] = Array.from(classList)
    const backgroundClassNames: string[] = classListArray.filter(
        (className: string) => className.startsWith("bg-")
    )
    /* eslint-disable @typescript-eslint/no-magic-numbers */
    if (backgroundClassNames.length > 1) {
        console.error('More than one Tailwind background class found: ', backgroundClassNames)
        return
    }
    /* eslint-enable @typescript-eslint/no-magic-numbers */
    const [currentBackgroundTailwindColorClassName]: string[] = backgroundClassNames
    articleValue.classList.remove(currentBackgroundTailwindColorClassName)
    articleValue.classList.add(newBackgroundTailwindColorClassName)
}
</script>

<template>
    <div v-for="color in tailwindBackgroundColorClassNames" :key="color">
        <button
            class="bg-amber-200 rounded-full px-5 py-5 m-1 shadow hover:bg-opacity-85"
            v-bind:class=color
            v-on:click="changeBackgroundColor(color)"
        />
    </div>
</template>
