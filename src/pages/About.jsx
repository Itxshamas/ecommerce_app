import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
       <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Welcome to Forever Ecommerce, where innovation meets simplicity in the world of online shopping! At Forever Ecommerce, we are dedicated to making your eCommerce experience seamless, enjoyable, and reliable. With a passion for technology and a commitment to excellence, our mission is to empower businesses and consumers alike by providing a platform that connects products to people effortlessly.</p>
      <p>Founded with the vision of revolutionizing the digital marketplace, we pride ourselves on offering a diverse range of products, unparalleled customer service, and cutting-edge solutions tailored to your needs. Whether you're here to shop, explore, or grow your business, we strive to create opportunities for everyone to succeed in the fast-paced world of eCommerce. At Forever Ecommerce, it’s not just about transactions—it’s about building lasting relationships. We are your trusted partner in navigating the future of digital commerce.</p>
      <b className='text-gray-800 '>Our Mission</b>
      <p>To redefine the online shopping experience by offering exceptional value, empowering businesses, and creating a community of satisfied customers who trust us for their every need. Thank you for choosing Forever Ecommerce. Together, we’re shaping the future of digital commerce!</p>

      </div>
      <div className='text-xl py-4 '>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance:</b>
      <p className= 'text-gray-600 '> Quality isn’t just a promise—it’s our commitment. We understand that trust is earned through consistent excellence, and that’s why every product and service we offer undergoes rigorous quality checks to meet and exceed your expectations.</p>
      </div>

      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Convenience:</b>
      <p className= 'text-gray-600 '> We believe that shopping should be simple, fast, and stress-free. That’s why we’ve designed our platform with your convenience in mind, making it easier than ever to find exactly what you need, when you need it.</p>
      </div>

      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Exceptional Customer Service</b>
      <p className= 'text-gray-600 '>Our customers are at the heart of everything we do. We’re committed to providing not just products but experiences that leave you feeling valued and supported every step of the way.</p>
      </div>

      </div>
      <NewsletterBox/>
      </div>
    </div>
  )
}

export default About
