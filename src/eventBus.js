//import Vue from 'vue';
//export const eventBus = new Vue();

import mitt from "mitt";

let emitter = mitt();
emitter.$on = emitter.on;
emitter.$emit = emitter.emit;

export const eventBus = emitter;
