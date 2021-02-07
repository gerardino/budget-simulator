import { Budget } from 'budget-data-model/bin/model/budget';

export default ({
  currencies: {
    US$: {
      name: 'Dolar',
      symbol: '$',
      code: 'US$',
    },
    GTQ: {
      name: 'Quetzal',
      symbol: 'Q',
      code: 'GTQ',
    },
    Euro: {
      name: 'Euro',
      symbol: '€',
      code: 'Euro',
    },
  },
  banks: {
    CZB: {
      amount: 2200,
      currency: 'Euro',
      code: 'CZB',
      name: 'Commerzbank',
      description: 'Main account',
    },
    'BI-M': {
      amount: 0,
      currency: 'GTQ',
      code: 'BI-M',
      name: 'Banco Industrial Monetarios',
      description: 'Cuenta 026-000248-5',
    },
    'BI-AH-GTQ': {
      amount: 3000,
      currency: 'GTQ',
      code: 'BI-AH-GTQ',
      name: 'BI Ahorro Quetzales',
      description: '',
    },
    'BI-AH-USD': {
      amount: 800,
      currency: 'GTQ',
      code: 'BI-AH-USD',
      name: 'BI Ahorro Dolares',
      description: '',
    },
  },
  transfers: [
    {
      date: '2020-12-30T21:02:49.742Z',
      dayOfCycle: 3,
      fromBank: 'Med',
      toBank: 'Wae',
      exchangeRate: 8.39,
      fromAmount: 69.58,
      toAmount: 583.7762,
      state: 'e',
    },
    {
      date: '2020-12-30T21:02:49.742Z',
      dayOfCycle: 3,
      fromBank: 'Med',
      toBank: 'Win',
      exchangeRate: 4.06,
      fromAmount: 218.21,
      toAmount: 885.9326,
      state: 'e',
    },
  ],
  accounts: [
    {
      name: 'Special expenses #63',
      currency: 'Dol',
      accounts: [
        {
          name: 'Checking Account 4',
          type: 'a',
          amount: 772.08,
          state: 'e',
          date: '2020-12-30T21:02:49.742Z',
          dayOfCycle: 29,
          bank: 'Med',
        },
      ],
    },
    {
      name: 'Special expenses #66',
      currency: 'GTQ',
      accounts: [
        {
          name: 'Savings Account 5',
          type: 'a',
          amount: 187.81,
          state: 'e',
          date: '2020-12-30T21:02:49.742Z',
          dayOfCycle: 27,
          bank: 'Wae',
        },
      ],
    },
    {
      name: 'Special expenses #27',
      currency: 'Eur',
      accounts: [
        {
          name: 'Credit Card Account 9',
          type: 'a',
          amount: 160.95,
          state: 'e',
          date: '2020-12-30T21:02:49.742Z',
          dayOfCycle: 17,
          bank: 'Win',
        },
      ],
    },
  ],
  id: 202001,
  from: '2021-01-00T00:00:00.000Z',
  name: 'Enero 2020',
  to: '2021-01-31T23:59:59.000Z',
} as unknown) as Budget;
