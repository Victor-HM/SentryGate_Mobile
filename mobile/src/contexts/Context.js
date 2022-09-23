import { createContext } from "react";

const Context = createContext({
 user: {},
 setUser: () => {},
 auth: false , 
 setAuth: () => {}
})

export default Context