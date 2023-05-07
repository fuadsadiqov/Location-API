import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from './rest.service';
import { LocationInterface } from './location.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  myForm!: FormGroup
  currentIp!: string
  currentLoc?: LocationInterface

  constructor(private http: HttpClient, private fb: FormBuilder, private restService: RestService){
    this.myForm = this.fb.group({
      formIp: '' || this.currentIp
    })
  }
  onSubmit(){
    const ip = this.myForm.get('formIp')?.value; 
    this.restService.getIp(ip ? ip : this.currentIp)
    .subscribe((res: any) => {
      console.log(res);
      this.currentLoc = res
    })
  }

  ngOnInit(){
    this.http.get('https://api.ipify.org?format=json').subscribe((response: any) => {
      this.currentIp = response.ip
    });
  }
}
