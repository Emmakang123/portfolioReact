import React from "react";

const skillText=[
    {
        title :"Changed my position",
        desc :"I wasn't always a developer. Before entering tech, I worked in other fields. The decision to switch to development came with its challenges, but I was eager to learn. I focused on frontend technologies and quickly applied what I learned to real-world projects, most notably working on two major projects at a partner company of Hana Bank."
    },{
        title :"Connecting People, Creating Impact",
        desc :"I have spent many years in sales, where interacting with people was at the core of my role. This experience helped me develop strong communication skills and the ability to build positive, lasting relationships. I believe that fostering positive relationships leads to better outcomes, both in professional settings and personal connections. My outgoing and friendly personality makes it easy for me to connect with others, and I approach each interaction with a bright and optimistic attitude."
    },{
        title :"Streamlining Solutions with Every Line",
        desc :"Through two large-scale projects, I’ve come to appreciate the importance of every line of code. In collaboration with others, I realized how crucial it is to write clean, readable code that’s easy to understand and maintain. Now, I always ask myself whether the code I write truly serves a purpose. When designing logic, I consider efficiency and ensure that my code doesn’t degrade performance, striving to make each line count toward the overall solution."
    },
]
function Skill(){
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">Challenge</h2>
                <div className="skill__desc">
                    {skillText.map((skill,key) => (
                        <div key={key}>
                            <span>{key+1}.</span>
                            <h3>{skill.title}</h3>
                            <p>
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skill;
