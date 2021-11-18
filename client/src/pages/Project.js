import React, { useState, useEffect } from "react";
import { Layout, Typography, Card, Tag, Divider, Tooltip, Button, Image, Popover } from "antd";
import { GithubFilled, PlayCircleFilled, CodeFilled } from "@ant-design/icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
const { Content } = Layout;
const { Title, Text } = Typography;


const Project = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.projects);
        setData(myJson.projects);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Content>

      <Title level={2}>Project</Title>
      <Container>
      <Row>
        {data.map((project) => (
          <Col style={{ marginBottom: 30}}>
            <Card hoverable style={{ width: 300 }} cover={ <Image alt="example" src={project.image} fallback='placeholder.png' width="100%" />  } >
              {" "}
              <div key={project.id} >
                <Title level={4}>{project.name}</Title>
                <p key={3}>{project.description}</p>
                <a href={project.github} target="_blank">
                    <Tooltip title="Github">
                      <Button shape="circle" icon={<GithubFilled />} />
                    </Tooltip>
                </a>
                <a href={project.live} target="_blank">
                    <Tooltip title="Live Application">
                      <Button shape="circle" icon={<PlayCircleFilled />} />
                    </Tooltip>
                </a>
                <Popover content={ <Tag style={{ whiteSpace: "pre-wrap"}}>{project.langauge}</Tag>} title="Languages used to create this project" trigger="hover">
                    <Button shape="cicle" icon={<CodeFilled />} />
                </Popover>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </Content>
  );
};

export default Project;
