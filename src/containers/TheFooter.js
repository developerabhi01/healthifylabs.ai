import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2020 Upside Cloud Technologies.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://upsidecloudtechnologies.com" target="_blank" rel="noopener noreferrer">Upside Cloud Technologies</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
