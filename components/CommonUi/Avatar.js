import React from 'react'
import Image from "next/image";

// can pass name or image as "type"
//"imgH" & "imgW" are height and width of image
//"height,width," are height and with of the outside circle

export const Avatar = ({ appearence, type, className, name, variant, height, width, img, imgH, imgW, Class, shadow, children }) => {
  const appearences = {
    rounded_none: "rounded-none",
    rounded_md: "rounded-md",
    rounded_sm: "rounded-sm",
    rounded_lg: "rounded-lg",
    rounded_full: "rounded-full"
  };

  const variants = {
    standard: "bg-gray-100 ",
    strong: "bg-gray-300",
    success: "bg-green-400",
    danger: "bg-red-400",
    alert: "bg-yellow-400",
    link: "bg-blue-400 "

  };
  const shadows = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }

  const getInitial = (name) => {

    let firstName = name.split(' ')[0];
    let lastName = name.split(' ')[1];

    const initials = firstName.charAt(0) + lastName.charAt(0);
    // const initials = firstName.charAt(0)

    return initials.toUpperCase();
  }

  return (<div className={`${className ? className : ` ${variants[variant]} ${appearences[appearence]} ${Class}  ${shadows[shadow]} w-${width} h-${height}`} font-Montserrat grid`}>
    <div className={`place-self-center`}>
      {type === "image" ?
        <Image height={imgH} width={imgW} objectFit="contain" src={img} />
        : type === "name" ?
          getInitial(name) : null}
    </div>
  </div>
  );

}