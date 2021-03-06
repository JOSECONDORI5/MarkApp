import { Component, Input, OnInit } from '@angular/core';
import { Minifab } from '../../interfaces/minifab';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo?: string = '';
  @Input() canBack?: boolean = true;
  // @Input() iconStart?: Minifab;
  // @Input() iconEnd?: Minifab;

  constructor() {}

  ngOnInit() {}
}
