import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscriber } from 'rxjs';
import { GraphqlService } from '../services/graphql-service/graphql.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public signInCtrl!: FormGroup;
  constructor(private _graphql: GraphqlService, private fb: FormBuilder) {}

  ngOnInit() {
    this.signInCtrl = this.fb.group({
      identifier: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  submit() {
    
    this._graphql.userSignInMutation(this.signInCtrl.value).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
