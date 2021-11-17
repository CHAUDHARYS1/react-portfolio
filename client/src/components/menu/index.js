import React from "react";

import { Menu, Image, Divider} from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Navigation = () => {
  const { SubMenu } = Menu;

  const state = {
    collapsed: false,
  };

  const toggleCollapsed = () => {
    this.setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <div style={{ width: 256, minHeight: 600}}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={state.collapsed}
      >
                
        <Image width={256} src="https://static.wixstatic.com/media/abfe49_245f6ae6b7d64678a3997111c9b7404c~mv2.jpeg/v1/crop/x_402,y_586,w_1987,h_1985/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01/IMG_0097.jpeg"/>
        <Divider />

        <Image width={254} src="logo.png" />
        <Divider />

        <Menu.Item key="1" icon={<PieChartOutlined />}>
          About me
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Resume
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Projects
        </Menu.Item>
        <Menu.Item key="4" icon={<ContainerOutlined />}>
          Contact
        </Menu.Item>
        {/* 
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu> */}
      </Menu>
    </div>
  );
};

export default Navigation;
