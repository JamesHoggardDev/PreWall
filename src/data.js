let invoices = [
  {
    name: "T-Shirt",
    number: 33,
    amount: "$10",
    due: "12/05/2021"
  },
  {
    name: "Popcorn",
    number: 34,
    amount: "$23",
    due: "10/31/2021"
  },
  {
    name: "Away ticket",
    number: 35,
    amount: "$93",
    due: "07/22/2022"
  },
  {
    name: "Concert merchandise",
    number: 36,
    amount: "$142",
    due: "09/01/2022"
  },
  {
    name: "League entry",
    number: 14,
    amount: "$65",
    due: "01/27/2023"
  },
  {
    name: "Concert ticket",
    number: 25,
    amount: "$302",
    due: "09/01/2022"
  }
];

// ...

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find(
    invoice => invoice.number === number
  );
}

export function deleteInvoice(number) {
  invoices = invoices.filter(
    invoice => invoice.number !== number
  );
}