import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.number}: {invoice.name}
      </p>
      <p>Will Process: {invoice.due}</p>
      <p style={{ backgroundColor: "lightyellow" }}>
        Have something similar: {invoice.already}
      </p>
      <span></span>
      <span></span>
      <p>
        <button
          className="delete-button"
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
