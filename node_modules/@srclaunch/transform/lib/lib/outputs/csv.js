export function formatObjectToCSVData({ 
// data,
objectType, }) {
    // const spreadsheetContent: data. = '';
    // ('Account Name,Plaid Name,Last Four #,Account Type,Account Sub-Type,Account Sync Enabled,Current Balance,Available Balance,Credit Limit,Due Date Occurrence,Monthly Due Date,Minimum Payment Amount,CreditCardId\r\n');
    switch (objectType) {
        case "something":
            return "";
        default:
            return "";
    }
    // case 'ACCOUNT': {
    /*
        CreditCardId: "264"
  account_sync_active: true
  available: null
  balance: 3910.77
  creditCard: {annual_fee: null, annual_fee_notes: null, foreign_transaction_fees: true, id: "264", image: "usbank_fidelity_rewards.png", …}
  credit_limit: null
  due_date_occurrence: "monthly"
  id: "ff433562-cee3-4d3f-9e74-e7dbbe65410f"
  minimum_payment_amount: 99
  monthly_due_date: 15
          name: "Fidelity Rewards"
  plaid_institution_id: "ins_12"
  plaid_institution_name: "Fidelity"
  plaid_last_updated: "2021-04-17T09:49:03.000Z"
          plaid_mask: "4486"
  plaid_name: "Fidelity® Rewards Visa Signature"
  plaid_requires_attention: false
  plaid_subtype: "credit card"
  plaid_token: "access-development-59526548-edb0-418e-b523-a3cd13153db1"
  plaid_type: "credit"
  sub_type: null
  type: "CREDIT_CARD"*/
    // @ts-ignore
    // data.forEach((row: Account) => {
    //   const {
    //     name,
    //     plaid_name,
    //     plaid_mask,
    //     type,
    //     sub_type,
    //     account_sync_active,
    //     balance,
    //     available,
    //     credit_limit,
    //     due_date_occurrence,
    //     monthly_due_date,
    //     minimum_payment_amount,
    //     CreditCardId,
    //   } = row;
    //   const spreadsheetRow = `${name ?? ''},${plaid_name ?? ''},${
    //     plaid_mask ?? ''
    //   },${type ?? ''},${sub_type ?? ''},${account_sync_active ?? ''},${
    //     balance ?? ''
    //   },${available ?? ''},${credit_limit ?? ''},${
    //     due_date_occurrence ?? ''
    //   },${monthly_due_date ?? ''},${minimum_payment_amount ?? ''},${
    //     CreditCardId ?? ''
    //   }`;
    //   spreadsheetContent += `${spreadsheetRow}\r\n`;
    // });
    // return spreadsheetContent;
    // }
    // case 'BUDGET': {
    //   return '';
    // }
    // case 'TRANSACTIONS': {
    //   return '';
    // }
    // case 'EXPENSE':
    /*
        AccountId: null
  SpendingCategoryId: "a5c94cba-07cb-4b4b-8759-4dec4b81953c"
  UserId: "9d48df69-0f05-45e8-bb84-e15655765c5f"
  amount: 90
  createdAt: "2021-05-02T01:43:19.000Z"
  discretionary: false
  id: "80592ec2-1bf6-4156-b458-c34e84c7f48f"
  month: 4
  monthly_due_date: 1
  name: "Trash"
  occurrence: "MONTHLY"
  paid: false
  updatedAt: "2021-05-02T01:43:19.000Z"
  weekly_due_date: null
  year: 2021
  yearly_due_date_day: null
  yearly_due_date_month: null
         */
    // let spreadsheetContent =
    //   'Expense Name,Amount,Discretionary,Occurrence,Monthly Due Date,Weekly Due Date,Yearly Due Date Month,Yearly DUe Date Day,AccountId, SpendingCategoryId\r\n';
    // // @ts-ignore
    // data.forEach((row: Expense) => {
    //   const {
    //     name,
    //     amount,
    //     discretionary,
    //     occurrence,
    //     monthly_due_date,
    //     weekly_due_date,
    //     yearly_due_date_month,
    //     yearly_due_date_day,
    //     AccountId,
    //     SpendingCategoryId,
    //   } = row;
    //   const spreadsheetRow = `${name ?? ''},${amount ?? ''},${
    //     discretionary ?? ''
    //   },${occurrence ?? ''},${monthly_due_date ?? ''},${
    //     weekly_due_date ?? ''
    //   },${yearly_due_date_month ?? ''},${yearly_due_date_day ?? ''},${
    //     AccountId ?? ''
    //   },${SpendingCategoryId ?? ''}`;
    //   spreadsheetContent += `${spreadsheetRow}\r\n`;
    // });
    // return spreadsheetContent;
    // default:
    //   return '';
    // }
}
//# sourceMappingURL=csv.js.map