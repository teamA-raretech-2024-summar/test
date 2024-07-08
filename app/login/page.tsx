import Form from "@/components/Form";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-b from-yellow-300 to-green-700">
      <Header />
      <div className="flex-1  flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
};

export default page;
