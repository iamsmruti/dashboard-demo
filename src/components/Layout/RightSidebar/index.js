import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { HiOutlineArrowRight } from 'react-icons/hi';
import CustomAvatar from "../../customElements/CustomAvatar";
import { userData } from "@/data/users";

const RightSidebar = () => {
  return (
    <div className="border-l-[1px] h-[100vh] w-[80px] flex flex-col items-center justify-between">
      <div className="h-[90px] border-b-[1px] w-[100%] flex justify-center cursor-pointer hover:bg-slate-200 items-center">
        <RxCross1 className="text-gray-400 bg-transparent"/>
      </div>

      <div className="flex flex-col ">
        {userData.map((user) => (
          <CustomAvatar user={user} />
        ))}
      </div>

      <div className="h-[90px] border-t-[1px] w-[100%] flex justify-center items-center cursor-pointer hover:bg-slate-200">
        <HiOutlineArrowRight className="text-gray-400 bg-transparent"/>
      </div>
    </div>
  )
}

export default RightSidebar