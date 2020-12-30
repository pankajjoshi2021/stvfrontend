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
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI; 
   clearSetTimeout:any;
  pendingRequest:any;
  constructor( private data:ApiIntegrationService,
     private toastr: ToastrService,
     private fb: FormBuilder,
     private router:Router,
     public  constants:GlobalConstant, 
     public  loader: Ng4LoadingSpinnerService,
     private activatedRoute:ActivatedRoute,
     private messgage : MessageService) {       
      }

     ngOnInit() {
   
     }


}
