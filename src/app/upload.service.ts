import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }
  upload(selectedFiles) {
    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append('files', file);
    }
    this.httpClient
    .post('http://localhost:3000/fileupload', formData, {
      observe: 'events',
      reportProgress: true
    })
    .subscribe(
      success => console.log(success),
      error => console.log(error)
    )
  }
}
