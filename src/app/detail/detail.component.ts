import { Component } from '@angular/core';
import { BootServiceService } from '../boot-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    jsonContent: any;
    json: string | null = null;
    outputJson: string | null = null;
  
    constructor(private apiService: BootServiceService) {}
  
    onSubmit(): void {
      console.log(this.jsonContent);
      this.json = JSON.parse(this.jsonContent);
      // this.jsonContent =JSON.stringify(this.jsonContent);
  
      this.apiService.detailGenerateJsonToJson(this.json).subscribe({
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