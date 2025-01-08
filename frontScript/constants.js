const templatePromt = `
{
  "company": "", // 2nd line from the input data
  "business_name": "", // 3rd line from the input data
  "transaction_number": "", // 5th line, specifically the code (e.g., 20900241) from the input data
  "items": [ // Items array starts with a line containing "---" and ends with a line containing "---"
    {
      "name": "", // Item name (e.g., Fuel Save Unlea)
      "quantity": "", // Quantity, the 1st number in the line
      "ppu": "", // Price per unit, the 2nd number in the line
      "amount": "" // Total amount, the 3rd number in the line
    }
  ],
  "sub_total": "", // Sub Total from the input data
  "tax": "", // Tax from the input data
  "total": "", // Total from the input data
  "payment": {
    "method": "", // Payment method after "Payment" (e.g., Mobile Money)
    "amount": "" // Amount after the payment method (e.g., KSH 1867.00)
  },
  "additional_info": {
    "operator": "", // Operator from the input data
    "attendant": "", // Attendant from the input data
    "shift": "", // Shift from the input data
    "workstation": "", // Workstation from the input data
    "transaction_date": "" // Transaction Date from the input data
  }
}`;

const templateChatPromt = `
{
  "company": "", // 2nd line from the input data
  "business_name": "", // 3rd line from the input data
  "transaction_number": "", // 5th line, specifically the code (e.g., 20900241) from the input data
  "items": [ // Items array starts with a line containing "---" and ends with a line containing "---"
    {
      "name": "", // Item name (e.g., Fuel Save Unlea)
      "quantity": "", // Quantity, the 1st number in the line
      "ppu": "", // Price per unit, the 2nd number in the line
      "amount": "" // Total amount, the 3rd number in the line
    }
  ],
  "sub_total": "", // Sub Total from the input data
  "tax": "", // Tax from the input data
  "total": "", // Total from the input data
  "payment": {
    "method": "", // Payment method after "Payment" (e.g., Mobile Money)
    "amount": "" // Amount after the payment method (e.g., KSH 1867.00)
  },
  "additional_info": {
    "operator": "", // Operator from the input data
    "attendant": "", // Attendant from the input data
    "shift": "", // Shift from the input data
    "workstation": "", // Workstation from the input data
    "transaction_date": "" // Transaction Date from the input data
  }
}
Process the data (format json):`;

const templateChatPromtV2 = `{
"company": "", // 2nd line from the input data
"business_name": "", // 3rd line from the input data
"transaction_number": "", // 5th line, specifically the code (e.g., 20900241) from the input data
"items": [ // Items array starts with a line containing "---" and ends with a line containing "---"
{
"name": "", // Item name (e.g., Fuel Save Unlea)
"quantity": "", // Quantity, the 1st number in the line
"ppu": "", // Price per unit, the 2nd number in the line
"amount": "" // Total amount, the 3rd number in the line
}
],
"sub_total": "", // Sub Total from the input data
"tax": "", // Tax from the input data
"total": "", // Total from the input data
"payment": {
"method": "", // Payment method after "Payment" (e.g., Mobile Money)
"amount": "" // Amount after the payment method (e.g., KSH 1867.00)
},
"additional_info": {
"operator": "", // Operator from the input data
"attendant": "", // Attendant from the input data
"shift": "", // Shift from the input data
"workstation": "", // Workstation from the input data
"transaction_date": "" // Transaction Date from the input data
}
}
Process the data (format json):
Shell Limuru Road
Plug and Elevate Limited
ORIGINAL
Transaction# 20900241
Item Qty PPU Amount
Fuel Save Unlea 1.00 196.00 196.00
Fuel Save Diese 1.00 181.00 181.00
LPG GAS REFILL 1.00 1490.00 1490.00
Sub Total 1815.00
Tax 52.00
Total 1867.00
Payment
Mobile Money KSH 1867.00
Thank you
Operator: AlanGi
Attendant: Manager1
Shift:2384
Workstation: 1
Transaction Date: 15/11/2024 16:15:37`