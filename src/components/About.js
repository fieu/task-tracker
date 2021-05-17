import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/all";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <h4>
        Made by{" "}
        <a href="https://fieu.cc" target="_nofollow">
          fieu
        </a>{" "}
        with <FaHeart color="red" />
      </h4>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
