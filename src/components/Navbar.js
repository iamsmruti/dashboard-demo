import React,{ useState } from "react";
import CustomAvatar from "@/components/customElements/CustomAvatar";

// React Icons
import { MdOutlineMenuOpen } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md'
import { RxEnter } from 'react-icons/rx'
import { HiMicrophone } from 'react-icons/hi'
import { BiFolder } from 'react-icons/bi'
import { SidebarContent } from "./Sidebar";

const Navbar = () => {
  const [menuState, setMenuState] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const menuItems = [
    {
      name: 'Dashboards',
      state: 0,
    },
    {
      name: 'My Tasks',
      state: 1,
    },
    {
      name: 'Reporting',
      state: 2,
    },
    {
      name: 'Portfolios',
      state: 3,
    },
    {
      name: 'Goals',
      state: 4,
    },
  ];

  const user =  {
    name: 'Smruti Ranjan',
    online: false,
    message: 23,
    image: 'https://avatars.githubusercontent.com/u/35039502?height=180&v=4&width=180',
  }

  const toggleSidebar = () => {
    setSidebar((prev) => !prev)
  }

  return (
    <div className="flex items-center justify-between w-[100%] transition-all duration-300">
      <div className="hidden md:flex items-center">
        <SearchBar />

        <div className="px-5">
          <HiMicrophone className="cursor-pointer text-xl bg-white text-gray-400"/>
        </div>
      </div>

      <div className="flex md:hidden">
        <MdOutlineMenuOpen onClick={toggleSidebar} className="text-2xl text-gray-400 cursor-pointer"/>
      </div>

      {sidebar ? <div className="absolute md:hidden transition-all duration-300 delay-100 top-[90px] left-0 bg-[#f6f8fa] w-[100%] overflow-y-scroll">
        <SidebarContent />
      </div> : <div className="absolute md:hidden transition-all duration-300 delay-100 top-[90px] left-[-450px] bg-[#f6f8fa] w-[100%] overflow-y-scroll">
        <SidebarContent />
      </div>}

      <div className="md:flex hidden">
        {menuItems.map((item) => {
          if(menuState === item.state) return (
            <p onClick={() => setMenuState(item.state)} className="text-[14px] font-semibold cursor-pointer mx-2">{item.name}</p>
          ) 

          else return (
            <p onClick={() => setMenuState(item.state)} className="text-[14px] text-gray-400 cursor-pointer mx-2">{item.name}</p>
          )
        })}
      </div>

      <div className="flex items-center">
        <div>
          <BiFolder className="text-2xl cursor-pointer text-gray-400 mx-2"/>
        </div>
        <div>
          <MdNotifications className="text-2xl cursor-pointer text-gray-400 mx-2"/>
        </div>

        <CustomAvatar user={user}/>
      </div>
    </div>
  )
}

export default Navbar

export const SearchBar = () => {
  return (
    <div className="relative">
      <div className="absolute left-[12px] top-[10px]">
        <AiOutlineSearch className="text-xl bg-white text-gray-400"/>
      </div>
      <input className="text-[14px] bg-white border-[1px] rounded-md outline-none px-10 py-2" placeholder="Search Tasks" />
      <div className="absolute right-[12px] top-[10px]">
        <RxEnter className="text-xl bg-white text-gray-400"/>
      </div>
    </div>
  )
}