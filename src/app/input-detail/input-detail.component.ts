import { Component } from '@angular/core';
import { DetailjsonModule } from '../detailjson/detailjson.module';
import { BootServiceService } from '../boot-service.service';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css']
})
export class InputDetailComponent {
  DetailjsonModule:DetailjsonModule={
    actionCode:''
  }

   outputJson:string|null=null;
    constructor(private customerService:BootServiceService){}
  
    onSubmit():void{
      console.log(this.DetailjsonModule);
  
      this.customerService.generateDetailJSon(this.DetailjsonModule).subscribe({
        next: (response: any)=>{
          this.outputJson=JSON.stringify(response,null,2);
        },
        error:(err:any)=>{
          console.error('Error occured:',err);
          this.outputJson='Error occured while processing.';
        }
      })
    }
}
