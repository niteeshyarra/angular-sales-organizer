import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _toaster: ToastrService) { }
  toasterOptions = {
    positionClass: "toast-top-right",
    timeOut: 5000,
    closeButton: true
  }
  showSuccess(message, title) {
    this._toaster.success(message, title, this.toasterOptions);  
  }

  showFailed(message, title){
    this._toaster.error(message, title, this.toasterOptions);
  }
}
