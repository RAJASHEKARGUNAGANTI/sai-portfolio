
import FloatingNav  from "../ui/FloatingNav";
import { IconHome, IconMessage } from "@tabler/icons-react";
import { FaStore } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

export default function Navbar() {

    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Store",
          link: "#store",
          icon: <FaStore className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Testimonials",
          link: "#testimonials",
          icon: (
            <VscFeedback className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "Contact",
          link: "#footer",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];
  return (

    <div className="relative  w-full">
    <FloatingNav navItems={navItems} />
    <DummyContent />
  </div>
 
  )
}

const DummyContent = () => {
    return (
      <></>
    );
  };
