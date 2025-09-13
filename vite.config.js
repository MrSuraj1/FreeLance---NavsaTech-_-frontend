import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure you import the react plugin
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(), react()], // Define plugins here once
});
