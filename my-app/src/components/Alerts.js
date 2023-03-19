import React from 'react'

export default function Alerts(props) {
  return (props.alert &&<>
    <div className="position-relative">
    <div className={`alert alert-warning alert-dismissible fade show bg-${props.mode==="light"? "dark":"light"} text-${props.mode==="light"? "light":"dark"} `} role="alert">
  <strong>{props.alert.type}</strong>{ props.alert.msg}
  {/* <button type="button" className="btn-close position-absolute top-0 start-0 " data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    </div>


</>
  )
}
