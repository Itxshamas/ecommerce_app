import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mx-auto mt-16 max-w-3xl rounded-[32px] border border-gray-200 bg-gray-50 px-6 py-10 text-center shadow-sm">
      <p className="text-2xl font-semibold text-gray-900">
        Subscribe now & get 20% off
      </p>
      <p className="mt-3 text-gray-500">
        Access to exclusive online discounts.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="mx-auto mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <input
          className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-700 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="inline-flex justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase text-white transition hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
