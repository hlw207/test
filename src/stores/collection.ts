import { defineStore } from "pinia";
import {CarCollection} from "~/utils/interfaces";

export const useCollectionStore = defineStore('collection', {
    state: () => {
        return {
            total_num : 234,
            page : 0,
            collections : [] as CarCollection[],
        }
    },

    actions: {
        fetch(page: number) {
            this.collections = []
            if(12 * page >= this.total_num)
                return
            this.page = page
            let i : number
            for(i = 0;i < (this.total_num - page * 12 > 12 ? 12 : this.total_num - page * 12);i++){
                const info: CarCollection = {id: i, picturePath: '~/../public/pictures/car/0.jpg', name: "雅迪-3", price: 20.99, time: "2021/01/21", mileage: 4.68, source: "北京"}
                this.collections.push(info)
            }
        },
        change(total_page:number){
            this.total_num = total_page
        }
    }

})