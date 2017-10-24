import { Component, OnInit } from '@angular/core';
import { GetphotoService } from '../../services/getphoto.service';

interface Photo{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
 } 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private getphotoService:GetphotoService) { }

  private my_name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  private skills: string[];
  private isEditable: boolean = true;
  private photoList:Photo[];

  ngOnInit() {

    this.my_name = "Vitsunee Teeraratchakarn"
    this.age = 22;
    this.email = "malamilk.milk@gmail.com";
    this.address = {
      street: "Taksin rd.",
      city: "Thonburi",
      province: "Bangkok",
      postcode: "10600"
    }
    this.skills = ["Eating", "Sleeping", "Swimming","Laughing"];

    this.getphotoService.getPhotoList().subscribe((response) => {
      this.photoList = response;
      this.photoList.splice(4,4995);
    })
 

  }
  addSkill(skill) {
    this.skills.unshift(skill);
    return false; // add for do not want refresh page
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }

}
