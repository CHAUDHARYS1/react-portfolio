import React from "react";
import { Typography, Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const { Text, Title } = Typography;

const Home = () => {
    return(
        <Content>
        <div>
        <Title>About me</Title>
        <Text>Welcome to my Portfolio. Throughout my projects, you will see the passion and dedication that I put in my work. Not only do I strive to create the best work, I build a strong relationship with my clients to ensure trust and good communication.</Text>
        <Text>There are no stops in my journey as I enjoy building my experience even with the most difficult projects. Contact me after taking a ride through my portfolio!</Text>
        </div>
        </Content>
    );
}

export default Home;