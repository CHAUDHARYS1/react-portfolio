import React from "react";
import { Link } from "react-router-dom";

import { Menu, Image, Divider, Layout } from "antd";

import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
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
          <Image
            width={250}
            src="https://static.wixstatic.com/media/abfe49_245f6ae6b7d64678a3997111c9b7404c~mv2.jpeg/v1/crop/x_402,y_586,w_1987,h_1985/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01/IMG_0097.jpeg"
          />
          <Divider />

          <Image width={200} src="logo.png" />
          <Divider />

          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">About me</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/resume">Resume</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            <Link to="/project">Projects</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};

export default Nav;
