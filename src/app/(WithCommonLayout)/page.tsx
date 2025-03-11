"use client";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log("here", user);

  return (
    <div>
      {" "}
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
