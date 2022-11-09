import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TRAININGBYUSER_MOCK } from '../mocks/trainingsByUser_mock';
import { TRAINING_MOCK } from '../mocks/training_mock';
import { USER_MOCK } from '../mocks/user_mock';
import { ITraningByUser } from '../Models/TrainingByUser';
import { ITraining } from '../Models/Treinamento';
import { IUser } from '../Models/Usuario';

@Component({
  selector: 'app-treinamento',
  templateUrl: './treinamento.component.html',
  styleUrls: ['./treinamento.component.css']
})
export class TreinamentoComponent implements OnInit {

  users: IUser[] = USER_MOCK;
  p:number=1;
  itemsPerPage: number = 30;
  totalUser: any;
  
  trainings: ITraining[] = TRAINING_MOCK;
  trainingsByUser: ITraningByUser[] = TRAININGBYUSER_MOCK ;
  
  entrar () {
   console.log (this.trainingsByUser.find(user => user.userId =1) )
  }


  trainingModel!:ITraining;

  constructor(
    private config: NgbModalConfig, 
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openXl(content: any, training:ITraining) {
    this.trainingModel = training;
    this.modalService.open(content, {
      size: 'lg',
      centered: true,
      scrollable: true,
    });
  }

  ngOnInit(): void {
    this.entrar()
    // this.ser
  }

  retrieveData () {

  }
}


//   training:ITraining[] = TRAINING_MOCK;

//   constructor(config: NgbModalConfig, private modalService: NgbModal) {
// 		// customize default values of modals used by this component tree
// 		config.backdrop = 'static';
// 		config.keyboard = false;
// 	}

//   openXl(content : any) {
// 		this.modalService.open(content, { size: 'xl',  centered: true, scrollable: true });
// 	}

//   ngOnInit(): void {
//   }

// }
