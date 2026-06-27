import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center border-t border-gray-200 pt-8">
        <Title text1="ABOUT" text2="US" />
      </div>

      <section className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-[32px] object-cover shadow-xl"
            src={assets.about_img}
            alt="Forever Ecommerce about"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center gap-6 text-gray-600">
          <p className="text-base leading-8">
            Welcome to Forever Ecommerce, where innovation meets simplicity in
            the world of online shopping! At Forever Ecommerce, we are dedicated
            to making your eCommerce experience seamless, enjoyable, and
            reliable. With a passion for technology and a commitment to
            excellence, our mission is to empower businesses and consumers alike
            by providing a platform that connects products to people
            effortlessly.
          </p>
          <p className="text-base leading-8">
            Founded with the vision of revolutionizing the digital marketplace,
            we pride ourselves on offering a diverse range of products,
            unparalleled customer service, and cutting-edge solutions tailored
            to your needs. Whether you're here to shop, explore, or grow your
            business, we strive to create opportunities for everyone to succeed
            in the fast-paced world of eCommerce. At Forever Ecommerce, it’s not
            just about transactions—it’s about building lasting relationships.
            We are your trusted partner in navigating the future of digital
            commerce.
          </p>

          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
            <p className="mt-3 text-base leading-8 text-gray-600">
              To redefine the online shopping experience by offering exceptional
              value, empowering businesses, and creating a community of
              satisfied customers who trust us for their every need. Thank you
              for choosing Forever Ecommerce. Together, we’re shaping the future
              of digital commerce!
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 text-center">
          <Title text1="WHY" text2="CHOOSE US" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">
              Quality Assurance
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Quality isn’t just a promise—it’s our commitment. We understand
              that trust is earned through consistent excellence, and that’s why
              every product and service we offer undergoes rigorous quality
              checks to meet and exceed your expectations.
            </p>
          </article>

          <article className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">Convenience</h3>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              We believe that shopping should be simple, fast, and stress-free.
              That’s why we’ve designed our platform with your convenience in
              mind, making it easier than ever to find exactly what you need,
              when you need it.
            </p>
          </article>

          <article className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">
              Exceptional Customer Service
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Our customers are at the heart of everything we do. We’re
              committed to providing not just products but experiences that
              leave you feeling valued and supported every step of the way.
            </p>
          </article>
        </div>
      </section>

      <NewsletterBox />
    </div>
  );
};

export default About;
