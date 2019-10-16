import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  get addmovie() {
    return this.form.get('addmovie');
  }
  get title() {
    return this.form.get('title');
  }
  get imgurl() {
    return this.form.get('imgurl');
  }
  form = new FormGroup({
    addmovie: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required]),
    imgurl: new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }
  loginData(form:'NgForm'){
    console.log(form);
  }

}

