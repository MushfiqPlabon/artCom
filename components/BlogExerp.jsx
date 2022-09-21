import React, { Fragment } from "react";
import BlogCard from "./BlogCard";

let blog = [
  {
    img: `https://img.freepik.com/free-vector/girl-dreaming-with-empty-callout_1308-16906.jpg?w=826&t=st=1663601039~exp=1663601639~hmac=998c6103beffa696b1932345ee6a8201d6fc173430603eb5546a42b49a7bdf36`,
    title: `Blog 1`,
    desc: `Lorem ipsum sit amet`,
  },
  {
    img: `https://img.freepik.com/free-vector/light-bulb-doodle-drawing-paper_53876-93993.jpg?w=900&t=st=1663601071~exp=1663601671~hmac=c1f3be5d0c623d70ce5c0b12c2d8e86b97b45aaa80afc46c24a124224ff33433`,
    title: `Blog 2`,
    desc: `Lorem ipsum sit amet`,
  },
  {
    img: `https://img.freepik.com/premium-vector/hand-drawn-speech-bubbles-icon_118124-4495.jpg?w=740`,
    title: `Blog 3`,
    desc: `Lorem ipsum sit amet`,
  },
  {
    img: `https://img.freepik.com/free-vector/girl-thinking_1308-85997.jpg?w=996&t=st=1663601115~exp=1663601715~hmac=83891616345ec7adc0403f496ff134c438f1367abfc7fd15d59b229f1a23f3f2`,
    title: `Blog 4`,
    desc: `Lorem ipsum sit amet`,
  },
  {
    img: `https://img.freepik.com/free-vector/anxiety-concept-illustration_114360-8054.jpg?w=740&t=st=1663601138~exp=1663601738~hmac=31edca0eab1521d9000e441b63223a54a81b5195bea88f4ee37ac25c12847426`,
    title: `Blog 5`,
    desc: `Lorem ipsum sit amet`,
  },
];

const BlogExerp = () => {
  return (
    <>
      <div className="align-center" id="blog">
        <p className="text-center text-4xl py-5 font-black">My Thoughts</p>
        <div className="flex flex-wrap justify-evenly">
          {blog.map((e, i) => {
            return (
              <BlogCard key={i} img={e.img} title={e.title} desc={e.desc} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogExerp;
