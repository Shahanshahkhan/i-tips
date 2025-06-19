<script setup>
import { onActivated, ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const route = useRoute()



const isDropDownOpen = useDropdown('gettingDropDownState')
const isEssential = useDropdown('essentialDropDownState')
const isComponent = useDropdown('componentDropDownState')



// const isDropDownOpen = ref(true);
// const isEssential = ref(true);



// onMounted(() => {
//     const storedState = localStorage.getItem('gettingDropDownState')
//     isDropDownOpen.value = storedState === 'true'
// })

// watch(isDropDownOpen, (newVal) => {
//     localStorage.setItem('gettingDropDownState', newVal)
// })


// onMounted(() => {
//     const storedState = localStorage.getItem('essentialDropDownState')
//     isEssential.value = storedState === 'true'
// })

// watch(isEssential, (newVal) => {
//     localStorage.setItem('essentialDropDownState', newVal)
// })
// onMounted(() => {
//     const storedState = localStorage.getItem('componentDropDownState')
//     isEssential.value = storedState === 'true'
// })

// watch(isComponent, (newVal) => {
//     localStorage.setItem('componentDropDownState', newVal)
// })






function useDropdown(dropDown, defaultValue = false) {
    const state = ref(defaultValue)

    onMounted(() => {
        const stored = localStorage.getItem(dropDown)
        if (stored !== null) {
            state.value = stored === 'true'
        }
    })

    watch(state, (newVal) => {
        localStorage.setItem(dropDown, newVal)
    })

    return state
}




function isActive(path) {
    return route.path === path

}
</script>






<template>
    <div class="flex w-screen h-screen">
        <div class="flex">
            <aside class="w-70 bg-black">
                <nav class="text-gray-400 ml-13 p-3">
                    <div class="hover:text-white">
                        <button @click="isDropDownOpen = !isDropDownOpen">Getting Started</button>
                        <hr class="w-30"><br>
                    </div>
                    <div v-show="isDropDownOpen">
                        <RouterLink to="/side/intro"
                            :class="isActive('/side/intro') ? 'text-green-700' : 'hover:text-gray-300'">
                            <p>Introduction</p>
                        </RouterLink>
                        <RouterLink to="/side/quickstart"
                            :class="isActive('/side/quickstart') ? 'text-green-700' : 'hover:text-gray-300'">
                            <p>Quick Start</p><br>
                        </RouterLink>
                    </div>
                    <div class="cursor-pointer">
                        <h2 @click="isEssential = !isEssential">Essential</h2>
                        <hr class="w-20"><br>
                        <div v-show="isEssential">
                            <RouterLink to="/side/create-an-app"
                                :class="isActive('/side/create-an-app') ? 'text-green-700' : 'hover:text-gray-300'">
                                <p>Creating an Application</p>
                            </RouterLink>
                            <RouterLink to="/side/reactivity-fund"
                                :class="isActive('/side/reactivity-fund') ? 'text-green-700' : 'hover:text-gray-300'">
                                <p>Reactivity Fundamental</p>
                            </RouterLink>
                            <RouterLink to="/side/computed-prop"
                                :class="isActive('/side/computed-prop') ? 'text-green-700' : 'hover:text-gray-300'">
                                <p>Computed Properties</p>
                            </RouterLink>
                            <RouterLink to="/side/class-and-style"
                                :class="isActive('/side/class-and-style') ? 'text-green-700' : 'hover:text-gray-300'">
                                <p>Class And Style</p>
                            </RouterLink>
                            <RouterLink to="/side/condition-rend"
                                :class="isActive('/side/condition-rend') ? 'text-green-700' : 'hover:text-gray-300'">
                                <p>Conditional Rendering </p>
                            </RouterLink>
                            <RouterLink to="/side/list-rend"
                                :class="isActive('/side/list-rend') ? 'text-green-700' : 'hover:text-gray-300'">
                                <p>List Rendering</p><br>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="hover:text-white">
                        <h2 @click="isComponent = !isComponent">Component In-Depth</h2>
                        <hr class="w-40"><br>
                    </div>
                    <div v-show="isComponent">
                        <RouterLink to="/side/registration"
                            :class="isActive('/side/registration') ? 'text-green-700' : 'hover:text-gray-300'">
                            <p>Registration</p>
                        </RouterLink>
                        <RouterLink to="/side/props"
                            :class="isActive('/side/props') ? 'text-green-700' : 'hover:text-gray-300'">
                            <p>Props</p>
                        </RouterLink>
                        <RouterLink to="/side/events"
                            :class="isActive('/side/events') ? 'text-green-700' : 'hover:text-gray-300'">
                            <p>Events</p>
                        </RouterLink>
                        <RouterLink to="/side/comp-v-model"
                            :class="isActive('/side/comp-v-model') ? 'text-green-700' : 'hover:text-gray-300'">
                            <p>Components v-model</p>
                        </RouterLink>
                        <RouterLink to="/side/fallthrough-att"
                            :class="isActive('/side/fallthrough-att') ? 'text-green-700' : 'hover:text-gray-300'">
                            <p>Fallthrough Attributes</p>
                        </RouterLink>
                        <RouterLink to="/side/slots"
                            :class="isActive('/side/slots') ? 'text-green-700' : 'hover:text-gray-300'">
                            <p>Slots</p>
                        </RouterLink><br>
                    </div>

                </nav>
            </aside>
        </div>

        <div class="w-full h-full bg-gray-300 p-5 text-center text-xl">
            <RouterView></RouterView>

        </div>
    </div>




</template>
