import type { ReactElement } from "react";

type variants="primary" | "secondary";
interface ButtonProps{
    variant:variants;
    size:"sm"| "md" | "lg";
    text:string,
    startIcon?:ReactElement,
    endIcon?:ReactElement,
    onClick:()=>void;
}

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600", 
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export const Button=(props:ButtonProps)=>{
    return (
        <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45" : ""}` } disabled={loading} >
            {/* Container for optional start icon */}
            <div className="pr-2">
                {startIcon}
            </div>
            {/* Button text */}
            {text}
        </button>
    );
}

<Button variant="primary" size="md" onClick={()=>{}} text={"asd"}/>