import { Outlet, useLocation } from "@remix-run/react";
import { createContext, useEffect, useState } from "react";

export const NavigationContext = createContext<{
  currentSection: string;
}>({
  currentSection: "dashboard",
});

export default function LayoutsRoot() {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState(location.hash.replace("#", "") || "dashboard");

  useEffect(() => {
    // Update section when hash changes
    const newSection = location.hash.replace("#", "") || "dashboard";
    setCurrentSection(newSection);
  }, [location.hash]);

  return (
    <NavigationContext.Provider value={{ currentSection }}>
      <Outlet />
    </NavigationContext.Provider>
  );
} 