import { Component } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadProgress: number = 0;
  uploadMessage: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
  
      // Using a sample API endpoint for testing file uploads
      this.http.post('https://reqres.in/api/users', formData, {
        reportProgress: true,
        observe: 'events',
      }).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total) {
            this.uploadProgress = Math.round((100 * event.loaded) / event.total);
          }
        } else if (event.type === HttpEventType.Response) {
          this.uploadMessage = 'Upload complete!';
        }
      }, error => {
        this.uploadMessage = 'Upload failed!';
      });
    }
  }
  
}
