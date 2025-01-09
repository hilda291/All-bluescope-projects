import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BootServiceService } from '../boot-service.service';
import { DatajsonModule } from '../datajson/datajson.module';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {
  DatajsonModule: DatajsonModule = {
    theirReferenceId: '',
    city: '',
    customerName: '',
    amount: 0,
    currency: '',
  };
  outputJson: string | null = null;
  constructor(private customerService: BootServiceService) {}

  onSubmit(): void {
    console.log(this.DatajsonModule);
    // this.jsonContent =JSON.stringify(this.jsonContent);

    this.customerService.generateJson(this.DatajsonModule).subscribe({
      next: (response: any) => {
        this.outputJson = JSON.stringify(response, null, 2);
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
        this.outputJson = 'Error occurred while processing.';
      }
    });
  }
}
