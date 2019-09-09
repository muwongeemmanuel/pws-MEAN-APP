import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  isLoading = false;

  constructor(
    // public router: Router,
    // public fb: FormBuilder,
  ) {
    // this.createForm();
  }

  ngOnInit() {
  }
  // createForm() {
  //   this.searchForm = this.fb.group({
  //     keyword: ['emma', Validators.required ],
  //   });
  // }
  search() {
    this.isLoading = true;
    alert("emma");
  }

}
