import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CacheService} from '../shared/service/cache.service';
import {StorageHelper} from '../shared/storage.helper';
import {StorageKeys} from '../shared/constant';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss', '../detail/detail.component.scss']
})
export class TransactionHistoryComponent implements OnInit, AfterViewInit {
  user: any;
  type: string;
  displayedColumns: string[] = ['amount', 'interestAmount', 'paymentChannel', 'createdAt'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: ActivatedRoute,
              private cacheService: CacheService) { }

  ngOnInit() {
    this.type = (this.route.snapshot.queryParams.type === 'loan') ? 'Loan' : 'Lend';
    this.user = (this.cacheService.userDetail) ? this.cacheService.userDetail
      : StorageHelper.getLocal(StorageKeys.UserDetail);
    this.getAllTransactionHistory();
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

  private getAllTransactionHistory() {
    this.cacheService.getAllPaymentHistory(this.route.snapshot.queryParams.type, this.user).subscribe(resp => {
      if (resp.length) {
        this.dataSource = new MatTableDataSource(resp);
      }
    });
  }

}
