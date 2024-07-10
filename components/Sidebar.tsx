import { cn } from "@/lib/utils";
import React from "react";

interface SidebarProps {
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return <div className={cn("", className)}></div>;
};

export default Sidebar;
