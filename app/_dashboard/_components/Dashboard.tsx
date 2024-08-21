import { Avatar, Divider, User } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

interface ListContainerProps extends PropsWithChildren {
  className?: string;
}

const ListContainer = ({ children, className }: ListContainerProps) => {
  const baseStyles = "border-l-1 border-opacity-20 border-shadow h-full";

  return <div className={baseStyles + " " + className}>{children}</div>;
};

const NavigationItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="font-thin text-2xl py-3 pl-3 cursor-pointer">{children}</li>
  );
};

const NavigationList = () => {
  return (
    <ul className="space-y-1.5">
      <Divider />
      <NavigationItem>Inicio</NavigationItem>
      <Divider />
      <NavigationItem>Artistas</NavigationItem>
      <Divider />
      <NavigationItem>Canciones</NavigationItem>
      <Divider />
    </ul>
  );
};

export const Dashboard = () => {
  return (
    <div className="flex h-full">
      <section className="h-full flex-1">a</section>
      <section className="flex flex-col justify-center items-end gap-5">
        <ListContainer className="justify-end flex flex-col">
          <NavigationList />
        </ListContainer>
        <div className="p-1.5 border-l-2 rounded-full grid place-items-center mr-12 border-opacity-20 border-shadow">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-32 h-32 text-large"
          />
        </div>
        <ListContainer>
          <NavigationList />
        </ListContainer>
      </section>
    </div>
  );
};
