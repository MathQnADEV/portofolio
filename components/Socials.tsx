import Link from 'next/link'
import React from 'react'
import {  RiExchangeDollarLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTelegramLine, RiYoutubeLine } from 'react-icons/ri'
import UserPage from './UserPage';

const Socials = () => {


  return (
      <div className="flex items-center gap-x-5 text-lg">
          <Link
              href="https://www.youtube.com/@Shaq-Dev"
              className="hover:text-accent transition-all duration-300"
          >
              <RiYoutubeLine />
          </Link>
          <Link
              href="https://www.instagram.com/shaqy9/"
              className="hover:text-accent transition-all duration-300"
          >
              <RiInstagramLine />
          </Link>
          <Link
              href="https://t.me/DewaHoyoverse"
              className="hover:text-accent transition-all duration-300"
          >
              <RiTelegramLine />
          </Link>
          <Link
              href="https://github.com/MathQnADEV"
              className="hover:text-accent transition-all duration-300"
          >
              <RiGithubLine />
          </Link>
          <Link
              href="https://www.linkedin.com/in/shaquille-rashaun-22a897264/"
              className="hover:text-accent transition-all duration-300"
          >
              <RiLinkedinLine />
          </Link>
          <Link
              href="https://saweria.co/ShaqDev"
              className="hover:text-accent transition-all duration-300"
          >
              <RiExchangeDollarLine />
		  </Link>
		  <UserPage />
      </div>
  );
}

export default Socials