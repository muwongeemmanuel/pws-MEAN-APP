import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public ClassicEditor = ClassicEditor;
  // public DocumentEditor = DecoupledEditor;
  // public onReady( editor ) {
  //     editor.ui.getEditableElement().parentElement.insertBefore(
  //         editor.ui.view.toolbar.element,
  //         editor.ui.getEditableElement()
  //     );
  // }

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
