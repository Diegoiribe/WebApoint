import React from 'react'
import Buttons from './Buttons'

const MovingCards: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-screen h-[90vh] overflow-hidden pb-24 ">
      <h1 className="absolute text-8xl font-bold text-[#1d1d1f]  text-center overflow-hidden">
        Everything you need <br /> ...and even more
      </h1>
      <Buttons
        text="Comenzar"
        bg="#1d1d1f"
        color="#fff"
        p="8px 35px"
        size="21px"
        margin="18rem 0 0"
      />
      <div
        className="absolute w-64 h-64 bg-blue-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard1 "
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/backups.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-yellow-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard2"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/popups.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-pink-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard3"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/generate-ai.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-green-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard4"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/forms.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-purple-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard5"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/image-optimizer.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-red-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard6"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/ecommerce.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-indigo-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard7"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/backups.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-teal-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard8"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/popups.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-indigo-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard9"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/generate-ai.webp2'})`
        }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-teal-400 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg animate-moveCard10"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/forms.webp2'})`
        }}
      ></div>
    </div>
  )
}

export default MovingCards
