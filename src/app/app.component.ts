import { Component } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapGrid';

  constructor(private messageService: MessageService) {}

  buttonDivClicked(value:string):void{
    console.log(value);
    this.messageService.add({severity:'info', summary:'New Message', detail:value+' clicked!'});

  }
}
