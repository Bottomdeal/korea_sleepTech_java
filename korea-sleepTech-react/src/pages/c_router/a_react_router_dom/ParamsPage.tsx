import React from 'react'
import { useParams } from 'react-router-dom';

function ParamsPage() {

  const { id } = useParams();
  return (

    <div>
      <h3>Params Page</h3>
      <p>URL에서 받은 파라미터 ID: <strong>{id}</strong></p>
    </div>
  )
}

export default ParamsPage