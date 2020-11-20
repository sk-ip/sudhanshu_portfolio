import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaEnvelope,
  FaFacebookSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/sudhanshu-k/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/sk-ip",
  },
  {
    id: 3,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    url: "mailto: sudhanshukumar5459@gmail.com",
  },
  {
    id: 4,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
