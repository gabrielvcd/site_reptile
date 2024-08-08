<template>
  <v-app>
    
      <v-main>
        <router-view />
        <v-app-bar :elevation="2">
          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="drawer = !drawer" color="rgb(0, 255, 21)"></v-app-bar-nav-icon>
            <template>
              
                <v-card>
    
      
      <v-main style="height: 250px"></v-main>
  
  </v-card>
            </template>
          </template>
          <v-app-bar-title><div id="color_title">Inicio</div></v-app-bar-title>
        </v-app-bar>
      
        <v-carousel cycle>
        
        <v-carousel-item 
          src="/src/imgs/chameleon.jpeg"
          cover
        ></v-carousel-item>
        
        <v-carousel-item
          src="/src/imgs/crocodiles.jpg"
          cover
        ></v-carousel-item>
        
        <v-carousel-item
          src="/src/imgs/lizard.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="/src/imgs/snake.jpg"
          cover
        ></v-carousel-item>

      </v-carousel>
      <v-navigation-drawer
        v-model="drawer"
        
        theme="dark"
        permanent
      >
        <v-list nav>

          <v-list-item title="Inicio" value="home" >
            <template v-slot:prepend>
              <svg-icon type="mdi" :path="icohom" class="icon"></svg-icon>
  
            </template>
          </v-list-item>

          <v-list-item title="Login/Registro" value="Register" >
            <template v-slot:prepend>
              <svg-icon type="mdi" :path="icolog" class="icon"></svg-icon>
  
            </template>
          </v-list-item>  

          <v-list-item title="Répteis" value="Reptile" >
            <template v-slot:prepend>
              <svg-icon type="mdi" :path="icosch" class="icon"></svg-icon>
  
            </template>
          </v-list-item> 

          <v-list-item title="Agende" value="Travels" >
            <template v-slot:prepend>
              <svg-icon type="mdi" :path="icoclock" class="icon"></svg-icon>
  
            </template>
          </v-list-item>   

          <v-list-item title="Sobre nós" value="About_us" >
            <template v-slot:prepend>
              <svg-icon type="mdi" :path="icosbns" class="icon"></svg-icon>
  
            </template>
          </v-list-item>   

          <v-list-item title="Configurações" value="Config" >
              <template v-slot:prepend>
                <svg-icon type="mdi" :path="icoacc" class="icon"></svg-icon>
              
              </template>
          </v-list-item> 

        </v-list>
      </v-navigation-drawer>
    </v-main>
  
    <AppFooter />
  </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTextBoxSearchOutline } from '@mdi/js';
import { mdiCog } from '@mdi/js';
import { mdiHome } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';
import { mdiClockIn } from '@mdi/js';
import { mdiCardAccountDetailsOutline } from '@mdi/js';



  export default {
    name: "tst",
    components: {
    SvgIcon,
  },
    data () {
      
      return {
        drawer: false,
        rail: true,
        icosch: mdiTextBoxSearchOutline,
        icoacc: mdiCog,
        icohom: mdiHome,
        icolog: mdiAccountCircle,
        icoclock: mdiClockIn,
        icosbns: mdiCardAccountDetailsOutline,
        
      }
      library.add(mdiTextBoxSearchOutline);
      
      return{
        
      }
    },
  
  }



</script>

<style scoped>
.item-prepend {
  display: flex;
  align-items: center; /* Alinha verticalmente o ícone e o texto */
}

.icon {
  margin-right: 30px; /* Espaço entre o ícone e o texto */
  display: flex; /* Garantia adicional para o ícone se comportar como um item flexível */
}

.item-title {
  display: flex; /* Garantia adicional para o texto se comportar como um item flexível */
  align-items: center; /* Alinha verticalmente o texto com o ícone */
  
}
</style>

<script lang="ts" setup>


</script>



