import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from '../shared/service/cache.service';
import {StorageHelper} from '../shared/storage.helper';
import {StorageKeys} from '../shared/constant';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit, AfterViewInit {
  user: any;
  type: string;
  displayedColumns: string[] = ['lenderName', 'lendAmount', 'status', 'interestRate', 'createdDate'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cacheService: CacheService) { }

  ngOnInit() {
    this.type = (this.route.snapshot.queryParams.type === 'loan') ? 'Loan' : 'Lend';
    this.user = (this.cacheService.userDetail) ? this.cacheService.userDetail
      : StorageHelper.getLocal(StorageKeys.UserDetail);
    this.getAllLoan();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clickHandler(value) {
    console.log(value);
    this.router.navigate(['transaction-detail'], {queryParams:
        {type: this.route.snapshot.queryParams.type, id: value.id}
    });
  }

  private getAllLoan() {
    this.cacheService.getUserMoneyData(this.route.snapshot.queryParams.type, this.user.userId).subscribe(resp => {
      if (resp.length) {
        this.dataSource = new MatTableDataSource(resp);
      }
    });
  }
}
