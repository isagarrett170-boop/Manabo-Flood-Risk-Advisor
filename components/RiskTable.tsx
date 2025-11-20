
import React from 'react';
import { TableRow } from '../types';

interface RiskTableProps {
  headers: string[];
  data: TableRow[];
  caption?: string;
}

const RiskTable: React.FC<RiskTableProps> = ({ headers, data, caption }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white">
      <table className="w-full text-sm text-left text-gray-600">
        {caption && (
          <caption className="p-4 text-lg font-semibold text-left text-gray-900 bg-white border-b">
            {caption}
          </caption>
        )}
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-300">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3 font-bold tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`border-b last:border-b-0 ${row.colorClass} bg-opacity-80 hover:opacity-100 transition-opacity duration-150`}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {row.label}
              </td>
              <td className="px-6 py-4 font-mono font-semibold text-gray-800">
                {row.value}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-800 uppercase">
                {row.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskTable;
