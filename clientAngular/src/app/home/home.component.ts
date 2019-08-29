import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    myFunction(x) {
      document.getElementById("myDropdown").classList.toggle("show");
      x.classList.toggle("change");
  }

}
