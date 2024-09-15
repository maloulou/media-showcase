import { BiError } from "react-icons/bi";

interface ErrorProps {
  className?: string | undefined;
  error: string;
}

const Error = ({ className = "h-screen", error }: ErrorProps) => {
  return (
    <div
      className={`relative bg-mainColor top-0 left-0 w-screen flex justify-center items-center ${className}`}
    >
      <div className="flex flex-row gap-2 items-end ">
        <BiError className="text-[32px]" />
        <p className="text-gray-900">{error}</p>
      </div>
    </div>
  );
};

export default Error;
