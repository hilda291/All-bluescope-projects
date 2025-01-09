import { Component } from '@angular/core';
import { BootServiceService } from '../boot-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  jsonContent: any;
    json: string | null = null;
    outputJson: string | null = null;
  
    constructor(private apiService: BootServiceService) {}
  
    onSubmit(): void {
      console.log(this.jsonContent);
      this.json = JSON.parse(this.jsonContent);
      // this.jsonContent =JSON.stringify(this.jsonContent);
  
      this.apiService.listGenerateJsonToJson(this.json).subscribe({
        next: (response: any)=>{
          this.outputJson=JSON.stringify(response,null,2);
        },
        error:(err:any)=>{
          console.error('Error occured!:',err);
          this.outputJson='Error occurred while processing.';
        }
      });
}
}