import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  kontragent: Kontragent = {};

  tablePart: { id: number, name: string, bik: number }[] = [
    {id: 7, name: 'Альфа-банк', bik: 12345},
    {id: 9, name: 'Авангард', bik: 654321},
  ];

  ngOnInit(): void {
    this.kontragent.bankDetails = this.tablePart;

    setTimeout(() => {
      delete this.kontragent.bankDetails;
    }, 3000);

    setTimeout(() => {
      this.kontragent.bankDetails = this.tablePart;
    }, 6000);
  }
}

export interface Kontragent {
  name: string;
  bankDetails?: { id: number, name: string, bik: number }[];
}
