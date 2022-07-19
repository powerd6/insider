import { useStore } from "@nanostores/preact";
import { isSidebarOpen } from "@states/sidebar";

export default function ToggleButton() {
  const $isSidebarOpen = useStore(isSidebarOpen);
  return (
    <button class="z-10 rounded p-2 fixed top-6 left-6 text-white bg-blue-200 hover:bg-blue-400" title="Show Menu" onClick={() => isSidebarOpen.set(!$isSidebarOpen)}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  )
}