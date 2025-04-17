const data = {
  prescriptionDrugs: [
    { name: "Naproxen", prescriptionDate: "February 27, 2024", purchaseDate: "February 29, 2024", provider: "Dr. Best", amount: "$20.00" }
  ],
  otcDrugs: [
    { name: "Advil", date: "March 28, 2024", amount: "$8.00", seller: "Shoppers Drug Mart", reason: "Pain" }
  ],
  medicalSupplies: [
    { item: "Tensor", date: "February 28, 2024", prescribed: "Yes", provider: "Dr. Best", amount: "$10.00", seller: "Shoppers Drug Mart" }
  ],
  parkingExpenses: [
    { address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "March 28, 2024", amount: "$10.00", meterUsed: "Yes", meterNumber: "12245" }
  ],
  mileageExpenses: [
    { appointmentDate: "March 28, 2024", providerAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A1R9, Canada", workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C4W3, Canada", distance: "20 km" },
  ],
  busTaxiFare: [
    { appointmentDate: "March 28, 2024", startingPoint: "  ", providerAddress: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E oZ2, Canada", mode: "Bus", fare: "$3.00" },
    { appointmentDate: "March 27, 2024", startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada", providerAddress: "440 Edmonton St, Winnipeg MB R3B2M4, Canada", mode: "Taxi", fare: "$15.00" }
  ]
};

function fillTable(tbodyId, rows, fields) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) {
    console.error(`Missing table body: ${tbodyId}`);
    return;
  }
  rows.forEach(row => {
    const tr = document.createElement("tr");
    fields.forEach(field => {
      const td = document.createElement("td");
      td.textContent = row[field] || "-";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

// Fill tables with fields matching HTML table columns
fillTable("prescriptionTableBody", data.prescriptionDrugs, ["name", "prescriptionDate", "purchaseDate", "provider", "amount"]);
fillTable("otcTableBody", data.otcDrugs, ["name", "date", "amount", "seller", "reason"]);
fillTable("medicalSuppliesTableBody", data.medicalSupplies, ["item", "date", "prescribed", "provider", "amount", "seller"]);
fillTable("parkingTableBody", data.parkingExpenses, ["address", "date", "amount", "meterUsed", "meterNumber"]);
fillTable("mileageTableBody", data.mileageExpenses, ["appointmentDate", "providerAddress", "workplaceAddress", "distance"]);
fillTable("busTaxiTableBody", data.busTaxiFare, ["appointmentDate", "startingPoint", "providerAddress", "mode", "fare"]);
