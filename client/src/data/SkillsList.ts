import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLess,
  FaNetworkWired,
  FaSass,
  FaWifi,
} from "react-icons/fa";
import {
  SiAngular,
  SiApollographql,
  SiCisco,
  SiCss3,
  SiDrupal,
  SiGraphql,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiTypescript,
  SiVuedotjs,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiSwift,
  SiExpo,
  SiAndroidstudio,
  SiWireshark,
} from "react-icons/si";
import
{
  DiVisualstudio,
} from "react-icons/di";
import
{
  BiLogoVisualStudio,
  BiNetworkChart
} from "react-icons/bi";
import
{
  BsCalculator,
  BsWrench
} from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import
{
  MdLayers,
  MdVpnLock
} from "react-icons/md"

import type { Subcategory } from "@/components/ResumeSkills/Skills";

export const SkillsList: { title: string; subcategories: Subcategory[] }[] = [
  {
    title: "Web Development",
    subcategories: [
      {
        type: "proficiency",
        level: "fluent",
        skills: [
          { name: "HTML", icon: SiHtml5, color: "#E44D26" },
          { name: "CSS", icon: SiCss3, color: "#1572B6" },
          { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
          { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
          { name: "React", icon: FaReact, color: "#61DAFB" },
          { name: "Node.js", icon: FaNodeJs, color: "#339933" },
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
      },
      {
        type: "proficiency",
        level: "learning",
        skills: [
          { name: "Angular", icon: SiAngular, color: "#DD0031" },
          { name: "Apollo", icon: SiApollographql, color: "#311C87" },
          { name: "Drupal", icon: SiDrupal, color: "#0678BE" },
          { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
          { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
          { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
          { name: "Sass", icon: FaSass, color: "#CC6699" },
          { name: "Less", icon: FaLess, color: "#1D365D" },
        ],
      },
      {
        type: "tools",
        label: "Tools",
        toolsByLevel: {
          fluent: [{ name: "Insomnia", icon: SiInsomnia, color: "#4000BF" }],
          learning: [{ name: "Postman", icon: SiPostman, color: "#FF6C37" }],
        },
      },
    ],
  },
  {
    title: "Mobile Development",
    subcategories: [
      {
        type: "proficiency",
        level: "learning",
        skills: [
          { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
          { name: "Flutter", icon: SiFlutter, color: "#02569B" },
          { name: "Dart", icon: SiDart, color: "#0175C2" },
          { name: "Kotlin", icon: SiKotlin, color: "#0095D5" },
          { name: "Swift", icon: SiSwift, color: "#FA7343" },
        ],
      },
      {
        type: "tools",
        label: "Tools",
        toolsByLevel: {
          learning: [
            { name: "Expo", icon: SiExpo, color: "#000020" },
            { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
          ],
        },
      },
    ],
  },
  {
    title: "Cisco / IT / Networking",
    subcategories: [
      {
        type: "proficiency",
        level: "refreshing",
        skills: [
          { name: "Cisco", icon: SiCisco, color: "#1BA0D7" },
          { name: "Security Protocols", icon: MdVpnLock, color: "#11B5E4" },
          { name: "Networking", icon: FaNetworkWired, color: "#0AC1D6" },
          { name: "Wireless", icon: FaWifi, color: "#0AC1D6" },
          { name: "Subnetting", icon: BsCalculator, color: "#00C2CB" },
          { name: "OSI Model", icon: MdLayers, color: "#11B5E4" },
        ],
      },
      {
        type: "tools",
        label: "Tools",
        toolsByLevel: {
          refreshing:
          [
            { name: "Packet Tracer", icon: BiNetworkChart, color: "#0AC1D6" }
          ],
          learning: [
            { name: "GNS3", icon: BsWrench, color: "#000" },
            { name: "Wireshark", icon: SiWireshark, color: "#000" },
          ],
        },
      },
    ],
  },
  {
    title: "Shared Tools & Environments",
    subcategories: [
      {
        type: "proficiency",
        level: "fluent",
        skills: [
          
          { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
          { name: "Git", icon: FaGitAlt, color: "#F05032" },
          { name: "GitHub", icon: FaGithub, color: "#fff" },
        ],
      },
      {
        type: "proficiency",
        level: "learning",
        skills: [
          { name: "Visual Studio", icon: DiVisualstudio, color: "#5C2D91" },
          { name: "Python", icon: SiPython, color: "#3776AB" },
        ],
      },
    ],
  },
];
