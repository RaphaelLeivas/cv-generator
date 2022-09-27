import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import { CV } from './components/CV'

function App() {
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div>
      <div style={{ display: 'none' }}>
        <CV ref={componentRef} />
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  )
}

export default App
