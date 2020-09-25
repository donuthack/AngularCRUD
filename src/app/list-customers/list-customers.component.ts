import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { MessageService } from '../message.service';
import { Message} from '../message';
import { CustomerService } from '../customer.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

// 4 main func:

// show all customers
// show details of a customers
// delete a customer
// update a customer



@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html'
})
export class ListCustomersComponent implements OnInit {

  customers:Array<Customer> = [];
  showCustomer: Customer;
  isSelected: boolean = false;
  deletedCustomer: Customer;
  returnedMessage: string;

  constructor(private customerService: CustomerService,
                private messageService: MessageService) {}
  
  setCustomerDetails(customer: Customer) {
    this.isSelected = !this.isSelected;
    if(this.isSelected){
      this.showCustomer = customer; 
    }else{
      this.showCustomer = undefined;
    }
  }

  retrieveAllCustomers(){
    this.customerService.retrieveAllCustomers()
                  .subscribe((message:Message) => {
                    console.log(message);
                    this.customers = message.customers;
                  }
                  , (error) => {
                    console.log(error);
                  });
    }

  ngOnInit(): void {
    this.retrieveAllCustomers();
  }

  prepareDeleteCustomer() {}

  deleteCustomer() {}

  updateCustomersInfo() {}

}
