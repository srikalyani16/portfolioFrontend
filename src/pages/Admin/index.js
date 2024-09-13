import React from "react";
import Header from "../../components/Header";
import { useEffect } from "react";
import { Tabs } from "antd";

import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import { useSelector } from "react-redux";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Intro",
    children: <AdminIntro />,
  },
  {
    key: "2",
    label: "About",
    children: <AdminAbout />,
  },
  {
    key: "3",
    label: "Experiences",
    children:<AdminExperiences/>,
  },
  {
    key: "4",
    label: "Projects",
    children:<AdminProjects/>,
  },
  {
    key: "5",
    label: "Contact",
    children:<AdminContact/>,
  },
];

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      window.location.href="/admin-login";
    }
  },[]);

  return (
    <div>
      <Header />
      <div className='flex gap-10 items-center py-2 px-5 justify-between'>
        <div className="flex gap-10 items-center">
        <h1 className='text-3xl text-primary'>Portfolio Admin</h1>
        <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
        <h1 className="underline text-primary text-xl cursor-pointer" onClick={()=>{
          localStorage.removeItem("token");
          window.location.href="/admin-login"
        }}>Logout</h1>
      
    </div>
     
      {portfolioData && (
        <div className="p-2 px-5 pb-10">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      
        </div>
      )}
    </div>
  );
};

export default Admin;
