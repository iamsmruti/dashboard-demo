import React from 'react'

import { MdOutlineMenuOpen, MdInbox, MdCurrencyBitcoin, MdImageSearch } from 'react-icons/md'
import { RiFolderUploadFill } from 'react-icons/ri'
import { HiViewGridAdd } from 'react-icons/hi'
import { BiTimeFive } from 'react-icons/bi'
import { GiSettingsKnobs, GiSuitcase } from 'react-icons/gi'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { AiFillTag } from 'react-icons/ai'
import { TbDeviceAnalytics } from 'react-icons/tb'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { CgHashtag } from 'react-icons/cg'
import CustomAvatar from "./customElements/CustomAvatar"
import { Divider } from "@mui/material"

const Sidebar = () => {
  const handleClickMenu = () => {}
  return (
    <div>
      <div className="px-7 h-[90px] border-b-[1px] flex items-center justify-between">
        <p className="font-semibold text-[20px]">Dashboard</p>
        <MdOutlineMenuOpen onClick={handleClickMenu} className="text-xl text-gray-400 cursor-pointer"/>
      </div>

      <SidebarContent />
    </div>
  )
}

export default Sidebar

export const MenuItemComponent = ({ item }) => {
  return (
    <div className="py-3 flex items-center justify-between cursor-pointer hover:scale-105">
      <div className="flex items-center ">
        <div className="text-[22px] text-[#3c82f5] mr-4">
          {item.icon}
        </div>
        <p className="text-[14px]">{item.name}</p>
      </div>

      <span className="bg-[#e5ecfb] text-[#3c82f5] w-[30px] h-[30px] text-[13px] font-bold flex justify-center items-center rounded-full ml-4">
        {item.notif}
      </span>
    </div>
  )
}

export const SidebarContent = () => {
  const dashboardItems = [
    {
      name: 'Inbox',
      notif: 4,
      icon: <MdInbox />
    },
    {
      name: 'Drive Files',
      notif: 435,
      icon: <RiFolderUploadFill />
    },
    {
      name: 'Boards',
      notif: 5,
      icon: <HiViewGridAdd />
    },
    {
      name: 'Updates',
      notif: 9,
      icon: <BiTimeFive />
    },
    {
      name: 'Analytics',
      notif: 4,
      icon: <TbDeviceAnalytics />
    },
    {
      name: 'CRM Dashboard',
      notif: 4,
      icon: <BsFillGrid1X2Fill />
    },
    {
      name: 'Ecommerce',
      notif: 4,
      icon: <AiFillTag />
    },
    {
      name: 'Cryotocurrency',
      notif: 4,
      icon: <MdCurrencyBitcoin />
    },
    {
      name: 'Projects',
      notif: 4,
      icon: <GiSuitcase />
    },
    {
      name: 'NFT Marketplace',
      notif: 4,
      icon: <MdImageSearch />
    },
    {
      name: 'Settings',
      notif: 4,
      icon: <GiSettingsKnobs />
    },
  ];

  const projects = [
    {
      name: 'Additional Calender',
      notif: 32,
      icon: <CgHashtag />
    },
    {
      name: 'Logo Design',
      notif: 32,
      icon: <CgHashtag />
    },
    {
      name: 'User Research',
      notif: 32,
      icon: <CgHashtag />
    },
    {
      name: 'Marketing Sales',
      notif: 32,
      icon: <CgHashtag />
    },
    {
      name: 'New Template',
      notif: 32,
      icon: <CgHashtag />
    },
  ]

  const user =  {
    name: 'Smruti Ranjan',
    online: false,
    message: 0,
    image: 'https://avatars.githubusercontent.com/u/35039502?height=180&v=4&width=180',
  }

  return (
    <div className="h-[calc(100vh-90px)]">
      <div className="px-5 py-2 flex justify-between items-center border-b-[1px]">
        <div className="flex items-center">
          <CustomAvatar user={user} />
          <div className="ml-3">
            <p className="text-[12p] font-semibold">Smruti Ranjan</p>
            <p className="text-[10px] text-gray-400 font-semibold">MERN Developer</p>
          </div>
        </div>

        <div className="text-blue-500">
          <IoIosArrowUp />
          <IoIosArrowDown />
        </div>
      </div>

      <div className="flex justify-between px-5 my-3 mt-7">
        <p className="text-gray-400 text-[12px] font-bold">DASHBOARDS</p>
        <IoIosArrowUp className="text-blue-500"/>
      </div>

      <div className="px-5">
        {dashboardItems.map((item) => (
          <MenuItemComponent item={item} />
        ))}
      </div>

      <Divider className="mt-5" />

      <div className="flex justify-between px-5 my-3 mt-10">
        <p className="text-gray-400 text-[12px] font-bold">PROJECTS</p>
        <IoIosArrowUp className="text-blue-500"/>
      </div>

      <div className="px-5">
        {projects.map((item) => (
          <MenuItemComponent item={item} />
        ))}
      </div>
    </div>
  )
}