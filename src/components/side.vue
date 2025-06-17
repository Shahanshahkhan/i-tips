<script setup>
import { onActivated, ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const route = useRoute()
// const isVisible = ref(false)


const isDropDownOpen = ref(false);
const isEssential = ref(false);



onMounted (() => {
    const storedState = localStorage.getItem('dropdownState')
    isDropDownOpen.value = storedState === 'true'
})

watch(isDropDownOpen, (newVal) => {
    localStorage.setItem('dropdownState', newVal)
})


onMounted (() => {
    const storedState = localStorage.getItem('dropdownState')
    isEssential.value = storedState === 'true'
})

watch(isEssential, (newVal) => {
    localStorage.setItem('dropdownState', newVal)
})




function isActive(path) {
    return route.path === path
    
}

// function toggle() {
//     isVisible.value = !isVisible.value
// }
</script>






<template>
    <div class="flex w-screen h-screen">
        <div class="flex">
            <aside class="w-70 bg-black">
                <nav class="text-gray-400 ml-13 p-3">
                    <div class="hover:text-white">
                        <h1 @click="isDropDownOpen = !isDropDownOpen">Getting Started</h1>
                        <hr class="w-30"><br>
                    </div>
                    <div v-if="isDropDownOpen">
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
                        <div v-if="isEssential">
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
                        <h2>Component In-Depth</h2>
                        <hr class="w-40"><br>
                    </div>
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

                </nav>
            </aside>
        </div>

        <div class="w-full h-full bg-gray-300 p-5 text-center text-xl">
            <RouterView></RouterView>

        </div>
    </div>




</template>
