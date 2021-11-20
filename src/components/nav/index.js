import React from "react";
import { Link } from "react-router-dom";

import { Menu, Divider, Layout } from "antd";

import {
  SmileFilled,
  ContactsFilled,
  ProjectFilled,
  LinkedinFilled,
  GithubFilled
} from "@ant-design/icons";

const {Sider} = Layout;

const Nav = () => {
  return (
    <Sider className="menu bg-white">
      <div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
         
          <Divider />

          <Link to="/"><img width={200} src="logo.png" alt="logo" /></Link>
          <Divider />

          <Menu.Item key="1" icon={<SmileFilled/>}>
            <Link to="/">About me</Link>
          </Menu.Item>
          {/* <Menu.Item key="2" icon={<ProfileFilled />}>
            <Link to="/resume">Resume</Link>
          </Menu.Item> */}
          <Menu.Item key="3" icon={<ProjectFilled />}>
            <Link to="/project">Projects</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContactsFilled />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Divider />
          <Menu.Item key="5" icon={<LinkedinFilled />}>
            <a href="https://www.linkedin.com/in/stlchaudhary/" target='_blank' rel="noreferrer">LinkedIn</a>
          </Menu.Item>
          <Menu.Item key="6" icon={<GithubFilled />}>
            <a href="https://github.com/CHAUDHARYS1" target='_blank' rel="noreferrer">Github</a>
          </Menu.Item>
          
        </Menu>
      </div>
    </Sider>
  );
};

export default Nav;
