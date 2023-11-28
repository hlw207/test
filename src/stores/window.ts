import { defineStore } from "pinia";

export const useWindowStore = defineStore('window', {
    state: () => {
        return {
            height: window.innerHeight,
            width: window.innerWidth,
            scrollPositionX : window.scrollX,
            scrollPositionY : window.scrollY,
        }
    },
    actions:{
        handleScroll(){
            this.scrollPositionX = window.scrollX;
            this.scrollPositionY = window.scrollY;
        }
    }
})