"use client"
import React from "react";
import "./sides.css";
import { useState } from "react";
import Logo from "../../public/logo.png";

const side = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleClick = (link) => {
    setActiveLink(link);
  };
 
  
  return (
    <div className="side">
      <div className="logo">
        <img src="https://iueuzviwcazdjrzhdzdz.supabase.co/storage/v1/object/sign/h/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoL2xvZ28ucG5nIiwiaWF0IjoxNzExODQxMjc4LCJleHAiOjMzMjQ3ODQxMjc4fQ.hwT0tbVgh_jgQornIBHYaVs58uqSzlPlkr9xIzH9N5s&t=2024-03-30T23%3A27%3A58.318Z" alt="img" />
      </div>
      <div className="links">
      <a
          href="/home"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          <div>
            <svg
             
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path
                d="M11 16.99V13.99M8.02 1.84004L2.63 6.04004C1.73 6.74004 1 8.23004 1 9.36004V16.77C1 19.09 2.89 20.99 5.21 20.99H16.79C19.11 20.99 21 19.09 21 16.78V9.50004C21 8.29004 20.19 6.74004 19.2 6.05004L13.02 1.72004C11.62 0.74004 9.37 0.79004 8.02 1.84004Z"
                stroke="#C9DDFF"
                
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Home
        </a>
        <a
          href="/upcoming"
          className={activeLink === "upcoming" ? "active" : ""}
          onClick={() => handleClick("upcoming")}
        >
          <div>
            <svg
            
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V10H4V19C4 19.5523 4.44772 20 5 20H10C10.5523 20 11 20.4477 11 21C11 21.5523 10.5523 22 10 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2ZM5 6C4.44772 6 4 6.44772 4 7V8H20V7C20 6.44772 19.5523 6 19 6H5Z"
                fill="#C9DDFF"
              />
              <path
                d="M18.2929 17.7071C17.9024 17.3166 17.9024 16.6834 18.2929 16.2929C18.6834 15.9024 19.3166 15.9024 19.7071 16.2929L21.7071 18.2929C22.0976 18.6834 22.0976 19.3166 21.7071 19.7071L19.7071 21.7071C19.3166 22.0976 18.6834 22.0976 18.2929 21.7071C17.9024 21.3166 17.9024 20.6834 18.2929 20.2929L19.5858 19L18.2929 17.7071Z"
                fill="#C9DDFF"
              />
              <path
                d="M13.2929 16.2929C12.9024 16.6834 12.9024 17.3166 13.2929 17.7071L14.5858 19L13.2929 20.2929C12.9024 20.6834 12.9024 21.3166 13.2929 21.7071C13.6834 22.0976 14.3166 22.0976 14.7071 21.7071L16.7071 19.7071C17.0976 19.3166 17.0976 18.6834 16.7071 18.2929L14.7071 16.2929C14.3166 15.9024 13.6834 15.9024 13.2929 16.2929Z"
                fill="#C9DDFF"
              />
            </svg>
          </div>
          Upcoming
        </a>
        <a
          href="/previous"
          className={activeLink === "previous" ? "active" : ""}
          onClick={() => handleClick("previous")}
        >
          <div  >
            <svg
             
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V10H4V19C4 19.5523 4.44772 20 5 20H10C10.5523 20 11 20.4477 11 21C11 21.5523 10.5523 22 10 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2ZM5 6C4.44772 6 4 6.44772 4 7V8H20V7C20 6.44772 19.5523 6 19 6H5Z"
                fill="#C9DDFF"
              />
              <path
                d="M16.7071 17.7071C17.0976 17.3166 17.0976 16.6834 16.7071 16.2929C16.3166 15.9024 15.6834 15.9024 15.2929 16.2929L13.2929 18.2929C12.9024 18.6834 12.9024 19.3166 13.2929 19.7071L15.2929 21.7071C15.6834 22.0976 16.3166 22.0976 16.7071 21.7071C17.0976 21.3166 17.0976 20.6834 16.7071 20.2929L15.4142 19L16.7071 17.7071Z"
                fill="#C9DDFF"
              />
              <path
                d="M21.7071 16.2929C22.0976 16.6834 22.0976 17.3166 21.7071 17.7071L20.4142 19L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L18.2929 19.7071C17.9024 19.3166 17.9024 18.6834 18.2929 18.2929L20.2929 16.2929C20.6834 15.9024 21.3166 15.9024 21.7071 16.2929Z"
                fill="#C9DDFF"
              />
            </svg>
          </div>
          Previous
        </a>
        <a
          href="/recordings"
         
          onClick={() => handleClick("rec")}
        >
          <div >
            <svg
            
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.2969 15.5383C16.3778 17.3704 14.8992 18.9196 12.9946 18.9975C12.8543 19.0034 6.01531 18.9896 6.01531 18.9896C4.11996 19.1335 2.46115 17.7715 2.31165 15.9463C2.30039 15.8103 2.30346 8.47219 2.30346 8.47219C2.21949 6.63815 3.69604 5.08499 5.60163 5.00418C5.74396 4.99728 12.5738 5.01009 12.5738 5.01009C14.4783 4.86818 16.1423 6.24001 16.2897 8.07405C16.3 8.2061 16.2969 15.5383 16.2969 15.5383Z"
                stroke="#C9DDFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.3 9.97984L19.593 7.28484C20.409 6.61684 21.633 7.19884 21.632 8.25184L21.62 15.6008C21.619 16.6538 20.394 17.2308 19.58 16.5628L16.3 13.8678"
                stroke="#C9DDFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Recordings
        </a>
        <a
          href="/personal-room"
          className={activeLink === "personal" ? "active" : ""}
          onClick={() => handleClick("personal")}
        >
          
          <div className={activeLink === "personal" ? "active" : ""}>
            <svg
            className={activeLink === "personal" ? "active" : ""}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5714 13.4286H13.4286V20.5714C13.4286 20.9503 13.2781 21.3137 13.0102 21.5816C12.7422 21.8495 12.3789 22 12 22C11.6211 22 11.2578 21.8495 10.9898 21.5816C10.7219 21.3137 10.5714 20.9503 10.5714 20.5714V13.4286H3.42857C3.04969 13.4286 2.68633 13.2781 2.41842 13.0102C2.15051 12.7422 2 12.3789 2 12C2 11.6211 2.15051 11.2578 2.41842 10.9898C2.68633 10.7219 3.04969 10.5714 3.42857 10.5714H10.5714V3.42857C10.5714 3.04969 10.7219 2.68633 10.9898 2.41842C11.2578 2.15051 11.6211 2 12 2C12.3789 2 12.7422 2.15051 13.0102 2.41842C13.2781 2.68633 13.4286 3.04969 13.4286 3.42857V10.5714H20.5714C20.9503 10.5714 21.3137 10.7219 21.5816 10.9898C21.8495 11.2578 22 11.6211 22 12C22 12.3789 21.8495 12.7422 21.5816 13.0102C21.3137 13.2781 20.9503 13.4286 20.5714 13.4286Z"
                fill="#C9DDFF"
              />
            </svg>
          </div>
          Personal Room
        </a>
      </div>
    </div>
  );
};

export default side;
