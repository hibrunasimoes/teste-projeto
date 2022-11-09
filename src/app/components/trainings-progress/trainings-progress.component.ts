import { Component, Input, OnInit } from '@angular/core';
import { ITraningByUser } from 'src/app/Models/TrainingByUser';
@Component({
  selector: 'app-trainings-progress',
  templateUrl: './trainings-progress.component.html',
  styleUrls: ['./trainings-progress.component.css']
})
export class TrainingsProgressComponent implements OnInit {
  
  @Input()
  item:ITraningByUser = {
    userId:0,
    trainings:[],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
