import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EllipsisPipe } from '../../common/utility/pipes/ellipsis/ellipsis.pipe';
import { TweetsComponent } from './tweets.component';
import { TableComponent } from '../../common/shared/components/table/table.component';
import { PaginationComponent } from '../../common/shared/components/pagination/pagination.component';
import { AppView } from '../../common/utility/enums/app-view';

describe('TweetsComponent', () => {
  let component: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetsComponent, TableComponent, PaginationComponent, EllipsisPipe],
      imports: [NgbPaginationModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            routeConfig: {
              path: AppView.HASHTAG_SEARCH
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** Smoke test */
  it('renders without crushing', () => {
    expect(component).toBeTruthy();
  });
});
