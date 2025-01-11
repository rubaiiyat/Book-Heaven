import { BarChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";
import { getItems } from "../Utilities/Local";
import { useLoaderData } from "react-router-dom";

const PagesToRead = ({ book }) => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);

  const [pData, setpData] = useState([]);
  const [xLabels, setXLabels] = useState([]);

  useEffect(() => {
    const storedBooksId = getItems();
    const bookReads = [];
    if (books.length > 0) {
      for (const id of storedBooksId) {
        const book = books.find((book) => book.bookId === id);

        if (book) {
          bookReads.push(book);
        }

        setReadBooks(bookReads);
        const data = bookReads.map((book) => book.totalPages);
        const labels = bookReads.map((book) => book.bookName);

        setpData(data);
        setXLabels(labels);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center  p-4 bg-gray-800 rounded-lg">
      {readBooks.length > 2 ? (
        <BarChart
          width={800}
          height={400}
          series={[{ data: pData, label: "Pages Viewed", id: "pvId" }]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
          sx={{
            "& .MuiChartsAxis-root text": {
              fill: "white",
            },
            "& .MuiChartsLegend-root text": {
              fill: "white",
            },
            "& .MuiChartsAxis-labels text": {
              fill: "white",
            },
          }}
        />
      ) : (
        <h1 className="text-error">Please Add atleast 3 book</h1>
      )}
    </div>
  );
};

export default PagesToRead;
