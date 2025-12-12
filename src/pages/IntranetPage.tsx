import { Card } from "../components/ui/card";
import { LogOut } from "lucide-react";
import moreroLogo from "@/assets/logo.png";
import {
  menuItems,
  subMenus,
  menuKeyToFolder,
  subKeyToFile,
} from "./config/menu";
import "./intranet.css";
import { Suspense, useEffect, useState } from "react";
import { contentMenus } from "@/components/content-menu";

interface IntranetPageProps {
  onLogout: () => void;
}

// Helper to parse tab and subTab from the current path
function getTabAndSubTabFromPath() {
  const path = window.location.pathname.split("/").filter(Boolean); // removes empty
  const tab = path[0] || "overview";
  // Set default subTab based on the tab
  let defaultSubTab = "digital-transformation-proposal";
  if (tab === "customer-analysis") {
    defaultSubTab = "industry-analysis";
  } else if (tab === "proposal") {
    defaultSubTab = "value-fit";
  } else if (tab === "value-proposition") {
    defaultSubTab = "market-position";
  }
  const subTab = path[1] || defaultSubTab;
  return { tab, subTab };
}

export default function IntranetPage({ onLogout }: IntranetPageProps) {
  const [{ tab: initialTab, subTab: initialSubTab }] = useState(
    getTabAndSubTabFromPath
  );
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab);
  const [lastUpdated, setLastUpdated] = useState("Unknown");
  const baseSubMenu = subMenus[activeTab] || [];
  // Business proposal structure - no history tabs
  const activeSubMenu = baseSubMenu;

  // Update the URL path when activeTab or activeSubTab changes
  useEffect(() => {
    const newPath = `/${activeTab}/${activeSubTab}`;
    if (window.location.pathname !== newPath) {
      window.history.replaceState(null, "", newPath);
    }
  }, [activeTab, activeSubTab]);

  useEffect(() => {
    const updateLastUpdated = async () => {
      try {
        const folder = menuKeyToFolder[activeTab];
        const file = subKeyToFile[activeSubTab];
        if (folder && file) {
          const module = await import(`./${folder}/${file}.tsx`);
          setLastUpdated(module.lastUpdated || "Unknown");
        }
      } catch {
        setLastUpdated("Unknown");
      }
    };
    updateLastUpdated();
  }, [activeTab, activeSubTab]);

  return (
    <>
      <div
        className="h-screen flex overflow-hidden"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <style>
          {`
          .content-title {
            color: white;
            font-family: 'Sofia Sans Extra Condensed', sans-serif;
            font-weight: bold;
            font-style: italic;
            font-size: 1.5rem;
            margin-bottom: 0;
          }
          .font-be-vietnam-pro p {
            margin-bottom: 1rem;
          }
          .font-be-vietnam-pro strong {
            color: #d1d5db;
            font-weight: normal;
          }
          .font-be-vietnam-pro {
            overflow-wrap: break-word;
            word-wrap: break-word;
          }
        `}
        </style>
        {/* Sidebar */}
        <nav className="w-40 pl-6 pt-6 pb-6 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center mb-9">
              <img src={moreroLogo} alt="Morero Logo" className="h-8 w-auto" />
            </div>
            {/* Menu */}
            <div className="flex flex-col gap-3">
              {menuItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setActiveSubTab(subMenus[key][0].key);
                  }}
                  className={`flex items-center gap-2 w-full rounded transition-all duration-150 font-medium text-[11px] pl-3 pr-1 py-2
                  ${
                    key === activeTab
                      ? "bg-[#204E4A] text-[#0D0D0D] font-bold justify-start shadow-lg"
                      : "text-gray-400 hover:text-[#204E4A] hover:bg-[#204E4A]/10 justify-start"
                  }
                `}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{label}</span>
                </button>
              ))}
              {/* Signout button in menu */}
              <button
                onClick={onLogout}
                className="flex items-center gap-2 w-full rounded-lg transition-all duration-150 font-medium text-[11px] pl-3 pr-1 py-2 text-gray-400 hover:text-[#204E4A] hover:bg-[#204E4A]/10 justify-start"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Signout</span>
              </button>
            </div>
          </div>
          {/* Version number at the bottom */}
          <div className="text-[9px] text-gray-500 pl-3 pb-1">Version 1.0</div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 h-screen p-6 flex items-stretch justify-stretch">
          <Card className="w-full h-full bg-[#232323] rounded-md border border-white/20 flex flex-col p-5 overflow-hidden">
            {/* Tabs Section (only show if has submenu) - positioned at top edge */}
            {activeSubMenu && (
              <div className="flex items-center gap-2">
                {activeSubMenu.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveSubTab(key)}
                    className={
                      key === activeSubTab
                        ? "px-4 py-2 text-white font-be-vietnam-pro font-medium text-xs tab-border bg-[#232323] transition-colors"
                        : "px-4 py-2 text-gray-500 font-be-vietnam-pro font-medium text-xs hover:text-gray-300 transition-colors"
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
            {/* Content Section with consistent padding */}
            <div className="flex-1 mt-4 pr-4 overflow-y-auto custom-scrollbar">
              <Suspense
                fallback={<div className="text-gray-400">Loading...</div>}
              >
                <>
                  <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
                    {contentMenus[activeTab]?.find(
                      (menu) => menu.key === activeSubTab
                    )?.component || (
                      <div className="text-gray-500">
                        Page not found. This section may be under development.
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-gray-500 mt-6">
                    Last updated: {lastUpdated}
                  </div>
                </>
              </Suspense>
            </div>
          </Card>
        </main>
      </div>
    </>
  );
}
