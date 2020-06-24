import { SEARCH_ICON } from './../../consts';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewItemComponent {
  _item?: Order.OrderDetail;
  searchImg = SEARCH_ICON;

  @Input()
  set item(item: Product.Coffee) {
    this._item = { ...item, count: 0 };
  }

  @Output() addOrder = new EventEmitter<Order.OrderDetail>();
  @Output() removeOrder = new EventEmitter<string>();
  isOpen: boolean = false;

  toggle(e) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  increase() {
    setTimeout(
      (_) => {
        this._item.count++;

        if (this._item.count === 1) {
          this.addOrder.emit(this._item)
        } 
        this.changeDetectorRef.markForCheck()
      },
      0
    );
  }

  decrease() {
    setTimeout(
      (_) => {
        this._item.count--;
        if (this._item.count < 1) {
          this.removeOrder.emit(this._item.productId);
        }
        this.changeDetectorRef.markForCheck()
      },
      0
    );
  }

  onClick(e) {
    e.preventDefault();
    this.router.navigate([`menu/detail/${this._item.productId}`])
  }

  constructor(private changeDetectorRef: ChangeDetectorRef, private router:Router) {}
}
