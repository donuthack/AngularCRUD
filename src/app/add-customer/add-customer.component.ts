import { Component, OnInit, NgModule } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { FormGroup, FormControlName, FormControl, Validators, FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customer: Customer;
  formTest: FormGroup;
  testObj;
  // customerGroup = new FormGroup({
  //   "customerName": new FormControl("", Validators.required),
  //   "customerLastname": new FormControl("", Validators.required ),
  //   "customerAddress": new FormControl(''),
  //   "customerAge": new FormControl("", Validators.pattern('[0-9]{10}'))
  // });

  constructor(private customerService: CustomerService,
              private fb : FormBuilder,
              private api: CustomerService,
              private messageService: MessageService) { }

  ngOnInit(): void { 
    this.customer = new Customer();
    this.formTest = this.fb.group({
      name: [''],
      lastname: [''],
      address: [''],
      age: ['']
    })
  }

  // save(){
  //   this.customerService.createCustomer(this.customer)
  //         .subscribe((message: Message) => {
  //           console.log(message);
  //           let customer = message.customers[0];
  //           let msg = "Success => POST Response of a customer: "
  //               + "<ul>"
  //                   + "<li>id: " + customer.id + "</li>"
  //                   + "<li>name: " + customer.name + "</li>"
  //                   + "<li>lastname: " + customer.lastname + "</li>"
  //                   + "<li>age: " + customer.age + "</li>"
  //                   + "<li>address: " + customer.address + "</li>"
  //               + "</ul>";
            
  //           this.messageService.add(msg);
  //         }, error => {
  //           console.log(error);
  //           let msg = "Error! => Something happened with customer: "
  //                     + "<ul>"
  //                       + "<li>id: " + this.customer.id + "</li>"
  //                       + "<li>name: " + this.customer.name + "</li>"
  //                       + "<li>lastname: " + this.customer.lastname + "</li>"
  //                       + "<li>age: " + this.customer.age + "</li>"
  //                       + "<li>address: " + this.customer.address + "</li>"
  //                     + "</ul>";
  //           this.messageService.add(msg);
  //         });
  //   }

  // reset() {
  //   this.customer = new Customer();
  // }
  onsubmit() {
    this.testObj = {
      name: this.formTest.value.name,
      lastname: this.formTest.value.lastname,
      address: this.formTest.value.address,
      age: this.formTest.value.age
    }
    this.api.createCustomer(this.testObj).subscribe(res => {
      console.log(1212, res);
      
    })
    console.log (12313, this.testObj)
    // this.save();
    // this.reset();
  }
}