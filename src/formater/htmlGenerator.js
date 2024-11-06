import React from "react";
import ReactDOMServer from "react-dom/server";
import OpportunityTransferTemplate from "../template/transfer";

// Dummy Data
const dummyData = {
  count: 5,
  employee: "John Doe",
  timestamp: "2024-11-06",
  opportunity_details: [
    { id: "123", name: "Opportunity 1" },
    { id: "124", name: "Opportunity 2" },
    { id: "125", name: "Opportunity 3" },
    { id: "126", name: "Opportunity 4" },
    { id: "127", name: "Opportunity 5" },
  ],
};

export const renderEmail = () => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <OpportunityTransferTemplate {...dummyData} />
  );

  const fullHtml = `<!DOCTYPE html>${html}`;

  console.log(fullHtml);
};
