import { Menu } from "@/components/Menu/Menu";
import { icons, Sidebar } from "@/components/Sidebar/sidebar";

export default function Home() {
  return <div>main page 
    <Menu/> 
    <Sidebar icons={icons} />
  </div>
}
