import React, { useEffect, useRef, useState } from "react";

interface Column {
  title: string;
  data: string;
  render?: (value: any, type: string, row: any) => React.ReactElement;
}

interface DataTableProps<TData> {
  columns: Column[];
  data: TData[];
  className?: string;
}

export function DataTable<TData>({
  columns,
  data,
  className = "",
}: DataTableProps<TData>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleColumnHover = (columnIndex: number) => {
    setHoveredColumn(columnIndex);
  };

  const handleColumnLeave = () => {
    setHoveredColumn(null);
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`intranet-table-container custom-scrollbar ${className}`}
      >
        <table className="intranet-table">
          <thead>
            <tr>
              {columns.map((column, index) => {
                const title = column.title;
                // Check if this is a month column (contains space and 2-digit year)
                const isMonthColumn = /\w{3} \d{2}$/.test(title);

                if (isMonthColumn) {
                  const [month, year] = title.split(" ");
                  return (
                    <th
                      key={index}
                      className={`text-left text-xs font-medium text-[#D65D12] tracking-wider border-b border-gray-600 min-w-[140px] px-3 ${
                        hoveredColumn === index ? "column-hover" : ""
                      }`}
                      onMouseEnter={() => handleColumnHover(index)}
                      onMouseLeave={handleColumnLeave}
                    >
                      <span>{month}</span>
                      <span>{year}</span>
                    </th>
                  );
                }

                return (
                  <th
                    key={index}
                    className={`text-left text-xs font-medium text-[#D65D12] tracking-wider border-b border-gray-600 min-w-[150px] px-4 ${
                      hoveredColumn === index ? "column-hover" : ""
                    }`}
                    onMouseEnter={() => handleColumnHover(index)}
                    onMouseLeave={handleColumnLeave}
                  >
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row: any, rowIndex) => {
              const isLastRow = rowIndex === data.length - 1;
              return (
                <tr 
                  key={rowIndex}
                  className="hover:bg-gray-800/50 transition-colors"
                >
                  {columns.map((column, colIndex) => {
                    const isMonthColumn = /\w{3} \d{2}$/.test(column.title);
                    return (
                      <td
                        key={colIndex}
                        className={`text-sm text-white font-be-vietnam-pro text-left ${
                          isLastRow ? "border-b-0" : "border-b border-gray-700"
                        } ${
                          isMonthColumn
                            ? "min-w-[140px] px-3"
                            : "min-w-[150px] px-4"
                        } ${hoveredColumn === colIndex ? "column-hover" : ""}`}
                        onMouseEnter={() => handleColumnHover(colIndex)}
                        onMouseLeave={handleColumnLeave}
                      >
                        {column.render ? (
                          column.render(row[column.data], "display", row)
                        ) : (
                          <span className="text-white font-be-vietnam-pro text-xs">
                            {row[column.data]}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
