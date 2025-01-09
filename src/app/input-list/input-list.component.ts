import { Component } from '@angular/core';
import { ListjsonModule } from '../listjson/listjson.module';
import { BootServiceService } from '../boot-service.service';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent {
  ListjsonModule:ListjsonModule={
    name:'',
    status:'',
  };
  outputJson:string|null=null;
  constructor(private customerService:BootServiceService){}

  onSubmit():void{
    console.log(this.ListjsonModule);

    this.customerService.generateListJSon(this.ListjsonModule).subscribe({
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
