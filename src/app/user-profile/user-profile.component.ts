import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
// import { UserService } from '../user.service';  // Import your service

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profileForm!: FormGroup;
  profileImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profilePicture: [null]
    });

    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe(user => {
      this.profileForm.patchValue({
        name: user.name,
        email: user.email
      });
      this.profileImage = user.profilePictureUrl;  // Assuming you have a URL
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.userService.updateUserProfile(this.profileForm.value).subscribe(response => {
        // Handle response
      });
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.profileImage = e.target.result;
      reader.readAsDataURL(file);
      this.profileForm.patchValue({ profilePicture: file });
    }
  }
}
