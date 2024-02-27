"use client";

import { rolesOptions, workshopsOptions } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { z } from "zod";
import InputFieldContainer from "./InputFieldContainer";
import ReactSelectInput from "./ReactSelectInput";
import { registrationSchema, registrationSchemaType } from "@/utils";
import apiClient from "@/utils/apiClient";

interface RegistrationFormProps {
  setRegistrationSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegistrationForm = ({
  setRegistrationSuccess,
}: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<registrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: registrationSchemaType) => {
    // Handle the form data
    const formData = JSON.stringify({
      fields: {
        ...data,
        newsLetterSignup: data.newsLetterSignup ? "Yes" : "No",
      },
    });
    console.log(formData);
    apiClient
      .post("/applicants", formData, {
        maxBodyLength: Infinity,
      })
      .then((response: any) => {
        // Handle the response
        console.log(response);
        setRegistrationSuccess(true);
      })
      .catch((error: any) => {
        // Handle the error
        console.log(error);
      });
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 3000);
    // });
    // control._reset();
    // reset();
  };

  const {
    field: { value: role, onChange: roleOnChange, ...restRoleField },
  } = useController({ name: "role", control });

  const {
    field: { value: gender, onChange: genderOnChange, ...restGenderField },
  } = useController({ name: "gender", control });

  const {
    field: {
      value: workshopsInterest,
      onChange: workshopsInterestOnChange,
      ...restWorkshopsInterestField
    },
  } = useController({ name: "workshopsInterest", control });

  const {
    field: {
      value: referralSource,
      onChange: referralSourceOnChange,
      ...restReferralSourceField
    },
  } = useController({ name: "referralSource", control });

  const {
    field: {
      value: attendanceMode,
      onChange: attendanceModeOnChange,
      ...restAttendanceModeField
    },
  } = useController({ name: "attendanceMode", control });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-3xl mx-auto flex-col gap-2 py-6"
    >
      <InputFieldContainer
        label="Full Name"
        id="fullName"
        required
        error={errors.fullName?.message as string | undefined}
      >
        <input
          type="text"
          id="fullName"
          placeholder="Your full name..."
          {...register("fullName")}
          className="input__field"
        />
      </InputFieldContainer>

      <div className="grid sm:grid-cols-2 gap-4">
        <InputFieldContainer
          label="Email Address"
          id="email"
          required
          error={errors.email?.message as string | undefined}
        >
          <input
            type="text"
            id="email"
            placeholder="Your email address..."
            {...register("email")}
            className="input__field"
          />
        </InputFieldContainer>

        <ReactSelectInput
          id="gender"
          label="Gender"
          error={errors.gender?.message as string | undefined}
          options={[
            { label: "Female", value: "female" },
            { label: "Male", value: "male" },
          ]}
          isMulti={false}
          onSelectChange={genderOnChange}
          selectedValue={gender}
          restField={restGenderField}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InputFieldContainer
          label="Contact Number"
          id="contactNumber"
          required
          error={errors.contactNumber?.message as string | undefined}
        >
          <input
            type="text"
            id="contactNumber"
            placeholder="Your contact number..."
            {...register("contactNumber")}
            className="input__field"
          />
        </InputFieldContainer>

        <ReactSelectInput
          id="role"
          label="Role or Job Title"
          error={errors.role?.message as string | undefined}
          options={rolesOptions}
          isMulti={false}
          onSelectChange={roleOnChange}
          selectedValue={role}
          restField={restRoleField}
        />
      </div>

      <InputFieldContainer
        label="School/Organization Name"
        id="organizationName"
        error={errors.organizationName?.message as string | undefined}
      >
        <input
          type="text"
          id="organizationName"
          placeholder="Your school or organization's name..."
          {...register("organizationName")}
          className="input__field"
        />
      </InputFieldContainer>

      <div className="grid sm:grid-cols-2 gap-4">
        <ReactSelectInput
          id="referralSource"
          label="How did you hear about the conference?"
          error={errors.referralSource?.message as string | undefined}
          options={[
            { label: "Website", value: "Website" },
            { label: "Social Media", value: "Social Media" },
            { label: "Friend", value: "Friend" },
            { label: "Other", value: "Other" },
          ]}
          isMulti={false}
          onSelectChange={referralSourceOnChange}
          selectedValue={referralSource}
          restField={restReferralSourceField}
        />

        <ReactSelectInput
          id="attendanceMode"
          label="Will you be attending in person or virtually?"
          error={errors.attendanceMode?.message as string | undefined}
          options={[
            { label: "In Person", value: "In Person" },
            { label: "Virtually", value: "Virtually" },
          ]}
          isMulti={false}
          onSelectChange={attendanceModeOnChange}
          selectedValue={attendanceMode}
          restField={restAttendanceModeField}
        />
      </div>

      <ReactSelectInput
        id="workshopsInterest"
        label="Are you interested in any specific workshops or sessions? Please specify if any"
        error=""
        options={workshopsOptions}
        isMulti={true}
        onSelectChange={workshopsInterestOnChange}
        selectedValue={workshopsInterest}
        restField={restWorkshopsInterestField}
      />

      <InputFieldContainer
        label="Do you require any special accommodations?"
        id="specialAccommodations"
        error={errors.specialAccommodations?.message as string | undefined}
      >
        <input
          type="text"
          id="specialAccommodations"
          placeholder="Please specify any special accommodations needed..."
          {...register("specialAccommodations")}
          className="input__field"
        />
      </InputFieldContainer>

      <InputFieldContainer
        label="Do you have any dietary restrictions? List them if any"
        id="dietaryRestrictions"
        error={errors.dietaryRestrictions?.message as string | undefined}
      >
        <input
          type="text"
          id="dietaryRestrictions"
          placeholder="Your dietary restrictions..."
          {...register("dietaryRestrictions")}
          className="input__field"
        />
      </InputFieldContainer>

      <div className="mb-3 flex gap-2 items-center">
        <input
          type="checkbox"
          id="newsLetterSignup"
          {...register("newsLetterSignup")}
          className="w-4 h-4 border-2 border-winered transition-all duration-200 ease-in-out hover:bg-winered hover:border-winered focus:ring-2 focus:ring-winered focus:ring-offset-2 focus:ring-offset-light focus:ring-opacity-50 focus:outline-none checked:bg-winered checked:border-winered checked:ring-2 checked:ring-offset-2 checked:ring-winered checked:ring-offset-light checked:ring-opacity-50 checked:outline-none"
        />
        <label
          htmlFor="newsLetterSignup"
          className=" text-base font-semibold text-light"
        >
          Sign up for our newsletter
        </label>
      </div>
      <input
        type="submit"
        value="Register"
        disabled={isSubmitting}
        className="block w-max border-2 transition-all duration-200 ease-in-out mt-2 mx-auto bg-winered border-winered text-light hover:text-winered hover:bg-light rounded-md px-6 py-3 text-lg font-semibold  disabled:cursor-not-allowed disabled:opacity-50"
      />
    </form>
  );
};

export default RegistrationForm;
