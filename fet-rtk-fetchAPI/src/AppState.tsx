// import React, {useState} from 'react'

// interface AppStateValue {
//   list: {id: number, name: string}[] 
// }

// const defaultContextValue : AppStateValue = {
//   list:  [ 
//     { "id": 1, "name": "Kate" },
//     { "id": 2, "name": "Ellen" }
//     ]
//   }

// export const appContext = React.createContext(defaultContextValue)
// export const appSetStateContext = React.createContext<
//   React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
// >(undefined)

// export const AppStateProvider: React.FC = (props) => {
//   const [state, setState] = useState(defaultContextValue)

//   return (
//     <appContext.Provider value={state}>
//       <appSetStateContext.Provider value={setState}>
//       {props.children}
//       </appSetStateContext.Provider>
//     </appContext.Provider>
//   )
// }

export {}