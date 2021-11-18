import React from "react";
import { Typography, Layout, Divider } from "antd";
const { Content } = Layout;

const { Text, Title } = Typography;

const Home = () => {
  return (
    <Content>
      <div>
        <Title>About me</Title>
        <Title level={2}> Welcome to my Portfolio.</Title>
        <Divider />
        <p>
           Throughout my projects, you will see the
          passion and dedication that I put in my work. 
          </p>
          <p>
          Not only do I strive to
          create the best work, I build a strong relationship with my clients to
          ensure trust and good communication.
        </p>
        
        <p>
          There are no stops in my journey as I enjoy building my experience
          even with the most difficult projects. Contact me after taking a ride
          through my portfolio!
        </p>
      </div>
    </Content>
  );
};

export default Home;
