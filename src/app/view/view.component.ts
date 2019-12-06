import { Component, OnInit } from '@angular/core';
import { DatenServiceService } from '../daten-service.service';
import { Names } from "../names";
import { Observable } from "rxjs/Rx"

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  test: string = "Markus";
  names: Names[] = [];
  namesObj$: Observable<Names[]>;
  namesPro: Names[] = []
  
  constructor(private datenServiceService: DatenServiceService) {
    let data = datenServiceService.getData()
    console.log("--constructor->" + data);
    this.test = data;
  }

  ngOnInit() {
    this.test = "kix";
    let data = this.datenServiceService.getData()
    console.log("--ngOnInit->" + data);
    this.test = data;

    let names: Names[] = this.datenServiceService.getDatas()
    console.log("--names->" + names[1].vn);
    this.names = names;

    this.namesObj$ = this.datenServiceService.getDataObs();

    this.datenServiceService.getDataObs().subscribe((name: Names[]) => {
            this.names = name
        })    

    this.getPro();
           
  }

  async getPro(){
    this.namesPro = await this.datenServiceService.getDataPromise();
    //    .then((name: Names[]) => {
    //        this.namesPro = name
    //    }) 
     console.log(`async result: ${this.namesPro}`);
  }
}