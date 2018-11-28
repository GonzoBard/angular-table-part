import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-part',
  templateUrl: './table-part.component.html',
  styleUrls: ['./table-part.component.scss']
})
export class TablePartComponent {

  @Input() tablePart: { id: number, name: string, bik: number }[];

  addNewLine() {
    this.tablePart.push({id: +this.randomStr(4), name: '', bik: 0});
  }

  deleteItem(id) {
    this.tablePart.forEach((item, index, arr) => {
      if (item.id === id) {
        arr.splice(index, 1);
      }
    });
  }

  randomStr(requiredStringLength,
                   prefix = '',
                   postfix = ''): string { // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    let result = '';
    const possible = '123456789';
    for (let i = 0; i < requiredStringLength; i++) {
      result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return prefix + result + postfix;
  }

}
