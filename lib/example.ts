import { StaticImageData } from "next/image";
import sample1 from "@/public/sample-1.png";
import sample2 from "@/public/sample-2.png";
import sample3 from "@/public/sample-3.png";

export type sampleDataType = {
  title: string;
  status: "active" | "executed" | "rejected";
  image: StaticImageData;
  duration: string;
  background: string;
  aim: string;
  timeline: string;
  funds: number;
  donations: number;
  withdrawel: number;
  links: string[];
  startDate?: string;
  endDate?: string;
  remaingDays?: number;
  members: { color: string; address: string }[];
};

export const sampleData: sampleDataType[] = [
  {
    title:
      "Development of Novel Therapeutics Targeting Tumor Angiogenesis Using AI-Driven Drug Discovery",
    status: "active",
    image: sample1,
    duration: "16 days left",
    background:
      "Tumor angiogenesis is critical for cancer progression. Current therapies are limited by resistance and side effects. This project aims to leverage AI to discover novel targets and develop effective therapeutics.",
    aim: "To identify novel molecular targets involved in tumor angiogenesis using AI, design new inhibitors, and validate their efficacy in preclinical models.",
    timeline:
      "Phase 1: Data Collection and AI Analysis (Months 1-6), Phase 2: Drug Design and In Silico Validation (Months 7-12), Phase 3: In Vitro Validation (Months 13-18)",
    funds: 500000,
    donations: 2500,
    withdrawel: 50000,
    links: ["https://linktoabstract.com", "https://linktoprojectdetails.com"],
    members: [
      { color: "blue", address: "0x1234...abcd" },
      { color: "green", address: "0x5678...efgh" },
    ],
    startDate: "02 JUL 2024",
    endDate: "09 SEP 2024",
    remaingDays: 70,
  },
  {
    title: "Exploration of Gene Editing for Rare Diseases",
    status: "rejected",
    image: sample3,
    background:
      "Gene editing technologies, such as CRISPR, hold potential for curing rare genetic disorders. However, ethical and technical challenges remain.",
    aim: "To explore the potential of gene editing in treating rare diseases, including addressing ethical concerns and improving the precision of these technologies.",
    duration: "1 month ago",
    timeline:
      "Phase 1: Ethical and Technical Review (Months 1-6), Phase 2: Initial Trials and Adjustments (Months 7-12)",
    funds: 20000,
    donations: 150,
    withdrawel: 0,
    links: [
      "https://linktogeeneditreview.com",
      "https://linktopublication.com",
    ],
    members: [
      { color: "yellow", address: "0x4321...dcba" },
      { color: "orange", address: "0x8765...4321" },
    ],
    startDate: "25 JUL 2024",
    endDate: "09 SEP 2024",
    remaingDays: 90,
  },
  {
    title: "Advanced Research in Neural Regeneration Techniques",
    status: "executed",
    image: sample2,
    background:
      "Neural regeneration is a promising field that aims to repair or replace damaged nerve cells. This project focused on developing new methods to stimulate neural growth in injured patients.",
    aim: "To develop and test new techniques that can promote neural regeneration in vitro and in vivo, potentially leading to new treatments for neurodegenerative diseases.",
    timeline:
      "Phase 1: Research and Development (Months 1-9), Phase 2: Clinical Trials (Months 10-18)",
    duration: "5 months ongoing",
    funds: 750000,
    donations: 5000,
    withdrawel: 200000,
    links: ["https://linktoneuralresearch.com", "https://linktoresults.com"],
    members: [
      { color: "red", address: "0x9abc...def0" },
      { color: "purple", address: "0x1234...5678" },
    ],
    startDate: "11 OCT 2024",
    remaingDays: 120,
    endDate: "15 DEC 2024",
  },
];
