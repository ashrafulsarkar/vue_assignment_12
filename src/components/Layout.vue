<script setup>
import { ref } from 'vue'

</script>

<template>
        <v-layout>
            <v-app-bar color="white">
                <v-container fluid>
                    <v-row>
                        <v-col>
                            <v-app-bar-title>Inventory management</v-app-bar-title>
                        </v-col>
                    </v-row>
                </v-container>

            </v-app-bar>

            <v-main>
                <v-container fluid>
                    <v-row>
                        <v-navigation-drawer>
                            <v-list-item>
                                <router-link to="/">Dashboard</router-link>
                            </v-list-item>
                        </v-navigation-drawer>
                        <v-col cols="12">
                            <slot></slot>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-layout>
</template>

<style scoped>
header {
    box-shadow: none !important;
    border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
a{
    display: block;
    text-decoration: none;
    color: black;
}
</style>