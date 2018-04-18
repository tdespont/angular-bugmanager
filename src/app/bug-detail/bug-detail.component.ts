import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BugService } from '../bug.service';
import { Bug } from '../bug';

@Component({
  selector: 'app-bug-detail',
  templateUrl: './bug-detail.component.html',
  styleUrls: ['./bug-detail.component.scss'],
  providers: [BugService]
})
export class BugDetailComponent implements OnInit {

  bug: Bug;

  constructor(private route: ActivatedRoute,
    private router: Router, private bugService: BugService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.bug = this.bugService.getBug(+id);
  }

}
