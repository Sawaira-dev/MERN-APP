import React, { useContext, useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/context'
import { decodeToken } from 'react-jwt'


// export const AppRoute = 'http://localhost:1234/'
export const AppRoute = '/'
const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken)
  return <CurrentUser />
}


// import React, { useState, useContext } from 'react'
// import Admin from './Admin'
// import User from './User'
// import Guest from './Guest/CustomForm'
// import { GlobalContext } from './Context/context'
// import { decodeToken } from 'react-jwt';


// const ComponentByRoles = {
//   'admin': Admin,
//   'user': User,
//   'guest': Guest
// }

// const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles[`guest`]
// const getDecodeToken = (token) => decodeToken(token) || null

// export default function App() {

//   const { state, dispatch } = useContext(GlobalContext)
//   // console.log(state.token)

//   const currentToken = getDecodeToken(state.token)
//   console.log(currentToken)

//   // const CurrentUser = getUserRole(state.role)
//   const CurrentUser = getUserRole(currentToken.role) 
//   // jb token work kary tb enabale krna ha
//   return (
//     <CurrentUser />
//   );
// }
