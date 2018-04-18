import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BugService } from '../bug.service';
import { Bug } from '../bug';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss'],
  providers: [BugService]
})
export class BugListComponent implements OnInit {

  private buglist: Bug[];

  constructor(private route: ActivatedRoute,
    private router: Router, private bugService: BugService) { }

  ngOnInit() {
    const searchItem = this.route.snapshot.paramMap.get('searchItem');
    console.log('searchItem: ' + searchItem);
    this.buglist = this.bugService.findBug(searchItem);
  }

}
