import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import { StatisticService } from './statistic.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers = [

    //cali LA
    // Member 1
    { 
      name: 'John Doe',
      country: 'USA',
      branch: 'Los Angeles',
      city: 'Los Angeles',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-04-01', type: 'Mediclaim', amount: 100 },
        { date: '2023-04-10', type: 'Life Insurance', amount: 200 },
        { date: '2023-04-20', type: 'Dental Insurance', amount: 150 },
        { date: '2023-05-01', type: 'Property Insurance', amount: 120 },
        { date: '2023-05-10', type: 'Mediclaim', amount: 110 },
        { date: '2023-05-20', type: 'Life Insurance', amount: 210 },
        { date: '2023-06-01', type: 'Dental Insurance', amount: 160 },
        { date: '2023-06-10', type: 'Property Insurance', amount: 130 },
        { date: '2023-06-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 220 },
      ] 
    },
    // Member 2
    { 
      name: 'Ali Smithrin',
      country: 'USA',
      city: 'Los Angeles',
      branch: 'Los Angeles',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-04-02', type: 'Mediclaim', amount: 110 },
        { date: '2023-04-11', type: 'Life Insurance', amount: 210 },
        { date: '2023-04-21', type: 'Dental Insurance', amount: 160 },
        { date: '2023-05-02', type: 'Property Insurance', amount: 130 },
        { date: '2023-05-11', type: 'Mediclaim', amount: 120 },
        { date: '2023-05-21', type: 'Life Insurance', amount: 220 },
        { date: '2023-06-02', type: 'Dental Insurance', amount: 170 },
        { date: '2023-06-11', type: 'Property Insurance', amount: 140 },
        { date: '2023-06-21', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 230 },
      ] 
    },
    // Member 3
    { 
      name: 'Arison Johnson',
      country: 'USA',
      city: 'Los Angeles',
      branch: 'Los Angeles',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-04-03', type: 'Mediclaim', amount: 120 },
        { date: '2023-04-12', type: 'Life Insurance', amount: 220 },
        { date: '2023-04-22', type: 'Dental Insurance', amount: 170 },
        { date: '2023-05-03', type: 'Property Insurance', amount: 140 },
        { date: '2023-05-12', type: 'Mediclaim', amount: 130 },
        { date: '2023-05-22', type: 'Life Insurance', amount: 230 },
        { date: '2023-06-03', type: 'Dental Insurance', amount: 180 },
        { date: '2023-06-12', type: 'Property Insurance', amount: 150 },
        { date: '2023-06-22', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 240 },
      ] 
    },
    // Member 4
    { 
      name: 'Emilio Davis',
      country: 'USA',
      city: 'Los Angeles',
      branch: 'Los Angeles',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-04-04', type: 'Mediclaim', amount: 130 },
        { date: '2023-04-13', type: 'Life Insurance', amount: 230 },
        { date: '2023-04-23', type: 'Dental Insurance', amount: 180 },
        { date: '2023-05-04', type: 'Property Insurance', amount: 150 },
        { date: '2023-05-13', type: 'Mediclaim', amount: 140 },
        { date: '2023-05-23', type: 'Life Insurance', amount: 240 },
        { date: '2023-06-04', type: 'Dental Insurance', amount: 190 },
        { date: '2023-06-13', type: 'Property Insurance', amount: 160 },
        { date: '2023-06-23', type: 'Mediclaim', amount: 150 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 250 },
      ] 
    },
    // cali SF

    { 
      name: 'Josh Davin',
      country: 'USA',
      city: 'San Francisco',
      branch: 'San Francisco',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-04-01', type: 'Mediclaim', amount: 100 },
        { date: '2023-04-10', type: 'Life Insurance', amount: 200 },
        { date: '2023-04-20', type: 'Dental Insurance', amount: 150 },
        { date: '2023-05-01', type: 'Property Insurance', amount: 120 },
        { date: '2023-05-10', type: 'Mediclaim', amount: 110 },
        { date: '2023-05-20', type: 'Life Insurance', amount: 210 },
        { date: '2023-06-01', type: 'Dental Insurance', amount: 160 },
        { date: '2023-06-10', type: 'Property Insurance', amount: 130 },
        { date: '2023-06-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 220 },
      ] 
    },
    // Member 2
    { 
      name: 'Alice Smith',
      country: 'USA',
      city: 'San Francisco',
      branch: 'San Francisco',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-04-02', type: 'Mediclaim', amount: 110 },
        { date: '2023-04-11', type: 'Life Insurance', amount: 210 },
        { date: '2023-04-21', type: 'Dental Insurance', amount: 160 },
        { date: '2023-05-02', type: 'Property Insurance', amount: 130 },
        { date: '2023-05-11', type: 'Mediclaim', amount: 120 },
        { date: '2023-05-21', type: 'Life Insurance', amount: 220 },
        { date: '2023-06-02', type: 'Dental Insurance', amount: 170 },
        { date: '2023-06-11', type: 'Property Insurance', amount: 140 },
        { date: '2023-06-21', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 230 },
      ] 
    },
    // Member 3
    { 
      name: 'Bob Johnson',
      country: 'USA',
      city: 'San Francisco',
      branch: 'San Francisco',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-01-03', type: 'Mediclaim', amount: 120 },
        { date: '2023-02-12', type: 'Life Insurance', amount: 220 },
        { date: '2023-04-22', type: 'Dental Insurance', amount: 170 },
        { date: '2023-05-03', type: 'Property Insurance', amount: 140 },
        { date: '2023-06-12', type: 'Mediclaim', amount: 130 },
        { date: '2023-05-22', type: 'Life Insurance', amount: 230 },
        { date: '2023-06-03', type: 'Dental Insurance', amount: 180 },
        { date: '2023-07-12', type: 'Property Insurance', amount: 150 },
        { date: '2023-06-22', type: 'Mediclaim', amount: 140 },
        { date: '2023-09-30', type: 'Life Insurance', amount: 240 },
      ] 
    },
    // Member 4
    { 
      name: 'Emma Davis',
      country: 'USA',
      city: 'San Francisco',
      branch: 'San Francisco',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-04-04', type: 'Mediclaim', amount: 130 },
        { date: '2023-04-13', type: 'Life Insurance', amount: 230 },
        { date: '2023-04-23', type: 'Dental Insurance', amount: 180 },
        { date: '2023-05-04', type: 'Property Insurance', amount: 150 },
        { date: '2023-05-13', type: 'Mediclaim', amount: 140 },
        { date: '2023-05-23', type: 'Life Insurance', amount: 240 },
        { date: '2023-06-04', type: 'Dental Insurance', amount: 190 },
        { date: '2023-06-13', type: 'Property Insurance', amount: 160 },
        { date: '2023-06-23', type: 'Mediclaim', amount: 150 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 250 },
      ]
    },

    // Member 1
    { 
      name: 'Aarav Patel',
      country: 'USA',
      city: 'San Diego',
      branch: 'San Diego',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-04-01', type: 'Mediclaim', amount: 100 },
        { date: '2023-04-10', type: 'Life Insurance', amount: 200 },
        { date: '2023-04-20', type: 'Dental Insurance', amount: 150 },
        { date: '2023-05-01', type: 'Property Insurance', amount: 120 },
        { date: '2023-05-10', type: 'Mediclaim', amount: 110 },
        { date: '2023-05-20', type: 'Life Insurance', amount: 210 },
        { date: '2023-06-01', type: 'Dental Insurance', amount: 160 },
        { date: '2023-06-10', type: 'Property Insurance', amount: 130 },
        { date: '2023-06-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 220 },
      ] 
    },
    // Member 2
    { 
      name: 'Advika Reddy',
      country: 'USA',
      city: 'San Diego',
      branch: 'San Diego',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-04-02', type: 'Mediclaim', amount: 110 },
        { date: '2023-04-11', type: 'Life Insurance', amount: 210 },
        { date: '2023-04-21', type: 'Dental Insurance', amount: 160 },
        { date: '2023-05-02', type: 'Property Insurance', amount: 130 },
        { date: '2023-05-11', type: 'Mediclaim', amount: 120 },
        { date: '2023-05-21', type: 'Life Insurance', amount: 220 },
        { date: '2023-06-02', type: 'Dental Insurance', amount: 170 },
        { date: '2023-06-11', type: 'Property Insurance', amount: 140 },
        { date: '2023-06-21', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 230 },
      ] 
    },
    // Member 3
    { 
      name: 'Rohan Kumar',
      country: 'USA',
      city: 'San Diego',
      branch: 'San Diego',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-04-03', type: 'Mediclaim', amount: 120 },
        { date: '2023-04-12', type: 'Life Insurance', amount: 220 },
        { date: '2023-04-22', type: 'Dental Insurance', amount: 170 },
        { date: '2023-05-03', type: 'Property Insurance', amount: 140 },
        { date: '2023-05-12', type: 'Mediclaim', amount: 130 },
        { date: '2023-05-22', type: 'Life Insurance', amount: 230 },
        { date: '2023-06-03', type: 'Dental Insurance', amount: 180 },
        { date: '2023-06-12', type: 'Property Insurance', amount: 150 },
        { date: '2023-06-22', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 240 },
      ] 
    },
    // Member 4
    { 
      name: 'Meera Singh',
      country: 'USA',
      city: 'San Diego',
      branch: 'San Diego',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-04-04', type: 'Mediclaim', amount: 130 },
        { date: '2023-04-13', type: 'Life Insurance', amount: 230 },
        { date: '2023-04-23', type: 'Dental Insurance', amount: 180 },
        { date: '2023-05-04', type: 'Property Insurance', amount: 150 },
        { date: '2023-05-13', type: 'Mediclaim', amount: 140 },
        { date: '2023-05-23', type: 'Life Insurance', amount: 240 },
        { date: '2023-06-04', type: 'Dental Insurance', amount: 190 },
        { date: '2023-06-13', type: 'Property Insurance', amount: 160 },
        { date: '2023-06-23', type: 'Mediclaim', amount: 150 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 250 },
      ] 
    },
    
    //Washington 

    { 
      name: 'Eshaan Gupta',
      country: 'USA',
      city: 'Washington',
      branch: 'Shaw',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-04-01', type: 'Mediclaim', amount: 100 },
        { date: '2023-04-10', type: 'Life Insurance', amount: 200 },
        { date: '2023-04-20', type: 'Dental Insurance', amount: 150 },
        { date: '2023-05-01', type: 'Property Insurance', amount: 120 },
        { date: '2023-05-10', type: 'Mediclaim', amount: 110 },
        { date: '2023-05-20', type: 'Life Insurance', amount: 210 },
        { date: '2023-06-01', type: 'Dental Insurance', amount: 160 },
        { date: '2023-06-10', type: 'Property Insurance', amount: 130 },
        { date: '2023-06-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 220 },
      ] 
    },
    // Member 2

    { 
      name: 'Emily Johnson',
      country: 'USA',
      city: 'Washington',
      branch: 'Shaw',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-04-02', type: 'Mediclaim', amount: 110 },
        { date: '2023-04-11', type: 'Life Insurance', amount: 210 },
        { date: '2023-04-21', type: 'Dental Insurance', amount: 160 },
        { date: '2023-05-02', type: 'Property Insurance', amount: 130 },
        { date: '2023-05-11', type: 'Mediclaim', amount: 120 },
        { date: '2023-05-21', type: 'Life Insurance', amount: 220 },
        { date: '2023-06-02', type: 'Dental Insurance', amount: 170 },
        { date: '2023-06-11', type: 'Property Insurance', amount: 140 },
        { date: '2023-06-21', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 230 },
      ] 
    },
    // Member 3
    { 
      name: 'Michael Brown',
      country: 'USA',
      city: 'Washington',
      branch: 'Shaw',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-04-03', type: 'Mediclaim', amount: 120 },
        { date: '2023-04-12', type: 'Life Insurance', amount: 220 },
        { date: '2023-04-22', type: 'Dental Insurance', amount: 170 },
        { date: '2023-05-03', type: 'Property Insurance', amount: 140 },
        { date: '2023-05-12', type: 'Mediclaim', amount: 130 },
        { date: '2023-05-22', type: 'Life Insurance', amount: 230 },
        { date: '2023-06-03', type: 'Dental Insurance', amount: 180 },
        { date: '2023-06-12', type: 'Property Insurance', amount: 150 },
        { date: '2023-06-22', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 240 },
      ] 
    },
    //member 4
    { 
      name: 'Aaradhya Shah',
      country: 'USA',
      city: 'Washington',
      branch: 'Shaw',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-04-02', type: 'Mediclaim', amount: 110 },
        { date: '2023-04-11', type: 'Life Insurance', amount: 210 },
        { date: '2023-04-21', type: 'Dental Insurance', amount: 160 },
        { date: '2023-05-02', type: 'Property Insurance', amount: 130 },
        { date: '2023-05-11', type: 'Mediclaim', amount: 120 },
        { date: '2023-05-21', type: 'Life Insurance', amount: 220 },
        { date: '2023-06-02', type: 'Dental Insurance', amount: 170 },
        { date: '2023-06-11', type: 'Property Insurance', amount: 140 },
        { date: '2023-06-21', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 230 },
      ] 
    },

    //Washington branch 2 George down

    { 
      name: 'John Doe',
      country: 'USA',
      city: 'Washington',
      branch: 'Georgetown',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-01-01', type: 'Mediclaim', amount: 100 },
        { date: '2023-02-10', type: 'Life Insurance', amount: 200 },
        { date: '2023-03-20', type: 'Dental Insurance', amount: 150 },
        { date: '2023-04-05', type: 'Property Insurance', amount: 120 },
        { date: '2023-05-15', type: 'Mediclaim', amount: 110 },
        { date: '2023-06-22', type: 'Life Insurance', amount: 210 },
        { date: '2023-07-03', type: 'Dental Insurance', amount: 160 },
        { date: '2023-08-11', type: 'Property Insurance', amount: 130 },
        { date: '2023-09-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-10-30', type: 'Life Insurance', amount: 220 },
        { date: '2023-11-10', type: 'Mediclaim', amount: 150 },
        { date: '2023-12-25', type: 'Dental Insurance', amount: 170 },
      ] 
    },
    // Member 2
    { 
      name: 'Edward Puth',
      country: 'USA',
      city: 'Washington',
      branch: 'Georgetown',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-01-02', type: 'Mediclaim', amount: 110 },
        { date: '2023-02-12', type: 'Life Insurance', amount: 210 },
        { date: '2023-03-21', type: 'Dental Insurance', amount: 160 },
        { date: '2023-04-06', type: 'Property Insurance', amount: 130 },
        { date: '2023-05-16', type: 'Mediclaim', amount: 120 },
        { date: '2023-06-23', type: 'Life Insurance', amount: 220 },
        { date: '2023-07-04', type: 'Dental Insurance', amount: 170 },
        { date: '2023-08-12', type: 'Property Insurance', amount: 140 },
        { date: '2023-09-21', type: 'Mediclaim', amount: 130 },
        { date: '2023-10-31', type: 'Life Insurance', amount: 230 },
        { date: '2023-11-11', type: 'Mediclaim', amount: 140 },
        { date: '2023-12-26', type: 'Dental Insurance', amount: 180 },
      ] 
    },
    // Member 3
    { 
      name: 'Michel Josh',
      country: 'USA',
      city: 'Washington',
      branch: 'Georgetown',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-01-03', type: 'Mediclaim', amount: 120 },
        { date: '2023-02-15', type: 'Life Insurance', amount: 220 },
        { date: '2023-03-25', type: 'Dental Insurance', amount: 170 },
        { date: '2023-04-07', type: 'Property Insurance', amount: 140 },
        { date: '2023-05-17', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-24', type: 'Life Insurance', amount: 230 },
        { date: '2023-07-05', type: 'Dental Insurance', amount: 180 },
        { date: '2023-08-15', type: 'Property Insurance', amount: 150 },
        { date: '2023-09-22', type: 'Mediclaim', amount: 140 },
        { date: '2023-10-31', type: 'Life Insurance', amount: 240 },
        { date: '2023-11-12', type: 'Mediclaim', amount: 150 },
        { date: '2023-12-27', type: 'Dental Insurance', amount: 190 },
      ] 
    },
    // Member 4
    { 
      name: 'Ester Brown',
      country: 'USA',
      city: 'Washington',
      branch: 'Georgetown',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-01-04', type: 'Mediclaim', amount: 130 },
        { date: '2023-02-16', type: 'Life Insurance', amount: 230 },
        { date: '2023-03-26', type: 'Dental Insurance', amount: 180 },
        { date: '2023-04-08', type: 'Property Insurance', amount: 150 },
        { date: '2023-05-18', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-25', type: 'Life Insurance', amount: 240 },
        { date: '2023-07-06', type: 'Dental Insurance', amount: 190 },
        { date: '2023-08-16', type: 'Property Insurance', amount: 160 },
        { date: '2023-09-23', type: 'Mediclaim', amount: 150 },
        { date: '2023-10-31', type: 'Life Insurance', amount: 250 },
        { date: '2023-11-13', type: 'Mediclaim', amount: 160 },
        { date: '2023-12-28', type: 'Dental Insurance', amount: 200 },
      ] 
    },

    //Wadington Branch 3 Penn Quater

    {
      name: 'Adam Smith',
      country: 'USA',
      city: 'Washington',
      branch: 'Penn Quarter',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-01-10', type: 'Mediclaim', amount: 120 },
        { date: '2023-02-18', type: 'Life Insurance', amount: 210 },
        { date: '2023-03-22', type: 'Dental Insurance', amount: 170 },
        { date: '2023-04-05', type: 'Property Insurance', amount: 140 },
        { date: '2023-05-14', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-21', type: 'Life Insurance', amount: 220 },
        { date: '2023-07-02', type: 'Dental Insurance', amount: 180 },
        { date: '2023-08-12', type: 'Property Insurance', amount: 150 },
        { date: '2023-09-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-10-29', type: 'Life Insurance', amount: 230 },
      ] 
    },
    {
      name: 'Grace Johnson',
      country: 'USA',
      city: 'Washington',
      branch: 'Penn Quarter',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-01-07', type: 'Mediclaim', amount: 140 },
        { date: '2023-02-20', type: 'Life Insurance', amount: 250 },
        { date: '2023-03-28', type: 'Dental Insurance', amount: 190 },
        { date: '2023-04-10', type: 'Property Insurance', amount: 160 },
        { date: '2023-05-22', type: 'Mediclaim', amount: 150 },
        { date: '2023-06-28', type: 'Life Insurance', amount: 260 },
        { date: '2023-07-08', type: 'Dental Insurance', amount: 200 },
        { date: '2023-08-18', type: 'Property Insurance', amount: 170 },
        { date: '2023-09-25', type: 'Mediclaim', amount: 160 },
        { date: '2023-11-03', type: 'Life Insurance', amount: 270 },
      ]
    },
    {
      name: 'Olivia Davis',
      country: 'USA',
      city: 'Washington',
      branch: 'Penn Quarter',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-01-12', type: 'Mediclaim', amount: 150 },
        { date: '2023-02-24', type: 'Life Insurance', amount: 260 },
        { date: '2023-03-30', type: 'Dental Insurance', amount: 200 },
        { date: '2023-04-12', type: 'Property Insurance', amount: 170 },
        { date: '2023-05-26', type: 'Mediclaim', amount: 160 },
        { date: '2023-06-30', type: 'Life Insurance', amount: 270 },
        { date: '2023-07-10', type: 'Dental Insurance', amount: 210 },
        { date: '2023-08-20', type: 'Property Insurance', amount: 180 },
        { date: '2023-09-27', type: 'Mediclaim', amount: 170 },
        { date: '2023-11-05', type: 'Life Insurance', amount: 280 },
      ]
    },

    {
      name: 'Sophia Wilson',
      country: 'USA',
      city: 'Washington',
      branch: 'Penn Quarter',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-01-05', type: 'Mediclaim', amount: 125 },
        { date: '2023-02-15', type: 'Life Insurance', amount: 220 },
        { date: '2023-03-25', type: 'Dental Insurance', amount: 185 },
        { date: '2023-04-07', type: 'Property Insurance', amount: 155 },
        { date: '2023-05-17', type: 'Mediclaim', amount: 135 },
        { date: '2023-06-24', type: 'Life Insurance', amount: 230 },
        { date: '2023-07-05', type: 'Dental Insurance', amount: 195 },
        { date: '2023-08-15', type: 'Property Insurance', amount: 165 },
        { date: '2023-09-22', type: 'Mediclaim', amount: 145 },
        { date: '2023-10-30', type: 'Life Insurance', amount: 240 },
      ] 
    },

    //NYC Branch 1 Manhatton

    {
      name: 'Emma Stone',
      country: 'USA',
      city: 'New York',
      branch: 'Manhattan',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-01-03', type: 'Mediclaim', amount: 120 },
        { date: '2023-02-14', type: 'Life Insurance', amount: 210 },
        { date: '2023-03-24', type: 'Dental Insurance', amount: 170 },
        { date: '2023-04-06', type: 'Property Insurance', amount: 140 },
        { date: '2023-05-16', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-23', type: 'Life Insurance', amount: 220 },
        { date: '2023-07-04', type: 'Dental Insurance', amount: 180 },
        { date: '2023-08-14', type: 'Property Insurance', amount: 150 },
        { date: '2023-09-21', type: 'Mediclaim', amount: 140 },
        { date: '2023-10-28', type: 'Life Insurance', amount: 230 },
      ] 
    },
    {
      name: 'Liam Lazarus',
      country: 'USA',
      city: 'New York',
      branch: 'Manhattan',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-01-05', type: 'Mediclaim', amount: 125 },
        { date: '2023-02-16', type: 'Life Insurance', amount: 220 },
        { date: '2023-03-26', type: 'Dental Insurance', amount: 180 },
        { date: '2023-04-08', type: 'Property Insurance', amount: 150 },
        { date: '2023-05-18', type: 'Mediclaim', amount: 135 },
        { date: '2023-06-25', type: 'Life Insurance', amount: 225 },
        { date: '2023-07-06', type: 'Dental Insurance', amount: 190 },
        { date: '2023-08-16', type: 'Property Insurance', amount: 160 },
        { date: '2023-09-23', type: 'Mediclaim', amount: 145 },
        { date: '2023-10-31', type: 'Life Insurance', amount: 235 },
      ]
    },
    {
      name: 'Oli Brown',
      country: 'USA',
      city: 'New York',
      branch: 'Manhattan',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-01-07', type: 'Mediclaim', amount: 130 },
        { date: '2023-02-18', type: 'Life Insurance', amount: 230 },
        { date: '2023-03-28', type: 'Dental Insurance', amount: 190 },
        { date: '2023-04-10', type: 'Property Insurance', amount: 160 },
        { date: '2023-05-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-27', type: 'Life Insurance', amount: 240 },
        { date: '2023-07-08', type: 'Dental Insurance', amount: 200 },
        { date: '2023-08-18', type: 'Property Insurance', amount: 170 },
        { date: '2023-09-25', type: 'Mediclaim', amount: 150 },
        { date: '2023-11-03', type: 'Life Insurance', amount: 250 },
      ]
    },
    {
      name: 'William Davis',
      country: 'USA',
      city: 'New York',
      branch: 'Manhattan',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-01-09', type: 'Mediclaim', amount: 135 },
        { date: '2023-02-20', type: 'Life Insurance', amount: 225 },
        { date: '2023-03-30', type: 'Dental Insurance', amount: 185 },
        { date: '2023-04-12', type: 'Property Insurance', amount: 155 },
        { date: '2023-05-22', type: 'Mediclaim', amount: 145 },
        { date: '2023-06-29', type: 'Life Insurance', amount: 235 },
        { date: '2023-07-10', type: 'Dental Insurance', amount: 195 },
        { date: '2023-08-20', type: 'Property Insurance', amount: 165 },
        { date: '2023-09-27', type: 'Mediclaim', amount: 155 },
        { date: '2023-10-05', type: 'Life Insurance', amount: 245 },
      ]
    },

    //NYC Branch 2 Brooklyn

    {
      name: 'Ava Martinez',
      country: 'USA',
      city: 'New York',
      branch: 'Brooklyn',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-01-03', type: 'Mediclaim', amount: 120 },
        { date: '2023-02-14', type: 'Life Insurance', amount: 210 },
        { date: '2023-03-24', type: 'Dental Insurance', amount: 170 },
        { date: '2023-04-06', type: 'Property Insurance', amount: 140 },
        { date: '2023-05-16', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-23', type: 'Life Insurance', amount: 220 },
        { date: '2023-07-04', type: 'Dental Insurance', amount: 180 },
        { date: '2023-08-14', type: 'Property Insurance', amount: 150 },
        { date: '2023-09-21', type: 'Mediclaim', amount: 140 },
        { date: '2023-10-28', type: 'Life Insurance', amount: 230 },
      ] 
    },

    {
      name: 'Noah Taylor',
      country: 'USA',
      city: 'New York',
      branch: 'Brooklyn',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-01-05', type: 'Mediclaim', amount: 125 },
        { date: '2023-02-16', type: 'Life Insurance', amount: 220 },
        { date: '2023-03-26', type: 'Dental Insurance', amount: 180 },
        { date: '2023-04-08', type: 'Property Insurance', amount: 150 },
        { date: '2023-05-18', type: 'Mediclaim', amount: 135 },
        { date: '2023-06-25', type: 'Life Insurance', amount: 225 },
        { date: '2023-07-06', type: 'Dental Insurance', amount: 190 },
        { date: '2023-08-16', type: 'Property Insurance', amount: 160 },
        { date: '2023-09-23', type: 'Mediclaim', amount: 145 },
        { date: '2023-10-31', type: 'Life Insurance', amount: 235 },
      ]
    },
    {
      name: 'Isa Rodriguez',
      country: 'USA',
      city: 'New York',
      branch: 'Brooklyn',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-01-07', type: 'Mediclaim', amount: 130 },
        { date: '2023-02-18', type: 'Life Insurance', amount: 230 },
        { date: '2023-03-28', type: 'Dental Insurance', amount: 190 },
        { date: '2023-04-10', type: 'Property Insurance', amount: 160 },
        { date: '2023-05-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-27', type: 'Life Insurance', amount: 240 },
        { date: '2023-07-08', type: 'Dental Insurance', amount: 200 },
        { date: '2023-08-18', type: 'Property Insurance', amount: 170 },
        { date: '2023-09-25', type: 'Mediclaim', amount: 150 },
        { date: '2023-11-03', type: 'Life Insurance', amount: 250 },
      ]
    },
    {
      name: 'Mason Lee',
      country: 'USA',
      city: 'New York',
      branch: 'Brooklyn',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-01-09', type: 'Mediclaim', amount: 135 },
        { date: '2023-02-20', type: 'Life Insurance', amount: 225 },
        { date: '2023-03-30', type: 'Dental Insurance', amount: 185 },
        { date: '2023-04-12', type: 'Property Insurance', amount: 155 },
        { date: '2023-05-22', type: 'Mediclaim', amount: 145 },
        { date: '2023-06-29', type: 'Life Insurance', amount: 235 },
        { date: '2023-07-10', type: 'Dental Insurance', amount: 195 },
        { date: '2023-08-20', type: 'Property Insurance', amount: 165 },
        { date: '2023-09-27', type: 'Mediclaim', amount: 155 },
        { date: '2023-10-05', type: 'Life Insurance', amount: 245 },
      ]
    },

    //NYC Branch 3 Queens

    {
      name: 'Sophia Nguyen',
      country: 'USA',
      city: 'New York',
      branch: 'Queens',
      membershipType: 'Gold', 
      transactions: [
        { date: '2023-01-03', type: 'Mediclaim', amount: 120 },
        { date: '2023-02-14', type: 'Life Insurance', amount: 210 },
        { date: '2023-03-24', type: 'Dental Insurance', amount: 170 },
        { date: '2023-04-06', type: 'Property Insurance', amount: 140 },
        { date: '2023-05-16', type: 'Mediclaim', amount: 130 },
        { date: '2023-06-23', type: 'Life Insurance', amount: 220 },
        { date: '2023-07-04', type: 'Dental Insurance', amount: 180 },
        { date: '2023-08-14', type: 'Property Insurance', amount: 150 },
        { date: '2023-09-21', type: 'Mediclaim', amount: 140 },
        { date: '2023-10-28', type: 'Life Insurance', amount: 230 },
      ] 
    },
    {
      name: 'Ethan Patel',
      country: 'USA',
      city: 'New York',
      branch: 'Queens',
      membershipType: 'Premium', 
      transactions: [
        { date: '2023-01-05', type: 'Mediclaim', amount: 125 },
        { date: '2023-02-16', type: 'Life Insurance', amount: 220 },
        { date: '2023-03-26', type: 'Dental Insurance', amount: 180 },
        { date: '2023-04-08', type: 'Property Insurance', amount: 150 },
        { date: '2023-05-18', type: 'Mediclaim', amount: 135 },
        { date: '2023-06-25', type: 'Life Insurance', amount: 225 },
        { date: '2023-07-06', type: 'Dental Insurance', amount: 190 },
        { date: '2023-08-16', type: 'Property Insurance', amount: 160 },
        { date: '2023-09-23', type: 'Mediclaim', amount: 145 },
        { date: '2023-10-31', type: 'Life Insurance', amount: 235 },
      ]
    },
    {
      name: 'Olivia Kim',
      country: 'USA',
      city: 'New York',
      branch: 'Queens',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-01-07', type: 'Mediclaim', amount: 130 },
        { date: '2023-02-18', type: 'Life Insurance', amount: 230 },
        { date: '2023-03-28', type: 'Dental Insurance', amount: 190 },
        { date: '2023-04-10', type: 'Property Insurance', amount: 160 },
        { date: '2023-05-20', type: 'Mediclaim', amount: 140 },
        { date: '2023-06-27', type: 'Life Insurance', amount: 240 },
        { date: '2023-07-08', type: 'Dental Insurance', amount: 200 },
        { date: '2023-08-18', type: 'Property Insurance', amount: 170 },
        { date: '2023-09-25', type: 'Mediclaim', amount: 150 },
        { date: '2023-11-03', type: 'Life Insurance', amount: 250 },
      ]
    },
    {
      name: 'Liam Chen',
      country: 'USA',
      city: 'New York',
      branch: 'Queens',
      membershipType: 'Exclusive', 
      transactions: [
        { date: '2023-01-09', type: 'Mediclaim', amount: 135 },
        { date: '2023-02-20', type: 'Life Insurance', amount: 225 },
        { date: '2023-03-30', type: 'Dental Insurance', amount: 185 },
        { date: '2023-04-12', type: 'Property Insurance', amount: 155 },
        { date: '2023-05-22', type: 'Mediclaim', amount: 145 },
        { date: '2023-06-29', type: 'Life Insurance', amount: 235 },
        { date: '2023-07-10', type: 'Dental Insurance', amount: 195 },
        { date: '2023-08-20', type: 'Property Insurance', amount: 165 },
        { date: '2023-09-27', type: 'Mediclaim', amount: 155 },
        { date: '2023-10-05', type: 'Life Insurance', amount: 245 },
      ]
    },



  ];


  constructor() { }

   // Method to filter and fetch customer data based on selected options
   getFilteredCustomers(country: string, city: string, branch: string): any[] {
    // Filter customers based on selected options
    let filteredCustomers = this.customers.filter(customer => {
      return customer.country === country && customer.city === city && customer.branch === branch;
    });

    return filteredCustomers;
   }
}
