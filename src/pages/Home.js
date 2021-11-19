import React from "react";
import { Typography, Layout, Divider, Image } from "antd";
const { Content } = Layout;

const { Text, Title } = Typography;

const Home = () => {
  return (
    <Content>
      <div>
        <Title className="font-size-100 margin-bottom-none">Hello</Title>
        <Title level={2} className="margin-top-none">Here's who I am & what I do</Title>
        <Divider />
        <div className="max-width-600">
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
        <Image
            width={250}
            src="https://static.wixstatic.com/media/abfe49_245f6ae6b7d64678a3997111c9b7404c~mv2.jpeg/v1/crop/x_402,y_586,w_1987,h_1985/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01/IMG_0097.jpeg"
          />
      </div>
    </Content>
  );
};

export default Home;
