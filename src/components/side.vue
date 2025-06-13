<script setup>
import { onActivated, ref } from 'vue';
import { RouterLink } from 'vue-router';


const activeLink = ref('')


</script>



<template>
    <div class="flex w-screen h-screen">
        <div class="flex">
            <aside class="w-100 bg-black">
                <nav class="text-gray-400 ml-13 p-3">
                    <div class="hover:text-white">
                        <h1>Getting Started</h1>
                        <hr class="w-30"><br>
                    </div>
                    <RouterLink to="/side/intro">
                        <p :class="{ 'text-green-700': activeLink === 'intro', 'hover:text-gray-300': activeLink !== 'intro' }"
                            @click="activeLink = 'intro'"> Introduction</p>
                    </RouterLink>
                    <RouterLink to="/side/Quickstart">
                        <p :class="{ 'text-green-700': activeLink === 'quickstart', 'hover:text-gray-300': activeLink !== 'quickstrat' }"
                            @click="activeLink = 'quickstart'">Quick Start</p><br>
                    </RouterLink>
                    <div class="hover:text-white">
                        <h2>Essential</h2>
                        <hr class="w-20"><br>
                    </div>
                    <RouterLink to="/side/create-an-app">
                        <p :class="{ 'text-green-700': activeLink === 'create-an-app', 'hover:text-gray-300': activeLink !== 'create-an-app' }"
                            @click="activeLink = 'create-an-app'">Creating an Application</p>
                    </RouterLink>
                    <RouterLink to="/side/reactivity-fund">
                        <p :class="{ 'text-green-700': activeLink === 'reactivity-fund', 'hover:text-gray-300': activeLink !== 'reactivity-fund' }"
                            @click="activeLink = 'reactivity-fund'">Reactivity Fundamental</p>
                    </RouterLink>
                    <RouterLink to="/side/computed-prop">
                        <p :class="{ 'text-green-700': activeLink === 'computed-prop', 'hover:text-gray-300': activeLink !== 'computed-prop' }"
                            @click="activeLink = 'computed-prop'">Computed Properties</p>
                    </RouterLink>
                    <RouterLink to="/side/class-and-style">
                        <p :class="{ 'text-green-700': activeLink === 'class-and-app', 'hover:text-gray-300': activeLink !== 'class-and-app' }"
                            @click="activeLink = 'class-and-app'">Class And Style</p>
                    </RouterLink>
                    <RouterLink to="/side/condition-rend">
                        <p :class="{ 'text-green-700': activeLink === 'condition-rend', 'hover:text-gray-300': activeLink !== 'condition-rend' }"
                            @click="activeLink = 'condition-rend'">Conditional Rendering </p>
                    </RouterLink>
                    <RouterLink to="/side/list-rend">
                        <p :class="{ 'text-green-700': activeLink === 'list-rend', 'hover:text-gray-300': activeLink !== 'list-rend' }"
                            @click="activeLink = 'list-rend'">List Rendering</p><br>
                    </RouterLink>
                    <div class="hover:text-white">
                        <h2>Component In-Depth</h2>
                        <hr class="w-40"><br>
                    </div>
                    <RouterLink to="/side/registration">
                        <p :class="{ 'text-green-700': activeLink === 'registration', 'hover:text-gray-300': activeLink !== 'registration' }"
                            @click="activeLink = 'registration'">Registration</p>
                    </RouterLink>
                    <RouterLink to="/side/props">
                        <p :class="{ 'text-green-700': activeLink === 'props', 'hover:text-gray-300': activeLink !== 'prors' }"
                            @click="activeLink = 'props'">Props</p>
                    </RouterLink>
                    <RouterLink to="/side/events">
                        <p :class="{ 'text-green-700': activeLink === 'events', 'hover:text-gray-300': activeLink !== 'events' }"
                            @click="activeLink = 'events'">Events</p>
                    </RouterLink>
                    <RouterLink to="/side/comp-v-model">
                        <p :class="{ 'text-green-700': activeLink === 'comp-v-model', 'hover:text-gray-300': activeLink !== 'comp-v-model' }"
                            @click="activeLink = 'comp-v-model'">Components v-model</p>
                    </RouterLink>
                    <RouterLink to="/side/fallthrough-att">
                        <p :class="{ 'text-green-700': activeLink === 'fallthrough-att', 'hover:text-gray-300': activeLink !== 'fallthrough-att' }"
                            @click="activeLink = 'fallthrough-att'">Fallthrough Attributes</p>
                    </RouterLink>
                    <RouterLink to="/side/slots">
                        <p :class="{ 'text-green-700': activeLink === 'slots', 'hover:text-gray-300': activeLink !== 'slots' }"
                            @click="activeLink = 'slots'">Slots</p>
                    </RouterLink>
                </nav>
            </aside>
        </div>

        <div class="w-full h-full bg-gray-300 p-5 text-center text-xl">
            <RouterView></RouterView>

        </div>
    </div>




</template>

