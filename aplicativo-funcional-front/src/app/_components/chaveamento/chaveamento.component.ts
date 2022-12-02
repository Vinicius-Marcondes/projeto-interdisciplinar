import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chaveamento',
  templateUrl: './chaveamento.component.html',
  styleUrls: ['./chaveamento.component.less'],
})
export class ChaveamentoComponent implements OnInit {
  @Output() teamNameClicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() match: any;

  constructor() {}

  ngOnInit(): void {}

  public handleClick(name: string): void {
    this.teamNameClicked.emit(name);
  }
}
