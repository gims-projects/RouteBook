import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'gims-routebook-day-picker',
  templateUrl: './day-picker.component.html',
  styleUrls: ['./day-picker.component.css']
})
export class DayPickerComponent implements OnInit {

  @Output() DayOfWeekSelected = new EventEmitter<number>();

  @Input() Title: string;

  currentSelectedDay = 1;

  private dayOfWeekTitles = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() { }

  ngOnInit() {
    this.onDayOfWeekChanged(this.currentSelectedDay);
  }

  onDayOfWeekChanged(DayOfWeekNumber: number) {
    this.currentSelectedDay = DayOfWeekNumber;
    this.Title = this.dayOfWeekTitles[this.currentSelectedDay];
    this.DayOfWeekSelected.emit(this.currentSelectedDay);
  }

}
