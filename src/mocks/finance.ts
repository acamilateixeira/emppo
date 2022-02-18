import { Finance } from '../models/finance';

class FinanceServices {
  getFinance(): Promise<Finance[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Finance',
            description: 'Finance',
            amount: 0,
            date: '2020-01-01',
            type: {
              id: 1,
              description: 'Income',
            },
            category: {
              id: 1,
              description: 'Accounting',
            },
            user: 'admin',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01',
          },
          {
            id: 2,
            name: 'Finance',
            description: 'Finance',
            amount: 4784851.8769,
            date: '2020-01-01',
            type: {
              id: 1,
              description: 'Income',
            },
            category: {
              id: 1,
              description: 'Accounting',
            },
            user: 'admin',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01',
          },
          {
            id: 3,
            name: 'Invests',
            description: 'Finance',
            amount: 65489448.0,
            date: '2020-01-01',
            type: {
              id: 1,
              description: 'Income',
            },
            category: {
              id: 1,
              description: 'Accounting',
            },
            user: 'admin',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01',
          },
          {
            id: 4,
            name: 'Entrance Fee',
            description: 'Finance',
            amount: 55789559.58858,
            date: '2020-01-01',
            type: {
              id: 1,
              description: 'Income',
            },
            category: {
              id: 1,
              description: 'Accounting',
            },
            user: 'admin',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01',
          },
          {
            id: 5,
            name: 'Cost',
            description: 'Cost',
            amount: 10897848.458,
            date: '2020-01-01',
            type: {
              id: 1,
              description: 'Income',
            },
            category: {
              id: 1,
              description: 'Payroll',
            },
            user: 'admin',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01',
          },
        ]);
      }, 1000);
    });
  }

  storeFinance(finance: Finance): Promise<Finance> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(finance);
      }, 1000);
    });
  }

  updateFinance(finance: Finance): Promise<Finance> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(finance);
      }, 1000);
    });
  }

  deleteFinance(id: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  getType(): Promise<any[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: 'Income',
          },
          {
            id: 2,
            description: 'Expense',
          },
        ]);
      }, 1000);
    });
  }

  getCategory(): Promise<any[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: 'Accounting',
          },
          {
            id: 2,
            description: 'Finance',
          },
          {
            id: 3,
            description: 'Logistics',
          },
          {
            id: 4,
            description: 'Quality Control',
          },
          {
            id: 5,
            description: 'Production',
          },
        ]);
      }, 1000);
    });
  }

  getUser(): Promise<any[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: 'admin',
          },
          {
            id: 2,
            description: 'user',
          },
        ]);
      }, 1000);
    });
  }
}

export default new FinanceServices();
