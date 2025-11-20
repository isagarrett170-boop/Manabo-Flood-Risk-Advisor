
export interface TableRow {
  label: string; // Generic label for Barangays, Categories, or Criteria
  value: number | string;
  rating: string;
  colorClass: string; // Tailwind class for background
}

export interface MapSectionData {
  title: string;
  description: string;
  imageUrl?: string; // Made optional for data-only sections
  tableHeaders: string[];
  tableData: TableRow[];
  riskIndexTable?: { rating: string; range: string; colorClass: string }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
