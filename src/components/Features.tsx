import { Feature } from "./Feature";
import { motion } from "framer-motion";
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="text-white bg-black py-[72px]">
      <div className="container ">
        <h2 className="text-center font-bold text-5xl tracking-tighter">
          Everyhting you need
        </h2>
        <p className="text-center mt-5 text-xla sm:text-6xl text-white/70">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {features.map(({ title, description }, idx) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
