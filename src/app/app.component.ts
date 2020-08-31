import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public notesArea: any = {};
  public notesListArr: Array<any> = [];
  public notesArrIndex: any;
  public searchText: any;
  constructor() {

  }
  ngOnInit() {
    this.getNotesList();
  }
  /****************************************************************************
  @PURPOSE     : To show the notes list
  @Parameter   : NA
  @Return      : Get the notes list from localstorage
  /****************************************************************************/
  getNotesList() {
    if (window.localStorage.getItem('notes')) {
      this.notesListArr = JSON.parse(window.localStorage.getItem('notes'));
      this.notesArea = this.notesListArr[0];
      this.notesArrIndex = 0;
    }
  }
  /****************************************************************************
  @PURPOSE     : To add new note
  @Parameter   : content and date is required
  @Return      : Note added successfully
  /****************************************************************************/
  addNewNote() {
    this.notesListArr.push({ content: 'New note', date: new Date() });
    this.commonMethodForLocalstorageSetItem();
  }
  /****************************************************************************
  @PURPOSE     : To delete the note
  @Parameter   : Notes array index
  @Return      : Notes delete successfully
  /****************************************************************************/
  deleteNote(note) {
    this.notesListArr.splice(this.notesArrIndex, 1);
    this.commonMethodForLocalstorageSetItem();
    this.notesArea = {};
  }
  /****************************************************************************/


  /****************************************************************************
    @PURPOSE     : To update the notes
    @Parameter   : Notesarrayh index
    @Return      : Notes updated successfully
    /****************************************************************************/
  updateNote(notes) {
    this.notesListArr[this.notesArrIndex] = notes;
    this.commonMethodForLocalstorageSetItem();
  }
  /****************************************************************************/


  /****************************************************************************
  @PURPOSE     : Common method for set the items in local storage
  @Parameter   : Notes list array
  @Return      : NA
  /****************************************************************************/
  commonMethodForLocalstorageSetItem() {
    window.localStorage.setItem("notes", JSON.stringify(this.notesListArr));
  }
  /****************************************************************************/
}
