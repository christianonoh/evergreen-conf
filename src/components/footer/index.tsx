import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";

const index = () => {
  return (
    <footer className="bg-[#262A26] py-12">
      <div className="max-w-7xl mx-auto flex flex-col px-5 gap-8 md:px-10 md:flex-row justify-between text-light/70">
        <Link href="/" className="h-20 w-fit bg-light/80 p-4 rounded-xl">
          <Image src={Logo} alt="logo" className="h-full w-auto" priority />
        </Link>

        <div className="text-sm xs:text-base">
          <p>© 2024 Education Conference. All rights reserved.</p>
          <p>
            Developed by&nbsp;
            <a
              href="https://www.educare.school/"
              target="_blank"
              title="http://www.educare.school"
            >
              <span className="text-accent">EduCare</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default index;
