import RightSidebar from "@/components/Layout/RightSidebar";
import Heading from "@/components/Layout/Heading";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import { MdEdit, MdFilterList } from 'react-icons/md'
import { AiOutlinePlusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsThreeDots, BsList } from 'react-icons/bs'
import { BsFileEarmarkCheckFill } from 'react-icons/bs'
import { BiGridAlt } from 'react-icons/bi'

import { IoIosArrowDown } from 'react-icons/io'
import { FaLock } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

import TabComponent from "@/components/TabComponent";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { tasksData } from "@/data/tasks";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] flex">
      <div className="w-[100%] grid sm:grid-cols-6 grid-cols-1">
        <div className="hidden md:col-span-2 lg:col-span-1 col-span-1 md:block h-[100vh] overflow-y-scroll border-r-[1px]">
          <Sidebar />
        </div>
        <div className="md:col-span-4 lg:col-span-5 col-span-6 h-[100vh] overflow-y-scroll">
          <div className="h-[90px] sticky top-0 bg-[#f6f8fa] z-50 border-b-[1px] px-7 flex items-center">
            <Navbar />
          </div>
          <div className="px-2 sm:px-3 md:px-5 lg:pl-8 py-5 md:py-10">
            <div className="flex items-center justify-between w-[100%] flex-wrap lg:flex-nowrap">
              <div className="flex items-center mb-5 lg:mb-0">
                <Heading title={"Task Boards"} />
                <MdEdit className="ml-3 text-2xl text-gray-400"/>
              </div>

              <div className="mb-5 lg:mb-0 w-[100%] md:w-auto overflow-x-scroll">
                <TabComponent />
              </div>

              <div className="flex">
                <AvatarGroup total={24}>
                  <Avatar alt="Spider Man" src="https://pbs.twimg.com/media/Ee_5_WCUYAAp9i0.jpg" />
                  <Avatar alt="Travis Howard" src="https://www.gamespot.com/a/uploads/scale_landscape/1578/15789737/4001018-0.jpg" />
                  <Avatar alt="Agnes Walker" src="https://i.redd.it/v26ls3k8mhe61.jpg" />
                  <Avatar alt="Trevor Henderson" src="https://wallpaperaccess.com/full/146393.jpg" />
                </AvatarGroup>

                <div className="bg-white w-fit p-3 rounded-full border-dashed border-[1px] ml-2">
                  <AiOutlinePlusCircle className="text-xl"/>
                </div>
              </div>
            </div>

            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-10">
              <div className="grid grid-cols-2 w-[100%] border-[1px] rounded-md">
                <div className="flex items-center justify-center cursor-pointer border-r-[1px] py-2">
                  <BiGridAlt className="text-xl"/>
                  <p className="font-semibold text-[14px] ml-2">Board View</p>
                </div>

                <div className="flex items-center justify-center cursor-pointer bg-white py-2">
                  <BsList className="text-xl"/>
                  <p className="font-semibold text-[14px] ml-2">List View</p>
                </div>
              </div>

              <div className="px-1 text-[14px] flex items-center text-gray-400">
                <FaLock />
                <p className="ml-3">Limited Access</p>
                <IoIosArrowDown className="ml-3"/>
              </div>

              <div className="flex justify-end">
                <SearchBar />
              </div>

              <div className="flex justify-end">
                <div className="w-[40px] ml-2 h-[40px] text-xl flex justify-center items-center text-gray-400 rounded-md border-[1px] bg-white first-letter:">
                  <BsFileEarmarkCheckFill />
                </div>
                <div className="w-[40px] ml-2 h-[40px] text-xl flex justify-center items-center text-gray-400 rounded-md border-[1px] bg-white first-letter:">
                  <BsFileEarmarkCheckFill />
                </div>
                <div className="w-[40px] ml-2 h-[40px] text-xl flex justify-center items-center text-gray-400 rounded-md border-[1px] bg-white first-letter:">
                  <BsFileEarmarkCheckFill />
                </div>
                <div className="w-[40px] ml-2 h-[40px] text-xl flex justify-center items-center text-gray-400 rounded-md border-[1px] bg-white first-letter:">
                  <BsFileEarmarkCheckFill />
                </div>
                <div className="w-[40px] ml-2 h-[40px] text-xl flex justify-center items-center text-gray-400 rounded-md border-[1px] bg-white first-letter:">
                  <BsFileEarmarkCheckFill />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-10">
              <BacklogTasks />
              <ToDoTasks />
              <InProcess />
              <Done />
            </div>
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  )
}

