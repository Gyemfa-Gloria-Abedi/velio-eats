import React from 'react'

const DeliveryCards = () => {
  return (
    <div>
      <table >
        <tr className="block bg-orange-50 p-4 gap-8">
            <th>Name</th>
            <th>Cycle Reg. Id</th>
            <th>Phone number</th>
        </tr>
            <tr className="block px-4">
                <td>Abdul</td>
                <td>ES 123</td>
                <td>0543216789</td>
            </tr>
      </table>
    </div>
  )
}

export default DeliveryCards
