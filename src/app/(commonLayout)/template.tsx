import Navbar from "@/components/Navbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <Navbar/>
            {children}
        </div>
    );
};

export default CommonLayout;