import { Component, OnInit } from '@angular/core';

import { Reference } from '../../basic-classes/reference';
import { ReferencesService } from '../../services/references.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  references: Reference[];

  constructor(private referencesService: ReferencesService) { }

  ngOnInit() {
    this.references = this.referencesService.references;
  }
}
