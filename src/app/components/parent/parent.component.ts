import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnDestroy {
  // message is used when form is submitted to display if form is valid or not
  message: string;
  // FormGroup that contains Parent, Middle, Child inputs
  form: FormGroup;

  unsubscribe$ = new Subject<void>();

  constructor(private readonly fb: FormBuilder) {
    // All of these inputs should be required
    // Update the FormGroup to make all FormControls required
    this.form = this.fb.group({
      'parent-input': [''],
      'middle-input': [''],
      'child-input': [''],
    });
  }

  // ngOnInit() doesn't need to be updated for this exercise
  ngOnInit(): void {
    // Clear message whenever form values change
    this.form.valueChanges
      .pipe(
        tap(() => {
          this.message = '';
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  // onSubmit() doesn't need to be updated for this exercise
  onSubmit(): void {
    // Validate the FormGroup
    this.form.updateValueAndValidity();

    // If form is valid and all required inputs are filled, show success message
    if (this.form.valid) {
      this.message = 'Your form is valid!';
    } else {
      // Else show invalid message
      this.message = 'Your form is invalid! Please fill in all inputs.';
    }
  }

  // ngOnDestroy() doesn't need to be updated for this exercise
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
