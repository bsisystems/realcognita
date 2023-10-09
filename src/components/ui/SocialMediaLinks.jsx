import React from "react";

const SocialMediaLinks = () => {
  const links = [
    {
      id: crypto.randomUUID(),
      name: "facebook",
      icon: "pi pi-facebook",
      url: "https://www.facebook.com/realcognita",
    },
    {
      id: crypto.randomUUID(),
      name: "pi-linkedin",
      icon: "pi pi-linkedin",
      url: "https://www.linkedin.com/company/realcognita/?viewAsMember=true",
    },
  ];
  return (
    <ul className="flex gap-4 flex-wrap ">
      {links.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.url}>
              <i
                className={`${item.icon} p-3 bg-[#3E5A61] rounded-md text-white`}
              ></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;
