import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.personService.getPeople().subscribe(data => this.people = data);
  }

  deletePerson(id: string) {
    if (confirm('Are you sure?')) {
      this.personService.deletePerson(id).subscribe(() => this.loadPeople());
    }
  }

  editPerson(id: string) {
    this.router.navigate(['/edit', id]);
  }

  addPerson() {
    this.router.navigate(['/add']);
  }
}
