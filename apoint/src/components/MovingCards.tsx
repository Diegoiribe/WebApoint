import React from 'react'
import Buttons from './Buttons'

const MovingCards: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden w-screen">
      <h1 className="absolute text-8xl font-bold text-[#1d1d1f] z-1 text-center overflow-hidden">
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
        className="absolute bg-blue-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard1 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/backups.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-yellow-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/popups.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-pink-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard3 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/generate-ai.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-green-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/forms.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-purple-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/image-optimizer.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-red-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/ecommerce.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-indigo-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard7 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/backups.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-teal-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/popups.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-indigo-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard9 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/generate-ai.webp2'})`
        }}
      ></div>
      <div
        className="absolute bg-teal-400 w-64 h-64 rounded-lg shadow-lg animate-moveCard10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'https://elementor.com/cdn-cgi/image/f=auto,w=368,h=368/https://elementor.com/wp-content/uploads/2024/06/forms.webp2'})`
        }}
      ></div>
    </div>
  )
}

export default MovingCards
