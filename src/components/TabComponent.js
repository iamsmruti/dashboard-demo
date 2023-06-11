import React, { useState } from 'react'

const TabComponent = () => {
  const [tabState, setTabState] = useState(0)
  const items = [
    {
      name: 'Timeline',
      state: 0
    },
    {
      name: 'Calender',
      state: 1
    },
    {
      name: 'Dashboard',
      state: 2
    },
    {
      name: 'Progress',
      state: 3
    },
    {
      name: 'Forms',
      state: 4
    },
    {
      name: 'More',
      state: 5
    }
  ]
  return (
    <div className="text-center flex text-[14px]">
      {items.map((item) => {
        if(item.state === tabState) return (
          <p onClick={() => setTabState(item.state)} className="mx-2 pb-2 cursor-pointer text-blue-500 font-semibold border-b-[1px] border-blue-500">{item.name}</p>
        )

        if(item.state !== tabState) return (
          <p onClick={() => setTabState(item.state)} className="mx-2 pb-2 cursor-pointer text-gray-400 font-semibold">{item.name}</p>
        )
      })}
    </div>
  )
}

export default TabComponent