// src/components/Loader.jsx
import { Loader2 } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Loader = () => (
  <div className="flex items-center justify-center h-screen w-full flex-col gap-0 bg-white">
    <div className="h-[80%] flex flex-col items-center">
    <div className="w-[90%] h-[90%]">
        <DotLottieReact
      src="/Chef.lottie"
      loop
      autoplay
    />
    </div>
    <Loader2 className="animate-spin text-black w-10 h-10 md:mt-4" />
    </div>
    


    
  </div>
);

export default Loader;
