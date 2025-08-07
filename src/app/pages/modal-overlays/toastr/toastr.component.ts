import { Component } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from '@nebular/theme';

@Component({
  selector: 'ngx-toastr',
  styleUrls: ['./toastr.component.scss'],
  templateUrl: './toastr.component.html',
})
export class ToastrComponent {
  constructor(private toastrService: NbToastrService) {}

  /* === параметры, которые настраиваются из формы === */
  index = 1;
  destroyByClick = true;
  duration = 2000;                    // 0 — постоянный тост
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  title   = 'Hi there!';
  content = `I'm a cool toaster!`;

  types: NbComponentStatus[] = ['primary', 'success', 'info', 'warning', 'danger'];

  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  quotes = [
    { title: null, body: 'We rock at Angular' },
    { title: null, body: 'Titles are not always needed' },
    { title: null, body: 'Toastr rocks!' },
  ];

  makeToast() {
    this.showToast(this.status, this.title, this.content);
  }

  openRandomToast() {
    const type   = this.types[Math.floor(Math.random() * this.types.length)];
    const quote  = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.showToast(type, quote.title, quote.body);
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(body, `Toast ${this.index}${titleContent}`, config);
  }
}