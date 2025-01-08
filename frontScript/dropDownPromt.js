
function dropDownPromt() {

  const arreyPromt = {
    'Universal':`{
    "company": "", // 2nd line from the input data
    "business_name": "", // 3rd line from the input data
    "transaction_number": "", // 5th line, specifically the code (e.g., 20900241) from the input data
    "date": "", // frmat dd/mm/yyyy
    "time": "", // format hh:mm:ss AM/PM
    "cashier": "",
    "register": "",
    "guest": "",
    "buyersPIN": "",
    "invoiceType": "",
    "items": [ // Items array starts with a line containing "---" and ends with a line containing "---"
      {
        "name": "", // Item name (e.g., Fuel Save Unlea)
        "quantity": "", // Quantity, the 1st number in the line
        "ppu": "", // type float, Price per unit, the 2nd number in the line
        "amount": "", // type float, Total amount, the 3rd number in the line
        "description": "",
        "HSCode": "",
      }
    ],
    "sub_total": "", // type float, Sub Total from the input data
    "tax": "", // type float, Tax from the input data
    "total": "", // type float, Total from the input data
    "payment": {
      "method": "", // Payment method after "Payment" (e.g., Mobile Money)
      "amount": "" // Amount after the payment method (e.g., KSH 1867.00)
    },
    "additional_info": {
      "operator": "", // Operator from the input data
      "attendant": "", // Attendant from the input data
      "shift": "", // Shift from the input data
      "workstation": "", // Workstation from the input data
      "VAT": "", type float,
      "transaction_date": "" // Transaction Date from the input data
    }
  }`,
    'Shell Limuru Road': `{
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
  `,
    'PHARMART GALLERIA CHEMIST LTD': `{
      "storeName": "", // example: "PHARMART GALLERIA CHEMIST LTD"
      "location": "", // example: "GALLERIA MALL"
      "address": "", // example: "P.O BOX 10267 00100, NAIROBI, KENYA"
      "phone": "", // example: "0738 065685"
      "invoiceType": "", // example: "Tax Invoice"
      "transactionNumber": "", // example: "889616"
      "customerPIN": "", // example: "P051107332Q"
      "date": "", // example: "4/17/2024"
      "time": "", // example: "9:42:56 AM"
      "cashier": "", // example: "30"
      "register": "", // example: "3"
      "items": [
        {
          "item": "", // example: "TEST"
          "description": "", // example: "TEST"
          "HSCode": "", // example: "0039.11.31"
          "amount": "" // type float
        }
      ],
      "totals": {
        "subTotal": "", // type float
        "discountTotal": "", // type float
        "salesTax": "", // type float
        "total": "" // type float
      },
      "payment": {
        "tendered": "", // type float
        "changeDue": "" // type float
      }
  }`,
  'Difficult receipt': `{
      "invoiceType": "", 
      "invoiceTo": "", // example: "NAIVAS LIMITED"
      "date": "", // example: "12/11/2024"
      "deliveryAddress": "", // example: "TSL"
      "deliveryNoteNo": "",
      "paymentTerms": "", // example: "30 days"
      "ownRefNo": "", // example: "1000003"
      "date_time": "",
      "items": [
        {
          "particulars": "", // type string
          "code": "", // example: "LT001"
          "qty": "", // example: "3"
          "rate": "", // type float
          "DIS": "", // type float
          "amount": "", // type float
        }
      ],
      "totals": {
        "subTotal": "", // type float
        "VAT": "", // type float
        "grandTotal": "", // type float
        "total": "" // type float
      }
  }`,
  'Simple': `{
    "adressData": "", // type string
    "pinNo": "", // type string
    "date": "", // type string
    "time": "", // type string
    "waiter": "", // type string
    "guest": "", // type string
    "items": [
      {
        "name": "", // type string
        "quantity": "", // type float
        "amount": "", // type float
      }
    ],
    "totalBill": "", // type float
    "lessDiscount": "", // type float
    "addTax": "", // type float
    "pleasePay": "", // type float
  }
  `
  };
  
  const dropdown = document.getElementById('dropdown');
  const textArea = document.getElementById('promtText');
  
  
  for (const key in arreyPromt) {
    if (Object.hasOwnProperty.call(arreyPromt, key)) {
      const element = arreyPromt[key];
  
      dropdown.appendChild(new Option(key, element));
    }
  }
  
  textArea.value = dropdown.value;
  
  dropdown.addEventListener('change', (e) => {
    textArea.value = e.target.value;
  });
  
}

