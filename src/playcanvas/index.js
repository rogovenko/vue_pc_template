import { loadModules } from "./__modules__"
import { setWindowSettings } from "./__settings__"
import * as pc from "playcanvas"

export async function createApp(canvas){
    let createAppPromise = new Promise((resolve, reject) => {


        setWindowSettings();

        const PRELOAD_MODULES = [
            { 'moduleName': 'Ammo', 'glueUrl': './libs/ammo/ammo.wasm.js', 'wasmUrl': './libs/ammo/ammo.wasm.wasm', 'fallbackUrl': './libs/ammo/ammo.js' },
            { 'moduleName': 'BASIS', 'glueUrl': './libs/basis/basis.wasm.js', 'wasmUrl': './libs/basis/basis.wasm.wasm', 'fallbackUrl': './libs/basis/ammo/basis.js' }
            ]
        loadModules(PRELOAD_MODULES, async() => {
            console.log('LOAD MODULES ====> all modules loaded')
            if(!canvas) return reject
            console.log('canvas', canvas)
            window.pc = pc
            setTimeout(() => {
                const app = new pc.Application(canvas, {
                    graphicsDeviceOptions: { alpha: true },
                    keyboard: new pc.Keyboard(document.body),
                    mouse: new pc.Mouse(document.body),
                    elementInput: new pc.ElementInput(canvas),
                    assetPrefix: ''
                })
                app.configure(window.CONFIG_FILENAME, (err => {
                    if(err){
                        throw err
                    } else {
                        console.log('=============== preload started ========================')
                        app.preload(()=>{
                            app.scenes.loadScene(window.SCENE_PATH, async (err)=> {
                                if(err){
                                    throw err
                                } else {
                                    const resizeFn = () => app.resizeCanvas()
                                    window.addEventListener('resize', resizeFn)
                                    app.start()
                                    console.log('hello world')
                                }
                            })
                        })
                    }
                }))
            },10)

        })
    })
    return createAppPromise
}