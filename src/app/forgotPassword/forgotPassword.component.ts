import { Component, OnInit} from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute} from  '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $;
import { MessageService } from '../messageservice.service';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI; 
   clearSetTimeout:any;
  pendingRequest:any;
    public isValidFormSubmitted = null;
     bodyRes:any;
      response:any;
  constructor(
     private data:ApiIntegrationService,
     private toastr: ToastrService,
     private fb: FormBuilder,
     private router:Router,
     public  constants:GlobalConstant, 
     public  loader: Ng4LoadingSpinnerService,
     private activatedRoute:ActivatedRoute,
     private messgage : MessageService
  ) { } 

       loginForm = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email])       
  });

  ngOnInit() {
  }

  //****************************Login Start Here******************************//

  login(){
    // this.router.navigate(['/studentInfo']);
    // return false;
     this.toastr.clear();
      if(this.loginForm.value.email == ''){
       this.toastr.error('Please enter your User ID/Password and then press login button');
     }else if (this.loginForm.valid) {
       
        let postData={
          "email": this.loginForm.value.email
               
        }
        clearTimeout(this.clearSetTimeout);
        debugger
             this.toastr.success("forgot password link send successfully in your email id");  
                  
        // this.pendingRequest=this.data.login(postData).subscribe((data) => {
        //         this.response=data; 
        //         clearTimeout(this.clearSetTimeout);
        //         this.bodyRes=this.response.body;                 
        //         localStorage.clear();              
        //       if(this.bodyRes.statusCode==200){ 
        //         var res=this.bodyRes.data;
        //         localStorage.setItem('instituteDetails',JSON.stringify(this.bodyRes));                 
        //             this.router.navigate(['/dashboard']).then(() => {                  
        //             this.blockUI.stop();
        //             this.toastr.clear();
        //             this.toastr.success("Welcome to the portal");                    
        //        })              
        //       }else{
        //          this.blockUI.stop();
        //          this.toastr.error(this.bodyRes['message']);
        //          clearTimeout(this.clearSetTimeout);             
        //        }
        //       },error => {               
        //        this.blockUI.stop();          
        //        this.toastr.error('Not able to connect host, please try again');      
        //        })        
               // this.clearSetTimeout = setTimeout(() => {
               //      this.pendingRequest.unsubscribe();
               //      this.blockUI.stop();
               // },10000);
      }else{
           this.isValidFormSubmitted = false;
           this.toastr.error('User ID/Password wrongly mentioned, please provide valid credentials');
         }
   }

}
