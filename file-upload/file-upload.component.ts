import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { RegServiceService } from 'src/app/reg-service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

uploadform: FormGroup;
selectedFile = null;

  constructor(private http: HttpClient,private fb: FormBuilder,private _regservice:RegServiceService) { }
 
  get f(){
    return this.uploadform.controls;
  }

  onFileSelected(event){
      if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
        if(!this.selectedFile) return;

        const reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onload = (event) => {
          const base64String = reader.result as string;
          console.log(base64String);
          
          this.uploadform.patchValue({
            notice_circular_file: base64String
          });
        }
      }
  }
 
   
  ngOnInit(){
    this.uploadform = this.fb.group({
        notice_id :['',[Validators.required,Validators.maxLength(19)]],
        notice_title :['',[Validators.required,Validators.maxLength(250)]],
        notice_upload_date :['',Validators.required],
        notice_expiray_date :['',Validators.required],
        keywords :['',[Validators.required,Validators.maxLength(250)]],
        notice_circular_file:['',Validators.required]
    });
  }

  onSubmit()
  {
    console.log(this.uploadform.value);
    this._regservice.register(this.uploadform.value)
    
    .subscribe(event =>{
      if(event.type === HttpEventType.UploadProgress){
        console.log('upload Progress:' + Math.round(event.loaded / event.total * 100) +'%');
      }else if(event.type ===HttpEventType.Response){
       console.log(event);
      }
    },
    (err) => {
      console.log("Upload Error:", err);
    }, () => {
      console.log("Upload done");
    }

      // response => console.log('sucess!!',response)
    );

  }

  onUpload()
   {
    
    //  this.http.post('https://www.file.io/',fd,{
    //   reportProgress: true,
    //  observe: 'events',
    //  })
   }

}
