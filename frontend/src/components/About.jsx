import React from "react";
import { useParams } from "react-router-dom";

const About = ({ videoLink, heading }) => {
  const { cardId } = useParams();
  const cardData = {
    notify: {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto voluptates repellendus nihil eos vitae quidem velit ab doloribus enim esse fuga temporibus veniam consequuntur natus laboriosam, ipsa, laudantium distinctio ipsam atque ullam? Ipsum quasi jaja veniam fuga odit, libero corporis soluta impedit aliquam neque deserunt ducimus quis necessitatibus quas aspernatur inventore sint ea iste doloribus fugiat unde suscipit. Veritatis, pariatur cumque eveniet laboriosam laborum impedit id hic odio nobis illum adipisci commodi, ipsam inventore blanditiis aut eum, asperiores officia quod rerum nostrum quibusdam voluptate numquam vel. Vel quam, illum distinctio temporibus officiis corrupti aspernatur dicta laboriosam non eos animi?",
      title: "Optify-Notify",
    },
    auth: {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto voluptates repellendus nihil eos vitae quidem velit ab doloribus enim esse fuga temporibus veniam consequuntur natus laboriosam, ipsa, laudantium distinctio ipsam atque ullam? Ipsum quasi jaja veniam fuga odit, libero corporis soluta impedit aliquam neque deserunt ducimus quis necessitatibus quas aspernatur inventore sint ea iste doloribus fugiat unde suscipit. Veritatis, pariatur cumque eveniet laboriosam laborum impedit id hic odio nobis illum adipisci commodi, ipsam inventore blanditiis aut eum, asperiores officia quod rerum nostrum quibusdam voluptate numquam vel. Vel quam, illum distinctio temporibus officiis corrupti aspernatur dicta laboriosam non eos animi?",
      title: "Optify-Auth",
    },
    sendop: {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto voluptates repellendus nihil eos vitae quidem velit ab mohitiibus enim esse fuga temporibus veniam consequuntur natus laboriosam, ipsa, laudantium distinctio ipsam atque ullam? Ipsum quasi dicta veniam fuga odit, libero corporis soluta impedit aliquam neque deserunt ducimus quis necessitatibus quas aspernatur inventore sint ea iste doloribus fugiat unde suscipit. Veritatis, pariatur cumque eveniet laboriosam laborum impedit id hic odio nobis illum adipisci commodi, ipsam inventore blanditiis aut eum, asperiores officia quod rerum nostrum quibusdam voluptate numquam vel. Vel quam, illum distinctio temporibus officiis corrupti aspernatur dicta laboriosam non eos animi?",
      title: "send optimism",
    },
  };
  const selectedCardContent = cardData[cardId] || "Card not found";
  return (
    <div className="layout flex flow-row justify-start py-10 space-y-5 items-center">
      <h1 className="flex font-semibold text-4xl">
        {selectedCardContent.title}
      </h1>
      <iframe
        src="https://www.youtube.com/watch?v=LowJMwa7LCU&pp=ygUNb3B0aW1pc20gYXV0aA%3D%3D"
        frameborder="0"
        title="video"
        width="560"
        height="315"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="flex flex-row px-40">
        <p>{selectedCardContent.description}</p>
      </div>
    </div>
  );
};

export default About;
