import { Roller } from 'react-awesome-spinners'

import React from 'react'

export default function RollerSpinner() {
  return (
    <div
      style={{
        display: 'absolute',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Roller />
    </div>
  )
}
