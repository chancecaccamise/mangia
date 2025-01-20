import React from "react";
import { useForm } from "@formspree/react";

export function ExampleForm() {
  const [state, handleSubmit] = useForm("mkggekny");

  if (state.succeeded) {
    return <h1>Thanks for submitting!</h1>;
  }

  return (
    <form
      className="grid grid-cols-2 gap-4 p-4 border border-gray-300 rounded-md shadow-sm"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">
            First Name
          </label>
          <input
            className="w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 text-sm"
            id="first-name"
            name="first-name"
            required
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 text-sm"
            id="email"
            name="email"
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 text-sm"
            id="last-name"
            name="last-name"
            required
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="number">
            Phone Number
          </label>
          <input
            className="w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 text-sm"
            id="number"
            name="number"
            placeholder="(000) 000-0000"
            required
          />
        </div>
      </fieldset>

      <fieldset className="col-span-2">
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Please check the services you are interested in discussing
          </label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                className="w-4 h-4 border-gray-300 rounded focus:ring-green-900"
                type="checkbox"
                value="website-design"
                name="services"
              />
              Website & Design
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                className="w-4 h-4 border-gray-300 rounded focus:ring-green-900"
                type="checkbox"
                value="email-marketing"
                name="services"
              />
              Email Marketing
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                className="w-4 h-4 border-gray-300 rounded focus:ring-green-900"
                type="checkbox"
                value="social-media-management"
                name="services"
              />
              Social Media Management
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                className="w-4 h-4 border-gray-300 rounded focus:ring-green-900"
                type="checkbox"
                value="google-business-setup"
                name="services"
              />
              Google Business Account Setup
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                className="w-4 h-4 border-gray-300 rounded focus:ring-green-900"
                type="checkbox"
                value="ai-customer-service"
                name="services"
              />
              AI Customer Service
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                className="w-4 h-4 border-gray-300 rounded focus:ring-green-900"
                type="checkbox"
                value="ai-lead-generation"
                name="services"
              />
              AI Lead Generation System
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset className="col-span-2">
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full h-20 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 text-sm"
            id="message"
            name="message"
            placeholder="Write your message here..."
          ></textarea>
        </div>
      </fieldset>

      <div className="col-span-2 flex justify-end">
        <button
          className="px-6 py-2 text-sm font-medium text-white bg-black rounded-md shadow-sm hover:bg-green-900 focus:ring-2 focus:ring-green-900"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    
  );
}
