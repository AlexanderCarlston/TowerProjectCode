<template>
  <v-app id="inspire">
      <v-toolbar color="primary" dark fixed app>
        <v-toolbar-title>Personal Site Data</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
          <Body/>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
import Body from '@/components/Body.vue'

export default {
  name: 'App',
  components: {
    Body
  },
  data: () => ({

  })
}
</script>

<style>

</style>
