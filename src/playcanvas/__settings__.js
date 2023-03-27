import * as pc from "playcanvas"

export function setWindowSettings(){
    window.ASSET_PREFIX = "";
    window.SCRIPT_PREFIX = "";
    window.SCENE_PATH = "1700531.json";
    window.CONTEXT_OPTIONS = {
        'antialias': true,
        'alpha': false,
        'preserveDrawingBuffer': false,
        'preferWebGl2': true,
        'powerPreference': "default"
    };
    window.SCRIPTS = [ 126793069, 126793085, 126793070, 126793068 ];
    window.CONFIG_FILENAME = "config.json";
    window.INPUT_SETTINGS = {
        useKeyboard: true,
        useMouse: true,
        useGamepads: false,
        useTouch: true
    };
    pc.script.legacy = false;
    window.PRELOAD_MODULES = [
        {'moduleName' : 'Ammo', 'glueUrl' : 'files/assets/126793063/1/ammo.wasm.js', 'wasmUrl' : 'files/assets/126793095/1/ammo.wasm.wasm', 'fallbackUrl' : 'files/assets/126793074/1/ammo.js', 'preload' : true},
    ];
}

