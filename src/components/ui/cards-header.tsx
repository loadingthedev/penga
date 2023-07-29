import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface CardHeaderProps {
  title: string;
  link: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ link, title }) => {
  return (
    <div className="flex items-center justify-between mb-3 dark:text-white">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
      <Link
        href={link || "/"}
        className="flex items-center text-sm gap-1 font-medium text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
      >
        View All
        <BsArrowRight />
      </Link>
    </div>
  );
};

export default CardHeader;
