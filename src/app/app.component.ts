import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Answer } from './Models/answer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pro3';

  constructor(private appService: AppService){}

  public pregunta: string = '';  
  public respuesta?: Answer;

  onSubmit() {
    this.appService.obtenerRespuesta().subscribe(res => this.respuesta = res);
  }
}
