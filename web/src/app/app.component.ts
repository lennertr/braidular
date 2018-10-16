import { Component } from '@angular/core';
import { NodeService } from './services/node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private nodeService: NodeService) {}

    selectNode(val: number) {
      if (val === 1) {
        this.nodeService.setNode('http://localhost:8081');
      } else if (val === 2) {
        this.nodeService.setNode('http://localhost:8082');
      }
  }
}
