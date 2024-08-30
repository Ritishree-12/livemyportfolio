import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCards = (props) => {
  return (
    <Card className="project-card-view" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',height:400 }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ width: '60%', height: 'auto' }}
        />
      </div>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify",fontSize:14 }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
