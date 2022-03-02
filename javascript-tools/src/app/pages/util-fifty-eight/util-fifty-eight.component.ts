import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-fifty-eight',
  templateUrl: './util-fifty-eight.component.html',
  styleUrls: ['./util-fifty-eight.component.less']
})
export class UtilFiftyEightComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
