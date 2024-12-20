import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
  standalone: false,
})
export class MaterialPage implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'action'];
  
  ELEMENT_DATA = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Alice Johnson', age: 28 },
    { id: 4, name: 'Michael Brown', age: 35 },
    { id: 5, name: 'Emily Davis', age: 22 },
    { id: 6, name: 'Daniel Wilson', age: 31 },
    { id: 7, name: 'Sophia Martinez', age: 27 },
    { id: 8, name: 'Oliver Garcia', age: 29 },
    { id: 9, name: 'Charlotte Clark', age: 26 },
    { id: 10, name: 'Liam Lewis', age: 24 },
  ];
  dataSource = this.ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}
