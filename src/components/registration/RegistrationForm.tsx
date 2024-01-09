"use client";

import { rolesOptions } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoIosArrowDown } from "react-icons/io";

const registrationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name should be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  gender: z.string().min(1, { message: "Select your gender" }),
  company: z.string().optional(),
  role: z.string().min(1, { message: "Select one role" }),
  otherRole: z.string().optional(),
  organizationName: z
    .string()
    .min(2, { message: "Name should be at least 2 characters long" }),
});

type registrationSchemaType = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<registrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: registrationSchemaType) => {
    console.log(data);
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    reset();
  };
  return (
    <section className="">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-center text-light font-bold text-2xl sm:text-3xl md:text-4xl capitalize">
          Reserve a spot
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-3xl mx-auto flex-col gap-2 py-6"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-lg font-semibold text-light "
            >
              Name<span className="text-warning">&nbsp;*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name..."
              {...register("name")}
              className="w-full border-2 border-light bg-light rounded text-dark py-3 sm:py-4 px-5 focus:outline-none focus:border-accent block appearance-none"
            />
            {errors.name && (
              <span className="text-warning text-sm font-semibold">
                {`${errors.name.message}`}
              </span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="mb-4 sm:w-1/2">
              <label
                htmlFor="email"
                className="mb-2 block text-lg font-semibold text-light"
              >
                Email<span className="text-warning">&nbsp;*</span>
              </label>
              <input
                type="text"
                id="email"
                placeholder="Your email address..."
                {...register("email")}
                className="w-full border-2 border-light bg-light rounded text-dark py-3 sm:py-4 px-5 focus:outline-none focus:border-accent block appearance-none"
              />
              {errors.email && (
                <span className="text-warning text-sm font-semibold">
                  {`${errors.email.message}`}
                </span>
              )}
            </div>
            <div className="relative mb-4 sm:w-1/2">
              <label
                htmlFor="gender"
                className="mb-2 block text-lg font-semibold text-light "
              >
                Gender<span className="text-warning">&nbsp;*</span>
              </label>
              <select
                {...register("gender")}
                id="gender"
                className="relative w-full border-2 border-light bg-light rounded text-dark py-3 sm:py-4 px-5 focus:outline-none focus:border-accent block appearance-none"
              >
                <option disabled selected value="" className="text-gray-500">
                  Select your gender...
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              <span className=" text-xl pointer-events-none absolute top-1/2 right-0 flex items-center px-2 text-dark">
                <IoIosArrowDown />
              </span>
              {errors.gender && (
                <span className="text-warning text-sm font-semibold">
                  {`${errors.gender.message}`}
                </span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="organizationName"
              className="mb-2 block text-lg font-semibold text-light "
            >
              School/Organization Name
              <span className="text-warning">&nbsp;*</span>
            </label>
            <input
              type="text"
              id="organizationName"
              placeholder="Your school or organization's name..."
              {...register("organizationName")}
              className="w-full border-2 border-light bg-light rounded text-dark py-3 sm:py-4 px-5 focus:outline-none focus:border-accent block appearance-none"
            />
            {errors.organizationName && (
              <span className="text-warning text-sm font-semibold">
                {`${errors.organizationName.message}`}
              </span>
            )}
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="role"
              className="mb-2 block text-lg font-semibold text-light "
            >
              Role<span className="text-warning">&nbsp;*</span>
            </label>
            <select
              id="role"
              {...register("role")}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full border-2 border-light bg-light rounded text-dark py-3 sm:py-4 px-5 focus:outline-none focus:border-accent block appearance-none"
            >
              <option disabled value="" selected className="w-full">
                Select a role that best describes you...
              </option>
              {rolesOptions.map((role) => (
                <option key={role.value} value={role.value} className="w-full">
                  {role.label}
                </option>
              ))}
            </select>
            <span className=" text-xl pointer-events-none absolute top-[55%] right-0 flex items-center px-2 text-dark">
              <IoIosArrowDown />
            </span>
            {errors.role && (
              <span className="text-warning text-sm font-semibold absolute top-full mt-1">
                {`${errors.role.message}`}
              </span>
            )}
          </div>
          {selectedRole === "Other" && (
            <input
              {...register("otherRole")}
              type="text"
              placeholder="Please specify"
              className="w-full mt-2 border-2 border-light bg-light rounded text-dark py-3 sm:py-4 px-5 focus:outline-none focus:border-accent block appearance-none"
            />
          )}
          {selectedRole === "Other" && errors.otherRole && (
            <span className="text-warning text-sm font-semibold">
              {`${errors.otherRole.message}`}
            </span>
          )}

          <input
            type="submit"
            value="GET TICKET"
            disabled={isSubmitting}
            className="mx-auto block w-max border-2 mt-8 bg-winered border-winered hover:text-winered hover:bg-transparent p-4 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-white  disabled:cursor-not-allowed disabled:opacity-50"
          />
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
