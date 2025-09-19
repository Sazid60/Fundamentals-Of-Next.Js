"use client"
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter()
  const handleNavigation = () => {
    router.push("/dashboard")
  }
  return (
    <div>
      <h1 className="text-4xl">Next.js Hello!</h1>

      <button onClick={handleNavigation} className="border rounded-md hover:space-x-1.5">Dashboard</button>
    </div>
  );
};

export default HomePage;