export const BacklogTasks = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center">
          <h3 className="font-semibold">Backlog Tasks</h3>

          <span className="bg-[#f6f1e3] w-[30px] h-[30px] text-[13px] font-bold text-[#cb8a06] flex justify-center items-center rounded-full ml-4">
            {tasksData.filter((item) => (!item.tags.includes('Done') && !item.tags.includes('To Do') && !item.tags.includes('In Progress'))).length}
          </span>
        </div>

        <BsThreeDots className="text-2xl cursor-pointer" />
      </div>

      <div className="mt-5">
        {tasksData.filter((item) => (!item.tags.includes('Done') && !item.tags.includes('To Do') && !item.tags.includes('In Progress'))).map((item) => (
          <TaskCard item={item} />
        ))}
      </div>

      <div className="bg-white flex justify-center border-[1px] rounded-md items-center py-2">
        <AiFillPlusCircle className="text-gray-400" />
      </div>
    </div>
  )
}

export const ToDoTasks = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center">
          <h3 className="font-semibold">To Do Tasks</h3>

          <span className="bg-[#feeef5] text-[#db2675] w-[30px] h-[30px] text-[13px] font-bold flex justify-center items-center rounded-full ml-4">
            {tasksData.filter((item) => item.tags.includes('To Do')).length}
          </span>
        </div>

        <BsThreeDots className="text-2xl cursor-pointer" />
      </div>

      <div className="mt-5">
        {tasksData.filter((item) => item.tags.includes('To Do')).map((item) => (
          <TaskCard item={item} />
        ))}
      </div>

      <div className="bg-white flex justify-center border-[1px] rounded-md items-center py-2">
        <AiFillPlusCircle className="text-gray-400" />
      </div>
    </div>
  )
}

export const InProcess = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center px-1">
          <h3 className="font-semibold">In Progress</h3>

          <span className="bg-[#f6eefe] text-[#9233ea] w-[30px] h-[30px] text-[13px] font-bold flex justify-center items-center rounded-full ml-4">
            {tasksData.filter((item) => item.tags.includes('In Progress')).length}
          </span>
        </div>

        <BsThreeDots className="text-2xl cursor-pointer" />
      </div>

      <div className="mt-5">
        {tasksData.filter((item) => item.tags.includes('In Progress')).map((item) => (
          <TaskCard item={item} />
        ))}
      </div>

      <div className="bg-white flex justify-center border-[1px] rounded-md items-center py-2">
        <AiFillPlusCircle className="text-gray-400" />
      </div>
    </div>
  )
}

export const Done = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center px-1">
          <h3 className="font-semibold">Done</h3>

          <span className="bg-[#e8f9f0] text-[#18a34a] w-[30px] h-[30px] text-[13px] font-bold flex justify-center items-center rounded-full ml-4">
            {tasksData.filter((item) => item.tags.includes('Done')).length}
          </span>
        </div>

        <BsThreeDots className="text-2xl cursor-pointer" />
      </div>

      <div className="mt-5">
        {tasksData.filter((item) => item.tags.includes('Done')).map((item) => (
          <TaskCard item={item} />
        ))}
      </div>

      <div className="bg-white flex justify-center border-[1px] rounded-md items-center py-2">
        <AiFillPlusCircle className="text-gray-400" />
      </div>
    </div>
  )
}

export const SearchBar = () => {
  return (
    <div className="relative">
      <div className="absolute left-[12px] top-[10px]">
        <AiOutlineSearch className="text-xl bg-white text-gray-400"/>
      </div>
      <input className="text-[14px] bg-white border-[1px] rounded-md outline-none px-10 py-2" placeholder="Search Tasks" />
    </div>
  )
}