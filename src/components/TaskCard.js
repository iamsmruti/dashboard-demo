import React from 'react'

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import { BsFileEarmarkCheckFill, BsFileEarmarkFill } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdMessage } from 'react-icons/md'

const TaskCard = ({ item }) => {
  return (
    <div className="bg-white mb-5 p-3 py-5 rounded-md border-[1px] text-[14px]">
      <div className="flex justify-between">
        <p className="font-semibold text-[14px]">{item.name}</p>

        <div className="flex items-center text-blue-500">
          <BsFileEarmarkCheckFill className="text-md"/>

          <p className="ml-2 text-[12px]">{item.tasks}</p>
        </div>
      </div>

      <div className="flex text-[10px] mt-3 font-semibold">
        <p className="border-[1px] rounded-full px-2 py-[2px] mr-2">{item.id}</p>

        {item.tags.map((tag, index) => {
          if(tag === 'Done') return (
            <p className="bg-[#e8f9f0] text-[#18a34a] rounded-full px-2 py-[2px] mr-2">{tag}</p>
          )

          else if(tag === 'To Do') return (
            <p className="bg-[#feeef5] text-[#db2675] rounded-full px-2 py-[2px] mr-2">{tag}</p>
          )

          else if(tag === 'In Progress') return (
            <p className="bg-[#f6eefe] text-[#9233ea] rounded-full px-2 py-[2px] mr-2">{tag}</p>
          )

          else {
            if(index%2 !== 0) return (
              <p className="bg-[#fef6e7] text-[#cb8a06] rounded-full px-2 py-[2px] mr-2">{tag}</p>
            )

            if(index%2 === 0) return (
              <p className="bg-[#edf2fe] text-[#2f6aec] rounded-full px-2 py-[2px] mr-2">{tag}</p>
            )
          }
        })}
      </div>

      <div className="mt-5 flex justify-between">
        <div className="flex scale-75 ml-[-20px]">
          <AvatarGroup total={item.people}>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQQtVZTeLmYbmRzmPNuOzQCpNUk6Y0NJ7Ul8w_QPOl7nIBQck_8dhKQ9SO2Gp0Wph_x5Xawk0ykpHlecyk" />
            <Avatar alt="Travis Howard" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS2VWHHEFKiJ9yhvYW1zuBa8jRlzvqtV7SqCpBy4KTgPb1Oyh2KNJMtSPkbRDQW92pREz8QT4QaQ3mVXkY" />
          </AvatarGroup>

          <div className="bg-white w-fit p-3 rounded-full border-dashed border-[1px] ml-2">
            <AiOutlinePlusCircle className="text-xl"/>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex items-center text-[#a756f7] mr-3">
            <BsFileEarmarkFill className="text-md"/>

            <p className="ml-2 text-[12px]">{item.attatchments}</p>
          </div>

          <div className="flex items-center text-[#f59d0e]">
            <MdMessage className="text-md"/>

            <p className="ml-2 text-[12px]">{item.messages}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard