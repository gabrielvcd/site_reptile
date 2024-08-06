/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTextBoxSearchOutline } from '@mdi/js';

// Composables
import { createVuetify } from "vuetify";

// Custom theme properties
const customDarkTheme = {
  dark: true,
  colors: {
    background: "#cef8d1",
    surface: "#15202b",
    primary: "#050052ab",
    secondary: "#050052ab",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  },
};

export default createVuetify({
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiTextBoxSearchOutline,
    }
  },

  theme: {
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme,
    },
  },
  }
);




