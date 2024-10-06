import Image from "next/image";

interface TextMaskProps {
    image: string;
    text: string;
    className?: string;
  }
  
  function TextMask({ image, text, className }: TextMaskProps) {
    return (
      <div className={`relative ${className}`}>
        <Image src={image} alt={text} layout="fill" objectFit="cover" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-5xl font-bold">
          {text}
        </div>
      </div>
    );
  }
  
  export default TextMask;
  