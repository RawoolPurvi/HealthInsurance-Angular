// statistic.service.ts
import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { Transaction } from './transaction.model';
@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor() { }

  calculateTotalCustomers(customers: Customer[]): number {
    return customers.length;
  }

  calculateTotalTransactions(customers: Customer[]): number {
    let totalTransactions = 0;
    customers.forEach(customer => {
      totalTransactions += customer.transactions.length;
    });
    return totalTransactions;
  }

  calculateAverageTransactionAmount(customers: Customer[]): number {
    let totalAmount = 0;
    let totalTransactions = 0;
    customers.forEach(customer => {
      customer.transactions.forEach(transaction => {
        totalAmount += transaction.amount;
        totalTransactions++;
      });
    });
    return totalTransactions > 0 ? totalAmount / totalTransactions : 0;
  }

  calculateCustomersByCategory(customers: Customer[]): { category: string, count: number }[] {
    let categoriesMap = new Map<string, number>();
    customers.forEach(customer => {
      let category = customer.membershipType;
      if (categoriesMap.has(category)) {
        categoriesMap.set(category, categoriesMap.get(category)! + 1);
      } else {
        categoriesMap.set(category, 1);
      }
    });
    let categories: { category: string, count: number }[] = [];
    categoriesMap.forEach((count, category) => {
      categories.push({ category: category, count: count });
    });
    return categories;
  }
}
