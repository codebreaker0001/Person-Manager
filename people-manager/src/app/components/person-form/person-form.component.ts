import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  person: Person = { name: '', age: null, gender: '', mobile: '' };
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.personService.getPerson(this.id).subscribe(data => this.person = data);
    }
  }

  savePerson() {
    if (this.id) {
      this.personService.updatePerson(this.id, this.person).subscribe(() => this.router.navigate(['/people']));
    } else {
      this.personService.addPerson(this.person).subscribe(() => this.router.navigate(['/people']));
    }
  }
}
