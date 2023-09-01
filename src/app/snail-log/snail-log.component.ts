import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-snail-log',
  templateUrl: './snail-log.component.html',
  styleUrls: ['./snail-log.component.css']
})
export class SnailLogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {
    this.form = new FormGroup({
      h: new FormControl(1, Validators.required),
      u: new FormControl(1, Validators.required),
      d: new FormControl(1, Validators.required),
      f: new FormControl(1, Validators.required)
    });
  }

  ngOnInit() {
  }

  submit() {
    this.apiService.postSnailLog(this.form.value).subscribe(res => {
      if (res) {
        this.openDialog(res);
      }
    }, error => {
      console.log('error', error);
    });
  }

  openDialog(message) {
    const dialogRef = this.dialog.open(SnailLogDialogComponent, {
      width: '250px',
      data: {message: message}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}

@Component({
  selector: 'app-snail-log-dialog',
  templateUrl: 'snail-log-dialog.html',
})
export class SnailLogDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SnailLogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  close(): void {
    this.dialogRef.close();
  }

}
