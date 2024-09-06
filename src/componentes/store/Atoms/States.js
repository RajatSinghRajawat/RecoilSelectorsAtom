import axios from "axios";
import { atom, selector } from "recoil";

export const todosAtom = atom({
    key: 'todosAtom',
    default: []
});


export const todosSelectors = selector({
    key: 'todosSelectors',
    get: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    }
})

export const todosCount = selector({
    key: 'todosCount',
    get: ({ get }) => {
        const data = get(todosAtom)
        return data.length
    }
})

export const count = selector({
    key:'count',
    get:({get})=>{
        const atom1 = get(todosAtom);
        return atom1.length
    }
})