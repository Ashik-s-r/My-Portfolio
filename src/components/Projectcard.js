import { Col,Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Button variant="primary" href={"https://github.com/Ashik-s-r"} target="_blank">
            View on GitHub
          </Button>
        </div>
      </div>
    </Col>
  )
}