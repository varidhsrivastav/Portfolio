import React from "react";
import "./TimelineSection.css";
import wawepback from "./wavy-black-white-background (1).jpg";
const experiencedata = [
  {
    id: 0,
    year: "2023",
    jobTitle: "Tech Lead",
    companyname: "Sarvamatre pvt ltd",
    desce:
      "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
    skills: {
      skill1: "React",
      skill2: "nextjs",
      skill3: "javascript",
      skill4: "node",
    },
  },
  {
    id: 1,
    year: "2022",
    jobTitle: "Frontend developer (Intern)",
    companyname: "Rablo.in",
    desce:
      "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
    skills: {
      skill1: "React",
      skill2: "nextjs",
      skill3: "javascript",
      skill4: "node",
    },
  },
  {
    id: 2,
    year: "2022",
    jobTitle: "Web Developer (Intern)",
    companyname: "Drona Automation",
    desce:
      "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
    skills: {
      skill1: "React",
      skill2: "nextjs",
      skill3: "javascript",
      skill4: "node",
    },
  },
  {
    id: 3,
    year: "2021",
    jobTitle: "Front-end Developer (Intern)",
    companyname: "Raise Digital",
    desce:
      "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
    skills: {
      skill1: "React",
      skill2: "nextjs",
      skill3: "javascript",
      skill4: "node",
    },
  },
  {
    id: 4,
    year: "2021",
    jobTitle: "Home Tutor",
    companyname: "Self",
    desce:
      "Fusce rutrum augue id orci rhoncus molestie. Nunc auctor dignissim lacus vel iaculis.",
    skills: {
      skill1: "React",
      skill2: "nextjs",
      skill3: "javascript",
      skill4: "node",
    },
  },
];
const educationaldata = [
  {
    id: 1,
    year: "2023-2025",
    degree: "Masters Of Computer Apllications",
    institute: "PES University",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit mollitia iste distinctio reiciendis suscipit provident libero temporibus unde, magni eos quibusdam sed perferendis quia earum ipsum recusandae? Nobis, praesentium?.",
  },
  {
    id: 2,
    year: "2021-2023",
    degree: "Bachelor of Computer Applications",
    institute: "Acharya Institute Of Gradute Studies",
    desc: "",
  },
  {
    id: 3,
    year: "2021",
    degree: "Web Development Bootcamp",
    institute: "Udemy",
    desc: "tia iste distinctio reiciendis suscipit provident libero temporibus unde, magni eos quibusdam sed perferendis quia earum ipsum recusandae? Nobis, praesentium?.",
  },
  {
    id: 4,
    year: "2022",
    degree: "React",
    institute: "Udemy",
    desc: "tia iste distinctio reiciendis suscipit provident libero temporibus unde, magni eos quibusdam sed perferendis quia earum ipsum recusandae? Nobis, praesentium?.",
  },
  {
    id: 4,
    year: "2022",
    degree: "Javascript",
    institute: "Udemy",
    desc: "tia iste distinctio reiciendis suscipit provident libero temporibus unde, magni eos quibusdam sed perferendis quia earum ipsum recusandae? Nobis, praesentium?.",
  },
];
const TimelineSection = () => {
  return (
    <div className="timelineSecMain">
      <img src={wawepback} alt="" />
      <section
        className="resume  d-lg-flex justify-content-center align-items-center"
        id="resume"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">Experiences</h2>
              <div className="timeline">
                {experiencedata.map((data, index) => {
                  return (
                    <div className="timeline-wrapper" key={index}>
                      <div className="timeline-yr">
                        <span>{data.year}</span>
                      </div>
                      <div className="timeline-info">
                        <h3>
                          <span>{data.jobTitle} </span>
                          <small>{data.companyname}</small>
                        </h3>
                        <p>{data.desce}</p>
                        <div className="skilltime">
                          <button class="button-18">
                            {data.skills.skill1}
                          </button>
                          <button class="button-18">
                            {data.skills.skill2}
                          </button>
                          <button class="button-18">
                            {data.skills.skill3}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <h2 className="mb-4 mobile-mt-2">Educations & Crtifications</h2>

              <div className="timeline">
                {educationaldata.map((data) => {
                  return (
                    <div className="timeline-wrapper" key={data.id}>
                      <div className="timeline-yr">
                        <span>{data.year}</span>
                      </div>
                      <div className="timeline-info">
                        <h3>
                          <span>{data.degree}</span>
                          <small>{data.institute}</small>
                        </h3>
                        <p>{data.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelineSection;
