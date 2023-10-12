import { resolve } from 'path'
import { defineConfig } from "vite";

export default defineConfig({
    root: 'src',
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html')
            },
            output: {
                assetFileNames: ({name}) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                        return 'assets/imgs/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }

                    return 'assets/[name]-[hash][extname]'
                }
            }
        }
    }
})