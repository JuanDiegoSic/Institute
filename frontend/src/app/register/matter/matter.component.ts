import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.css'],
})
export class MatterComponent implements OnInit {
  typesOfShoes: string[] = [
    'Databases',
    'Basic Web Development',
    'Operations research',
    'Information management',
    'Oral and written communication',
    'electronics',
  ];

  constructor() {}

  ngOnInit(): void {}
}

