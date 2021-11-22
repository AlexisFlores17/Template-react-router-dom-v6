import create from 'zustand';

export const AuthStore = create( (set) => ({

    user:{},
    auth: false,
    changeAuth: (estado) => set( (state) => ({...state, auth: estado}))
    
}))